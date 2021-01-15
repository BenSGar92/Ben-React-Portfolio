import React from "react";
import { Link } from "react-router-dom"
// import $ from 'jquery';
import "./navbar.css"

function Nav() {

  // useEffect(() => {
  //   getLocation();
  // })


  // function showLocation(position) {
  //   console.log("position", position)
  //   var latitude = position.coords.latitude;
  //   var longitude = position.coords.longitude;
  //   const APIKey = process.env.REACT_APP_WEATHER_API_KEY;
  //   var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude={part}&appid=" + APIKey;

  //   $.ajax({
  //       url: queryURL,
  //       method: "GET"
  //       }).then(function(response) {
  //           console.log("new api", response);
  //           console.log("city", response.timezone)
  //           console.log("weather log", response.current)
  //           var city = response.timezone
  //           var K = response.current.temp;
  //           var F = (K - 273.15) * 1.80 + 32
  //           console.log("icon", response.current.weather[0].icon)
  //           var icon = response.current.weather[0].icon

  //           $("#temp").text("Temperature: " + F.toFixed(1) + " " + String.fromCharCode(176) + "F");
  //           $("#city").text("Current Weather in " + city);
  //           $("#icon").attr("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png");
  //           // $("#icon").text(icon);
  //       });
  // }

  // function errorHandler(err) {
  //     if(err.code == 1) {
  //     alert("Error: Access is denied!");
  //     } else if( err.code == 2) {
  //     alert("Error: Position is unavailable!");
  //     }
  // }

  // function getLocation() {
  //     if(navigator.geolocation){
  //     // timeout at 60000 milliseconds (60 seconds)
  //     var options = {timeout:60000};
  //     navigator.geolocation.getCurrentPosition
  //     (showLocation, errorHandler, options);
  //     } else{
  //     alert("Sorry, browser does not support geolocation!");
  //     }
  // }

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link className="navbar-brand" to="/">
          Ben Gardner
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className={window.location.pathname === "/" || window.location.pathname === "/main" ? "nav-link active" : "nav-link"}>
                  Homepage
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">
              <li>
                  <a className="nav-link" id="city" href="#"></a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" id="temp" href="#"></a>
              </li>
              <li className="nav-item">
                  <img className="nav-link" id="icon" href="#"></img>
              </li>
            </ul>
          </div> */}
        </nav>
    </div>
  );
}

export default Nav;