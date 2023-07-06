<script>
	import Navbar from './Navbar/Navbar.svelte';
	import SmallNavbar from './Navbar/SmallNavbar.svelte';
	import logo from '../lib/images/fg_logo.png';

	// window.onscroll = function () {
	// 	growShrinkLogo();
	// };

	// function growShrinkLogo() {
	// 	const logoEl = document.getElementById('logo-img');
	// 	if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
	// 		logoEl.style.width = '80px';
	// 	} else {
	// 		logoEl.style.width = '100px';
	// 	}
	// }
</script>

<!-- Load an icon library to show a hamburger menu (bars) on small screens -->
<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>

<header class="fixed bg-white md:bg-white/0  md:h-[150px] flex items-center md:items-start">
	<div class="corner md:h-[8em] md:mt-1vh">
		<a href="/">
			<img
				id="logo-img"
				class="ml-2 md:ml-12 md:mt-4 w-28 h-[80%] md:h-[8em]"
				src={logo}
				alt="FG sport logo"
			/>
		</a>
	</div>
	<Navbar />
	<SmallNavbar />
</header>

<style>
	header {
		@apply w-full;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		z-index: 20 !important;
	}

	.corner {
		@apply h-[80px];
		display: flex;
		align-items: center;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	#logo-img {
		@apply h-full;
		object-fit: contain;
	}
</style>
