import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
        <div className="super_container">
        {/* Header */}
        <header className="header">
          {/* Main Navigation */}
          <nav className="main_nav">
            <div className="container">
              <div className="row">
                <div className="col main_nav_col d-flex flex-row align-items-center justify-content-start">
                  <div className="logo_container">
                    <div className="logo">
                      <a href="index.html">
                        <img src="images/logo_4.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="main_nav_container ml-auto">
                    <ul className="main_nav_list">
                      <li className="main_nav_item">
                        <a href="index.html">Accueil</a>
                      </li>
                      <li className="main_nav_item">
                        <a href="offers.html">Offres</a>
                      </li>
                      <li className="main_nav_item">
                        <a href="demandes.html">Demandes</a>
                      </li>
                      <li className="main_nav_item">
                        <a href="blog.html">évènements</a>
                      </li>
                      <li className="main_nav_item">
                        <a href="index.html">à propos</a>
                      </li>
                    </ul>
                  </div>
                  <div className="user_box ml-auto user_box_s">
                    <div className="user_box_login user_box_link">
                      <span
                        onclick="document.getElementById('id01').style.display='block'"
                        style={{ zIndex: 99 }}
                        className="user_box_link"
                        id="right"
                      >
                        Se Connecter
                      </span>
                    </div>
                    <div className="user_box_register user_box_link">
                      <span
                        onclick="document.getElementById('id02').style.display='block'"
                        style={{ zIndex: 99 }}
                        className="user_box_link"
                        id="right"
                      >
                        S' Inscrire
                      </span>
                    </div>
                  </div>
                  <form id="search_form" className="search_form bez_1">
                    <input type="search" className="search_content_input bez_1" />
                  </form>
                  <div className="hamburger">
                    <i className="fa fa-bars trans_200" />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className="menu trans_500">
          <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
            <div className="menu_close_container">
              <div className="menu_close" />
            </div>
            <div className="logo menu_logo">
              <a href="index.html">
                <img src="images/logo_4.png" alt="" />
              </a>
            </div>
            <ul>
              <li className="menu_item">
                <a href="index.html">Accueil</a>
              </li>
              <li className="menu_item">
                <a href="offers.html">Offres</a>
              </li>
              <li className="menu_item">
                <a href="offers.html">Demandes</a>
              </li>
              <li className="menu_item">
                <a href="blog.html">Evènements</a>
              </li>
              <li className="menu_item">
                <a href="about.html">A propos de nous</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Home */}
        <div className="home">
          {/* Home Slider */}
          <div className="home_slider_container">
            <div className="owl-carousel owl-theme home_slider">
              {/* Slider Item */}
              <div className="owl-item home_slider_item">
                {/* Image by https://unsplash.com/@anikindimitry */}
                <div
                  className="home_slider_background"
                  style={{ backgroundImage: "url(images/background5.jpg)" }}
                />
                <div className="home_slider_content text-center">
                  <div
                    className="home_slider_content_inner"
                    data-animation-in="flipInX"
                    data-animation-out="animate-out fadeOut"
                  >
                    
                    <h1>Offres!</h1>
                    {/* <div class="button home_slider_button"><div class="button_bcg"></div><a href="index.htmlsearch_section">Découvrez maintenant<span></span><span></span><span></span></a></div> */}
                  </div>
                </div>
                <div className="search_panel active col-lg-8">
                  <form
                    action="index.html"
                    id="search_form_1"
                    className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
                    data-animation-in="flipInX"
                    data-animation-out="animate-out fadeOut"
                  >
                    <div className="search_item">
                      {/* <i class="fa fa-map-marker" aria-hidden="true"></i> Départ */}
                      <input
                        type="text"
                        className="destination search_input"
                        required="required"
                        placeholder=" Départ"
                        style={{ fontFamily: "Arial, FontAwesome" }}
                      />
                    </div>
                    <div className="search_item">
                      {/* <i class="fa fa-map-marker" aria-hidden="true"></i> Destination */}
                      <input
                        type="text"
                        className="destination search_input"
                        required="required"
                        placeholder=" Destination"
                        style={{ fontFamily: "Arial, FontAwesome" }}
                      />
                    </div>
                    <div className="search_item">
                      {/* <i class="fa fa-calendar" aria-hidden="true"></i> Date / heure */}
                      <input
                        type="datetime-local"
                        className="check_out search_input"
                        placeholder="Date | Heure"
                      />
                    </div>
                    <div className="search_item">
                      {/* <i class="fa fa-male" aria-hidden="true"></i> Personnes */}
                      <select
                        name="adults"
                        id="adults_1"
                        className="dropdown_item_select search_input"
                        placeholder="Personnes"
                      >
                        <option value="">Passagers</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                      </select>
                    </div>
                    <button className="button search_button">
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </form>
                </div>
              </div>
              {/* Slider Item */}
              <div className="owl-item home_slider_item">
                <div
                  className="home_slider_background"
                  style={{ backgroundImage: "url(images/people4.png)" }}
                />
                <div className="home_slider_content text-center">
                  <div
                    className="home_slider_content_inner"
                    data-animation-in="flipInX"
                    data-animation-out="animate-out fadeOut"
                  >
                    
                    <h1>Demandes!</h1>
                    {/* <div class="button home_slider_button"><div class="button_bcg"></div><a href="index.html">Recherchez maintenant<span></span><span></span><span></span></a></div> */}
                  </div>
                </div>
                <div className="search_panel active col-lg-8">
                  <form
                    action="index.html"
                    id="search_form_1"
                    className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
                    data-animation-in="flipInX"
                    data-animation-out="animate-out fadeOut"
                  >
                    <div className="search_item">
                      {/* <i class="fa fa-map-marker" aria-hidden="true"></i> Départ */}
                      <input
                        type="text"
                        className="destination search_input"
                        required="required"
                        placeholder=" Départ"
                        style={{ fontFamily: "Arial, FontAwesome" }}
                      />
                    </div>
                    <div className="search_item">
                      {/* <i class="fa fa-map-marker" aria-hidden="true"></i> Destination */}
                      <input
                        type="text"
                        className="destination search_input"
                        required="required"
                        placeholder=" Destination"
                        style={{ fontFamily: "Arial, FontAwesome" }}
                      />
                    </div>
                    <div className="search_item">
                      {/* <i class="fa fa-calendar" aria-hidden="true"></i> Date / heure */}
                      <input
                        type="datetime-local"
                        className="check_out search_input"
                        placeholder="Date | Heure"
                      />
                    </div>
                    <div className="search_item">
                      {/* <i class="fa fa-male" aria-hidden="true"></i> Personnes */}
                      <select
                        name="adults"
                        id="adults_1"
                        className="dropdown_item_select search_input"
                        placeholder="Personnes"
                      >
                        <option value="">Passagers</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                      </select>
                    </div>
                    <button className="button search_button">
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </form>
                </div>
              </div>
              {/* Slider Item */}
              <div className="owl-item home_slider_item">
                <div
                  className="home_slider_background"
                  style={{ backgroundImage: "url(images/event3.jpg)" }}
                />
                <div className="home_slider_content text-center">
                  <div
                    className="home_slider_content_inner"
                    data-animation-in="flipInX"
                    data-animation-out="animate-out fadeOut"
                  >
                    
                    <h1>Evènements!</h1>
                    {/* <div class="button home_slider_button"><div class="button_bcg"></div><a href="index.html">Explorez maintenant<span></span><span></span><span></span></a></div> */}
                  </div>
                </div>
                <div className="search_panel active col-lg-8">
                  <form
                    action="index.html"
                    id="search_form_1"
                    className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
                    data-animation-in="flipInX"
                    data-animation-out="animate-out fadeOut"
                  >
                    <div className="search_item">
                      {/* <i class="fa fa-map-marker" aria-hidden="true"></i> Départ */}
                      <input
                        type="text"
                        className="destination search_input"
                        required="required"
                        placeholder=" Evènement"
                        style={{ fontFamily: "Arial, FontAwesome" }}
                      />
                    </div>
                    <div className="search_item">
                      {/* <i class="fa fa-map-marker" aria-hidden="true"></i> Destination */}
                      <input
                        type="text"
                        className="destination search_input"
                        required="required"
                        placeholder=" Lieu"
                        style={{ fontFamily: "Arial, FontAwesome" }}
                      />
                    </div>
                    <div className="search_item">
                      {/* <i class="fa fa-map-marker" aria-hidden="true"></i> Destination */}
                      <input
                        type="text"
                        className="destination search_input"
                        required="required"
                        placeholder=" Catégorie"
                        style={{ fontFamily: "Arial, FontAwesome" }}
                      />
                    </div>
                    <div className="search_item">
                      {/* <i class="fa fa-calendar" aria-hidden="true"></i> Date / heure */}
                      <input
                        type="datetime-local"
                        className="check_out search_input"
                        placeholder="Date | Heure"
                      />
                    </div>
                    <button className="button search_button">
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* Home Slider Nav - Prev */}
            <div className="home_slider_nav home_slider_prev">
              <svg
                version="1.1"
                id="Layer_2"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="28px"
                height="33px"
                viewBox="0 0 28 33"
                enableBackground="new 0 0 28 33"
                xmlSpace="preserve"
              >
                <defs>
                  <linearGradient id="home_grad_prev">
                    <stop offset="0%" stopColor="index.htmlD62828" />
                    <stop offset="100%" stopColor="index.htmlD62828" />
                  </linearGradient>
                </defs>
                <path
                  className="nav_path"
                  fill="index.htmlF3F6F9"
                  d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                          M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                          C22.545,2,26,5.541,26,9.909V23.091z"
                />
                <polygon
                  className="nav_arrow"
                  fill="index.htmlF3F6F9"
                  points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
                          11.042,18.219 "
                />
              </svg>
            </div>
            {/* Home Slider Nav - Next */}
            <div className="home_slider_nav home_slider_next">
              <svg
                version="1.1"
                id="Layer_3"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="28px"
                height="33px"
                viewBox="0 0 28 33"
                enableBackground="new 0 0 28 33"
                xmlSpace="preserve"
              >
                <defs>
                  <linearGradient id="home_grad_next">
                    <stop offset="0%" stopColor="index.htmlD62828" />
                    <stop offset="100%" stopColor="index.htmlD62828" />
                  </linearGradient>
                </defs>
                <path
                  className="nav_path"
                  fill="index.htmlF3F6F9"
                  d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                      M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                      C22.545,2,26,5.541,26,9.909V23.091z"
                />
                <polygon
                  className="nav_arrow"
                  fill="index.htmlF3F6F9"
                  points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
                      17.046,15.554 "
                />
              </svg>
            </div>
            {/* Home Slider Dots */}
            {/* <div class="home_slider_dots row search_tabs_container">
      
                      <ul id="home_slider_custom_dots" class="home_slider_custom_dots col fill_height search_tabs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                          
                          <li class="home_slider_custom_dot active search_tab active d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/bus.png" alt=""><span>Offres</span></li>
                          <li class="home_slider_custom_dot search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/suitcase.png" alt="">Demandes</li>
                          <li class="home_slider_custom_dot search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/diving.png" alt="">Evènements</li>
                      </ul>
                  </div> */}
          </div>
        </div>
        {/* The Modal for Connexion*/}
        <div id="id01" className="modal">
          <span
            onclick="document.getElementById('id01').style.display='none'"
            className="close"
            title="Close Modal"
          >
            ×
          </span>
          {/* Modal Content */}
          <form className="modal-content animate card" action="indexConnecte.html">
            <div className="imgcontainer">
              <span
                onclick="document.getElementById('id01').style.display='none'"
                className="close"
                title="Fermer"
              >
                <i className="fa-solid fa-x close" />
              </span>
              <h5 className="card-title text-center pb-0 fs-4">
                {" "}
                Bienvenue sur Whee!
              </h5>
            </div>
            <div className="container" style={{ alignItems: "start", marginLeft: 5 }}>
              <label htmlFor="username" className="labelInput">
                <b>E-mail</b>
              </label>
              <input
                type="text"
                placeholder="E-mail"
                name="uname"
                required=""
                style={{ marginTop: "-5px" }}
              />
              <label htmlFor="psw" className="labelInput" id="labelPassword">
                <b>Mot de Passe</b>
              </label>
              <input
                type="password"
                id="inputPassword"
                placeholder="Mot de passe"
                name="psw"
                required=""
              />
              <p id="lienMotDePasseOublie"> Mot de Passe Oublié? </p>
              <button type="submit" className="buttonConnexion">
                Se Connecter
              </button>
              <button
                onclick="document.getElementById('id01').style.display='none'"
                className="connexionFB"
              >
                <i className="fa-brands fa-facebook" style={{ color: "white" }}>
                  {" "}
                </i>{" "}
                Continuer via Facebook
              </button>
              <button className="connexionGoogle">
                {" "}
                <i className="fa-brands fa-google" /> Continuer via Google
              </button>
              <label>
                {/* <input type="checkbox" checked="checked" name="remember"> Remember me */}
                <div style={{ marginTop: 12, textAlign: "center" }}>
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
                      width: 224
                    }}
                  >
                    <span>
                      En continuant, vous acceptez les{" "}
                      <a
                        className="conditionTexte"
                        href="index.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Conditions d'utilisation
                      </a>{" "}
                      de Whee et reconnaissez avoir lu nos{" "}
                      <a
                        className="Wk9 CCY czT eEj KhY xQ4 uCz"
                        href="index.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Politiques de confidentialité
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
                      fontWeight: "bold"
                    }}
                  >
                    Vous n'êtes pas encore sur Whee!&nbsp;? Inscrivez-vous
                  </button>
                </div>
              </label>
            </div>
          </form>
        </div>
        {/* END OF INSCRIPTION MODAL */}
        <div className="modal" id="id02">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <form data-multi-step="" className="multi-step-form">
                <div className="card cardInscription" data-step="">
                  <span
                    onclick="document.getElementById('id02').style.display='none'"
                    className="close"
                    title="Fermer"
                  >
                    <i className="fa-solid fa-x closeInscription" />
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
                    className="container"
                    style={{ alignItems: "start", marginLeft: 5 }}
                  >
                    <label htmlFor="username" className="form-label">
                      <b>Nom d'utilisateur</b>
                    </label>
                    <input
                      type="text"
                      placeholder="Nom d'Utilisateur"
                      name="uname"
                      required=""
                    />
                    <label htmlFor="psw" className="form-label">
                      <b>Email</b>
                    </label>
                    <input
                      type="text"
                      placeholder="E-mail"
                      name="psw"
                      required=""
                      style={{ marginBottom: 15 }}
                    />
                    <label htmlFor="age" className="form-label">
                      <b>Mot de Passe</b>
                    </label>
                    <input
                      type="password"
                      placeholder="Mot de passe"
                      name="psw"
                      required=""
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
                            required=""
                          />
                          En continuant, vous acceptez les{" "}
                          <a
                            className="conditionTexte"
                            href="index.html"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Conditions d'utilisation
                          </a>{" "}
                          de Whee et reconnaissez avoir lu nos{" "}
                          <a
                            className="Wk9 CCY czT eEj KhY xQ4 uCz"
                            href="index.html"
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
                    <label htmlFor="psw" className="form-label">
                      <b>Date de naissance</b>
                    </label>
                    <input
                      type="number"
                      placeholder="Age"
                      name="psw"
                      required=""
                      style={{ marginBottom: 15 }}
                    />
                    <label htmlFor="psw" className="form-label">
                      <b>Adresse</b>
                    </label>
                    <input
                      type="text"
                      placeholder="Adresse"
                      name="adresse"
                      required=""
                      style={{ marginBottom: 15 }}
                    />
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
                      style={{ backgroundImage: 'url("images/gallery_3.jpg")' }}
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
                      style={{
                        backgroundImage: 'url("images/gallery_1.jpg")',
                        backgroundColor: "black"
                      }}
                    >
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
        {/* Trajets populaires */}
        <div className="intro">
          <div className="container">
            <div className="testimonials ">
              <div className="test_border" />
              <div className="container ">
                <div className="row">
                  <div className="col">
                    <h2 className="intro_title text-center">
                      Les trajets populaires
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <div className="intro_text text-center">
                      <p>
                        On vous a sélectionné les trajets les plus recherchés ces
                        derniers temps.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col card">
                    {/* Testimonials Slider */}
                    <div className="test_slider_container">
                      <div className="owl-carousel owl-theme test_slider">
                        <div className="cardIntro">
                          <div
                            className="card-img"
                            style={{ backgroundImage: "url(images/analakely.png)" }}
                          >
                            <div className="overlay">
                              <div className="overlay-content">
                                <a className="hover" href="index.html!">
                                  Voir Plus
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <a href="index.html!">
                              <h1 className="text-center">
                                <i className="fa fa-street-view" aria-hidden="true" />{" "}
                                Analakely
                              </h1>
                              <h1 className="text-center">
                                <i className="fa fa-map-marker" aria-hidden="true" />{" "}
                                Andavamamba
                              </h1>
                              <h2 className="text-center">environ 20 000 MGA</h2>
                            </a>
                          </div>
                        </div>
                        <div className="cardIntro">
                          <div
                            className="card-img"
                            style={{ backgroundImage: "url(images/Itaosy.png)" }}
                          >
                            <div className="overlay">
                              <div className="overlay-content">
                                <a className="hover" href="index.html!">
                                  Voir Plus
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <a href="index.html!">
                              <h1 className="text-center">
                                <i className="fa fa-street-view" aria-hidden="true" />
                                Itaosy
                              </h1>
                              <h1 className="text-center">
                                <i className="fa fa-map-marker" aria-hidden="true" />{" "}
                                Mahamasina
                              </h1>
                              <h2 className="text-center">environ 15 000 MGA</h2>
                            </a>
                          </div>
                        </div>
                        <div className="cardIntro">
                          <div
                            className="card-img"
                            style={{ backgroundImage: "url(images/Faravohitra.png)" }}
                          >
                            <div className="overlay">
                              <div className="overlay-content">
                                <a className="hover" href="index.html!">
                                  Voir Plus
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="card-content">
                            <a href="index.html!">
                              <h1 className="text-center">
                                <i className="fa fa-street-view" aria-hidden="true" />{" "}
                                Faravohitra
                              </h1>
                              <h1 className="text-center">
                                <i className="fa fa-map-marker" aria-hidden="true" />{" "}
                                Ankorondrano
                              </h1>
                              <h2 className="text-center">environ 30 000 MGA</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Testimonials Slider Nav - Prev */}
                      <div className="test_slider_nav test_slider_prev">
                        <svg
                          version="1.1"
                          id="Layer_6"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          width="28px"
                          height="33px"
                          viewBox="0 0 28 33"
                          enableBackground="new 0 0 28 33"
                          xmlSpace="preserve"
                        >
                          <defs>
                            <linearGradient id="test_grad_prev">
                              <stop offset="0%" stopColor="index.html003049" />
                              <stop offset="100%" stopColor="index.html003049" />
                            </linearGradient>
                          </defs>
                          <path
                            className="nav_path"
                            fill="index.htmlF3F6F9"
                            d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                                                  M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                                                  C22.545,2,26,5.541,26,9.909V23.091z"
                          />
                          <polygon
                            className="nav_arrow"
                            fill="index.htmlF3F6F9"
                            points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
                                                  11.042,18.219 "
                          />
                        </svg>
                      </div>
                      {/* Testimonials Slider Nav - Next */}
                      <div className="test_slider_nav test_slider_next">
                        <svg
                          version="1.1"
                          id="Layer_7"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          width="28px"
                          height="33px"
                          viewBox="0 0 28 33"
                          enableBackground="new 0 0 28 33"
                          xmlSpace="preserve"
                        >
                          <defs>
                            <linearGradient id="test_grad_next">
                              <stop offset="0%" stopColor="index.html003049" />
                              <stop offset="100%" stopColor="index.html003049" />
                            </linearGradient>
                          </defs>
                          <path
                            className="nav_path"
                            fill="index.htmlF3F6F9"
                            d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                                              M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                                              C22.545,2,26,5.541,26,9.909V23.091z"
                          />
                          <polygon
                            className="nav_arrow"
                            fill="index.htmlF3F6F9"
                            points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
                                              17.046,15.554 "
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="cta">
          {/* Image by https://unsplash.com/@thanni */}
          <div
            className="cta_background"
            style={{ backgroundImage: "url(images/background3.jpg)" }}
          />
          <div className="container">
            <div className="row">
              <div className="col">
                {/* CTA Slider */}
                <div className="cta_slider_container">
                  <div className="owl-carousel owl-theme cta_slider">
                    {/* CTA Slider Item */}
                    <div className="owl-item cta_item text-center">
                      <div className="cta_title">Centres d'intérêt</div>
                      <p className="cta_text">
                        Whee! c'est aussi une mise en relation des gens de même centre
                        d'intérêt.
                      </p>
                      <p className="cta_text">
                        Ce qui va vous garantir un ambiance convivial pendant votre
                        voyage
                      </p>
                      <div className="button cta_button">
                        <div className="button_bcg" />
                        <a href="index.html">
                          Découvrir
                          <span />
                          <span />
                          <span />
                        </a>
                      </div>
                    </div>
                    {/* CTA Slider Item */}
                    <div className="owl-item cta_item text-center">
                      <div className="cta_title">
                        <i className="fa fa-music" aria-hidden="true" /> Musiques
                      </div>
                      <p className="cta_text">
                        Que vous soyez adeptes de rock torrides ou des tendres
                        mélodies de la musique acoustique traditionnelle, vous serrez
                        ébahis par la passion de votre compagnon de covoiturage.
                      </p>
                      <div className="button cta_button">
                        <div className="button_bcg" />
                        <a href="index.html">
                          Découvrir
                          <span />
                          <span />
                          <span />
                        </a>
                      </div>
                    </div>
                    {/* CTA Slider Item */}
                    <div className="owl-item cta_item text-center">
                      <div className="cta_title">
                        <i className="fa fa-futbol-o" aria-hidden="true" /> Sports
                      </div>
                      <p className="cta_text">
                        Le sport est mieux si on a d'autres personnes à qui le
                        partager. Le covoiturage aussi. Le "match" est vite fait!
                      </p>
                      <div className="button cta_button">
                        <div className="button_bcg" />
                        <a href="index.html">
                          Découvrir
                          <span />
                          <span />
                          <span />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* CTA Slider Nav - Prev */}
                  <div className="cta_slider_nav cta_slider_prev">
                    <svg
                      version="1.1"
                      id="Layer_4"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="28px"
                      height="33px"
                      viewBox="0 0 28 33"
                      enableBackground="new 0 0 28 33"
                      xmlSpace="preserve"
                    >
                      <defs>
                        <linearGradient id="cta_grad_prev">
                          <stop offset="0%" stopColor="index.htmlfa9e1b" />
                          <stop offset="100%" stopColor="index.html8d4fff" />
                        </linearGradient>
                      </defs>
                      <path
                        className="nav_path"
                        fill="index.htmlF3F6F9"
                        d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                                      M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                                      C22.545,2,26,5.541,26,9.909V23.091z"
                      />
                      <polygon
                        className="nav_arrow"
                        fill="index.htmlF3F6F9"
                        points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
                                      11.042,18.219 "
                      />
                    </svg>
                  </div>
                  {/* CTA Slider Nav - Next */}
                  <div className="cta_slider_nav cta_slider_next">
                    <svg
                      version="1.1"
                      id="Layer_5"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="28px"
                      height="33px"
                      viewBox="0 0 28 33"
                      enableBackground="new 0 0 28 33"
                      xmlSpace="preserve"
                    >
                      <defs>
                        <linearGradient id="cta_grad_next">
                          <stop offset="0%" stopColor="index.htmlfa9e1b" />
                          <stop offset="100%" stopColor="index.html8d4fff" />
                        </linearGradient>
                      </defs>
                      <path
                        className="nav_path"
                        fill="index.htmlF3F6F9"
                        d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                                  M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                                  C22.545,2,26,5.541,26,9.909V23.091z"
                      />
                      <polygon
                        className="nav_arrow"
                        fill="index.htmlF3F6F9"
                        points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
                                  17.046,15.554 "
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Offers */}
        <div className="offers">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h2 className="section_title">Les évènements populaires</h2>
              </div>
            </div>
            <div className="row offers_items">
              {/* Offers Item */}
              <div className="col-lg-6 offers_col">
                <div className="offers_item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="offers_image_container">
                        {/* Image by https://unsplash.com/@kensuarez */}
                        <div className="offer_date">30 août 2022 - 07:00</div>
                        <div
                          className="offers_image_background"
                          style={{ backgroundImage: "url(images/offer_1.jpg)" }}
                        />
                        <div className="offer_name">
                          <a href="index.html">La Coruña</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="offers_content">
                        <div className="offers_title">
                          Global Solo Challenge
                          <span />
                        </div>
                        <div className="rating_r rating_r_4 offers_rating">
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                        <p className="offers_text">
                          Le Global Solo Challenge est un tour du monde en solitaire
                          et sans escale au départ de La Corogne, en Espagne.
                        </p>
                        <div className="offers_icons">
                          <ul className="offers_icons_list">
                            <li className="offers_icons_item">
                              <img src="images/compass.png" alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src="images/sailboat.png" alt="" />
                            </li>
                          </ul>
                        </div>
                        <div className="offers_link">
                          <a href="offers.html">voir plus</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Offers Item */}
              <div className="col-lg-6 offers_col">
                <div className="offers_item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="offers_image_container">
                        {/* Image by Egzon Bytyqi */}
                        <div className="offer_date">15 septembre 2022 - 05:30</div>
                        <div
                          className="offers_image_background"
                          style={{ backgroundImage: "url(images/offer_2.jpg)" }}
                        />
                        <div className="offer_name">
                          <a href="index.html">Antsirabe</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="offers_content">
                        <div className="offers_title">
                          Rallye Montgolfière de Madagascar
                          <span />
                        </div>
                        <div className="rating_r rating_r_5 offers_rating">
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                        <p className="offers_text">
                          Le ciel d’Antsirabe et de Morondava sera orné de
                          montgolfières avec cette première édition.
                        </p>
                        <div className="offers_icons">
                          <ul className="offers_icons_list">
                            <li className="offers_icons_item">
                              <img src="images/compass.png" alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src="images/sailboat.png" alt="" />
                            </li>
                          </ul>
                        </div>
                        <div className="offers_link">
                          <a href="offers.html">voir plus</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Offers Item */}
              {/* Offers Item */}
              <div className="col-lg-6 offers_col">
                <div className="offers_item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="offers_image_container">
                        {/* Image by https://unsplash.com/@kensuarez */}
                        <div className="offer_date">27 - 29 septembre 2022</div>
                        <div
                          className="offers_image_background"
                          style={{ backgroundImage: "url(images/event1.jpg)" }}
                        />
                        <div className="offer_name">
                          <a href="index.html">Rio de Janeiro</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="offers_content">
                        <div className="offers_title">
                          Rock in Rio
                          <span />
                        </div>
                        <div className="rating_r rating_r_3 offers_rating">
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                        <p className="offers_text">
                          Rock in Rio au Brésil est le plus grand festival du monde
                          qui accueille plus d’un million de participants à chaque
                          édition.
                        </p>
                        <div className="offers_icons">
                          <ul className="offers_icons_list">
                            <li className="offers_icons_item">
                              <i className="fa fa-music" aria-hidden="true" />
                            </li>
                            <li className="offers_icons_item">
                              <img src="images/post.png" alt="" />
                            </li>
                          </ul>
                        </div>
                        <div className="offers_link">
                          <a href="offers.html">voir plus</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Offers Item */}
              <div className="col-lg-6 offers_col">
                <div className="offers_item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="offers_image_container">
                        {/* Image by Egzon Bytyqi */}
                        <div className="offer_date">30 octobre 2022 - 16:00</div>
                        <div
                          className="offers_image_background"
                          style={{ backgroundImage: "url(images/monaco2.jpg)" }}
                        />
                        <div className="offer_name">
                          <a href="index.html">Monaco</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="offers_content">
                        <div className="offers_title">
                          Grand prix de Monaco
                          <span />
                        </div>
                        <div className="rating_r rating_r_5 offers_rating">
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                        <p className="offers_text">
                          Le Grand Prix de Monaco est une des plus anciennes et l'une
                          des trois courses les plus prestigieuses au monde, disputée
                          en principauté de Monaco.
                        </p>
                        <div className="offers_icons">
                          <ul className="offers_icons_list">
                            <li className="offers_icons_item">
                              <img src="images/compass.png" alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src="images/sailboat.png" alt="" />
                            </li>
                          </ul>
                        </div>
                        <div className="offers_link">
                          <a href="offers.html">voir plus</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div className="testimonials">
          <div className="test_border" />
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h2 className="section_title">
                  Qu'est-ce que nos clients disent de nous?
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {/* Testimonials Slider */}
                <div className="test_slider_container">
                  <div className="owl-carousel owl-theme test_slider">
                    {/* Testimonial Item */}
                    <div className="owl-item">
                      <div className="test_item">
                        <div className="test_image">
                          <img
                            src="images/test_1.jpg"
                            alt="https://unsplash.com/@anniegray"
                          />
                        </div>
                        <div className="test_icon">
                          <img src="images/kayak.png" alt="" />
                        </div>
                        <div className="test_content_container">
                          <div className="test_content">
                            <div className="test_item_info">
                              <div className="test_name">Alina PARIS</div>
                              <div className="test_date">24 mai 2022</div>
                            </div>
                            <div className="test_quote_title">
                              " Meilleures vacances de ma vie "
                            </div>
                            <p className="test_quote_text">
                              Mes vacances se sont passés à merveille grace ... aux
                              covoiturages.
                            </p>
                            <div className="rating_r rating_r_5 offers_rating">
                              <i />
                              <i />
                              <i />
                              <i />
                              <i />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Item */}
                    <div className="owl-item">
                      <div className="test_item">
                        <div className="test_image">
                          <img
                            src="images/test_4.jpg"
                            alt="https://unsplash.com/@tschax"
                          />
                        </div>
                        <div className="test_icon">
                          <img src="images/backpack.png" alt="" />
                        </div>
                        <div className="test_content_container">
                          <div className="test_content">
                            <div className="test_item_info">
                              <div className="test_name">Magnus ANDERSON</div>
                              <div className="test_date">12 janvier 2022</div>
                            </div>
                            <div className="test_quote_title">" Je suis sérein "</div>
                            <p className="test_quote_text">
                              Grace à l'existence de covoiturages je suis sérein pour
                              mes déplacements journaliers.
                            </p>
                            <div className="rating_r rating_r_4 offers_rating">
                              <i />
                              <i />
                              <i />
                              <i />
                              <i />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Item */}
                    <div className="owl-item">
                      <div className="test_item">
                        <div className="test_image">
                          <img
                            src="images/test_5.jpg"
                            alt="https://unsplash.com/@seefromthesky"
                          />
                        </div>
                        <div className="test_icon">
                          <img src="images/island_t.png" alt="" />
                        </div>
                        <div className="test_content_container">
                          <div className="test_content">
                            <div className="test_item_info">
                              <div className="test_name">Michelle RABE</div>
                              <div className="test_date">15 août 2022</div>
                            </div>
                            <div className="test_quote_title">
                              " Ecologique et pratique "
                            </div>
                            <p className="test_quote_text">
                              C'est écologique, il y aura moins de circulation dans la
                              ville. C'est pratique avec son système très intuitif.
                            </p>
                            <div className="rating_r rating_r_5 offers_rating">
                              <i />
                              <i />
                              <i />
                              <i />
                              <i />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Item */}
                    <div className="owl-item">
                      <div className="test_item">
                        <div className="test_image">
                          <img src="images/people2.jpg" alt="" />
                        </div>
                        <div className="test_icon">
                          <img src="images/island_t.png" alt="" />
                        </div>
                        <div className="test_content_container">
                          <div className="test_content">
                            <div className="test_item_info">
                              <div className="test_name">John RADISON</div>
                              <div className="test_date">05 juillet 2022</div>
                            </div>
                            <div className="test_quote_title">
                              " Pour éviter les bus "
                            </div>
                            <p className="test_quote_text">
                              Même si les contacts humaines ne m'intéressent pas, celà
                              me permet d'éviter les longs trajets en bus.
                            </p>
                            <div className="rating_r rating_r_3 offers_rating">
                              <i />
                              <i />
                              <i />
                              <i />
                              <i />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Item */}
                    <div className="owl-item">
                      <div className="test_item">
                        <div className="test_image">
                          <img src="images/test_6.jpg" alt="" />
                        </div>
                        <div className="test_icon">
                          <img src="images/backpack.png" alt="" />
                        </div>
                        <div className="test_content_container">
                          <div className="test_content">
                            <div className="test_item_info">
                              <div className="test_name">Leonardo ZORZI</div>
                              <div className="test_date">26 juin 2022</div>
                            </div>
                            <div className="test_quote_title">
                              " Lieu de rencontre "
                            </div>
                            <p className="test_quote_text">
                              C'est plaisant de rencontrer d'autres personnes de même
                              passion que vous pendant le temps d'un voyage.
                            </p>
                            <div className="rating_r rating_r_5 offers_rating">
                              <i />
                              <i />
                              <i />
                              <i />
                              <i />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Testimonials Slider Nav - Prev */}
                  <div className="test_slider_nav test_slider_prev">
                    <svg
                      version="1.1"
                      id="Layer_6"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="28px"
                      height="33px"
                      viewBox="0 0 28 33"
                      enableBackground="new 0 0 28 33"
                      xmlSpace="preserve"
                    >
                      <defs>
                        <linearGradient id="test_grad_prev">
                          <stop offset="0%" stopColor="index.html003049" />
                          <stop offset="100%" stopColor="index.htmlcfcfcf" />
                        </linearGradient>
                      </defs>
                      <path
                        className="nav_path"
                        fill="index.htmlF3F6F9"
                        d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                                      M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                                      C22.545,2,26,5.541,26,9.909V23.091z"
                      />
                      <polygon
                        className="nav_arrow"
                        fill="index.htmlF3F6F9"
                        points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
                                      11.042,18.219 "
                      />
                    </svg>
                  </div>
                  {/* Testimonials Slider Nav - Next */}
                  <div className="test_slider_nav test_slider_next">
                    <svg
                      version="1.1"
                      id="Layer_7"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="28px"
                      height="33px"
                      viewBox="0 0 28 33"
                      enableBackground="new 0 0 28 33"
                      xmlSpace="preserve"
                    >
                      <defs>
                        <linearGradient id="test_grad_next">
                          <stop offset="0%" stopColor="index.htmlfa9e1b" />
                          <stop offset="100%" stopColor="index.html8d4fff" />
                        </linearGradient>
                      </defs>
                      <path
                        className="nav_path"
                        fill="index.htmlF3F6F9"
                        d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                                  M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                                  C22.545,2,26,5.541,26,9.909V23.091z"
                      />
                      <polygon
                        className="nav_arrow"
                        fill="index.htmlF3F6F9"
                        points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
                                  17.046,15.554 "
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact">
          <div
            className="contact_background"
            style={{ backgroundImage: "url(images/contact.png)" }}
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="contact_image"></div>
              </div>
              <div className="col-lg-7">
                <div className="contact_form_container">
                  <div className="contact_title">Nous contacter</div>
                  <form action="index.html" id="contact_form" className="contact_form">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      placeholder="Nom"
                      required="required"
                      data-error="Ce champ est requis."
                    />
                    <input
                      type="text"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      placeholder="E-mail"
                      required="required"
                      data-error="Ce champ est requis."
                    />
                    <input
                      type="text"
                      id="contact_form_subject"
                      className="contact_form_subject input_field"
                      placeholder="Objet"
                      required="required"
                      data-error="Ce champ est requis."
                    />
                    <textarea
                      id="contact_form_message"
                      className="text_field contact_form_message"
                      name="message"
                      rows={4}
                      placeholder="Message"
                      required="required"
                      data-error="Veuillez saisir votre message"
                      defaultValue={""}
                    />
                    <button
                      type="submit"
                      id="form_submit_button"
                      className="form_submit_button button"
                    >
                      Envoyer <span />
                      <span />
                      <span />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              {/* Footer Column */}
              <div className="col-lg-4 footer_column">
                <div className="footer_col">
                  <div className="footer_content footer_about">
                    {/* <div class="logo_container footer_logo">
                                      <div class="logo"><a href="index.html"><img src="images/logo.png" alt="">travelix</a></div>
                                  </div> */}
                    <p className="footer_about_text">
                      Il nous est venu l’idée de créer une application qui, en plus
                      des solutions économiques et écologiques apportées par le
                      concept de covoiturage, permet en quelques clics de trouver des
                      partenaires de covoiturage partageant idéalement les mêmes
                      centres d’intérêts, rendant ainsi, l’expérience plus
                      enrichissante.
                    </p>
                    <ul className="footer_social_list">
                      <li className="footer_social_item">
                        <a href="index.html">
                          <i className="fa fa-pinterest" />
                        </a>
                      </li>
                      <li className="footer_social_item">
                        <a href="index.html">
                          <i className="fa fa-facebook-f" />
                        </a>
                      </li>
                      <li className="footer_social_item">
                        <a href="index.html">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li className="footer_social_item">
                        <a href="index.html">
                          <i className="fa fa-dribbble" />
                        </a>
                      </li>
                      <li className="footer_social_item">
                        <a href="index.html">
                          <i className="fa fa-behance" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Footer Column */}
              <div className="col-lg-4 footer_column">
                <div className="footer_col">
                  <div className="footer_title">Mots clés</div>
                  <div className="footer_content footer_tags">
                    <ul className="tags_list clearfix">
                      <li className="tag_item">
                        <a href="index.html">design</a>
                      </li>
                      <li className="tag_item">
                        <a href="index.html">sport</a>
                      </li>
                      <li className="tag_item">
                        <a href="index.html">musique</a>
                      </li>
                      <li className="tag_item">
                        <a href="index.html">video</a>
                      </li>
                      <li className="tag_item">
                        <a href="index.html">spéctacles</a>
                      </li>
                      <li className="tag_item">
                        <a href="index.html">photographie</a>
                      </li>
                      <li className="tag_item">
                        <a href="index.html">aventure</a>
                      </li>
                      <li className="tag_item">
                        <a href="index.html">voyages</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Footer Column */}
              <div className="col-lg-4 footer_column">
                <div className="footer_col">
                  <div className="footer_title">contact info</div>
                  <div className="footer_content footer_contact">
                    <ul className="contact_info_list">
                      <li className="contact_info_item d-flex flex-row">
                        <div>
                          <div className="contact_info_icon">
                            <i
                              className="fa fa-map-marker contact_info_icon"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                        <div className="contact_info_text">
                          5 Avenue de l'Indépendance Analakely Antananarivo Madagascar
                        </div>
                      </li>
                      <li className="contact_info_item d-flex flex-row">
                        <div>
                          <div className="contact_info_icon">
                            <i
                              className="fa fa-volume-control-phone contact_info_icon"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                        <div className="contact_info_text">+261 32 77 747 69</div>
                      </li>
                      <li className="contact_info_item d-flex flex-row">
                        <div>
                          <div className="contact_info_icon">
                            <i
                              className="fa fa-envelope-o contact_info_icon"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                        <div className="contact_info_text">
                          <a
                            href="mailto:contactme@gmail.com?Subject=Hello"
                            target="_top"
                          >
                            contactwhee@gmail.com
                          </a>
                        </div>
                      </li>
                      <li className="contact_info_item d-flex flex-row">
                        <div>
                          <div className="contact_info_icon">
                            <i
                              className="fa fa-globe contact_info_icon"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                        <div className="contact_info_text">
                          <a href="https://colorlib.com">www.whee!.com</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      
       
      
    )
  }
}
