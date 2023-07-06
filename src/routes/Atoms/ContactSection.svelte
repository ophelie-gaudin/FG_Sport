<script lang="ts">
	import { supabase } from '$lib/supabaseClient';

	let email = '';
	let phone = '';
	let subject = '';
	let message = '';
	let success = false;
	let loading = false;

	const createContact = async () => {
		loading = true;

		try {
			await supabase
				.from('contacts')
				.insert([{ email, sujet: subject, telephone: phone, message }]);
			success = true;
			setTimeout(() => {
				// success = false;
				window.location.reload();
			}, 5000);
		} catch (err) {
			return err;
		}

		loading = false;
	};
</script>

<div id="contact-us">
	<div class="section-content w-[80vw]">
		<h3 class="blue-text text-center my-8">Nous contacter</h3>
		{#if success}
			<div class="text-bold p-4 bg-green-400">
				Nous avons bien reçu votre demande, nous vous répondrons dans les meilleurs délais !
			</div>
		{:else}
			<form
				on:submit|preventDefault={createContact}
				name="contact"
				id="contact-form"
				class="dual-div w-full flex-col md:flex-row"
			>
				<div class="left-side flex flex-col">
					<input
						type="email"
						required
						placeholder="Votre email"
						class="w-full"
						disabled={loading}
						bind:value={email}
					/>
					<input
						type="phone"
						placeholder="Votre numéro de téléphone"
						class="w-full"
						disabled={loading}
						bind:value={phone}
					/>
					<select
						required
						name="object"
						id="object-select"
						class="w-full"
						disabled={loading}
						bind:value={subject}
					>
						<option value="" disabled selected>Sélectionnez un objet</option>
						<option value="formations">Informations sur les formations</option>
						<option value="choregraphies">Informations sur les chorégraphies</option>
						<option value="other">Autre</option>
					</select>
				</div>
				<div class="right-side flex flex-col items-center md:items-end">
					<textarea
						required
						bind:value={message}
						name="message"
						id="message-textarea"
						cols="30"
						rows="10"
						placeholder="Votre messsage"
						disabled={loading}
						class="w-full"
					/>

					<input
						type="submit"
						value="Envoyer votre message !"
						class="px-4 bg-[var(--color-theme-1)] text-white cursor-pointer"
						disabled={loading}
					/>
				</div>
			</form>
		{/if}
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
