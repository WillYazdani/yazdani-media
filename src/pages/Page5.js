import '../CSS/photos.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Page1() {
    
    return (
        <div className="img-container">

            <Link to="/page4">
                <BsArrowLeftShort className="arrow-left"/>
            </Link>
            

            <img
            src={require('../assets/images/5.jpg')}
            alt="5"
            className="img"
            />

            <Link to="/page6">
                <BsArrowRightShort className="arrow-right"/>
            </Link>

        </div>
    )
}