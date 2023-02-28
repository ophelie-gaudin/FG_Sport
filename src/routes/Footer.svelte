<script>
	import logo from '$lib/images/fg-logo.png';
</script>

<footer class="flex flex-col md:flex-row">
	<div class="corner">
		<a href="/">
			<img src={logo} alt="FG sport logo" />
		</a>
	</div>

	<div>
		<ul class="items-center flex-col md:items-start">
			<li><a class="block" href="/confidentiality">Politique de confidentialité</a></li>
			<li><a class="block" href="/legals">Mentions légales</a></li>
			<li><a class="block" href="/cgv">CGV</a></li>
		</ul>
	</div>

	<div class="flex-col items-center">
		<p>Retrouvez-nous aussi sur :</p>
		<ul class="flex-row justify-around w-1/2">
			<li>
				<a href="https://instagram.com/fgsportfrance">Insta</a>
			</li>
			<li>
				<a href="https://www.facebook.com/profile.php?id=100064013235325">FB</a>
			</li>
		</ul>
	</div>
</footer>

<style>
	footer {
		min-height: 20vh;
		margin: var(--spacing-unit-4);
	}

	ul {
		display: flex;
		flex: 1;
		text-align: center;
	}

	footer > div {
		display: flex;
		flex: 1;
		margin: var(--spacing-unit-2);
		justify-content: center;
	}

	p {
		text-align: center;
	}
</style>
