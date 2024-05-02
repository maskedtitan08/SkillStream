import { Link } from "react-router-dom"
import usePlaylistTitles from "../../Hooks/usePlaylistTitles";
import {useEffect } from "react";


const Skills = () => {

    const playlistsID = ["PLeQGRdO33VBna7UjWMILAD-Ufoot_wmYv", "PLB97yPrFwo5j60AxzdZVC3dOJvJy4Oxkp"];
    // const apiKey = process.env.YOUTUBE_API_KEY;

    const { playlistsTitles, playlistsIDsForTitles, fetchPlaylistTitles } = usePlaylistTitles();

    useEffect(() => {
        fetchPlaylistTitles(playlistsID);
    }, []);
    return (
        <>
            <h1>Skills page</h1>


            {playlistsTitles.map((title) => {
                return (
                    // <Link to={`/course/${title}`} state={{ courseData , playlistID: playlistsIDsForTitles[title]}} key = {title}>
                    <Link to={`/course/${title}`} state={{playlistID: playlistsIDsForTitles[title]}} key = {title}>
                        <h4>{title}</h4>
                    </Link>
                )
            })}

            
            {/* <Link to={`/course/${playlistTitle}`} state={{ courseData }}>
                <h4>{playlistTitle}</h4>
            </Link> */}


        </>
    )
}

export default Skills