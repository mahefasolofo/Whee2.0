import React from "react";
import Home from "./components/Home";
import Navbar from './components/Home/Navbar';
import Offre from './components/Pages/Offre';
import Demande from './components/Pages/Demande';
import Footer from './components/Home/Footer';
import { Routes, Route } from "react-router-dom";
import Demande from "./components/Offre/Demande";


function App() {

  return (
    <React.Fragment>
      <div className="super_container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offres" element={<Offre />} />
          <Route path="/demandes" element={<Demande />} />
          <Route path="/evenements" element={<Home />} />
          <Route path="/a_propos" element={<Home />} />
        </Routes>

        <Footer />
      </div>

    </React.Fragment>

  );
}

export default App;
