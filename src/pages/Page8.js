import '../CSS/photos.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Page1() {
    
    return (
        <div className="img-container">

            <Link to="/page7">
                <BsArrowLeftShort className="arrow-left"/>
            </Link>
            

            <img
            src={require('../assets/images/8.jpg')}
            alt="8"
            className="img"
            />

            <Link to="/page9">
                <BsArrowRightShort className="arrow-right"/>
            </Link>

        </div>
    )
}