import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
 import NavBar from "./components/NavBar";
 import Footer from "./components/footer/index.js";
import Home from "./components/home";
// import About from "./components/pages/About";
 import Portfolio from "./components/portfolio";
 import Contact from "./components/contact";

function App() {
  return (
  
    <Router>
      <div>
        <NavBar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
