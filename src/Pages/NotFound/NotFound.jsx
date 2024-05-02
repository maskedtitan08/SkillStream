import { Link } from "react-router-dom"
const NotFound = () =>{
    return(
        <div>
            <h1 className="text-center">Opps ! We ran out of code</h1>
            <Link to={"/"}>Go back to home</Link>
        </div>
    )

}

export default NotFound