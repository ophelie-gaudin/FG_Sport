<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
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

<section class="hero-section">
	<h2>Venez vous défouler et jumper avec nous <br /> sur des rythmes de folie !</h2>
	<h3>
		Chez FG Sport, nous proposons des cours de jumping pour les pratiquants <br /> mais aussi des évènements
		de formation pour les instructeurs.
	</h3>
	<div class="vertical-div-flex"><a href="#jumping-description">En savoir plus</a></div>
</section>

<section id="jumping-description">
	<p>
		Vous souhaitez faire du sport pour vous dépenser tout en vous amusant ? <br />
		Vous cherchez un sport à pratiquer pour perdre du poids dans un contexte fun ? <br />
		Le jumping fitness est fait pour vous !
	</p>

	<div class="dual-div">
		<div class="left-side">
			<h3>Qu'est-ce que le jumping ?</h3>
			<p>
				Les cours se déroulent sur de petits trampolines individuels sur fond de musique très
				rythmée. Accompagné par un coach sportif, vous alternez sauts rapides et lents, sprints
				dynamiques et exercices de renforcement musculaire. Les exercices de fitness que l’on
				retrouve le plus souvent lors d’un cours de jump fitness sont les jumping jack ou encore les
				montées de genoux qui sont très efficaces pour accélérer le rythme cardiaque. <br />
				<br />

				Grâce à la variété des combinaisons d’exercices possibles et à la bonne ambiance lors de ces
				cours collectifs, vous ne verrez pas le temps passer et vous ferez du sport en vous amusant
				réellement ! <br /> <br />

				Chez FG Sports, nous vous proposons des cours collectifs mais aussi
			</p>
		</div>
		<div class="right-side">
			<div class="image" />
		</div>
	</div>
</section>

<section class="dual-section" id="facebook-feed">
	<h3>Retrouvez nos actualités sur nos réseaux sociaux...</h3>

	<div
		class="fb-page"
		data-href="https://www.facebook.com/profile.php?id=100083668385890"
		data-tabs="timeline"
		data-width="500"
		data-height="100"
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
		class="fb-page"
		data-href="https://www.facebook.com/profile.php?id=100083668385890"
		data-tabs="timeline,events,messages"
		data-width="340"
		data-hide-cover="false"
		data-show-facepile="false"
	/>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		min-height: 90vh;
	}

	.hero-section {
		background-color: #ccc;
	}

	.dual-section {
		background-color: #4d679f;
		display: flex;
		justify-content: center;
	}

	.dual-div {
		display: flex;
	}
	.left-side {
		flex: 1;
	}
	.right-side {
		flex: 1;
	}
	.image {
		background-color: #ccc;
		margin: 3em;
		height: 100%;
	}

	#jumping-description {
		background-color: whitesmoke;
	}

	.vertical-div-flex {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1;
	}

	/* h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
</style>
