<script>
	import Navbar from './Navbar.svelte';
</script>

<!-- Load an icon library to show a hamburger menu (bars) on small screens -->
<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>

<header>
	<Navbar />
</header>

<style>
	header {
		position: fixed;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		width: 100vw;
	}
</style>
