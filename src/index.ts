import { Comic } from './types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

document.addEventListener('DOMContentLoaded', async () => {
  const email = 'a.saifetdiarova@innopolis.university';
  const api = `https://fwd.innopolis.university/api/hw2?email=${email}`;

  try {
    const response = await fetch(api);
    const comicId: number = await response.json();

    const comicUrl = `https://fwd.innopolis.university/api/comic?id=${comicId}`;
    const comicResponse = await fetch(comicUrl);
    const comicData: Comic = await comicResponse.json();
    console.log(comicData);

    const titleElement = document.getElementById('title');
    if (titleElement) {
      titleElement.textContent = comicData.safe_title;
    }

    const comicImage = document.getElementById('image') as HTMLImageElement;
    if (comicImage) {
      comicImage.src = comicData.img;
      comicImage.alt = comicData.alt;
    }

    const dateElement = document.getElementById('date');
    if (dateElement) {
      const date = new Date(parseInt(comicData.year), parseInt(comicData.month) - 1, parseInt(comicData.day));
      dateElement.textContent = date.toLocaleDateString();
    }

    const relativeDateElement = document.getElementById('relative-date');
    if (relativeDateElement) {
      const releaseDate = dayjs(`${comicData.year}-${comicData.month}-${comicData.day}`);
      const relativeReleaseDate = releaseDate.fromNow();
      relativeDateElement.textContent = `Released: ${relativeReleaseDate}`;
    }
  } catch (error) {
    console.error('Error fetching comic:', error);
  }
});
