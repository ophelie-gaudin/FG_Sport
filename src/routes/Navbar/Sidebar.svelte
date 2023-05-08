<script>
	export let open = false;
</script>

<aside class="fixed w-full bg-white border-r-2 shadow-lg" class:open>
	<nav class="p-12 text-xl">
		<ul class="">
			<li><a class="block" href="/#jumping-description">Qu'est-ce que le jumping ?</a></li>
			<li><a class="block" href="/#facebook-feed">Actualités</a></li>
			<li class="flex-col ">
				<span class="w-full flex justify-between">
					<a class="block" href="/#services"> Nos services</a>
					<div class="relative">
						<span class="material-symbols-outlined arrow"> keyboard_double_arrow_right </span>
						<input type="checkbox" />
					</div>
					<div class="sub-nav">
						<a href="/formations">Nos formations</a>
						<a href="/choregraphies">Nos chorégraphies </a>
					</div>
				</span>
			</li>
			<li><a class="block" href="/about">Qui sommes-nous ?</a></li>
			<li><a class="block" href="/sverdle">Nous contacter</a></li>
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
	}

	input {
		width: 40px;
		height: 40px;
		position: absolute;
		opacity: 0;
		top: 0;
		left: 0;
		margin: 0;
		z-index: 3;
		cursor: pointer;
	}

	.sub-nav {
		width: 100%;
		margin: 0;
		height: 0;
		opacity: 0;
		pointer-events: none;
		list-style: none;
		transition: padding 0.2s;
		font-size: 1rem;
	}

	/* input:checked < div ~ .sub-nav {
		height: 100%;
		opacity: 1;
		pointer-events: initial;
		padding: 10px 0;
	} */

	.arrow {
		font-weight: 900;
		font-size: 1.2rem;
		transition: transform 0.2s;
	}

	input:checked ~ .arrow {
		transform: rotateZ(90deg);
	}

	.sub-nav a {
		padding: 10px;
		cursor: pointer;
	}

	.open {
		left: 0;
	}
</style>
