import '../CSS/photos.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Page1() {
    
    return (
        <div className="img-container">

            <Link to="/page1">
                <BsArrowLeftShort className="arrow-left"/>
            </Link>
            

            <img
            src={require('../assets/images/2.jpg')}
            alt="2"
            className="img"
            />

            <Link to="/page3">
                <BsArrowRightShort className="arrow-right"/>
            </Link>

        </div>
    )
}