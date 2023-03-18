<script>
	import BlueButton from './BlueButton.svelte';
	import Badge from './Badge.svelte';

	export let title = '';
	export let type = 'adults';
	export let description = '';
	export let types = {
		kids: 'https://i.ytimg.com/vi/YCR3H9IYx6s/maxresdefault.jpg',
		adults: 'https://i.ytimg.com/vi/nfhkZkZpP6M/maxresdefault.jpg'
	};

	const typeImg = types[type];

	// let;
</script>

<div class="card flex justify-center my-3 md:mx-3 bg-white rounded-lg drop-shadow-md max-w-[250px]">
	<div class="block w-full flex flex-col">
		<a
			href="#!"
			data-te-ripple-init
			data-te-ripple-color="light"
			class="bg-kids-class relative w-full"
		>
			<img class="rounded-t-lg w-full" src={typeImg} alt="" />
			<Badge>{type}</Badge>
		</a>
		<div class="p-6 md:flex md:flex-col md:flex-1 md:justify-between">
			<h5 class="mb-2 text-xl font-medium leading-tight font-perso">
				{title}
			</h5>
			<p class="mb-4 text-base">
				{description}
			</p>

			<div class="card-text w-full mx-auto">
				<BlueButton>Plus de détails</BlueButton>
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
