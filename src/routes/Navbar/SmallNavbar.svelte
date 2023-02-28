<script>
	import SmallHeaderNavbar from './SmallHeaderNavbar.svelte';
	import Sidebar from './Sidebar.svelte';

	let open = false;
</script>

<div class="md:hidden">
	<SmallHeaderNavbar bind:sidebar={open} />
	<Sidebar bind:open />
</div>

<style>
	:global(body) {
		padding: 0;
	}
</style>
