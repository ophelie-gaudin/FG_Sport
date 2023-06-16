<script lang="ts">
	import { supabase } from '$lib/supabaseClient';

	let email = '';
	let phone = '';
	let subject = '';
	let message = '';

	const createContact = async () => {
		try {
			await supabase
				.from('contacts')
				.insert([{ email, sujet: subject, telephone: phone, message }]);
			// .then((response) => {
			// 	if (response.status === 201) {
			// 		const submitInput = document.querySelector('[type = submit]');

			// 		console.log(submitInput);

			// 		// submitInput?.textContent = 'Message envoyé';

			// 		// submitInput?.classList.remove('bg-[var(--color-theme-1)] cursor-pointer');
			// 		// submitInput?.classList.add('bg-green');
			// 	}
			// });
		} catch (err) {
			return err;
		}
	};
</script>

<div id="contact-us">
	<div class="section-content w-[80vw]">
		<h3 class="blue-text text-center my-8">Nous contacter</h3>
		<form
			on:submit|preventDefault={createContact}
			name="contact"
			id="contact-form"
			class="dual-div w-full flex-col md:flex-row"
		>
			<div class="left-side flex flex-col">
				<input type="text" required placeholder="Votre email" class="w-full" bind:value={email} />
				<input
					type="text"
					placeholder="Votre numéro de téléphone"
					class="w-full"
					bind:value={phone}
				/>
				<select name="object" id="object-select" class="w-full" bind:value={subject}>
					<option value="" disabled selected>Sélectionnez un objet</option>
					<option value="formations">Informations sur les formations</option>
					<option value="choregraphies">Informations sur les chorégraphies</option>
					<option value="other">Autre</option>
				</select>
			</div>
			<div class="right-side">
				<textarea
					required
					bind:value={message}
					name="message"
					id="message-textarea"
					cols="30"
					rows="10"
					placeholder="Votre messsage"
					class="w-full"
				/>

				<input
					type="submit"
					value="Envoyer votre message !"
					class="px-4 bg-[var(--color-theme-1)] text-white cursor-pointer"
				/>
			</div>
		</form>
	</div>
</div>

<style>
	#contact-us {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--color-bg-0);
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
</style>
