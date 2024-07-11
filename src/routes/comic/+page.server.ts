import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const email = 'a.saifetdiarova@innopolis.university';
	const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
	const comicId = await response.json();
	const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
	const comic = await comicResponse.json();

	return { comic };
};
