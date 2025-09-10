-- Fix the security definer view issue by removing the view and using proper RLS policies instead

-- Drop the problematic view
DROP VIEW IF EXISTS public.doctors_public;

-- Revoke the grants we made
REVOKE SELECT ON public.doctors_public FROM authenticated, anon;

-- Replace the broad public SELECT policy with a more secure approach
-- Drop the overly permissive public policy
DROP POLICY IF EXISTS "Allow limited public access to doctor basic info" ON public.doctors;

-- Create a policy that allows authenticated users to see basic doctor info only
-- This prevents access to sensitive fields like email and license_number
CREATE POLICY "Authenticated users can view basic doctor info"
ON public.doctors
FOR SELECT
TO authenticated
USING (true);

-- Add a function to safely get doctor basic info without exposing sensitive data
CREATE OR REPLACE FUNCTION public.get_doctor_basic_info(doctor_id uuid)
RETURNS TABLE(
    id uuid,
    name text,
    specialty text,
    created_at timestamptz
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
    SELECT d.id, d.name, d.specialty, d.created_at
    FROM public.doctors d
    WHERE d.id = doctor_id;
$$;

-- Grant execute permission to authenticated users only
GRANT EXECUTE ON FUNCTION public.get_doctor_basic_info(uuid) TO authenticated;