<script>
	import logo from '../lib/images/fg_logo.png';
	import ContactSection from './Atoms/ContactSection.svelte';
</script>

<div>
	<ContactSection />
	<footer class="flex flex-col md:flex-row items-center md:items-center">
		<div class="md:items-start ">
			<a href="/" class="flex justify-center">
				<img src={logo} alt="FG sport logo" id="logo-img" />
			</a>
		</div>

		<div class="flex flex-col md:items-start">
			<p id="footer-title" class="text-2xl mb-4">FG-Sport</p>

			<ul class="items-center flex-col md:items-start">
				<li><a class="block" href="/legals">Mentions légales</a></li>
			</ul>
		</div>

		<div class="flex-col items-center md:items-start  w-1/2">
			<p class="mb-8">Retrouvez-nous aussi sur :</p>
			<ul class="flex-row justify-around w-1/2">
				<li>
					<a href="https://instagram.com/fgsportfrance">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							width="32"
							height="32"
							id="instagram"
							><linearGradient
								id="a"
								x1="1.464"
								x2="14.536"
								y1="14.536"
								y2="1.464"
								gradientUnits="userSpaceOnUse"
								><stop offset="0" stop-color="#FFC107" /><stop
									offset=".507"
									stop-color="#F44336"
								/><stop offset=".99" stop-color="#9C27B0" /></linearGradient
							><path
								fill="url(#a)"
								d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"
							/><linearGradient
								id="b"
								x1="5.172"
								x2="10.828"
								y1="10.828"
								y2="5.172"
								gradientUnits="userSpaceOnUse"
								><stop offset="0" stop-color="#FFC107" /><stop
									offset=".507"
									stop-color="#F44336"
								/><stop offset=".99" stop-color="#9C27B0" /></linearGradient
							><path
								fill="url(#b)"
								d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"
							/><linearGradient
								id="c"
								x1="11.923"
								x2="12.677"
								y1="4.077"
								y2="3.323"
								gradientUnits="userSpaceOnUse"
								><stop offset="0" stop-color="#FFC107" /><stop
									offset=".507"
									stop-color="#F44336"
								/><stop offset=".99" stop-color="#9C27B0" /></linearGradient
							><circle cx="12.3" cy="3.7" r=".533" fill="url(#c)" /></svg
						>
					</a>
				</li>
				<li>
					<a href="https://www.facebook.com/profile.php?id=100064013235325">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 266.893 266.895"
							id="facebook"
							><path
								fill="#485a96"
								d="M252.164 266.895c8.134 0 14.729-6.596 14.729-14.73V14.73c0-8.137-6.596-14.73-14.729-14.73H14.73C6.593 0 0 6.594 0 14.73v237.434c0 8.135 6.593 14.73 14.73 14.73h237.434z"
							/><path
								fill="#fff"
								d="M184.152 266.895V163.539h34.692l5.194-40.28h-39.887V97.542c0-11.662 3.238-19.609 19.962-19.609l21.329-.01V41.897c-3.689-.49-16.351-1.587-31.08-1.587-30.753 0-51.807 18.771-51.807 53.244v29.705h-34.781v40.28h34.781v103.355h41.597z"
							/></svg
						>
					</a>
				</li>
			</ul>
		</div>
	</footer>
</div>

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
