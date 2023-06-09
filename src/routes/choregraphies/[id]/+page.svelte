<script>
	// import Card from '../Atoms/Card.svelte';

	// const data = {
	// 	choregraphies: {
	// 		1: { title: 'Blabla', lieu: 'Toulouse', type: 'BASIC' },
	// 		2: { title: 'Blabla', lieu: 'Toulouse', type: 'BASIC' }
	// 	}
	// };

	export let data;
	let { volume } = data;
	console.log('🚀 ~ file: +page.svelte:12 ~ volume:', volume);
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
	/>
</svelte:head>

<section class="blue-section" id="choregraphies-header">
	<h1>HELLO !</h1>
	<!-- <div class="section-content justify-center">
		<h3 class="pb-4">{section[0].titre}</h3>

		<div class="text-lg">{section[0].description}</div>
	</div>
</section>

<section>
	<div class="section-content">
		<div class="flex filter-div items-center">
			<p>Filtrer par:</p>
			<div>
				<button class="filter-btn">Toutes</button>
				<button class="filter-btn">Ce mois-ci</button>
				<button class="filter-btn">#BASIC</button>
				<button class="filter-btn">#KIDS</button>
			</div>

			<div class="choregraphies-catalog">
				{#each data.choregraphies as formation}
					<Card title={formation.date} lieu={formation.lieu} type={formation.type} />
				{/each} 
			</div>
		</div>
	</div> -->
</section>

<style>
	#choregraphies-header {
		min-height: 40vh;
	}

	.filter-btn {
		margin-left: 4rem;
		border: 1px solid;
		padding: 8px;
		border-radius: 4px;
	}

	.filter-div {
		width: 100%;
	}
</style>
