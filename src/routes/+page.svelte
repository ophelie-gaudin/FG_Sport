<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import BlueButton from './Atoms/BlueButton.svelte';
	import Card from './Atoms/Card.svelte';
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
	<div class="section-content justify-between">
		<div class="slogan">
			<span class="bold-slogan"
				>Venez vous défouler et jumper avec nous <br /> sur des rythmes de folie !</span
			>
			<p class="light-title">
				Chez FG Sport, nous proposons des cours de jumping pour les pratiquants <br /> mais aussi des
				évènements de formation pour les instructeurs.
			</p>
		</div>
		<a class="more-div" href="#jumping-description"
			>En savoir plus
			<span class="material-symbols-outlined"> keyboard_double_arrow_down </span>
		</a>
	</div>
</section>

<section id="jumping-description">
	<div class="section-content justify-center">
		<p class="md:mb-20 md:mt-0 mt-4 text-lg text-center">
			Vous souhaitez faire du sport pour vous dépenser tout en vous amusant ? <br />
			Vous cherchez un sport à pratiquer pour perdre du poids dans un contexte fun ? <br />
			Le jumping fitness est fait pour vous !
		</p>

		<div class="dual-div">
			<div class="left-side">
				<h3 class="blue-text">Qu'est-ce que le jumping ?</h3>
				<p>
					Les cours se déroulent sur de petits trampolines individuels sur fond de musique très
					rythmée. Accompagné par un coach sportif, vous alternez sauts rapides et lents, sprints
					dynamiques et exercices de renforcement musculaire. Les exercices de fitness que l’on
					retrouve le plus souvent lors d’un cours de jump fitness sont les jumping jack ou encore
					les montées de genoux qui sont très efficaces pour accélérer le rythme cardiaque. <br />
					<br />

					Grâce à la variété des combinaisons d’exercices possibles et à la bonne ambiance lors de
					ces cours collectifs, vous ne verrez pas le temps passer et vous ferez du sport en vous
					amusant réellement ! <br /> <br />

					Chez FG Sports, nous vous proposons des cours collectifs mais aussi
				</p>
			</div>
			<div class="right-side">
				<div class="image" />
			</div>
		</div>
	</div>
</section>

<section class="dual-section blue-section" id="facebook-feed">
	<div class="section-content justify-center">
		<h3 class="text-center pb-4">Retrouvez nos actualités sur nos réseaux sociaux...</h3>

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
		<h3 class="blue-text text-center">FG Sport, c'est aussi :</h3>

		<ul>
			<li id="trainings">
				<p class="flex items-center">
					<span class="material-symbols-outlined blue-text max-w-fit mr-4">
						keyboard_double_arrow_right
					</span>
					des formations
				</p>
				<div class="some-cards flex-col md:flex-row md:justify-around w-100">
					<div
						class="cards-container flex w-100 flex-col md:flex-row md:justify-between md:w-[50%] items-center md:items-stretch"
					>
						<Card
							title="3 avril 2023"
							description="Nous vous formerons à l'élaboration de vos chorégrahies"
						/>
						<Card title="10 juin 2023" type="kids" />
						<Card title="17 juillet 2023" />
					</div>
					<BlueButton>... et plus encore !</BlueButton>
				</div>
				<!-- <ProductsOverview /> -->
			</li>
			<li id="choregraphies">
				<span>des chorégraphies</span>
				<div class="some-cards" />
				<!-- <ProductsOverview /> -->
			</li>
		</ul>
	</div>
</section>

<style>
	/* HERO SECTION */
	#hero-section {
		background-color: #ccc;
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
</style>
