import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          {/* Main Navigation */}
          <nav className="main_nav">
            <div className="container">
              <div className="row">
                <div className="col main_nav_col d-flex flex-row align-items-center justify-content-start">
                  <div className="logo_container">
                    <div className="logo">
                      <Link to="/">
                        <img src="images/logo_4.png" alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="main_nav_container ml-auto">
                    <ul className="main_nav_list">
                      <li className="main_nav_item">
                        <Link to="/">Accueil</Link>
                      </li>
                      <li className="main_nav_item">
                        <Link to="/offres">Offres</Link>
                      </li>
                      <li className="main_nav_item">
                        <Link to="/demandes">Demandes</Link>
                      </li>
                      <li className="main_nav_item">
                        <Link to="/evenements">évènements</Link>
                      </li>
                      <li className="main_nav_item">
                        <Link to="/a_propos">à propos</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="user_box ml-auto user_box_s">
                    <div className="user_box_login user_box_link">
                      <span
                        onClick="document.getElementById('id01').style.display='block'"
                        style={{ zIndex: 99 }}
                        className="user_box_link"
                        id="right"
                      >
                        Se Connecter
                      </span>
                    </div>
                    <div className="user_box_register user_box_link">
                      <span
                        onClick="document.getElementById('id02').style.display='block'"
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
      </React.Fragment>
    )
  }
}