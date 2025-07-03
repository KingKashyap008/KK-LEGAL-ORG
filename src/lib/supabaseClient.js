// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// --- ADD THESE TWO LINES FOR DEBUGGING ---
console.log('DEBUG: Supabase URL from .env:', supabaseUrl);
console.log('DEBUG: Supabase Anon Key from .env:', supabaseAnonKey ? 'Loaded' : 'Missing/Empty');
// --- END DEBUGGING LINES ---

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('ERROR: Supabase URL or Anon Key is missing from environment variables.');
  console.error('Please ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);