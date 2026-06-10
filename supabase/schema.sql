-- Run this in the Supabase SQL editor

CREATE TABLE referrals (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  creator text NOT NULL,
  visited_at timestamptz DEFAULT now(),
  user_agent text,
  country text
);

-- Required: enable RLS and allow the anon key to insert/read
-- so the redirect route and admin page work without a service role key.
ALTER TABLE referrals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anon inserts" ON referrals
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anon reads" ON referrals
  FOR SELECT TO anon
  USING (true);

CREATE INDEX referrals_creator_idx ON referrals (creator);
CREATE INDEX referrals_visited_at_idx ON referrals (visited_at);
