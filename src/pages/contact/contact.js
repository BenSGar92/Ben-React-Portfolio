import React from "react";
import emailjs from "emailjs-com";
import "./contact.css"

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_24zy3ge', 'template_portfolio', e.target, 'user_yIUW8RrV4oA6qxIg9EL6V')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()

  }

  return(
    <div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <small>*This email form works using EmailJS*</small>
              <input type="text" className="form-control" placeholder="Name" name="name"></input>
            </div>
            <div className="col-8 form-group mx-auto">
              <input type="email" className="form-control" placeholder="Email Address" name="email"></input>
            </div>
            <div className="col-8 form-group mx-auto">
              <input type="text" className="form-control" placeholder="Subject" name="subject"></input>
            </div>
            <div className="col-8 form-group mx-auto">
              <textarea className="form-control" cols="30" rows="8" placeholder="Your Message" name="message"></textarea>
            </div>
            <div className="col-8 form-group mx-auto">
              <input type="submit" className="btn btn-info" value="Send Message"></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}