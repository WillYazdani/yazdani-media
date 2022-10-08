import "../CSS/portfolio.css";
// import {Link} from "react-router-dom";

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

    return (
        <>

            {images.map((image, index) => (
                
                <img
                className="gallery-image"
                key={index}
                src={image}
                alt=""
                style= {{
                    width: "100%",
                }}
                 />
                
            ))}


        </>
    )
}