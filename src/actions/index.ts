import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro/zod';
import { env } from 'cloudflare:workers';

interface Statement {
  bind(...values: unknown[]): Statement;
  run(): Promise<unknown>;
}

interface Database {
  prepare(query: string): Statement;
}

interface RuntimeEnv {
  DB?: Database;
  ENVIRONMENT?: string;
  TURNSTILE_SECRET_KEY?: string;
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}

const optionalText = (max: number) => z.string().trim().max(max).nullable().optional();
const requiredText = (label: string, max = 2000) => z.string({ error: `${label} est requis.` }).trim().min(2, `${label} est requis.`).max(max, `${label} est trop long.`);

const diagnosticSchema = z.object({
  name: requiredText('Votre nom', 120),
  company: requiredText('Le nom de votre entreprise', 160),
  role: requiredText('Votre fonction', 120),
  email: z.email('Saisissez une adresse e-mail valide.'),
  phone: requiredText('Votre numéro de téléphone', 40),
  location: requiredText('Votre ville ou zone d’activité', 120),
  sector: requiredText('Votre secteur', 160),
  website: optionalText(300),
  socialLinks: optionalText(600),
  primaryOffer: requiredText('Votre offre principale'),
  targetClients: requiredText('Vos clients prioritaires'),
  currentProblem: requiredText('Le problème actuel'),
  availableProofs: requiredText('Les preuves disponibles'),
  expectedOutcome: requiredText('Le résultat attendu'),
  timeline: requiredText('Votre calendrier', 120),
  budget: requiredText('Votre budget', 120),
  decisionMakers: requiredText('Le processus de décision', 300),
  referralSource: optionalText(300),
  consent: z.boolean().refine(Boolean, 'Votre accord est requis.'),
  websiteConfirmation: optionalText(200),
  turnstileToken: optionalText(2048),
});

const escapeHtml = (value: string | null | undefined) =>
  (value ?? '—').replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' })[character] ?? character);

const emailRows = (input: z.infer<typeof diagnosticSchema>) => [
  ['Nom', input.name], ['Entreprise', input.company], ['Fonction', input.role], ['E-mail', input.email], ['Téléphone', input.phone],
  ['Localisation', input.location], ['Secteur', input.sector], ['Site', input.website], ['Réseaux', input.socialLinks],
  ['Offre principale', input.primaryOffer], ['Clients prioritaires', input.targetClients], ['Problème actuel', input.currentProblem],
  ['Preuves disponibles', input.availableProofs], ['Résultat attendu', input.expectedOutcome], ['Calendrier', input.timeline],
  ['Budget', input.budget], ['Décisionnaires', input.decisionMakers], ['Origine', input.referralSource],
].map(([label, value]) => `<tr><th style="padding:10px;text-align:left;vertical-align:top;border-bottom:1px solid #d9dde2">${label}</th><td style="padding:10px;border-bottom:1px solid #d9dde2">${escapeHtml(value)}</td></tr>`).join('');

export const server = {
  submitDiagnostic: defineAction({
    accept: 'form',
    input: diagnosticSchema,
    handler: async (input, context) => {
      if (input.websiteConfirmation) return { received: true, reference: '', preview: false };

      const runtime = env as unknown as RuntimeEnv;

      if (runtime.TURNSTILE_SECRET_KEY) {
        if (!input.turnstileToken) throw new ActionError({ code: 'BAD_REQUEST', message: 'La vérification de sécurité est requise.' });
        const verification = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
          method: 'POST',
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ secret: runtime.TURNSTILE_SECRET_KEY, response: input.turnstileToken, remoteip: context.request.headers.get('cf-connecting-ip') ?? '' }),
        });
        const verdict = await verification.json<{ success: boolean }>();
        if (!verdict.success) throw new ActionError({ code: 'BAD_REQUEST', message: 'La vérification de sécurité a échoué. Réessayez.' });
      }

      const id = crypto.randomUUID();
      const createdAt = new Date().toISOString();
      let stored = false;
      let emailed = false;

      if (runtime.DB) {
        await runtime.DB.prepare(`INSERT INTO diagnostic_requests (
          id, created_at, name, company, role, email, phone, location, sector, website, social_links,
          primary_offer, target_clients, current_problem, available_proofs, expected_outcome, timeline,
          budget, decision_makers, referral_source, email_status
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
          .bind(id, createdAt, input.name, input.company, input.role, input.email, input.phone, input.location, input.sector,
            input.website ?? null, input.socialLinks ?? null, input.primaryOffer, input.targetClients, input.currentProblem,
            input.availableProofs, input.expectedOutcome, input.timeline, input.budget, input.decisionMakers,
            input.referralSource ?? null, 'pending').run();
        stored = true;
      }

      if (runtime.RESEND_API_KEY && runtime.CONTACT_TO_EMAIL && runtime.CONTACT_FROM_EMAIL) {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { authorization: `Bearer ${runtime.RESEND_API_KEY}`, 'content-type': 'application/json' },
          body: JSON.stringify({
            from: runtime.CONTACT_FROM_EMAIL,
            to: [runtime.CONTACT_TO_EMAIL],
            reply_to: input.email,
            subject: `Diagnostic — ${input.company} · ${input.name}`,
            html: `<h1>Nouvelle demande de diagnostic</h1><table style="border-collapse:collapse;width:100%">${emailRows(input)}</table>`,
          }),
        });
        emailed = response.ok;
      }

      if (!stored && !emailed && runtime.ENVIRONMENT === 'production') {
        throw new ActionError({ code: 'INTERNAL_SERVER_ERROR', message: 'La demande n’a pas pu être enregistrée. Réessayez ou revenez plus tard.' });
      }

      return { received: true, reference: id.slice(0, 8).toUpperCase(), preview: !stored && !emailed };
    },
  }),
};
