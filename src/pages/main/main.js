import React from "react";
import "./main.css";
import {Accordion, Card} from "react-bootstrap";

//assets
import mainImage from "../../images/mainImage.jpeg";
import certificate from "../../images/ben-gardner-certificate.png";
import resume from "../../images/ben-gardner-new-resume.png"
import cartoon from "../../images/cartoon-me.png"

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
                <div className="accordionTest col-4">
                    <Accordion className="accordionTest2" defaultActiveKey="1">
                        <Card className="transparent">
                            <Accordion.Toggle className="accordionTitle" as={Card.Header} eventKey="0">
                            <h1>Click Here for Certification!</h1>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body><img className="certificate" src={certificate}/></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
                <div className="accordionTest col-4">
                    <Accordion className="accordionTest2" defaultActiveKey="1">
                        <Card className="transparent">
                            <Accordion.Toggle className="accordionTitle" as={Card.Header} eventKey="0">
                            <h1>Click Here for Resume!</h1>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body><img className="certificate" src={resume}/></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
                <div className="accordionTest col-4">
                    <Accordion className="accordionTest2" defaultActiveKey="1">
                        <Card className="transparent">
                            <Accordion.Toggle className="accordionTitle" as={Card.Header} eventKey="0">
                            <h1>Click Here for Cartoon Me!</h1>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body><img className="certificate" src={cartoon}/></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default Main;