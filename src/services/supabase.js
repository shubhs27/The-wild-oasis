import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hbpkjrosgpkgpwztfihh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicGtqcm9zZ3BrZ3B3enRmaWhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2NTYxNTIsImV4cCI6MjA2MDIzMjE1Mn0.zNlRSeKXfafv4SsIGo805Jwt5_EDeLQU1iWmV4TRx4w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
