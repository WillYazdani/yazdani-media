import "../CSS/portfolio.css";

export default function Portfolio() {

    //handle click events
    const handleClick = (e) => {
        //get the id of the clicked element
        const id = e.target.id;
        //if the id is not null
        if (id) {
            //redirect to the page with the id
            window.location.href = `/${id}`;
        }
    }

    return (
        <>

            <div className="portfolio-container">

                <div
                className="image-container"
                id="page1"
                onClick={handleClick}></div>

                <div
                className="image-container"
                id="page2"
                onClick={handleClick}></div>

                <div
                className="image-container"
                id="page3"
                onClick={handleClick}></div>

                <div
                className="image-container"
                id="page4"
                onClick={handleClick}></div>

                <div
                className="image-container"
                id="page5"
                onClick={handleClick}></div>

                <div
                className="image-container"
                id="page6"
                onClick={handleClick}></div>

                <div
                className="image-container"
                id="page7"
                onClick={handleClick}></div>

                <div
                className="image-container"
                id="page8"
                onClick={handleClick}></div>

                <div
                className="image-container"
                id="page9"
                onClick={handleClick}></div>

            </div>
        </>
    )
}