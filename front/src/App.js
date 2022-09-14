import React from "react";
import { Component , useState, useMemo}  from 'react';
import Home from "./components/Home";
import Offre from './components/Pages/Offre';
import Demande from './components/Pages/Demande';
import Footer from './components/Home/Footer'
import Navbar from './components/Home/Navbar'
import Evenements from "./components/Pages/Evenements";
import { Routes, Route } from "react-router-dom";
import Connexion from "./components/Pages/Connexion";
import Inscription from "./components/Pages/Inscription";
import { UserContext } from './api/UserContext';



function App() {
  const [user, setUser] = useState("null");
    const value = useMemo(()=>({user, setUser}), [user, setUser]);

  return (
    
    <React.Fragment>
      <div className="super_container">
      <UserContext.Provider value={value}>
        <Navbar />
        <Connexion/>
        <Inscription/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/offres" element={<Offre />} />
          <Route path="/demandes" element={<Demande />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/a_propos" element={<Home />} />
        </Routes>
          <Footer />
        </UserContext.Provider >
      </div>

    </React.Fragment>

  );
}

export default App;
