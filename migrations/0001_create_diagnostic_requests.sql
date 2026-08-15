CREATE TABLE IF NOT EXISTS diagnostic_requests (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  location TEXT NOT NULL,
  sector TEXT NOT NULL,
  website TEXT,
  social_links TEXT,
  primary_offer TEXT NOT NULL,
  target_clients TEXT NOT NULL,
  current_problem TEXT NOT NULL,
  available_proofs TEXT NOT NULL,
  expected_outcome TEXT NOT NULL,
  timeline TEXT NOT NULL,
  budget TEXT NOT NULL,
  decision_makers TEXT NOT NULL,
  referral_source TEXT,
  email_status TEXT NOT NULL DEFAULT 'pending'
);

CREATE INDEX IF NOT EXISTS diagnostic_requests_created_at_idx
ON diagnostic_requests (created_at DESC);
