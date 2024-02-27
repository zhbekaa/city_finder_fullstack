// import { useState } from 'react'

import "./App.css";

import Cities from "./components/Cities";
import NavBar from "./components/NavBar";
import About from "./components/About";
import CityDetailed from "./components/CityDetailed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import Contact from "./components/Contact";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  let items = ["home", "about", "contact"];

  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 1 } },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <NavBar navItems={items} />
        <Routes>
          <Route path="/" Component={Cities}></Route>
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/cities/:city_id" Component={CityDetailed} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
