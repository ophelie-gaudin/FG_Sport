import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data: section } = await supabase.from('sections').select().eq('id', '7');

	const { data: choregraphies } = await supabase
		.from('volumes')
		.select('*')
		.order('date_publication', { ascending: false });

	// const { data: volumes } = await supabase
	// .from('volumes')
	// .select('*')
	// .order('date_publication', { ascending: false })

	return {
		section: section ?? [],
		choregraphies: choregraphies ?? []
	};
}
