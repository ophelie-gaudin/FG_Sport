<script>
	// import Card from '../Atoms/Card.svelte';

	// const data = {
	// 	formations: {
	// 		1: { title: 'Blabla', lieu: 'Toulouse', type: 'BASIC' },
	// 		2: { title: 'Blabla', lieu: 'Toulouse', type: 'BASIC' }
	// 	}
	// };
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
	/>
</svelte:head>

<section class="blue-section" id="formations-header">
	<div class="section-content justify-center">
		<h3 class="pb-4">Nos formations</h3>

		<div class="text-lg">
			<p>
				Nous proposons deux tyoes de formations adressées à toute personne souhaitant devenir
				instructeurs en jumping:
				<br />
				<br />
			</p>
			<ul class="pl-8 list-disc">
				<li>
					des formations BASIC: axées sur les cours pour tout public. (description de ce que sont
					les formations basiques)
				</li>
				<li>
					des formations KIDS: axées sur les cours pour enfants (description de ce qui est travaillé
					en particulier pur que les formations soient particulièrement adaptées aux enfants =
					simplicité des mouvements ? ...)
				</li>
			</ul>
			<p>
				<br />
				<br />

				Vous pourrez visionner ci-dessous les différents évènements de formation que nous proposons.
				<br />
				/!\ Si vous etes intéréssés par une ou plusieurs formations, merci de nous envoyer un message
				via un formulaire de contact avec l'objet "Demande d'informations sur les formations" et en spécifiant
				les sessions qui vous intéressent.
			</p>
		</div>
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

			<div class="formations-catalog">
				<!-- {#each data.formations as formation}
					<Card title={formation.date} lieu={formation.lieu} type={formation.type} />
				{/each} -->
			</div>
		</div>
	</div>
</section>

<style>
	#formations-header {
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
