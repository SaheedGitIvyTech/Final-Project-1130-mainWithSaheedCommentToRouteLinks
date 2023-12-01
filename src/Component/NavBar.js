import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <a><Link to="/">HomeWebPage</Link></a>
                </li>
                <li>
                    <Link to="/">BecomeAFixer</Link>
                </li>
                <li>
                    <Link to="/">CreateAccount</Link>
                </li>
                <li>
                    <Link to="/">CustomerLogin</Link>
                </li>
                <li>
                    <Link to="/">EmployeeLogin</Link>
                </li>
                <li>
                    <Link to="/">OurServices</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar