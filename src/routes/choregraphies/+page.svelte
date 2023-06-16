<script lang="ts">
	import Card from '../Atoms/Card.svelte';

	export let data;
	let { section, choregraphies } = data;

	console.log('🚀 ~ file: +page.svelte:12 ~ choregraphies:', choregraphies);
</script>

<svelte:head>
	<title>FG Sport ~ Chorégraphies</title>
	<meta
		name="description"
		content="FG Sport vous propose des formations et contenus en tant que formateur en Jumping fitness."
	/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
	/>
</svelte:head>

<section class="blue-section" id="choregraphies-header">
	<div class="section-content justify-center">
		<h3 class="pb-4">{@html section[0].titre}</h3>

		<div class="text-lg">
			{@html section[0].description}
		</div>
	</div>
</section>

<section>
	<div class="section-content">
		<!-- <div class="flex filter-div flex-col items-center md:flex-row md:items-center ">
			<p class="whitespace-nowrap">Filtrer par:</p>
			<div class="flex flex-wrap justify-between">
				<button class="filter-btn">Toutes</button>
				<button class="filter-btn">Ce mois-ci</button>
				<button class="filter-btn">#BASIC</button>
				<button class="filter-btn">#KIDS</button>
			</div>
		</div> -->
		<div
			class="flex flex-col items-center flex-wrap md:flex-row md:max-w-[60vw] md:justify-between"
		>
			{#each choregraphies as choregraphie}
				<Card
					title="VOL.{choregraphie.id}"
					type={choregraphie.type}
					href="/choregraphies/{choregraphie.id}"
				/>
			{/each}
		</div>
	</div>
</section>

<style>
	#choregraphies-header {
		min-height: 40vh;
	}

	.section-content {
		max-width: 80vw;
		display: flex;
		align-items: center;
	}

	.filter-btn {
		margin: 0 2rem 0 2rem;
		border: 1px solid;
		padding: 8px;
		border-radius: 4px;
	}

	.filter-div {
		width: 100%;
	}
</style>
