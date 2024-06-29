import React, { useEffect, useState } from 'react';
import { Comic } from '../../types/Comic';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import './Comic.css';

dayjs.extend(relativeTime);

const ComicComponent: React.FC = () => {
    const [comic, setComic] = useState<Comic | null>(null);
    const email = 'a.saifetdiarova@innopolis.university';

    useEffect(() => {
        const fetchComic = async () => {
            try {
                const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
                const comicId: number = await response.json();
                const comicUrl = `https://fwd.innopolis.university/api/comic?id=${comicId}`;
                const comicResponse = await fetch(comicUrl);
                const comicData: Comic = await comicResponse.json();
                setComic(comicData);
            } catch (error) {
                console.error('Error fetching comic:', error);
            }
        };

        fetchComic();
    }, []);

    if (!comic) return <div>Loading...</div>;

    const releaseDate = dayjs(`${comic.year}-${comic.month}-${comic.day}`);
    const relativeReleaseDate = releaseDate.fromNow();

    return (
        <div id='comicBody'>
            <div id='comicHeader'>
                <h1>COMICS</h1>
                <nav>
                    <a href="https://sayfetik.github.io/FWD_Adilia_Saifetdiarova/">Home</a>
                    <div className="search">
                        <form>
                        <input type="text" placeholder="Search comic..."></input>
                        <button type="submit"></button>
                        </form>
                    </div>
                </nav>
            </div>
            <div id="container">
                <h1 id="title">{comic.safe_title}</h1>
                <p id="date">{releaseDate.format('MM/DD/YYYY')}</p>
                <p id="relative-date">Released: {relativeReleaseDate}</p>
                <img id="image" src={comic.img} alt={comic.alt} />
            </div>
        </div>
    );
};

export default ComicComponent;
