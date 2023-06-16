import { supabase } from '$lib/supabaseClient';

export async function load({ params }) {
	const { data: formation } = await supabase.from('formations').select().eq('id', params.id);

	return {
		formation: formation['0'] ?? []
	};
}
