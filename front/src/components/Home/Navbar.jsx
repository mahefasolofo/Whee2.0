import React, { Component, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../services/UserContext';
import { Dropdown } from 'react-bootstrap';
import jwt_decode from "jwt-decode";

const NavBar =()=> {
    const{user} = useContext(UserContext);
    let value="tes nul";
    if(localStorage.getItem('token')!=null){

    if((localStorage.getItem('token').length>14)){
      value = jwt_decode(localStorage.getItem('token'));
      console.log(localStorage.getItem('token'))
      value= jwt_decode(localStorage.getItem('token'));
      console.log(value);
    }else{
      value = "nn";
    }
  }

      const afficherConnexion=()=> {
          document.getElementById('id01').style.display='block';    
    }
    
    const afficherInscription=()=> {
      document.getElementById('id02').style.display='block';    
    }
    const logOut=()=>{
      localStorage.setItem('token', null);
    }
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
                                    <a href="/">
                                        <img src="images/logo_4.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="main_nav_container ml-auto">
                                <ul className="main_nav_list">
                                    <li className="main_nav_item">
                                        <a href="/home">Accueil</a>
                                    </li>
                                    <li className="main_nav_item">
                                        <a href="/offres">Offres</a>
                                    </li>
                                    <li className="main_nav_item">
                                        <a href="/demandes">Demandes</a>
                                    </li>
                                    <li className="main_nav_item">
                                        <a href="/evenements">évènements</a>
                                    </li>
                                    <li className="main_nav_item">
                                        <a href="/a_propos">à propos</a>
                                    </li>
                                </ul>
                            </div>
                            {value.length<100? (
                                                                <div className="user_box ml-auto user_box_s">
                                                                    <div className="user_box_login user_box_link user_box_a"> <span style={{ zIndex: 99 }} onClick={afficherConnexion}>
                                                                       Se Connecter
                                                                        </span>
                                                                    </div>
                                                                    <div className="user_box_register user_box_link user_box_a"><span onClick={afficherInscription}>
                                                                        S'Inscrire
                                                                        </span>
                                                                    </div>
                                                                </div>):(
                                                                  <div className="user_box_register user_box_a user_box_pdp" id="imgPdp" style ={{
                                                                    display: "flex"}}>
                                                                                               <img src={value.picture} alt="ImgPdp" id="pdpImage" />
                                                                                               {/* <a href="#" id="user_name " className='user_box_register user_box_a'> */}
                                                                                               <Dropdown style={{ color: "white" ,border: "none"}}>
                                                                                                <Dropdown.Toggle variant="" className="menuDropDownItem" style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.2)", border: "none" }}>
                                                                                                {value.name}
                                                                                                
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu style={{ color: "white", backgroundColor: "rgba(33, 33, 33, 0.3)" }}>
                                                                                                  <Dropdown.Item href="#/action-1" className="menuDropDownItem" onClick={logOut}>Se Déconnecter</Dropdown.Item>
                                                                                                  <Dropdown.Item href="#/action-2"  className="menuDropDownItem">Profil</Dropdown.Item>
                                                                                                  <Dropdown.Item href="#/action-3"  className="menuDropDownItem">Notification</Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                              </Dropdown>
                                                                                                                            
                                                                                               {/* </a> */}
                                                                                             </div>
                                                               )
                                                      }
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
                        export default NavBar;
