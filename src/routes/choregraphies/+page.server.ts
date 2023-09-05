import { supabase } from '$lib/supabaseClient';

export async function load({ setHeaders }) {
	setHeaders({
		'cache-control': 'no-cache'
	});
	const { data: section } = await supabase.from('sections').select().eq('id', '7');

	const { data: choregraphies } = await supabase
		.from('volumes')
		.select('*')
		.order('date_publication', { ascending: false });

	return {
		section: section ?? [],
		choregraphies: choregraphies ?? []
	};
}
