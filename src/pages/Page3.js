import '../CSS/photos.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

export default function Page1() {
    return (
        <div className="img-container">

            <BsArrowLeftShort
            className="arrow-left"
            onClick={() => {
                window.location.href = "/page2";
            }}/>

            <img
            src={require('../assets/images/3.jpg')}
            alt="1"
            className="img"
            />

            <BsArrowRightShort
            className="arrow-right"
            onClick={() => {
                window.location.href = "/page4";
            }}/>

        </div>
    )
}