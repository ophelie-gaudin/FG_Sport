import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data: sections } = await supabase.from('sections').select().order('id');

	const { data: formations } = await supabase
		.from('formations')
		.select()
		.order('date', { ascending: true })
		.limit(4);

	const { data: volumes } = await supabase
		.from('volumes')
		.select('*')
		.order('date_publication', { ascending: false })
		.limit(4);

	return {
		sections: sections ?? [],
		formations: formations ?? [],
		volumes: volumes ?? []
	};
}
