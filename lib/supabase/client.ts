import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  return createBrowserClient(process.env.NEXT_PUBLIC_8108SUPABASE_URL!, process.env.NEXT_PUBLIC_8108SUPABASE_ANON_KEY!)
}
