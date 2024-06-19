document.addEventListener('DOMContentLoaded', async () => {
    const email = 'a.saifetdiarova@innopolis.university';
    const api = `https://fwd.innopolis.university/api/hw2?email=${email}`;
    
    try {
        // Fetch comic identifier
        const response = await fetch(api);
        const comicId = await response.json();

        // Fetch comic details
        const comicUrl = `https://fwd.innopolis.university/api/comic?id=${comicId}`;
        const comicResponse = await fetch(comicUrl);
        const comicData = await comicResponse.json();
        console.log(comicData)

        // Display comic details
        document.getElementById('title').textContent = comicData.safe_title;
        const comicImage = document.getElementById('image');
        comicImage.src = comicData.img;
        comicImage.alt = comicData.alt;

        const date = new Date(comicData.year, comicData.month - 1, comicData.day);
        document.getElementById('date').textContent = date.toLocaleDateString();
    } catch (error) {
        console.error('Error fetching comic:', error);
    }
});

