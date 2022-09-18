import React from "react";
import "moment/locale/fr";
import { Component, useState, useMemo, useEffect, useContext } from "react";
import Home from "./components/Home";
import Offre from "./components/Pages/Offre";
import Demande from "./components/Pages/Demande";
import Footer from "./components/Home/Footer";
import Navbar from "./components/Home/Navbar";
import Evenements from "./components/Pages/Evenements";
import ParticiperEvent from "./components/Pages/ParticiperEvent";
import Espaceperso from "./components/Pages/EspacePerso";
import About from "./components/Pages/About";
import { Routes, Route } from "react-router-dom";
import Connexion from "./components/Pages/Connexion";
import Inscription from "./components/Pages/Inscription";
import { UserContext } from "./api/UserContext";
import FormOffre from "./components/PublierOffre/FormOffre";
import jwt_decode from "jwt-decode";
import { AccordionButton } from "react-bootstrap";

function App() {
  const [user, setUser] = useState(useContext(UserContext));

  function handleCredentialResponse(response) {
    try {
      console.log("Encode JWT id Token: " + response.credential);
      console.log(jwt_decode(response.credential));

      //setAuth(jwt_decode(response.credential));

      document.getElementById("id01").style.display = "none";
      localStorage.setItem("token", response.credential);
      console.log(jwt_decode(localStorage.getItem("token")));
      setUser(jwt_decode(localStorage.getItem("token")));
    } catch (error) {}
  }

  useEffect(() => {
    /* global google */

    try {
      google.accounts.id.initialize({
        client_id:
          "162247164460-u010auh9f2t4er36klc81sqd7g8elg7u.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });

      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        theme: "outline",
        size: "large",
        width: "signInDiv",
        width: 1500,
        height: 150,
        longtitle: true,
        theme: "dark",
        "border-radius": 180,
        border: "none",
      });
    } catch (error) {}
  }, []);

  return (
    <React.Fragment>
      <FormOffre />
      <div className="super_container">
        <UserContext.Provider value={{ user, setUser }}>
          <Navbar />
          <Connexion />
          <Inscription />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/offres" element={<Offre />} />
            <Route path="/demandes" element={<Demande />} />
            <Route path="/evenements" element={<Evenements />} />
            <Route path="/espaceperso" element={<Espaceperso />} />
            <Route path="/evenements/:idEvent" element={<ParticiperEvent />} />
            <Route path="/a_propos" element={<About />} />
          </Routes>

          <Footer />
        </UserContext.Provider>
      </div>
    </React.Fragment>
  );
}

export default App;
