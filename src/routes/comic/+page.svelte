<script lang="ts">
	import { onMount } from 'svelte';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	import './comic.css';
	dayjs.extend(relativeTime);

	interface Comic {
		month: string;
		num: number;
		link: string;
		year: string;
		news: string;
		safe_title: string;
		transcript: string;
		alt: string;
		img: string;
		title: string;
		day: string;
	}

	let comic: Comic | null = null;
	const email = 'a.saifetdiarova@innopolis.university';

	onMount(async () => {
		try {
			const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
			const comicId = await response.json();
			const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
			comic = await comicResponse.json();
		} catch (error) {
			console.error('Error fetching comic:', error);
		}
	});

	const getReleaseDate = () => {
		if (!comic) return null;
		const releaseDate = dayjs(`${comic.year}-${comic.month}-${comic.day}`);
		return {
			formatted: releaseDate.format('MM/DD/YYYY'),
			relative: releaseDate.fromNow()
		};
	};
</script>

{#if comic}
	<div id="comicBody">
		<div id="container">
			<h1 id="title">{comic.safe_title}</h1>
			<p id="date">{getReleaseDate()?.formatted}</p>
			<p id="relative-date">Released: {getReleaseDate()?.relative}</p>
			<img id="image" src={comic.img} alt={comic.alt} />
		</div>
	</div>
{:else}
	<div>Loading...</div>
{/if}
