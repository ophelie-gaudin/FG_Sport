<script>
	import Hamburger from './Hamburger.svelte';

	export let sidebar = false;
</script>

<header class="flex justify-between p-4 items-center text-gray-600 m-2">
	<h1 class="font-bolder text-center">FG Sport</h1>
	<nav class="flex">
		<Hamburger bind:open={sidebar} />
	</nav>
</header>

<style>
	h1 {
		font-family: var(--font-perso);
		font-size: 1.4rem;
		margin: 0 40px;
	}
</style>
