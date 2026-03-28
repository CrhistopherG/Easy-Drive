import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://absqirfnfpkrvgioorlc.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFic3FpcmZuZnBrcnZnaW9vcmxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2NTg1OTYsImV4cCI6MjA5MDIzNDU5Nn0.pkZqEuVCJEpCNyxlrFs81M7uKp3yAe8ECxOv1TWckbc";

export const supabase = createClient(supabaseUrl, supabaseKey);