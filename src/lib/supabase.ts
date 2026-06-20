import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY! // Updated to match your exact .env name

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)