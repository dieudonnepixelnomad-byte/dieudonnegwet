import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    category: z.string(),
    year: z.string(),
    reference: z.string(),
    excerpt: z.string(),
    angle: z.string(),
    statusLabel: z.string(),
    published: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number(),
    visual: z.enum(['learning', 'ride', 'alert', 'books']),
    evidenceLevel: z.enum(['observable', 'documented', 'declared']),
    facts: z.array(z.string()),
    stack: z.array(z.string()).default([]),
  }),
});

export const collections = { projects };
