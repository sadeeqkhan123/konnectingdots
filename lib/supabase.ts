import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

const getMissingConfigError = () =>
  "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export const getSupabaseAdminClient = () => {
  if (!supabaseUrl || (!supabaseServiceRoleKey && !supabaseAnonKey)) {
    throw new Error(getMissingConfigError())
  }

  const key = supabaseServiceRoleKey || supabaseAnonKey
  return createClient(supabaseUrl, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}
