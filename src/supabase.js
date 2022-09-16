import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dskhqurztrruoqwjkgaz.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRza2hxdXJ6dHJydW9xd2prZ2F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjMzMTU4NzYsImV4cCI6MTk3ODg5MTg3Nn0.56wf0HUY81rOXWP_88FwK6Ds17SnHH_wE04peQU7DL4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
