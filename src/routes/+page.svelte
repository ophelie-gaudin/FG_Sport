<script lang="ts">
	import BlueButton from './Atoms/BlueButton.svelte';
	import Card from './Atoms/Card.svelte';

	export let data;
	let { sections, formations, volumes } = data;
	console.log('🚀 FORMATIONS: ', formations);
	console.log('🚀 VOLUMES: ', volumes);
</script>

<svelte:head>
	<title>FG Sport ~ Accueil</title>
	<meta
		name="description"
		content="FG Sport vous propose des formations et contenus en tant que formateur en Jumping fitness."
	/>
</svelte:head>

{@html `<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v17.0" nonce="hglDoksC"></script>`}

<section id="hero-section">
	<div class="section-content justify-between z-10">
		<div class="slogan">
			<span class="bold-slogan">{@html sections[0].titre}</span>
			<p class="light-title">
				{@html sections[0].sous_titre}
			</p>
		</div>
		<a class="more-div font-bold" href="#jumping-description"
			>En savoir plus
			<span class="material-symbols-outlined"> keyboard_double_arrow_down </span>
		</a>
	</div>
</section>

<section id="jumping-description">
	<div class="section-content justify-center">
		<p class="md:mb-20 md:mt-0 mt-4 text-lg text-center italic">
			{@html sections[1].sous_titre}
		</p>

		<div class="dual-div">
			<div class="left-side">
				<h3 class="blue-text">{@html sections[1].titre}</h3>
				<p>
					{@html sections[1].description}
				</p>
			</div>
			<div class="right-side">
				<div class="image" id="jumping-img" />
			</div>
		</div>
	</div>
</section>

<section class="dual-section blue-section" id="facebook-feed">
	<div class="section-content justify-center">
		<h3 class="text-center pb-4">{@html sections[2].titre}</h3>

		<div
			class="fb-page"
			data-href="https://www.facebook.com/profile.php?id=100064013235325"
			data-tabs="timeline"
			data-width="750"
			data-small-header="false"
			data-adapt-container-width="true"
			data-hide-cover="false"
			data-show-facepile="true"
		>
			<blockquote
				cite="https://www.facebook.com/profile.php?id=100064013235325"
				class="fb-xfbml-parse-ignore"
			>
				<!-- <a href="https://www.facebook.com/profile.php?id=100064013235325">Miss Vagabonde</a> -->
			</blockquote>
		</div>
		<div
			class="fb-page flex justify-center"
			data-href="https://www.facebook.com/profile.php?id=100064013235325"
			data-tabs="timeline,events,messages"
			data-width="750"
			data-hide-cover="false"
			data-show-facepile="false"
		/>
	</div>
</section>

<section id="services">
	<div class="section-content">
		<h3 class="blue-text text-center">{@html sections[3].titre}</h3>

		<ul>
			<li id="trainings">
				<p class="flex items-center">
					<span class="material-symbols-outlined blue-text max-w-fit mr-4">
						keyboard_double_arrow_right
					</span>
					des formations
				</p>
				<div
					class="cards-container flex w-100 flex-col md:flex-row md:justify-between  items-center md:items-stretch"
				>
					{#each formations as formation}
						<Card
							title={new Date(formation.date).toLocaleDateString('fr')}
							lieu={formation.lieu}
							type={formation.type.toLowerCase()}
							href={`/formations/${formation.id}`}
						/>
					{/each}

					<div class="md:w-[50%] flex items-center justify-center">
						<BlueButton href="/formations">... et plus encore !</BlueButton>
					</div>
				</div>
			</li>

			<li id="choregraphies">
				<p class="flex items-center">
					<span class="material-symbols-outlined blue-text max-w-fit mr-4">
						keyboard_double_arrow_right
					</span>
					des volumes de chorégraphies pour vos cours
				</p>
				<div
					class="cards-container flex w-100 flex-col md:flex-row md:justify-between  items-center md:items-stretch"
				>
					{#each volumes as volume}
						<Card
							title="Vol.{volume.id}"
							description={volume.description}
							href="/choregraphies/{volume.id}"
							type={volume.type}
							image={volume.image}
						/>
					{/each}

					<div class="md:w-[50%] flex items-center justify-center">
						<BlueButton href="/choregraphies">... et plus encore !</BlueButton>
					</div>
				</div>
			</li>
		</ul>
	</div>
</section>

<section class="dual-section blue-section" id="about">
	<div class="section-content justify-center w-full lg:max-w-[60vw]">
		<h3 class="text-center pb-4">{@html sections[4].titre}</h3>

		<div class="flex flex-col md:flex-row items-center">
			<div class=" my-8">
				<div class=" flex left-side justify-center">
					<div class="image profile" id="fiona-img" />
				</div>
				<div class="left-side">
					<h4 class="white">{@html sections[4].sous_titre}</h4>
					<p>
						{@html sections[4].description}
					</p>
				</div>
			</div>

			<div class=" flex-col md:flex-row my-8">
				<div class="right-side flex justify-center">
					<div class="image profile" id="ghislain-img" />
				</div>
				<div class="right-side">
					<h4 class="white">{@html sections[4].sous_titre_bis}</h4>
					<p>
						{@html sections[4].description_bis}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* HERO SECTION */
	#hero-section {
		background: url('https://zupimages.net/up/23/16/zk50.jpg') no-repeat;
		background-size: cover;
		position: relative;
		color: white;
	}

	#hero-section a {
		color: white;
	}

	#hero-section::before {
		content: '';
		position: absolute;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		background-color: rgba(0, 0, 0, 0.6);
		z-index: 0;
	}

	.slogan {
		@apply text-center flex-1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.bold-slogan {
		font-size: 3rem;
		font-weight: bolder;
		text-align: center;
		font-family: 'Audiowide', cursive;
	}

	.light-title {
		@apply text-2xl mt-10;
		text-align: center;
	}

	.more-div {
		@apply animate-pulse;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
		color: var(--color-text);
		margin-top: 2rem;
	}

	#jumping-img {
		background: url('https://zupimages.net/up/23/16/plm8.png') no-repeat;
		background-size: cover;
		min-height: 40vh;
	}

	/* PRODUCT SECTION */
	#services h3 {
		font-size: 2rem !important;
	}
	#services .section-content,
	#services .section-content * {
		@apply w-full text-xl;
	}

	#services li {
		@apply my-8;
	}

	#services li > div {
		@apply flex justify-around;
	}

	h4 {
		font-family: var(--font-perso);
	}

	.profile {
		width: 300px;
		height: 400px;
		margin: 0;
		margin-bottom: 1rem;
	}

	#fiona-img {
		background: url('https://zupimages.net/up/23/16/fir2.jpg') no-repeat;
		background-size: cover;
	}

	#ghislain-img {
		background: url('https://zupimages.net/up/23/16/hmeg.jpg') no-repeat;
		background-size: cover;
	}
</style>
