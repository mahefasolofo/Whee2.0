import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import '../styles/inscription_styles.css';

import {Helmet} from "react-helmet";


const Inscription= ()=> {
 
  const closeInscription=()=> {
    document.getElementById('id02').style.display='none';
    }
    
 
        return (
            <div>
          {/* Hello world */}
  <div className='inscriptionModal' id="id02">
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">
        <form data-multi-step="" className="multi-step-form">
          <div className="card cardInscription" data-step="">
            <span
              className="close"
              title="Fermer"
              onClick={closeInscription}>
              <i className="fa-solid fa-x closeInscription"  />
            </span>
            <div className="imgcontainer">
              <div style={{ textAlign: "center", marginTop: 15 }}>
                <span className="dot" style={{ backgroundColor: "black" }} />
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
              <h5 className="card-title text-center pb-0 fs-4">
                {" "}
                Bienvenue sur Whee!
              </h5>
            </div>
            <div
              style={{ alignItems: "start", marginLeft: 5 }}>
                <b>Nom d'utilisateur*</b>
              <input
                type="text"
                placeholder="Nom d'Utilisateur"
                name="uname"
                required="required" 
              />
              <b htmlFor="psw" >
                Email*</b>
             
              <input
                type="text"
                placeholder="E-mail"
                name="psw"
                required="required" 
                style={{ marginBottom: 15 }}
              />
              <b htmlFor="psw" >
                Mot de Passe*</b>
              <input
                type="password"
                placeholder="Mot de passe"
                name="psw"
                required="required"
                style={{ marginBottom: 15 }}
              />
              <button type="button" className="buttonInscription" data-next="">
                Suivant
              </button>
              {/* <input type="checkbox" checked="checked" name="remember"> Remember me */}
              <div style={{ marginTop: 12, alignItems: "center" }}>
                <span className="" id="spanCondition">
                  <span>
                    <input
                      type="checkbox"
                      name="condition"
                      id="checkboxCondition"
                      required="required"
                    />
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
                      Politiques de confidentialité
                    </a>
                  </span>
                </span>
                <div
                  style={{
                    marginTop: 12,
                    alignItems: "center",
                    textAlign: "center"
                  }}
                >
                  <button
                    aria-label=""
                    className=" active"
                    data-test-id="login-signup-toggle"
                    type="button"
                    style={{
                      background: "none",
                      alignItems: "center",
                      border: "none",
                      color: "rgb(51, 51, 51)",
                      marginLeft: 5,
                      fontWeight: "bold"
                    }}
                  >
                    Vous êtes déjà sur Whee!&nbsp;? Connectez-vous
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* //Genre */}
          <div className="card cardInscription" data-step="">
            <i
              className="fa-solid fa-arrow-left previous"
              style={{ fontSize: 25 }}
              data-previous=""
            />
            <div style={{ textAlign: "center", marginTop: 15 }}>
              <span className="dot" />
              <span className="dot" style={{ backgroundColor: "black" }} />
              <span className="dot" />
              <span className="dot" />
            </div>
            <h5
              className="cardInscription-title text-center pb-0 fs-4"
              style={{ marginTop: 30 }}
            >
              Vous êtes identifié en tant que:
            </h5>
            {/* <div class="form-group"> */}
            <table>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <label htmlFor="homme" className="sexeLabel">
                      Homme
                    </label>
                  </td>
                  <td>
                    <input
                      type="radio"
                      id="autres"
                      name="fav_language"
                      defaultValue="HTML"
                      checked
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <label htmlFor="html" className="sexeLabel">
                      Femme
                    </label>
                  </td>
                  <td>
                    <input
                      type="radio"
                      id="autres"
                      name="fav_language"
                      defaultValue="HTML"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <label htmlFor="html" className="sexeLabel">
                      Autres
                    </label>
                  </td>
                  <td>
                    {" "}
                    <label htmlFor="html">
                      <input
                        type="radio"
                        id="autres"
                        name="fav_language"
                        defaultValue="HTML"
                      />
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="button" className="buttonInscription" data-next="">
              Suivant
            </button>
          </div>
          <div
            className="card cardInscription"
            style={{ alignItems: "center" }}
            data-step=""
          >
            <i
              className="fa-solid fa-arrow-left previous"
              style={{ fontSize: 25 }}
              data-previous=""
            />
            <div style={{ textAlign: "center", marginTop: 15 }}>
              <span className="dot" />
              <span className="dot" />
              <span className="dot" style={{ backgroundColor: "black" }} />
              <span className="dot" />
            </div>
            <h3 className="step-title cardInscription-title">
              Avant-dernière étape{" "}
            </h3>
            <div
              className="container"
              style={{ alignItems: "start", marginLeft: 5 }}
            >
              <label htmlFor="username" className="form-label">
                <b>Nom d'utilisateur</b>
              </label>
              <input
                type="text"
                placeholder="Nom d'utilisateur"
                name="uname"
                required=""
              />
              
              <b>Date de naissance</b>
              
              <input
                type="number"
                placeholder="Age"
                name="psw"
                required=""
                style={{ marginBottom: 15 }}/> 
              <b>Adresse</b>
              <input
                type="text"
                placeholder="Adresse"
                name="adresse"
                required=""
                style={{ marginBottom: 15 }}/>
              <button type="button" className="buttonInscription" data-next="">
                Suivant
              </button>
            </div>
          </div>
          <div
            className="card cardInscriptionCentreInteret cardInscription"
            data-step=""
          >
            <i
              className="fa-solid fa-arrow-left previous"
              style={{ fontSize: 25 }}
              data-previous=""
            />
            <div style={{ textAlign: "center", marginTop: 15 }}>
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="dot" style={{ backgroundColor: "black" }} />
            </div>
            <h3 className="step-title cardInscription-title">
              Dernière étape ! Dites-nous ce qui vous intéresse{" "}
            </h3>
            <div className="rowCentreInteret row" style={{ width: "100%" }}>
              <div
                className="col-2 divCentreInteret"
                style={{ backgroundImage: 'url("images/gallery_1.jpg")' }}
              >
                <label className="option_item">
                  <div className="round">
                    {/* <input type="checkbox" checked id="checkbox" class="checkbox-rounded" /> */}
                    <label htmlFor="checkbox" />
                  </div>
                  <div className="overlay-image">
                    <label htmlFor="" className="labelCentreInteret">
                      Politique
                    </label>
                  </div>
                </label>
              </div>
              <div
                className="col-2 divCentreInteret"
                style={{ backgroundImage: 'url("images/gallery_2.jpg")' }}
              >
                <label className="option_item">
                  <div className="round">
                    {/* <input type="checkbox" checked id="checkbox" class="checkbox-rounded" /> */}
                    <label htmlFor="checkbox" />
                  </div>
                  <div className="overlay-image">
                    <label htmlFor="" className="labelCentreInteret">
                      Tennis
                    </label>
                  </div>
                </label>
              </div>
              <div
                className="col-2 divCentreInteret"
                style={{ backgroundImage: 'url("images/gallery_3.jpg")' }}
              >
                <label className="option_item">
                  <div className="round">
                    {/* <input type="checkbox" checked id="checkbox" class="checkbox-rounded" /> */}
                    <label htmlFor="checkbox" />
                  </div>
                  <div className="overlay-image">
                    <label htmlFor="" className="labelCentreInteret">
                      Voitures
                    </label>
                  </div>
                </label>
              </div>
              <div
                className="col-2 divCentreInteret"
                style={{
                  backgroundImage: 'url("centreInteret/basketball.jpg")'
                }}
              >
                <label className="option_item">
                  <div className="round">
                    {/* <input type="checkbox" checked id="checkbox" class="checkbox-rounded" /> */}
                    <label htmlFor="checkbox" />
                  </div>
                  <div className="overlay-image">
                    <label htmlFor="" className="labelCentreInteret">
                      BasketBall
                    </label>
                  </div>
                </label>
              </div>
              <div
                className="col-2 divCentreInteret"
                style={{ backgroundImage: 'url("images/gallery_5.jpg")' }}
              >
                <label className="option_item">
                  <div className="round">
                    {/* <input type="checkbox" checked id="checkbox" class="checkbox-rounded" /> */}
                    <label htmlFor="checkbox" />
                  </div>
                  <div className="overlay-image">
                    <label htmlFor="" className="labelCentreInteret">
                      Pétanque
                    </label>
                  </div>
                </label>
              </div>
              <div
                className="col-2 divCentreInteret"
                style={{ backgroundImage: 'url("images/gallery_1.jpg")' }}
              >
                <label className="option_item">
                  <div className="round">
                    {/* <input type="checkbox" checked id="checkbox" class="checkbox-rounded" /> */}
                    <label htmlFor="checkbox" />
                  </div>
                  <div className="overlay-image">
                    <label htmlFor="" className="labelCentreInteret">
                      Pop
                    </label>
                  </div>
                </label>
              </div>
              <div
                className="col-2 divCentreInteret"
                style={{ backgroundImage: 'url("images/gallery_1.jpg")' }}
              >
                <label className="option_item">
                  <div className="round">
                    {/* <input type="checkbox" checked id="checkbox" class="checkbox-rounded" /> */}
                    <label htmlFor="checkbox" />
                  </div>
                  <div className="overlay-image">
                    <label htmlFor="" className="labelCentreInteret">
                      Rock
                    </label>
                  </div>
                </label>
              </div>
              <div
                className="col-2 divCentreInteret"
                style={{ backgroundImage: 'url("images/gallery_1.jpg")' }}
              >
                <label className="option_item">
                  <div className="round">
                    {/* <input type="checkbox" checked id="checkbox" class="checkbox-rounded" /> */}
                    <label htmlFor="checkbox" />
                  </div>
                  <div className="overlay-image">
                    <label htmlFor="" className="labelCentreInteret">
                      Voyages
                    </label>
                  </div>
                </label>
              </div>
              <div
                className="col-2 divCentreInteret"
                style={{ backgroundImage: 'url("images/gallery_2.jpg")' }}
              >
                <label className="option_item">
                  <div className="round">
                    {/* <input type="checkbox" checked id="checkbox" class="checkbox-rounded" /> */}
                    <label htmlFor="checkbox" />
                  </div>
                  <div className="overlay-image">
                    <label htmlFor="" className="labelCentreInteret">
                      Opéra
                    </label>
                  </div>
                </label>
              </div>
              <div
                className="col-2 divCentreInteret"
                style={{ backgroundImage: 'url("images/gallery_3.jpg")', marign:0 }}
              >
                <label className="option_item">
                  <div className="round">
                    {/* <input type="checkbox" checked id="checkbox" class="checkbox-rounded" /> */}
                    <label htmlFor="checkbox" />
                  </div>
                  <div className="overlay-image">
                    <label htmlFor="" className="labelCentreInteret">
                      Photographie
                    </label>
                  </div>
                </label>
              </div>
              <div
                className="col-2 divCentreInteret"
                style={{ backgroundImage: 'url("images/gallery_4.jpg")' }}
              >
                <label className="option_item">
                  <div className="round">
                    {/* <input type="checkbox" checked id="checkbox" class="checkbox-rounded" /> */}
                    <label htmlFor="checkbox" />
                  </div>
                  <div className="overlay-image">
                    <label htmlFor="" className="labelCentreInteret">
                      Voyage
                    </label>
                  </div>
                </label>
              </div>
              <div
                className="col-2 divCentreInteret"
                style={{ backgroundImage: 'url("images/gallery_5.jpg")' }}
              >
                <label className="option_item">
                  <div className="round">
                    {/* <input type="checkbox" checked id="checkbox" class="checkbox-rounded" /> */}
                    <label htmlFor="checkbox" />
                  </div>
                  <div className="overlay-image">
                    <label htmlFor="" className="labelCentreInteret">
                      Beaux-arts
                    </label>
                  </div>
                </label>
              </div>
              <div
                className="col-2 divCentreInteret"
                style={{ backgroundImage: 'url("images/gallery_1.jpg")' }}
              >
                <label className="option_item">
                  <div className="round">
                    {/* <input type="checkbox" checked id="checkbox" class="checkbox-rounded" /> */}
                    <label htmlFor="checkbox" />
                  </div>
                  <div className="overlay-image">
                    <label htmlFor="" className="labelCentreInteret">
                      Voyage
                    </label>
                  </div>
                </label>
              </div>
              <div
                className="col-2 divCentreInteret"
                style={{ backgroundImage: 'url("images/gallery_1.jpg")', backgroundColor: "black"}}>
                <label className="option_item">
                  <div className="round">
                    {/* <input type="checkbox" checked id="checkbox" class="checkbox-rounded" /> */}
                    <label htmlFor="checkbox" />
                  </div>
                  <div className="overlay-image">
                    <label htmlFor="" className="labelCentreInteret">
                      {" "}
                      Coiffures homme
                    </label>
                  </div>
                </label>
              </div>
              <div
                className="col-2 divCentreInteret"
                style={{ backgroundImage: 'url("images/gallery_4.jpg")' }}
              >
                <label className="option_item">
                  <div className="round">
                    {/* <input type="checkbox" checked id="checkbox" class="checkbox-rounded" /> */}
                    <label htmlFor="checkbox" />
                  </div>
                  <div className="overlay-image">
                    <label htmlFor="" className="labelCentreInteret">
                      FootBall
                    </label>
                  </div>
                </label>
              </div>
            </div>
            <button type="submit" className="buttonInscription">
              S'INSCRIRE
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <Helmet>
            <script src="../js/inscriptionScript.js" defer></script>
    </Helmet>

            </div>
           
        );

    }


export default Inscription;