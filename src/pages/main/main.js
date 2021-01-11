import React from "react";
import "./main.css";
import ImageComponent from "../../components/imagecomponent/imagecomponent";

//assets
import mainImage from "../../images/mainImage.jpeg"

function Main() {

    //var for linkedin url
    const user = {
        linkedinHandle: "https://www.linkedin.com/in/ben-gardner-6567459a?trk=profile-badge"
    }


    return(
        <div className="background-gray">
            <div>
                <img className="image" src={mainImage} />
                    <div className="jumbotron">
                        <h2><span>About Me: My name is Ben Gardner and I am a recently displaced management professional due to Covid-19. Because of this, I have decided on a career change and recently graduated from University of Denver's Coding Bootcamp. The languages and frameworks that I know are HTML, CSS, Javascript, jQuery, Node.js, Express, React, mySQL and MongoDB. This portfolio was created using the React framework to showcase my skills on my path to a career as a full stack web developer. Please see below for my resume, LinkedIn and Github as well as my portfolio tab above for all of my most recent applications.</span></h2>
                    </div>
            </div>
            <div className="row background-gray">
                <div className="test screen screen2 col-sm-12 col-lg-12 pt-4">
                    <div>
                        <h1>Resume</h1>
                        <h5>(Click To Enlarge)</h5>
                    </div>
                    <div>
                        <ImageComponent />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Main;