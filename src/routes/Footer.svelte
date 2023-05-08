<script>
	import logo from '../lib/images/fg_logo.png';
</script>

<footer class="flex flex-col md:flex-row items-center md:items-start">
	<div class="md:items-start ">
		<a href="/" class="flex justify-center">
			<img src={logo} alt="FG sport logo" id="logo-img" />
		</a>
	</div>

	<div class="flex flex-col md:items-start">
		<p id="footer-title" class="text-2xl mb-4">FG-Sport</p>
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

	#footer-title {
		font-family: 'Audiowide', cursive;
	}

	ul {
		display: flex;
		flex: 1;
		text-align: center;
	}

	li {
		margin-bottom: 8px;
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
