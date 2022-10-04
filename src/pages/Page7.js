import '../CSS/photos.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Page1() {
    
    return (
        <div className="img-container">

            <Link to="/page6">
                <BsArrowLeftShort className="arrow-left"/>
            </Link>
            

            <img
            src={require('../assets/images/7.jpg')}
            alt="7"
            className="img"
            />

            <Link to="/page8">
                <BsArrowRightShort className="arrow-right"/>
            </Link>

        </div>
    )
}