import React from "react";
import { Link } from "react-router-dom"
import "./footer.scss"
import "./footer.css"
import logo from '../../images/ben-logo.png'

function Footer() {
  return (
    <div>
    <footer className="page-footer font-small py-1 bg-dark text-white-50 fixed-bottom">

    <img className="logo" src={logo} alt="personal-logo"/>
        <div className="container">
            <ul className="list-unstyled list-inline text-center m-0">
                <li className="list-inline-item">
                    <div className='ball'>
                        <div></div>
                    </div>
                </li>
                <li className="list-inline-item">
                    <Link to="/contact" className="btn btn-outline-primary btn-rounded">
                    Contact
                    </Link>
                </li>
                <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/ben-gardner-6567459a/" className="btn btn-outline-primary btn-rounded">Linkedin</a>
                </li>
                <li className="list-inline-item">
                    <a href="https://github.com/BenSGar92" className="btn btn-outline-primary btn-rounded">Github</a>
                </li>
                <li className="list-inline-item">
                    <div className='ball'>
                        <div></div>
                    </div>
                </li>
            </ul>
        </div>
        <div className="footer-copyright text-center py-1">© 2020 Copyright:
            <a href="main"> Ben Gardner</a>
        </div>
    </footer>
    </div>
  );
}

export default Footer;