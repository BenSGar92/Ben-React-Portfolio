import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/navbar"
import Main from "./pages/main/main"
import Portfolio from "./pages/portfolio/portfolio"
import Contact from "./pages/contact/contact"
import Footer from "./components/footer"
import Resume from "./pages/resume/resume"
import './index.css';


function App() {
  return (
    <Router>
      <div className="background">
        <Navigation />
          <Route exact path="/" component={Main} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
