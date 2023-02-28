<script>
	import Hamburger from './Hamburger.svelte';

	export let sidebar = false;
</script>

<header class="flex justify-between p-4 items-center text-gray-600 m-2 ">
	<nav class="flex">
		<Hamburger bind:open={sidebar} />
	</nav>
</header>
