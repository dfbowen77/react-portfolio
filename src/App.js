// import bootstrap and other styling
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

// import react and necessary router-dom libraries
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import other components for use within the app.
import Navigator from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Resume from "./components/resume";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Navigator />
        <Routes>
          <Route path ="/" element={<About />} />
          <Route path ="/react-portfolio" element={<About />} />
          <Route path ="/about-me" element={<About />} />
          <Route path ="/portfolio" element={<Portfolio />} />
          <Route path ="/contact" element={<Contact />} />
          <Route path ="/resume" element={<Resume />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
