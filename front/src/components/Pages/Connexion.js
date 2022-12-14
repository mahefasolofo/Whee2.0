import React, { useEffect, useState, useContext, useRef } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
// import '../styles/connexion_styles.css';

import { UserContext } from "../../services/UserContext";
const LOGIN_URL = "Compte/getCompte";
import { SocketContext } from "../../services/SocketContext";

const Connexion = () => {
  // const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const user = useContext(UserContext);

  // const { setAuth } = useContext(UserContext);

  const [usr, setMail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleClick = () => {
    document.getElementById("id01").style.display = "block";
  };

  const closeConnexion = () => {
    document.getElementById("id01").style.display = "none";
  };

  /*Login*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setUser("Ahoan");
  };

  return (
    <div>
      <div id="id01" className="modal">
        <span
          onClick={handleClick}
          className="close"
          title="Close Modal"
        ></span>
        <form className="modal-content animate card" onSubmit={handleSubmit}>
          <div className="imgcontainer">
            {/* <span onClick={"document.getElementById('id01').style.display='none'"} className="close" title="Fermer"> */}
            <span onClick={closeConnexion} className="close" title="Fermer">
            <i className="fa fa-times-circle" aria-hidden="true"/>
            </span>
            <h5
              className="card-title text-center pb-0 fs-4"
              id="titreInscription"
            >
              Bienvenue sur Whee!
            </h5>
          </div>
          <div
            className="container"
            style={{
              alignItems: "start",
              marginLeft: 5,
            }}
          >
            <label htmlFor="username" className="labelInput">
              <b>E-mail</b>
            </label>
            <input
              type="text"
              placeholder="E-mail"
              name="uname"
              required=""
              style={{ marginTop: "-5px" }}
              onChange={(e) => setMail(e.target.value)}
              value={usr}
            />
            <label htmlFor="psw" className="labelInput" id="labelPassword">
              <b>Mot de Passe</b>
            </label>
            <input
              type="password"
              id="inputPassword"
              placeholder="Mot de passe"
              name="psw"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required=""
            />
            <a id="lienMotDePasseOublie" href="#">
              Mot de Passe Oubli???
            </a>
            <button type="submit" className="buttonConnexion">
              Se Connecter
            </button>
            <button
              onClick="document.getElementById('id01').style.display='none'"
              className="connexionFB"
            >
              <i className="fa-brands fa-facebook" style={{ color: "white" }}>
                {" "}
              </i>{" "}
              Continuer via Facebook
            </button>
            <button id="signInDiv" className="connexionGoogle"></button>
            <input
              type="checkbox"
              defaultChecked="checked"
              name="remember"
            />{" "}
            <label id="seSouvenirDeMoi">Se Souvenir de moi</label>
            <div
              style={{
                marginTop: 12,
                textAlign: "center",
              }}
            >
              <span
                className=""
                id="spanCondition"
                style={{
                  WebkitFontSmoothing: "antialiased",
                  fontSize: 11,
                  fontWeight: "normal",
                  textAlign: "center",
                  transition: "opacity 0.2s linear 0s",
                  color: "rgb(118, 118, 118)",
                  width: 224,
                }}
              >
                <span>
                  En continuant, vous acceptez les{" "}
                  <a
                    className="conditionTexte"
                    href="#"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Conditions d'utilisation
                  </a>{" "}
                  de Whee et reconnaissez avoir lu nos{" "}
                  <a
                    className="Wk9 CCY czT eEj KhY xQ4 uCz"
                    href="#"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Politiques de confidentialit??
                  </a>
                </span>
              </span>

            </div>
            <div className="hs0 mQ8 un8 C9i TB_">
              <button
                aria-label=""
                className="noButtonStyles active"
                data-test-id="login-signup-toggle"
                type="button"
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  textAlign: "left",
                  display: "block",
                  color: "rgb(51, 51, 51)",
                  marginLeft: 5,
                  fontWeight: "bold",
                }}
              >
                Vous n'??tes pas encore sur Whee!&nbsp;? Inscrivez-vous
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connexion;
