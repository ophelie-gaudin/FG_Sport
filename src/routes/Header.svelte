<script>
	import Navbar from './Navbar.svelte';
	import SmallNavbar from './SmallNavbar.svelte';
	import logo from '$lib/images/fg-logo.png';
</script>

<!-- Load an icon library to show a hamburger menu (bars) on small screens -->
<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>

<header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="FG sport logo" />
		</a>
	</div>
	<Navbar />
	<SmallNavbar />
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
