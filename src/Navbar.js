import "./CSS/navbar.css";

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <h1>Yazdani Media</h1>
                </div>
                <div className="navbar-nav">
                    <ul className="nav-items">
                        <li className="nav-item">
                            <a href="/">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="/pricing">Pricing</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}