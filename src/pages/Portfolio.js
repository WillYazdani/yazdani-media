import "../CSS/portfolio.css";

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
            <div className="gallery-container">
                <div className="col-1">

                    {images.map((image, index) => (
                        
                        <img
                        className="gallery-image"
                        key={index}
                        src={image}
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
                        alt=""
                        />
                        
                    ))}

                </div>

            </div>
            


        </>
    )
}