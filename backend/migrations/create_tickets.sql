-- Migration: create tickets table

CREATE TABLE IF NOT EXISTS tickets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid NULL,
  user_id uuid NULL,
  type text NULL,
  price integer NULL,
  quantity integer NULL,
  status text NOT NULL DEFAULT 'pending',
  paystack_reference text NULL,
  qr_token text NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  used_at timestamptz NULL
);

CREATE INDEX IF NOT EXISTS idx_tickets_event_id ON tickets(event_id);
CREATE INDEX IF NOT EXISTS idx_tickets_paystack_reference ON tickets(paystack_reference);
