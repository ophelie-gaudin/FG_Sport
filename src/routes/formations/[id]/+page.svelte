<script>
	export let data;
	let { id, date_publication, description, date, lieu, image, type } = data.formation;
	console.log('🚀 ~ file: +page.svelte:12 ~ formation:', data);

	const day = new Date(date).toLocaleDateString('fr', {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	const hours = new Date(date).getHours();
	const minutes = new Date(date).getMinutes();

	type = type?.toLowerCase() || 'basic';

	image =
		type === 'kids'
			? 'https://zupimages.net/up/23/16/kh5j.png'
			: 'https://zupimages.net/up/23/16/3tnv.png';

	const time = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
</script>

<svelte:head>
	<title>FG Sport ~ Formation du {day}</title>
	<meta
		name="description"
		content="FG Sport vous propose des formations et contenus en tant que formateur en Jumping fitness."
	/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
	/>
</svelte:head>

<section class="blue-section  py-4 md:py-20 px-10" id="formation-header">
	<div class="py-4 w-full md:pt-16">
		<a href="/formations" class="light-link flex items-center ">
			<span class="material-symbols-outlined mr-4 light-link"> arrow_back </span>
			Retour aux formations</a
		>
	</div>

	<div class="flex flex-col items-center w-full md:flex-row md:justify-around py-8">
		{#if image}
			<div class="md:max-w-screen-sm md:mx-8 w-screen">
				<img src={image} alt="volume-img" />
			</div>
		{/if}

		<div class=" md:mx-8">
			<h3 class="pb-4">
				Formation du {day}
				<div
					class="rounded-full px-4 text-sm mr-1 bg-gradient-to-r from-gray-300/70 text-white p-2 leading-none font-perso"
				>
					{type.toUpperCase()}
				</div>
			</h3>

			<br />
			<p class="text-lg">
				<b>Heure :</b>
				{time}
			</p>
			<br />
			<p class="text-lg">
				<b>Lieu :</b>
				{lieu}
			</p>
			<br />
			<p class="text-lg"><b>Description:</b> <br /> {description}</p>
			<br />
			<a class="text-lg" href="#contact-us">Vous êtes intéressé(e)? <b>Contactez-nous !</b></a>
		</div>
	</div>
</section>

<style>
	#formation-header {
		min-height: 40vh;
	}

	a {
		color: white;
	}

	.light-link {
		color: rgb(190, 215, 255);
	}
</style>
