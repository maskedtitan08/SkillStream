import { Link } from "react-router-dom"
import AllMentors from "../AllMentors/AllMentors"
import Footer from "../Layout/Footer"
const Home = () =>{
    return(
        <>
            <div className="home">
                <h1 className="home-title">HomePage</h1>
                {/* <navbar> */}
                    <p className="home-description">
                        This platform is build by Shreshtha.
                        Quickly use below links to navigate through all pages. 
                    </p>
                    <ul className="nav-links-list">
                        <li className="nav-links">
                            <Link to={"/academics"}>Academics</Link>
                        </li>
                        <li className="nav-links">
                            <Link to={"/skills"}>Skills</Link>
                        </li>
                        <li className="nav-links">
                            <Link to={"/login"}>Login</Link>
                        </li>
                        <li className="nav-links">
                            <Link to={"/signup"}>Create Account</Link>
                        </li>

                    </ul>
                {/* </navbar> */}

                <AllMentors />
                <Footer/>
            </div>
        </>
    )
}

export default Home