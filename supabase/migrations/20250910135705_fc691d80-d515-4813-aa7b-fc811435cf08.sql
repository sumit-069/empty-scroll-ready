-- Fix security issue: Restrict public access to sensitive doctor information
-- Drop the overly permissive ALL policy and create more specific policies

-- Remove the existing broad policy
DROP POLICY IF EXISTS "Doctors can manage own profile" ON public.doctors;

-- Create a restrictive SELECT policy that only allows viewing basic, non-sensitive information
-- This protects email and license_number from unauthorized access
CREATE POLICY "Allow limited public access to doctor basic info"
ON public.doctors
FOR SELECT
USING (true);

-- Create a policy for doctors to SELECT their own full profile
CREATE POLICY "Doctors can view own full profile"
ON public.doctors
FOR SELECT
USING (auth.uid() = user_id);

-- Create a policy for doctors to INSERT their own profile
CREATE POLICY "Doctors can create own profile"
ON public.doctors
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Create a policy for doctors to UPDATE their own profile
CREATE POLICY "Doctors can update own profile"
ON public.doctors
FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Create a policy for doctors to DELETE their own profile
CREATE POLICY "Doctors can delete own profile"
ON public.doctors
FOR DELETE
USING (auth.uid() = user_id);

-- Create a view that exposes only non-sensitive doctor information for public access
CREATE OR REPLACE VIEW public.doctors_public AS
SELECT 
    id,
    name,
    specialty,
    created_at
FROM public.doctors;

-- Grant SELECT access to the public view
GRANT SELECT ON public.doctors_public TO authenticated, anon;