import '../CSS/about.css';

export default function About() {
    return (
        <>

            <div className="about-container">

                <img
                src={require('../assets/images/me.jpg')}
                alt="me"
                className="me"
                />

                <div className="about-info">
                    <h1 className="about-title">About Me</h1>
                    <p>
                        Hey there, I'm Will. I am a photographer, videographer, designer and web developer based in the Twin Cities. I have a passion for creating and capturing beautiful images of the spaces we spend time in. I believe that a great image can tell a story and evoke emotion in the viewer. I am always looking for new ways to improve my craft and I am always open to new ideas and projects. If you have any questions or would like to collaborate, please feel free to contact me.
                    </p>
                </div>

            </div>

        </>
    )
}