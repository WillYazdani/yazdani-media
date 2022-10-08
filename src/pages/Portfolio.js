import "../CSS/portfolio.css";
// import {Link} from "react-router-dom";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";


export default function Portfolio() {

    return (
        <>
            <ResponsiveMasonry
            className="gallery"
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry
                className="images"
                gutter="1rem"
                >
                    <img
                    src={require('../assets/images/1.jpg')}
                    alt="1"
                    />

                    <img
                    src={require('../assets/images/2.jpg')}
                    alt="2"
                    />

                    <img
                    src={require('../assets/images/3.jpg')}
                    alt="3"
                    />

                    <img
                    src={require('../assets/images/4.jpg')}
                    alt="4"
                    />

                    <img
                    src={require('../assets/images/5.jpg')}
                    alt="5"
                    />

                    <img
                    src={require('../assets/images/6.jpg')}
                    alt="6"
                    />

                    <img
                    src={require('../assets/images/7.jpg')}
                    alt="7"
                    />

                    <img
                    src={require('../assets/images/8.jpg')}
                    alt="8"
                    />

                    <img
                    src={require('../assets/images/9.jpg')}
                    alt="9"
                    />
                </Masonry>
            </ResponsiveMasonry>
        </>
    )
}