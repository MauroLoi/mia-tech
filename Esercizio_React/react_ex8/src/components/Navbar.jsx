import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/about" >About</Link>
            </div>
            <div>
                <Link to="/todoDetails/1" >To do ID</Link>
            </div>
        </nav>
    )
}

export default Navbar