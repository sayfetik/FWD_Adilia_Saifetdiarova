<script lang="ts">
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	import './comic.css';
	dayjs.extend(relativeTime);

	export let data;
	const { comic } = data;

	const getReleaseDate = () => {
		if (!comic) return null;
		const releaseDate = dayjs(`${comic.year}-${comic.month}-${comic.day}`);
		return {
			formatted: releaseDate.format('MM/DD/YYYY'),
			relative: releaseDate.fromNow(),
		};
	};
	
</script>

<svelte:head>
	<title>Comic</title>
	<meta name="comic" content="Comic" />
	<meta name="description" content="Funny comic"
	/>
	<link rel="icon" href="/comic.png" />
</svelte:head>

{#if comic}
	<div id="comicBody">
		<div id="container">
			<h1 id="title" data-testid="title">{comic.safe_title}</h1>
			<p id="date" data-testid="date">{getReleaseDate()?.formatted}</p>
			<p id="relative-date" data-testid="relative-date">Released: {getReleaseDate()?.relative}</p>
			<img id="image" src={comic.img} alt={comic.alt} data-testid="image"/>
		</div>
	</div>
{/if}
