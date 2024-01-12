import { supabase } from '$lib/supabaseClient';

export async function load() {
	const now = new Date();
	const yesterday = new Date(now.setDate(now.getDate() - 1)).toISOString().toLocaleString();

	const { data: sections } = await supabase.from('sections').select().order('id');

	const { data: formations } = await supabase
		.from('formations')
		.select('*')
		.order('date', { ascending: true })
		.gte('date', yesterday)
		.limit(3);

	const { data: volumes } = await supabase
		.from('volumes')
		.select('*')
		.order('date_publication', { ascending: false })
		.limit(3);

	return {
		sections: sections ?? [],
		formations: formations ?? [],
		volumes: volumes ?? []
	};
}
