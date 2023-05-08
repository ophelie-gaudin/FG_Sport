<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import BlueButton from './Atoms/BlueButton.svelte';
	import Card from './Atoms/Card.svelte';
	import { supabase } from '$lib/supabaseClient.js';

	export let data;
	let { sections } = data;
	console.log(sections);
	console.log('🚀 ~ file: +page.svelte:12 ~ sections:', sections);
</script>

<svelte:head>
	<title>FG Sport ~ Accueil</title>
	<meta
		name="description"
		content="FG Sport vous propose des formations et contenus en tant que formateur en Jumping fitness."
	/>
</svelte:head>

{@html `<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v16.0&appId=718921286580231&autoLogAppEvents=1" nonce="0WYcTawP"></script>`}

<section id="hero-section">
	<div class="section-content justify-between z-10">
		<div class="slogan">
			<span class="bold-slogan">{sections[0].titre}</span>
			<p class="light-title">
				{sections[0].sous_titre}
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
		<p class="md:mb-20 md:mt-0 mt-4 text-lg text-center">
			{sections[1].sous_titre}
		</p>

		<div class="dual-div">
			<div class="left-side">
				<h3 class="blue-text">{sections[1].titre}</h3>
				<p>
					{sections[1].description}
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
		<h3 class="text-center pb-4">{sections[2].titre}</h3>

		<div
			class="fb-page"
			data-href="https://www.facebook.com/profile.php?id=100083668385890"
			data-tabs="timeline"
			data-width="750"
			data-small-header="false"
			data-adapt-container-width="true"
			data-hide-cover="false"
			data-show-facepile="true"
		>
			<blockquote
				cite="https://www.facebook.com/profile.php?id=100083668385890"
				class="fb-xfbml-parse-ignore"
			>
				<!-- <a href="https://www.facebook.com/profile.php?id=100083668385890">Miss Vagabonde</a> -->
			</blockquote>
		</div>
		<div
			class="fb-page flex justify-center"
			data-href="https://www.facebook.com/profile.php?id=100083668385890"
			data-tabs="timeline,events,messages"
			data-width="750"
			data-hide-cover="false"
			data-show-facepile="false"
		/>
	</div>
</section>

<section id="services">
	<div class="section-content">
		<h3 class="blue-text text-center">{sections[3].titre}</h3>

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
					<Card
						title="3 avril 2023"
						description="Nous vous formerons à l'élaboration de vos chorégrahies"
					/>
					<Card title="10 juin 2023" type="kids" />
					<Card title="17 juillet 2023" />
					<div class="md:w-[50%] flex items-center justify-center">
						<BlueButton>... et plus encore !</BlueButton>
					</div>
				</div>
				<!-- <ProductsOverview /> -->
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
					<Card
						title="Vol.4"
						description="Nous vous formerons à l'élaboration de vos chorégrahies"
					/>
					<Card title="Vol.3" type="kids" />
					<Card title="Vol.2" />
					<div class="md:w-[50%] flex items-center justify-center">
						<BlueButton>... et plus encore !</BlueButton>
					</div>
				</div>
				<!-- <ProductsOverview /> -->
			</li>
		</ul>
	</div>
</section>

<section class="dual-section blue-section" id="who">
	<div class="section-content justify-center w-full">
		<h3 class="text-center pb-4">{sections[4].titre}</h3>

		<div class="dual-div my-8">
			<div class="left-side">
				<h4 class="white">{sections[4].sous_titre}</h4>
				<p>
					{sections[4].description}
				</p>
			</div>
			<div class="right-side flex md:justify-end justify-center">
				<div class="image profile" id="fiona-img" />
			</div>
		</div>
		<hr />

		<div class="dual-div flex-col md:flex-row my-8">
			<div class="left-side flex justify-center md:justify-start">
				<div class="image profile" id="ghislain-img" />
			</div>
			<div class="right-side">
				<h4 class="white">{sections[4].sous_titre_bis}</h4>
				<p>
					{sections[4].description_bis}
				</p>
			</div>
		</div>
	</div>
</section>
<section id="contact">
	<div class="section-content w-full">
		<h3 class="blue-text text-center">Nous contacter</h3>
		<div class="dual-div w-full flex-col md:flex-row">
			<div class="left-side flex flex-col">
				<input type="text" placeholder="Votre email" class="w-full" />
				<input type="text" placeholder="Votre numéro de téléphone" class="w-full" />
				<select name="object" id="object-select" class="w-full">
					<option value="" disabled selected>Sélectionnez un objet</option>
					<option value="formations">Informations sur les formations</option>
					<option value="choregraphies">Informations sur les chorégrahies</option>
					<option value="other">Autre</option>
				</select>
			</div>
			<div class="right-side">
				<textarea
					name="message"
					id="message-textarea"
					cols="30"
					rows="10"
					placeholder="Votre messsage"
					class="w-full"
				/>
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

	input,
	select {
		@apply rounded-lg my-2 pl-4;
		height: 40px;
		background-color: white;
	}

	textarea {
		@apply rounded-lg my-2 p-4;
	}

	#jumping-img {
		background: url('https://zupimages.net/up/23/16/plm8.png') no-repeat;
		background-size: cover;
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

	#contact {
		min-height: 50vh;
	}
</style>
