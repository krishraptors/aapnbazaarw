-- Create vendor_registrations table
CREATE TABLE IF NOT EXISTS vendor_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name TEXT NOT NULL,
  contact_person_name TEXT NOT NULL,
  mobile_number TEXT NOT NULL,
  email TEXT NOT NULL,
  business_type TEXT NOT NULL CHECK (business_type IN ('Factory', 'Wholesaler', 'Shop')),
  product_categories TEXT NOT NULL,
  location TEXT NOT NULL,
  additional_info TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_vendor_registrations_created_at ON vendor_registrations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_vendor_registrations_business_type ON vendor_registrations(business_type);

-- Enable RLS (Row Level Security)
ALTER TABLE vendor_registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public registration)
CREATE POLICY "Allow public insert" ON vendor_registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to read
CREATE POLICY "Allow authenticated read" ON vendor_registrations
  FOR SELECT
  TO authenticated
  USING (true);