import "./CSS/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="nav-logo">
                    <img src={require("./assets/images/ym-flat.png")} alt="logo" />
                </Link>
                <div className="navbar-nav">
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link to="/">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about">About</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/pricing">Pricing</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}