import "../CSS/portfolio.css";

export default function Portfolio() {

    return (
        <>

            <div className="portfolio-container">

                <div
                className="image-container"
                onClick={() => {
                    window.location.href = "/page1";
                }}></div>

                <div
                className="image-container"
                onClick={() => {
                    window.location.href = "/page2";
                }}></div>

                <div
                className="image-container"
                onClick={() => {
                    window.location.href = "/page3";
                }}></div>

                <div className="image-container">
                </div>

                <div className="image-container">
                </div>

                <div className="image-container">
                </div>

                <div className="image-container">
                </div>

                <div className="image-container">
                </div>

                <div className="image-container">
                </div>

            </div>
        </>
    )
}