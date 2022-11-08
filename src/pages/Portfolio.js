import {useState} from 'react';
import "../CSS/portfolio.css";
import {AiOutlineRightCircle} from "react-icons/ai";
import {AiOutlineLeftCircle} from "react-icons/ai";
import {AiOutlineCloseCircle} from "react-icons/ai";

const images = [
    require('../assets/images/1.jpg'),
    require('../assets/images/2.jpg'),
    require('../assets/images/3.jpg'),
    require('../assets/images/4.jpg'),
    require('../assets/images/5.jpg'),
    require('../assets/images/6.jpg'),
    require('../assets/images/7.jpg'),
    require('../assets/images/8.jpg'),
    require('../assets/images/9.jpg'),
];

export default function Portfolio() {

    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (image, index) => {
        setClickedImg(image);
        setCurrentIndex(index);
    }

    //change modal image to next image
    const nextImage = () => {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0);
            setClickedImg(images[0]);
        } else {
            setCurrentIndex(currentIndex + 1);
            setClickedImg(images[currentIndex + 1]);
        }
    }

    //change modal image to previous image
    const prevImage = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1);
            setClickedImg(images[images.length - 1]);
        } else {
            setCurrentIndex(currentIndex - 1);
            setClickedImg(images[currentIndex - 1]);
        }
    }   
    

    return (
        <>

            <div className="hero-container">
                <h1 className="hero-title">Photo</h1>
                <h1 className="hero-title">Video</h1>
                <h1 className="hero-title">Design</h1>
            </div>

            <div className="gallery-container">
                
                <div className="col-1">

                    {images.map((image, index) => (
                        
                        <img
                        className="gallery-image"
                        key={index}
                        src={image}
                        onClick={() => handleClick(image, index)}
                        alt=""
                        />
                        
                    ))}
                    
                </div>

                <div className="col-2">

                    {images.map((image, index) => (
                        
                        <img
                        className="gallery-image"
                        key={index}
                        src={image}
                        onClick={() => handleClick(image, index)}
                        alt=""
                        />
                        
                    ))}

                </div>

                <div className="col-3">

                    {images.map((image, index) => (
                        
                        <img
                        className="gallery-image"
                        key={index}
                        src={image}
                        onClick={() => handleClick(image, index)}
                        alt=""
                        />
                
                    ))}

                </div>

                {clickedImg && (
                    <div className="modal">
                        <div className="overlay">

                            <div className="close-modal">
                                <AiOutlineCloseCircle className="modal-btn" onClick={() =>setClickedImg(null)}/>
                            </div>

                            <div className="modal-content">
                                <AiOutlineLeftCircle className="modal-btn" onClick={prevImage} />
                                <img src={clickedImg} alt="modal-img" className="modal-img" />
                                <AiOutlineRightCircle className="modal-btn" onClick={nextImage} />
                            </div>

                        </div>
                    </div>
                )}

            </div>
            


        </>
    )
}