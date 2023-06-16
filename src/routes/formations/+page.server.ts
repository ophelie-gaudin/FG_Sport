import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data: section } = await supabase.from('sections').select().eq('id', '6');

	const { data: formations } = await supabase
		.from('formations')
		.select('*')
		.order('date_publication', { ascending: true });

	return {
		section: section ?? [],
		formations: formations ?? []
	};
}
