<script>
	import Footer from '../components/Footer.svelte';
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

<header>
	<h1 id="home"><a href="/">DI</a></h1>
	<div id="header">
		<form>
			<p>
				<input type="search" name="q" placeholder="Search on the website" />
				<input type="submit" value="Find" />
			</p>
		</form>
		<h2 id="portfolioBar"><a href="/about">About</a></h2>
		<h2 id="portfolioBar"><a href="/projects">Projects</a></h2>
		<h2 id="contactBar"><a href="/comic">Comic</a></h2>
	</div>
</header>

<main>
	<slot></slot>
</main>

<Footer />
