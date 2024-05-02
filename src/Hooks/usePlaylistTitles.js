import { useState } from "react";
import axios from "axios";

const usePlaylistTitles = () => {
    const [playlistsTitles, setPlaylistsTitles] = useState([]);
    const [playlistsIDsForTitles, setPlaylistsIDsForTitles] = useState({});
    const apiKey = 'AIzaSyCqQw4pg0w8cqDwWYpMP4u3nvJu-faXaks'; 
    // const apiKey = process.env.YOUTUBE_API_KEY;

    const fetchPlaylistTitles = async (playlistsID) => {
        try {
            const titles = [];
            const idsForTitles = {};
            for (const playlistID of playlistsID) {
                const playlistResponse = await axios.get('https://www.googleapis.com/youtube/v3/playlists', {
                    params: {
                        part: 'snippet',
                        key: apiKey,
                        id: playlistID,
                    }
                });
                const title = playlistResponse.data.items[0].snippet.title;
                titles.push(title);
                idsForTitles[title] = playlistID;
            }
            setPlaylistsTitles(titles);
            setPlaylistsIDsForTitles(idsForTitles);
        } catch (error) {
            console.error('Error fetching playlist titles:', error);
        }
    };

    return { playlistsTitles, playlistsIDsForTitles, fetchPlaylistTitles };
};

export default usePlaylistTitles;
