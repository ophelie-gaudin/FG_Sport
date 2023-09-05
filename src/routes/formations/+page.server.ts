import { supabase } from '$lib/supabaseClient';

export async function load({ setHeaders }) {
	setHeaders({
		'cache-control': 'no-cache'
	});

	const now = new Date();
	const yesterday = new Date(now.setDate(now.getDate() - 1)).toISOString().toLocaleString();

	const { data: section } = await supabase.from('sections').select().eq('id', '6');

	const { data: formations } = await supabase
		.from('formations')
		.select('*')
		.order('date', { ascending: true })
		.gte('date', yesterday);

	return {
		section: section ?? [],
		formations: formations ?? []
	};
}
