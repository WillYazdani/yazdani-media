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

                <div
                className="image-container"
                onClick={() => {
                    window.location.href = "/page4";
                }}></div>

                <div
                className="image-container"
                onClick={() => {
                    window.location.href = "/page5";
                }}></div>

                <div
                className="image-container"
                onClick={() => {
                    window.location.href = "/page6";
                }}></div>

                <div
                className="image-container"
                onClick={() => {
                    window.location.href = "/page7";
                }}></div>

                <div
                className="image-container"
                onClick={() => {
                    window.location.href = "/page8";
                }}></div>

                <div
                className="image-container"
                onClick={() => {
                    window.location.href = "/page9";
                }}></div>

            </div>
        </>
    )
}