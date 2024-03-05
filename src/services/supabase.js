

import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://onglwimpkxfvhsffbdfu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uZ2x3aW1wa3hmdmhzZmZiZGZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0OTU5MTksImV4cCI6MjAyNTA3MTkxOX0.ek_IwUx6mus6dComPzWr80BSyIwvBTNQHMuhB5fvY4Q'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;