import React from "react";
import 'moment/locale/fr'
import { Component , useState, useMemo, useEffect, useContext}  from 'react';
import Home from "./components/Home";
import Offre from './components/Pages/Offre';
import Demande from './components/Pages/Demande';
import Footer from './components/Home/Footer'
import Navbar from './components/Home/Navbar'
import Evenements from "./components/Pages/Evenements";
import About from "./components/Pages/About";
import { Routes, Route } from "react-router-dom";
import Connexion from "./components/Pages/Connexion";
import Inscription from "./components/Pages/Inscription";
import { UserContext } from './api/UserContext';
import jwt_decode from "jwt-decode";



function App() {
  const [value, setValue] = useState("null");

  function handleCredentialResponse(response){
    console.log("Encode JWT id Token: "+ response.credential);
    console.log(jwt_decode(response.credential));
    //setAuth(jwt_decode(response.credential));
    setValue(jwt_decode(response.credential));
    document.getElementById('id01').style.display='none'; 
    localStorage.setItem('token', response.credential);
    console.log("mety");
    
  }

  
   
    useEffect(()=>{
      /* global google */
      localStorage.setItem('token', "null");
      google.accounts.id.initialize({
        client_id: '162247164460-u010auh9f2t4er36klc81sqd7g8elg7u.apps.googleusercontent.com',
        callback: handleCredentialResponse,
        
      });
      
    
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {theme: "outline", size : "large", width:"signInDiv"}
    
      );
    },[] );

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
          <Route path="/a_propos" element={<About />} />
        </Routes>
          <Footer />
        </UserContext.Provider >
      </div>

    </React.Fragment>

  );
}

export default App;
