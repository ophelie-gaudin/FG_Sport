import { supabase } from '$lib/supabaseClient';

export async function load() {
	// const { data: section } = await supabase.from('sections').select().eq('id', '7');

	// const choregraphyId = url.searchParams.get('type') ;

	const { data: formation } = await supabase.from('formations').select('1');

	return {
		// section: section ?? [],
		formation
	};
}
