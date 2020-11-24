import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
 import NavBar from "./components/NavBar";
 import footer from "./components/footer/index.js";
import Home from "./components/home";
// import About from "./components/pages/About";
// import Blog from "./components/pages/Blog";
// import Contact from "./components/pages/Contact";

function App() {
  return (
  
    <Router>
      <div>
        <NavBar/>
        <Route exact path="/" component={Home} />

        <footer/>
      </div>
    </Router>
  );
}

export default App;
