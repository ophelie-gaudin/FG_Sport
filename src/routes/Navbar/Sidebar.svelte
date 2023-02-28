<script>
	export let open = false;
</script>

<aside class="fixed w-full bg-white border-r-2 shadow-lg" class:open>
	<nav class="p-12 text-xl">
		<ul>
			<a class="block" href="/#jumping-description">Qu'est-ce que le jumping ?</a>
			<a class="block" href="/#facebook-feed">Actualités</a>
			<a class="block" href="/#services">Nos services</a>
			<a class="block" href="/about">Qui sommes-nous ?</a>
			<a class="block" href="/sverdle">Nous contacter</a>
		</ul>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}

	.open {
		left: 0;
	}
</style>
