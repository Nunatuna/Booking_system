
import { createClient } from '@supabase/supabase-js';

// #######################################################
// MODIFY THESE VARIABLES, TO YOUR SUPABASE INSTALLATION.
// #######################################################
const SUPABASE_URL = "https://iwysntwharfmhhzyetmm.supabase.co";
const PUBLIC_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3eXNudHdoYXJmbWhoenlldG1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5Mjg0MDcsImV4cCI6MjA0NzUwNDQwN30.-SHihWD9zkroJz88BMw6BztAa9srCXiAiw8IMLg5nP4';

// Opret en enkel instans af Supabase-klienten, så den genbruges.
let supabaseClientSingleton = undefined;

export function getSupabaseClient() {
  if (!supabaseClientSingleton) {
    supabaseClientSingleton = createClient(SUPABASE_URL, PUBLIC_ANON_KEY);
  }
  return supabaseClientSingleton;
}
