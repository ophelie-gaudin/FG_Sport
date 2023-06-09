<script lang="ts">
	import { supabase } from '$lib/supabaseClient';

	let email = '';
	let phone = '';
	let subject = '';
	let message = '';

	const createContact = async () => {
		try {
			const { data } = await supabase
				.from('contacts')
				.insert([{ email, sujet: subject, telephone: phone, message }]);
			console.log('DATA', data);

			let apiResult;
			if (data != null) {
				apiResult = true;
			} else {
				apiResult = false;
			}
		} catch (err) {
			return err;
		}
	};
</script>

<section id="contact">
	<div class="section-content w-full">
		<h3 class="blue-text text-center">Nous contacter</h3>
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

				<input type="submit" value="Envoyer votre message !" />
			</div>
		</form>
	</div>
</section>

<style>
	#contact {
		min-height: 50vh;
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
