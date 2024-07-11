<script>
	import './portfolio.css';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="author" content="Adilia Saifetdiarova" />
	<meta
		name="description"
		content="Portfolio of Adilia Saifetdiarova - Designer, front-end developer, C++ developer"
	/>
	<link rel="icon" href="/main.png" />
</svelte:head>

<main>
	<div id="start">
		<div>
			<p class="headline">I'm Adilia Saifetdiarova</p>
			<p class="description">Designer, front-end developer, C++ developer</p>
			<div class="text-box">
				<a href="#contact" class="btn btn-white btn-animate">Contact</a>
			</div>
		</div>
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img id="profilePhoto" alt="Profile photo" src="/img/photo.jpg" />
	</div>
</main>
