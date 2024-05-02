import { Link } from "react-router-dom"
// import { useState, useEffect } from "react";
// import axios from "axios"
import usePlaylistTitles from "../../../Hooks/usePlaylistTitles";

const Cse = () => {

    const playlistsIDsSem1 = ["PLeQGRdO33VBna7UjWMILAD-Ufoot_wmYv", "PLB97yPrFwo5j60AxzdZVC3dOJvJy4Oxkp"];
    const playlistsIDsSem2 = ["PLeQGRdO33VBna7UjWMILAD-Ufoot_wmYv", "PLB97yPrFwo5j60AxzdZVC3dOJvJy4Oxkp"];
    const playlistsIDsSem3 = ["PLeQGRdO33VBna7UjWMILAD-Ufoot_wmYv", "PLB97yPrFwo5j60AxzdZVC3dOJvJy4Oxkp"];
    const playlistsIDsSem4 = ["PLeQGRdO33VBna7UjWMILAD-Ufoot_wmYv"];
    const playlistsIDsSem5 = ["PLeQGRdO33VBna7UjWMILAD-Ufoot_wmYv", "PLB97yPrFwo5j60AxzdZVC3dOJvJy4Oxkp"];
    const playlistsIDsSem6 = ["PLeQGRdO33VBna7UjWMILAD-Ufoot_wmYv", "PLB97yPrFwo5j60AxzdZVC3dOJvJy4Oxkp"];
    const playlistsIDsSem7 = ["PLeQGRdO33VBna7UjWMILAD-Ufoot_wmYv", "PLB97yPrFwo5j60AxzdZVC3dOJvJy4Oxkp"];
    const playlistsIDsSem8 = [];

    const { playlistsTitles, playlistsIDsForTitles, fetchPlaylistTitles } = usePlaylistTitles();
    const handleSemesterSelect = (semester) => {
        fetchPlaylistTitles(semester);
    };

    return (
        <>
            <h1>CSE page</h1>

            <ul>
                <li onClick={() => { handleSemesterSelect(playlistsIDsSem1) }} className="sem">
                    Sem1
                </li>
                <li onClick={() => { fetchPlaylistTitles(playlistsIDsSem2) }} className="sem">
                    Sem2
                </li>
                <li onClick={() => { fetchPlaylistTitles(playlistsIDsSem3) }} className="sem">
                    Sem3
                </li>
                <li onClick={() => { fetchPlaylistTitles(playlistsIDsSem4) }} className="sem">
                    Sem4
                </li>
                <li onClick={() => { fetchPlaylistTitles(playlistsIDsSem5) }} className="sem">
                    Sem5
                </li>
                <li onClick={() => { fetchPlaylistTitles(playlistsIDsSem6) }} className="sem">
                    Sem6
                </li>
                <li onClick={() => { fetchPlaylistTitles(playlistsIDsSem7) }} className="sem">
                    Sem7
                </li>
                <li onClick={() => { fetchPlaylistTitles(playlistsIDsSem8) }} className="sem">
                    Sem8
                </li>
            </ul>

            {playlistsTitles.length > 0 && playlistsTitles.map((title) => {
                return (
                    <Link to={`/course/${title}`} state={{ playlistID: playlistsIDsForTitles[title] }} key={title}>
                        <h4>{title}</h4>
                    </Link>
                )
            })}



        </>
    )
}

export default Cse