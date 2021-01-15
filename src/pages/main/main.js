import React, {useRef, useEffect} from "react";
import "./main.css";
import {Accordion, Card} from "react-bootstrap";
import {gsap, Power3} from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'

//assets
import certificate from "../../images/ben-gardner-certificate.png";
import resume from "../../images/ben-gardner-new-resume.png"
import cartoon from "../../images/cartoon-me.png"

gsap.registerPlugin(CSSPlugin)

function Main() {

    let first = useRef(null);
    let second = useRef(null);
    let third = useRef(null);
    let fourth = useRef(null);
    let fifth = useRef(null);
    let tl = new gsap.timeline({delay: .8});

    useEffect(() => {
        const first1 = first.children[0];
        const second1 = second.children[0];
        const third1 = third.children[0];
        const fourth1 = fourth.children[0];
        const fifth1 = fifth.children[0];

        tl.staggerFrom([first1.children], 1, {
            y: 44,
            ease: Power3.easeOut,
            delay: .8
        }, .15, 'Start')
        .from([first1], 1, {y:20, opacity: 0, ease: Power3.easeOut}, .4)
        .from([second1], 1, {y:20, opacity: 0, ease: Power3.easeOut}, 1.4)
        .from([third1], 1, {y:20, opacity: 0, ease: Power3.easeOut}, 2.4)
        .from([fourth1], 1, {y:20, opacity: 0, ease: Power3.easeOut}, 3.4)
        .from([fifth1], 1, {y:20, opacity: 0, ease: Power3.easeOut}, 5)
        })


    return(
        <div className="image">
            <div>
                    <Card className="mainCard">
                        <Card.Body>
                            <div className="row">
                                <div className="col-12">
                                    <div ref={el => first = el}>
                                        <div className="hi">Hi,</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div ref={el => second = el}>
                                        <div className="hi">I'm Ben,</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div ref={el => third = el}>
                                        <div className="developer">Full Stack Web Developer.</div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="row">
                        <div className="col-12">
                            <div ref={el => fourth = el}>
                                <div className="aboutMe">About Me:</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div ref={el => fifth = el}>
                                <div className="about">My name is Ben Gardner and I am a recently displaced management professional due to Covid-19. Because of this, I have decided on a career change and recently graduated from University of Denver's Coding Bootcamp. The languages and frameworks that I know are HTML, CSS, Javascript, jQuery, Node.js, Express, React, mySQL and MongoDB. This portfolio was created using the React framework to showcase my skills on my career path as a full stack web developer. Please see below for my resume, certification, LinkedIn and Github as well as my portfolio tab above for all of my most recent applications.</div>
                            </div>
                        </div>
                    </div>
            </div>
            
            <div className="row">
                <div className="accordionCert col-sm-12 col-md-6 col-lg-6">
                    <Accordion className="accordionTest2" defaultActiveKey="1">
                        <Card className="transparent">
                            <Accordion.Toggle className="accordionTitle" as={Card.Header} eventKey="0">
                            <h1>Click Here for my Certification!</h1>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body><img className="certificate" src={certificate} alt="certificate"/></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
                <div className="accordionMe col-sm-12 col-md-6 col-lg-6">
                    <Accordion className="accordionTest2" defaultActiveKey="1">
                        <Card className="transparent">
                            <Accordion.Toggle className="accordionTitle" as={Card.Header} eventKey="0">
                            <h1>Click Here for Cartoon Me!</h1>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body><img className="certificate" src={cartoon} alt="cartoon"/></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
                <div className="accordionTest col-sm-12 col-md-12 col-lg-12">
                    <Accordion className="accordionTest2" defaultActiveKey="1">
                        <Card className="transparent">
                            <Accordion.Toggle className="accordionTitle" as={Card.Header} eventKey="0">
                            <h1>Click Here for Resume!</h1>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body><img className="resume" src={resume} alt="resume"/></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default Main;