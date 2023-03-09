<script>
	import logo from '../lib/images/fg_logo.png';
</script>

<footer class="flex flex-col md:flex-row items-center md:items-start">
	<div class="md:items-start ">
		<a href="/" class="flex justify-center">
			<img src={logo} alt="FG sport logo" id="logo-img" />
		</a>
	</div>

	<div>
		<ul class="items-center flex-col md:items-start">
			<li><a class="block" href="/confidentiality">Politique de confidentialité</a></li>
			<li><a class="block" href="/legals">Mentions légales</a></li>
			<li><a class="block" href="/cgv">CGV</a></li>
		</ul>
	</div>

	<div class="flex-col items-center md:items-start  w-1/2">
		<p>Retrouvez-nous aussi sur :</p>
		<ul class="flex-row justify-around w-full">
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
		background-color: var(--color-bg-0);
		width: 100%;
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

	#logo-img {
		width: 50%;
	}
</style>
