import { supabase } from '$lib/supabaseClient';

export async function load({ params }) {
	const { data: volume } = await supabase.from('volumes').select().eq('id', params.id);

	return {
		volume: volume['0'] ?? []
	};
}
