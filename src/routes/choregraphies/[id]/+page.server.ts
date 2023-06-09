import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data: section } = await supabase.from('sections').select().eq('id', '7');

	// const choregraphyId = url.searchParams.get('type') ;

	const { data: volume } = await supabase.from('volumes').select('1');

	return {
		section: section ?? [],
		volume: volume ?? []
	};
}
