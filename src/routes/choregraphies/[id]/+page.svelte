<script language="ts">
	export let data;
	let { id, date_publication, description, image, teaser, type } = data.volume;
	console.log('🚀 ~ file: +page.svelte:12 ~ volume:', data);
</script>

<svelte:head>
	<title>FG Sport ~ Vol.{id}</title>
	<meta
		name="description"
		content="FG Sport vous propose des formations et contenus en tant que formateur en Jumping fitness."
	/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
	/>
</svelte:head>

<section class="blue-section py-4 md:py-20 px-12" id="choregraphie-header">
	<div class=" py-4 w-full md:pt-16">
		<a href="/choregraphies" class="light-link flex items-center">
			<span class="material-symbols-outlined mr-4 no-underline light-link"> arrow_back </span>Retour
			aux chorégraphies</a
		>
	</div>

	<div class="flex flex-col md:flex-row md:justify-around md:w-full py-8">
		<div class="max-w-screen-sm mx-8">
			{#if teaser}
				{@html teaser}
			{:else if image}
				<img src={image} alt="volume-img" />
			{:else}{/if}
		</div>
		<div class=" mx-8">
			<h3 class="pb-2">
				VOL.{id}
				<div
					class="rounded-full px-4 text-sm mr-1 bg-gradient-to-r from-gray-300/70 text-white p-2 leading-none font-perso"
				>
					{type.toUpperCase()}
				</div>
			</h3>

			<br />

			<p class="text-lg">
				<b>Date de sortie :</b>
				{new Date(date_publication).toLocaleDateString('fr', { month: 'long', year: 'numeric' })}
			</p>
			<br />
			{#if description}
				<p class="text-lg"><b>Description:</b> <br /> {description}</p>
				<br />
			{/if}
			<a class="text-lg" href="#contact-us">Vous êtes intéressé(e)? <b>Contactez-nous !</b></a>
		</div>
	</div>
</section>

<style>
	a {
		color: white;
	}

	.light-link {
		color: rgb(190, 215, 255);
	}

	#choregraphie-header {
		min-height: 40vh;
	}
</style>
