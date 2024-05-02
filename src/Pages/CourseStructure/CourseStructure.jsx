import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom"
import axios from "axios";

// require('dotenv').config();

const CourseStructure = () => {
    const { coursename } = useParams();
    const { state: { playlistID } } = useLocation();
    const apiKey = 'AIzaSyCqQw4pg0w8cqDwWYpMP4u3nvJu-faXaks'
    // const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
    const [courseData, setCourseData] = useState([]);
    const [vid, setVid] = useState("");
    const [title, setTitle] = useState("");

    
    useEffect(() => {
        const fetchPlaylistVideos = async (playlistID) => {
            try {
                // Fetch playlist items (videos)
                const playlistItemsResponse = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
                    params: {
                        part: 'snippet',
                        key: apiKey,
                        playlistId: playlistID,
                        maxResults: 100,
                    }
                });

                // Extract video information from the playlist items response
                const videosData = playlistItemsResponse.data.items.map(item => ({
                    id: item.snippet.resourceId.videoId,
                    title: item.snippet.title,
                    thumbnail: item.snippet.thumbnails.default.url,
                    description: item.snippet.description,
                }));
                setCourseData(videosData);
                if (videosData.length > 0) {
                    setVid(videosData[0].id);
                    setTitle(videosData[0].title);
                }

            } catch (error) {
                console.error('Error fetching playlist videos:', error);
            }
        };

        fetchPlaylistVideos(playlistID);
    }, [playlistID])

    
    const renderVideo = () => {
        return (
            <>
                <h3>Videos</h3>
                <h4 className="video_title">{title}</h4>
                <div className="video-container">
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${vid}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </>
        )
    }
    
    return (
    <>
      <div className="course-structure">
        <h2 className="course-title">Welcome to {coursename} course!</h2>
        <div className="video-section">
          {renderVideo()}
          <ul className="video-list">
            {courseData.map((item) => (
              <li
                className="video-list-item"
                onClick={() => {
                  setVid(item.id);
                  setTitle(item.title);
                }}
                key={item.id}
              >
                <img src={item.thumbnail} alt="" />
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CourseStructure