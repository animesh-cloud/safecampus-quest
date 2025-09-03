import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vynaophjgqxwoqsbhyjg.supabase.co"; // from API settings
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5bmFvcGhqZ3F4d29xc2JoeWpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5Mjg2NzgsImV4cCI6MjA3MjUwNDY3OH0.x_VTlSkiL_9pWvVZJGgm1Hcqgn0gCd8wQ7UjDd4-9x4"; // from API keys (anon)

export const supabase = createClient(supabaseUrl, supabaseKey);
