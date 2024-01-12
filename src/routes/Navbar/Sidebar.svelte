<script>
	export let open = false;
	const close = () => (open = false);
	let openedMenu = false;
</script>

<aside class="fixed w-full bg-white border-r-2 shadow-lg" class:open>
	<nav class="p-10 text-xl">
		<ul class="">
			<li>
				<a on:click={close} class="block" href="/#jumping-description">
					Qu'est-ce que le jumping ?
				</a>
			</li>
			<li><a on:click={close} class="block" href="/#facebook-feed">Actualités</a></li>
			<li class="flex-col ">
				<a
					class="flex flex-col"
					href="/#services"
					on:click={() => {
						openedMenu = !openedMenu;
						close();
					}}
				>
					Nos services</a
				>
				<!-- {#if openedMenu} -->
				<div class=" ml-8 flex flex-col">
					<a on:click={close} href="/formations" class="text-lg my-2">
						<span class="material-symbols-outlined arrow mr-4">
							keyboard_double_arrow_right
						</span>Nos formations</a
					>
					<a on:click={close} href="/choregraphies" class="text-lg my-2">
						<span class="material-symbols-outlined arrow mr-4">
							keyboard_double_arrow_right
						</span>Nos chorégraphies
					</a>
				</div>
				<!-- {/if} -->
			</li>
			<li><a on:click={close} class="block" href="/#about">Qui sommes-nous ?</a></li>
			<li><a on:click={close} class="block" href="#contact-us">Nous contacter</a></li>
		</ul>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}

	a {
		font-family: var(--font-perso);
		color: var(--color-text);
	}

	a:hover {
		color: var(--color-theme-1);
		text-decoration: none;
	}

	li {
		display: flex;
		justify-content: space-between;
		margin: 1rem 0 1rem 0;
	}

	.arrow {
		font-weight: 900;
		font-size: 1.2rem;
		transition: transform 0.2s;
	}

	.open {
		left: 0;
	}
</style>
