import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('sections').select().order('id');

	return {
		sections: data ?? []
	};
}
