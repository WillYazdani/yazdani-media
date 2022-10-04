import "../CSS/portfolio.css";
import {Link} from "react-router-dom";

export default function Portfolio() {

    return (
        <>

            <div className="portfolio-container">

                <Link className="image-container" to='/page1'></Link>

                <Link className="image-container" to="/page2"></Link>

                <Link className="image-container" to="/page3"></Link>

                <Link className="image-container" to="/page4"></Link>

                <Link className="image-container" to="/page5"></Link>

                <Link className="image-container" to="/page6"></Link>

                <Link className="image-container" to="/page7"></Link>

                <Link className="image-container" to="/page8"></Link>

                <Link className="image-container" to="/page9"></Link>

            </div>
        </>
    )
}