import React from "react";
import Home from "./components/Home";
import Navbar from './components/Navbar/Navbar';
import Offre from './components/Offre/Offre';
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <React.Fragment>
      <div className="super_container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offres" element={<Offre />} />
          <Route path="/demandes" element={<Home />} />
          <Route path="/evenements" element={<Home />} />
          <Route path="/a_propos" element={<Home />} />
        </Routes>

        <Footer />
      </div>

    </React.Fragment>

  );
}

export default App;
