// import { useState } from 'react'

import "./App.css";

import Cities from "./components/Cities";
import NavBar from "./components/NavBar";
import About from "./components/About";
import CityDetailed from "./components/CityDetailed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import Contact from "./components/Contact";
function App() {
  let items = ["home", "about", "contact"];

  return (
    <div>
      <Router>
        <NavBar navItems={items} />
        <Routes>
          <Route path="/" Component={Cities}></Route>
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/cities/:city_id" Component={CityDetailed} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
