import '../CSS/photos.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Page1() {
    
    return (
        <div className="img-container">

            <Link to="/page5">
                <BsArrowLeftShort className="arrow-left"/>
            </Link>
            

            <img
            src={require('../assets/images/6.jpg')}
            alt="6"
            className="img"
            />

            <Link to="/page7">
                <BsArrowRightShort className="arrow-right"/>
            </Link>

        </div>
    )
}