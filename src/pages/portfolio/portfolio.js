import React from "react";
import image1 from "../../images/password-generator.png"
import image2 from "../../images/workday-planner.png"
import image3 from "../../images/weather-dashboard.png"
import image4 from "../../images/city-sidekick.png"
import image5 from "../../images/burger-eater.png"
import image6 from "../../images/quikcode.png"
import image7 from "../../images/quikcodepro.png"
import image8 from "../../images/windows95-desktop.jpg"
import "./portfolio.css"

function Portfolio() {
    return(
        <div className="imagePortfolio">
            <div className="portfolioHeader card-body text-center bg-dark">
            Application and Project Portfolio
            </div>
            <div className="container pb-5 mb-5">
                <div className="row">
                    <div className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-12 pb-3">
                        <div className="card border-dark">
                            <a href="https://quikcodepro.herokuapp.com/">
                                <div className="imageContainer">
                                    <img className="card-img-top" src={image7} alt="quikcodepro-app"/>
                                    <div>This application utilizes Node.js, Express, React, MongoDB, Mongoose and various npm packages - QuikCodePro is an improvement of QuikCode allowing users to connect, share, vote and view various code snippets - This app showcases full CRUD functionality within the React framework.</div>
                                </div>
                            </a>
                            <div className="title card-body textGold bg-dark rgba-black-light p-2">QuikCodePro</div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-12 pb-3">
                        <div className="card border-dark">
                            <a href="https://group-1-repo.herokuapp.com/">
                                <div className="imageContainer">
                                    <img className="card-img-top" src={image6} alt="quikcode-project"/>
                                    <div>This application utilizes Express, Handlebars, Sequelize, MySQL2 and Passport Authentication - QuikCode allows users to make code snippets utilizing a built in Ace Editor and save them privately or publicly. </div>
                                </div>
                            </a>
                            <div className="title card-body textGold bg-dark rgba-black-light p-2">QuikCode</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-12 pb-3">
                        <div className="card border-dark">
                            <a href="https://bensgar92.github.io/Weather-Dashboard/">
                                <div className="imageContainer">
                                    <img className="card-img-top" src={image3} alt="weather-app"/>
                                    <div>This application uses a server side API known as OpenWeather to allow users to search a city and get up to date forecasts for the week. This application also uses local storage to save past user searches allowing easy access to commonly searched locations.</div>
                                </div>
                            </a>
                            <div className="title card-body text-primary bg-dark rgba-black-light p-2">Weather Dashboard</div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-12 pb-3">
                        <div className="card border-dark">
                            <a href="https://johngarcia144.github.io/city-sidekick/">
                                <div className="imageContainer"> 
                                    <img className="card-img-top" src={image4} alt="city-sidekick-project"/>
                                    <div>City Sidekick was a preliminary group project to show off developer skills using multiple APIs allowing users to search a location and receive restaurant, hotel, and brewery recommendations as well as weather forecasts. This app utilizes moment.js, Bing Maps, and OpenWeather API. Main programming languages used were javascript and jQuery.</div>
                                </div>
                            </a>
                            <div className="title card-body text-primary bg-dark rgba-black-light p-2">City Sidekick - Group Project</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-12 pb-3">
                        <div className="card border-dark">
                            <a href="https://stark-island-93829.herokuapp.com/">
                                <div className="imageContainer">    
                                    <img className="card-img-top" src={image5} alt="orm-app"/>
                                    <div>This application showcases developer skills using languages and frameworks such as MySQL, Express, Handlebars, MVC design pattern, and a homemade ORM.</div>
                                </div>    
                            </a>
                            <div className="title card-body text-primary bg-dark rgba-black-light p-2">Burger Eater</div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-12 pb-3">
                        <div className="card border-dark">
                        <a href="https://bensgar92.github.io/Workday-Planner/">
                            <div className="imageContainer">
                                <img className="card-img-top" src={image2} alt="planner-app"/>
                                <div>Simple calendar application that allows users to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. This app also uses Moment.js to work with the date and time.</div>
                            </div>
                        </a>
                        <div className="title card-body text-primary bg-dark rgba-black-light p-2">Workday Planner</div>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-12 pb-3">
                        <div className="card border-dark">
                            <a href="https://bensgar92.github.io/Password-Generator/">
                                <div className="imageContainer">
                                    <img className="card-img-top" src={image1} alt="password-app"/>
                                    <div>This application uses jQuery and Javascript allowing a user to generate passwords after specifying length, case, numbers and symbols</div>
                                </div>
                            </a>
                            <div className="title card-body text-primary bg-dark rgba-black-light p-2">Password Generator</div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-12 pb-3">
                        <div className="card border-dark">
                        <a href="https://react-windows95.herokuapp.com/">
                            <div className="imageContainer">
                                <img className="card-img-top image8" src={image8} alt="windows95-app"/>
                                <div>In Progress Windows95 application</div>
                            </div>
                        </a>
                        <div className="title card-body text-primary bg-dark rgba-black-light p-2">Windows95</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;