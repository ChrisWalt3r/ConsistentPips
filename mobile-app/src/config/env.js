const DEFAULT_API_URL = 'https://web-journal-2r5u.onrender.com/api';
const DEFAULT_SUPABASE_URL = 'https://txhplfakaqyvnkuyikeb.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4aHBsZmFrYXF5dm5rdXlpa2ViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwMDU2MTksImV4cCI6MjA5ODU4MTYxOX0.VKzteomtXfRUl_1byqKnLLTcuAl5NNYh0i-bec9jNME';

export const API_URL =
  import.meta.env.VITE_API_URL ||
  import.meta.env.EXPO_PUBLIC_BACKEND_URL ||
  DEFAULT_API_URL;
export const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ||
  import.meta.env.EXPO_PUBLIC_SUPABASE_URL ||
  DEFAULT_SUPABASE_URL;
export const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ||
  DEFAULT_SUPABASE_ANON_KEY;
export const APP_VERSION = import.meta.env.VITE_APP_VERSION || '2.0.0-web';
export const APP_NAME = 'Bulletproof Journal';
export const APP_DOMAIN =
  import.meta.env.VITE_APP_DOMAIN ||
  import.meta.env.EXPO_PUBLIC_APP_DOMAIN ||
  (typeof window !== 'undefined' ? window.location.origin : '');
