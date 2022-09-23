import React from 'react'
import {Helmet} from "react-helmet";
import {UserContext} from "../../services/UserContext";
import { useContext} from "react";


    

function VousEtesBienInscrit() {
  let idCurrentUser = useContext(UserContext);

  const handleClick = () => {
    document.getElementById('Felicitation').style.display = 'block';
}
const closeFelicitation=()=>{
  document.getElementById('Felicitation').style.display = 'none';

}
    

    return (

      <div>
      <div id="Felicitation" className="modal">
          <span onClick={handleClick}
              className="close"
              title="Close Modal"></span>
          <div className="modal-content animate card"
            >
              <div className="imgcontainer">
                  {/* <span onClick={"document.getElementById('id01').style.display='none'"} className="close" title="Fermer"> */}
                  <span onClick={closeFelicitation}
                      className="close"
                      title="Fermer">
                      <i className="fa-solid fa-x close"/>
                  </span>
                  <h3 className="card-title text-center pb-0 fs-4" id="titreFelicitation">
                      Bienvenue sur Whee!</h3>
              </div>
              <div className="container"
                  style={
                      {
                          alignItems: "start",
                          marginLeft: 5
                      }
              }>
                 
               
                 
                  <button type="submit" className="buttonConnexion">
                      Se Connecter
                  </button>
                 
              </div>
          </div>
      </div>

  </div>


      
      )
}

export default VousEtesBienInscrit
