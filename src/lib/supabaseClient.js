// import { createClient } from '@supabase/supabase-js';

import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_KEY } from '$env/static/public';

const supabaseUrl = 'https://zjwinuedavokcqyeaplr.supabase.co';
export const supabase = createClient(supabaseUrl, PUBLIC_SUPABASE_KEY);
