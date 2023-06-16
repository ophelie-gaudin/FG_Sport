<script lang="ts">
	export let href: string;
</script>

<a class="button" {href}>
	<span><slot /></span>
</a>

<style>
	.button {
		@apply max-h-max;
		border-radius: 4px;
		background-color: var(--color-theme-1);
		opacity: 0.8;
		border: none;
		color: #ffffff;
		text-align: center;
		font-size: 1rem;
		padding: 10px;
		min-width: 150px;
		transition: all 0.5s;
		cursor: pointer;
		margin: 5px;
		display: inline-block;
	}

	.button span {
		cursor: pointer;
		display: inline-block;
		position: relative;
		transition: 0.5s;
	}

	.button:hover {
		opacity: 1;
	}

	.button span:after {
		content: '\00bb';
		position: absolute;
		opacity: 0;
		top: 0;
		right: -20px;
		transition: 0.5s;
	}

	.button:hover span {
		padding-right: 25px;
	}

	.button:hover span:after {
		opacity: 1;
		right: 0;
	}
</style>
