import React from "react";
import image1 from "../../images/password-generator.png"
import image2 from "../../images/workday-planner.png"
import image3 from "../../images/weather-dashboard.png"
import image4 from "../../images/city-sidekick.png"
import image5 from "../../images/burger-eater.png"
import image6 from "../../images/quikcode.png"
import image7 from "../../images/quikcodepro.png"
import "./portfolio.css"

function Portfolio() {


    return(
        <div>
            <div className="card">
                <div className="card-body text-primary text-center bg-dark">
                Application and Project Portfolio
                </div>
            </div>


            <div className="container pb-5 mb-5">
                <div className="row">
                    <div className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-6">
                        <div className="card">
                            <a href="https://quikcodepro.herokuapp.com/" target="_blank">
                                <div class="imageContainer">
                                    <img className="card-img-top" src={image7}/>
                                    <div>This application utilizes Node.js, Express, React, MongoDB, Mongoose and various npm packages - QuikCodePro is an improvement of QuikCode allowing users to connect, share, vote and view various code snippets - This app showcases full CRUD functionality within the React framework</div>
                                </div>
                            </a>
                            <div className="card-body textGold bg-dark rgba-black-light p-2">QuikCodePro</div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-6">
                        <div className="card">
                            <a href="https://group-1-repo.herokuapp.com/" target="_blank">
                                <div class="imageContainer">
                                    <img className="card-img-top" src={image6}/>
                                    <div>Here is some text</div>
                                </div>
                            </a>
                            <div className="card-body textGold bg-dark rgba-black-light p-2">QuikCode</div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-6">
                        <div className="card">
                            <a href="https://bensgar92.github.io/Weather-Dashboard/" target="_blank">
                                <div class="imageContainer">
                                    <img className="card-img-top" src={image3}/>
                                    <div>Here is some text</div>
                                </div>
                            </a>
                            <div className="card-body text-primary bg-dark rgba-black-light p-2">Weather Dashboard</div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-6">
                        <div className="card">
                            <a href="https://johngarcia144.github.io/city-sidekick/" target="_blank">
                                <div class="imageContainer"> 
                                    <img className="card-img-top" src={image4}/>
                                    <div>Here is some text</div>
                                </div>
                            </a>
                            <div className="card-body text-primary bg-dark rgba-black-light p-2">City Sidekick - Group Project</div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-6">
                        <div className="card">
                            <a href="https://stark-island-93829.herokuapp.com/" target="_blank">
                                <div class="imageContainer">    
                                    <img className="card-img-top" src={image5}/>
                                    <div>Here is some text</div>
                                </div>    
                            </a>
                            <div className="card-body text-primary bg-dark rgba-black-light p-2">Burger Eater</div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-6">
                        <div className="card">
                        <a href="https://bensgar92.github.io/Workday-Planner/" target="_blank">
                            <div class="imageContainer">
                                <img className="card-img-top" src={image2}/>
                                <div>Here is some text</div>
                            </div>
                        </a>
                        <div className="card-body text-primary bg-dark rgba-black-light p-2">Workday Planner</div>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-6">
                        <div className="card">
                            <a href="https://bensgar92.github.io/Password-Generator/" target="_blank">
                                <div class="imageContainer">
                                    <img className="card-img-top" src={image1}/>
                                    <div>Here is some text</div>
                                </div>
                            </a>
                            <div className="card-body text-primary bg-dark rgba-black-light p-2">Password Generator</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Portfolio;