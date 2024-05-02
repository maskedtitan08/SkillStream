// import Cse from "./CSE/Cse"
import { Link } from "react-router-dom"
const Academics = () =>{
    return (
        <>
        <h1>Academics Page</h1>
        <Link to= {"/academics/CSE"}>CSE course</Link>
        <br />
        <Link to= {"/academics/CCE"}>CCE course</Link>
        <br />
        <Link to= {"/academics/ECE"}>ECE course</Link>
        <br />
        <Link to= {"/academics/MME"}>MME course</Link>
        <br />

        </>
    )
}

export default Academics