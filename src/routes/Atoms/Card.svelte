<script lang="ts">
	import Badge from './Badge.svelte';
	import OutlineButton from './OutlineButton.svelte';

	export let lieu = '';
	export let title = '';
	export let type = 'basic';
	export let description = '';
	export let types = {
		kids: 'https://zupimages.net/up/23/16/kh5j.png',
		basic: 'https://zupimages.net/up/23/16/3tnv.png'
	};

	const typeImg = types[type];

	// const truncateText(text : string) : string{
	// 	const words = text.split(' ');
	// 	const truncateWords = words.slice(0, 20);
	// 	const truncatedText = truncateWords.join(' ');
	// 	return truncatedText;
	// 	}
</script>

<div class="card flex justify-center my-3 md:mx-3 bg-white rounded-lg drop-shadow-md max-w-[250px]">
	<div class="w-full flex flex-col">
		<a
			href="/"
			data-te-ripple-init
			data-te-ripple-color="light"
			class="bg-kids-class relative w-full"
		>
			<img class="rounded-t-lg w-full" src={typeImg} alt="" />
			{#if type}
				<Badge>{type}</Badge>
			{/if}
		</a>
		<div class="p-6 md:flex md:flex-col md:flex-1 md:justify-between">
			<h5 class="mb-2 text-xl font-medium leading-tight font-perso">
				{title}
			</h5>
			<p class="mb-4 text-base">
				{lieu
					? `<span class="material-symbols-outlined">
					location_on
					</span> ${lieu}`
					: description}
			</p>

			<div class="card-text w-full mx-auto">
				<OutlineButton>Plus de détails</OutlineButton>
			</div>
		</div>
	</div>
</div>

<style>
	.card {
		transition: transform 400ms;
	}

	.card:hover {
		transform: scale(1.05);
	}
</style>
