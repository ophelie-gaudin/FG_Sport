<script>
	import Hamburger from './Hamburger.svelte';

	export let sidebar = false;
</script>

<header class="flex justify-between h-100 p-4 items-center text-gray-600 m-2">
	<h1 class="font-bolder whitespace-nowrap text-center">FG Sport</h1>
	<nav class="flex">
		<Hamburger bind:open={sidebar} />
	</nav>
</header>

<style>
	h1 {
		font-family: var(--font-perso);
		font-size: 1rem;
		margin: 0 40px;
	}
</style>
