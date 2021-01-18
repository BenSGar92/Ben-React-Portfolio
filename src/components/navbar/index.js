import React from "react";
import { Link } from "react-router-dom"
import "./navbar.css"
import { Nav, Navbar } from "react-bootstrap";

function Navigation() {


  return (
  <div>
    <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
      <Navbar.Brand href="#home">
        Ben Gardner
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className={window.location.pathname === "/" || window.location.pathname === "/main" ? "nav-link active" : "nav-link"}>
            Homepage
          </Link>
          <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
            Portfolio
          </Link>
          <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
  );
}

export default Navigation;