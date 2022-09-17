import React, { Component, useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
// import '../styles/inscription_styles.css';
import UserService from "../../services/UserService";


import { Helmet } from "react-helmet";

const Inscription = () => {
 
  
  const { register, handleSubmit } = useForm();
  const onSubmit = (d) => {
    console.log(d);
    UserService.newCompte(d);
    d.date_naissance = "";
    d.evalutaions = [];
    d.vehicules = [];

    UserService.newCompte(d);



  };

  const closeInscription = () => {
    document.getElementById("id02").style.display = "none";
  };

  
  

  

  return (
    <div>
      {/* Hello world */}
      <div className="inscriptionModal" id="id02">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <form
              data-multi-step=""
              className="multi-step-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="card cardInscription" data-step="">
                <span
                  className="close"
                  title="Fermer"
                  onClick={closeInscription}
                >
                  <i className="fa-solid fa-x closeInscription" />
                </span>
                <div className="imgcontainer">
                  <div style={{ textAlign: "center", marginTop: 15 }}>
                    <span
                      className="dot"
                      style={{ backgroundColor: "black" }}
                    />
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                  <h5 className="card-title text-center pb-0 fs-4">
                    {" "}
                    Bienvenue sur Whee!
                  </h5>
                </div>
                <div style={{}}>
                  <b>Nom*</b>
                  <input
                    type="text"
                    placeholder="Nom d'Utilisateur"
                    name="uname"
                    required="required"
                    {...register("nom")}
                  />
                  <b htmlFor="psw">Prenom*</b>
                  <input
                    type="text"
                    placeholder="E-mail"
                    name="psw"
                    required="required"
                    style={{ marginBottom: 15 }}
                    {...register("prenom")}
                  />
                  <b htmlFor="psw">Mot de Passe*</b>
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    name="psw"
                    required="required"
                    style={{ marginBottom: 15 }}
                    {...register("password")}
                  />
                  <button
                    type="button"
                    className="buttonInscription"
                    data-next=""
                  >
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
                        textAlign: "center",
                      }}
                    >
                      <button
                        aria-label=""
                        className="buttonConnexionInscription active"
                        data-test-id="login-signup-toggle"
                        type="button"
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
                {/* <div className="form-group"> */}


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
                          value="homme"
                          checked
                          {...register("genre")}
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
                          value="femme"
                          {...register("genre")}
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
                            value="autres"
                            {...register("genre")}
                          />
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button
                  type="button"
                  className="buttonInscription"
                  data-next=""
                >
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
                    <b>Email</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Nom d'utilisateur"
                    name="uname"
                    required=""
                    {...register("mail")}
                  />

                  <b>Date de naissance</b>

                  <input
                    type="number"
                    placeholder="Age"
                    name="psw"
                    required=""
                    style={{ marginBottom: 15 }}
                    {...register("date_naissance")}
                  />
                  <b>Adresse</b>
                  <input
                    type="text"
                    placeholder="Adresse"
                    name="adresse"
                    required=""
                    style={{ marginBottom: 15 }}
                  />
                  <button
                    type="button"
                    className="buttonInscription"
                    data-next=""
                  >
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
                <div className="col-2 divCentreInteret"   style={{ backgroundImage: 'url("images/gallery_2.jpg")' }}>
                               
                               <label className="option_item overlay-image">
                               
                                   <input type="checkbox"  id="checkbox" className="checkbox-rounded" />
                                   
                              <label htmlFor="" className="labelCentreInteret">
                          Tennis
                        </label>
                            
                               </label>
                           </div>
                           <div className="col-2 divCentreInteret"   style={{ backgroundImage: 'url("images/gallery_2.jpg")' }}>
                               
                               <label className="option_item overlay-image">
                               
                                   <input type="checkbox"  id="checkbox" className="checkbox-rounded" />
                                   
                              <label htmlFor="" className="labelCentreInteret">
                          Tennis
                        </label>
                            
                               </label>
                           </div>
                           <div className="col-2 divCentreInteret"   style={{ backgroundImage: 'url("images/gallery_2.jpg")' }}>
                               
                               <label className="option_item overlay-image">
                               
                                   <input type="checkbox"  id="checkbox" className="checkbox-rounded" />
                                   
                              <label htmlFor="" className="labelCentreInteret">
                          Tennis
                        </label>
                            
                               </label>
                           </div>
                           <div className="col-2 divCentreInteret"   style={{ backgroundImage: 'url("images/gallery_2.jpg")' }}>
                               
                               <label className="option_item overlay-image">
                               
                                   <input type="checkbox"  id="checkbox" className="checkbox-rounded" />
                                   
                              <label htmlFor="" className="labelCentreInteret">
                          Tennis
                        </label>
                            
                               </label>
                           </div>
                           <div className="col-2 divCentreInteret"   style={{ backgroundImage: 'url("images/gallery_2.jpg")' }}>
                               
                               <label className="option_item overlay-image">
                               
                                   <input type="checkbox"  id="checkbox" className="checkbox-rounded" />
                                   
                              <label htmlFor="" className="labelCentreInteret">
                          Tennis
                        </label>
                            
                               </label>
                           </div>
                           <div className="col-2 divCentreInteret"   style={{ backgroundImage: 'url("images/gallery_2.jpg")' }}>
                               
                               <label className="option_item overlay-image">
                               
                                   <input type="checkbox"  id="checkbox" className="checkbox-rounded" />
                                   
                              <label htmlFor="" className="labelCentreInteret">
                          Tennis
                        </label>
                            
                               </label>
                           </div>
                           <div className="col-2 divCentreInteret"   style={{ backgroundImage: 'url("images/gallery_2.jpg")' }}>
                               
                               <label className="option_item overlay-image">
                               
                                   <input type="checkbox"  id="checkbox" className="checkbox-rounded" />
                                   
                              <label htmlFor="" className="labelCentreInteret">
                          Tennis
                        </label>
                            
                               </label>
                           </div>
                           <div className="col-2 divCentreInteret"   style={{ backgroundImage: 'url("images/gallery_5.jpg")' }}>
                               
                               <label className="option_item overlay-image">
                               
                                   <input type="checkbox"  id="checkbox" className="checkbox-rounded" />
                                   
                              <label htmlFor="" className="labelCentreInteret">
                          Tennis
                        </label>
                            
                               </label>
                           </div>
                           <div className="col-2 divCentreInteret"   style={{ backgroundImage: 'url("images/gallery_4.jpg")' }}>
                               
                               <label className="option_item overlay-image">
                               
                                   <input type="checkbox"  id="checkbox" className="checkbox-rounded" />
                                   
                              <label htmlFor="" className="labelCentreInteret">
                          Tennis
                        </label>
                            
                               </label>
                           </div>
                           <div className="col-2 divCentreInteret"   style={{ backgroundImage: 'url("images/gallery_6.jpg")' }}>
                               
                               <label className="option_item overlay-image">
                               
                                   <input type="checkbox"  id="checkbox" className="checkbox-rounded" />
                                   
                              <label htmlFor="" className="labelCentreInteret">
                          Tennis
                        </label>
                            
                               </label>
                           </div>
                  <div
                    className="col-2 divCentreInteret"
                    style={{ backgroundImage: 'url("images/gallery_3.jpg")' }}
                  >
                    <label className="option_item">
                      <div className="round">
                        {/* <input type="checkbox" checked id="checkbox" className="checkbox-rounded" /> */}
                        <label htmlFor="checkbox" />
                      </div>
                      <div className="overlay-image">
                        <label htmlFor="" className="labelCentreInteret">
                          Beaux-arts
                        </label>
                      </div>
                    </label>
                  </div>
                  <div className="col-2 divCentreInteret"   style={{ backgroundImage: 'url("images/gallery_3.jpg")' }}>
                               
                               <label className="option_item overlay-image">
                               
                                   <input type="checkbox"  id="checkbox" className="checkbox-rounded" />
                                   
                              <label htmlFor="" className="labelCentreInteret">
                        Football
                        </label>
                            
                               </label>
                           </div>
                           <div className="col-2 divCentreInteret"   style={{ backgroundImage: 'url("images/gallery_5.jpg")' }}>
                               
                               <label className="option_item overlay-image">
                               
                                   <input type="checkbox"  id="checkbox" className="checkbox-rounded" />
                                   
                              <label htmlFor="" className="labelCentreInteret">
                         Politique
                        </label>
                            
                               </label>
                           </div>
                           <div className="col-2 divCentreInteret"   style={{ backgroundImage: 'url("images/gallery_4.jpg")' }}>
                               
                               <label className="option_item overlay-image">
                               
                                   <input type="checkbox"  id="checkbox" className="checkbox-rounded" />
                                   
                              <label htmlFor="" className="labelCentreInteret">
                         Musique
                        </label>
                            
                               </label>
                           </div>
                           <div className="col-2 divCentreInteret"   style={{ backgroundImage: 'url("images/gallery_3.jpg")' }}>
                               
                               <label className="option_item overlay-image">
                               
                                   <input type="checkbox"  id="checkbox" className="checkbox-rounded" />
                                   
                              <label htmlFor="" className="labelCentreInteret">
                          Basket
                        </label>
                            
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
};

export default Inscription;
