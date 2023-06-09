<script>
	import { page } from '$app/stores';
</script>

<nav class="hidden md:flex">
	<svg viewBox="0 0 2 3" aria-hidden="true">
		<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
	</svg>
	<ul>
		<li aria-current={$page.url.pathname === '#jumping-description' ? 'page' : undefined}>
			<a href="/#jumping-description">Qu'est-ce que le jumping ?</a>
		</li>
		<li aria-current={$page.url.pathname === '#facebook-feed' ? 'page' : undefined}>
			<a href="/#facebook-feed">Actualités</a>
		</li>
		<li aria-current={$page.url.pathname === '#services' ? 'page' : undefined}>
			<a href="/#services">Nos services</a>
			<div class="sub-nav">
				<a href="/formations">Nos formations</a>
				<a href="/choregraphies">Nos chorégraphies</a>
			</div>
		</li>
		<li aria-current={$page.url.pathname === '#about' ? 'page' : undefined}>
			<a href="/#about">Qui sommes-nous ?</a>
		</li>
		<li aria-current={$page.url.pathname === '#contact-us' ? 'page' : undefined}>
			<a href="#contact-us">Nous contacter</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		display: flex;
		justify-content: center;
		--background: rgba(245, 245, 245, 0.9);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		padding-right: var(--spacing-unit-2);
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}

	.sub-nav {
		@apply rounded-b-md;
		display: none;
		position: absolute;
		background: var(--background);
		width: 220px;
		right: -81px;
	}

	.sub-nav a {
		padding: 10px 20px;
		font-size: 0.7rem;
	}

	li:hover .sub-nav {
		/* display: flex;
		flex-direction: column; */
		display: block;
	}
</style>
