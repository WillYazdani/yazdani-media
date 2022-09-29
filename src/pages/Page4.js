import '../CSS/photos.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

export default function Page1() {
    return (
        <div className="img-container">

            <BsArrowLeftShort
            className="arrow-left"
            onClick={() => {
                window.location.href = "/page3";
            }}/>

            <img
            src={require('../assets/images/4.jpg')}
            alt="1"
            className="img"
            />

            <BsArrowRightShort
            className="arrow-right"
            onClick={() => {
                window.location.href = "/page5";
            }}/>

        </div>
    )
}