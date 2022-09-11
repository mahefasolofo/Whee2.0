import React, { Component } from 'react'

import '../styles/main_styles.css'
import logo from '../images/logo_4.png'
import '../styles/bootstrap4/bootstrap.min.css'


class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='header'>
                <nav className="main_nav">
                    <div className="container">
                        <div className="row">
                            <div className="col main_nav_col d-flex flex-row align-items-center justify-content-start">
                                <div className="logo_container">
                                    <div className="logo"><a href="#"><img src={logo} alt=""></img></a></div>
                                </div>
                                <div className="main_nav_container ml-auto">
                                    <ul className="main_nav_list">
                                        <li className="main_nav_item"><a href="index.html">Accueil</a></li>
                                        <li className="main_nav_item"><a href="offers.html">Offres</a></li>
                                        <li className="main_nav_item"><a href="demandes.html">Demandes</a></li>
                                        <li className="main_nav_item"><a href="blog.html">évènements</a></li>
                                        <li className="main_nav_item"><a href="#">à propos</a></li>
                                    </ul>
                                </div>
                                <div className="user_box ml-auto user_box_s">
                                    <div className="user_box_login user_box_link">Se connecter</div>
                                    <div className="user_box_register user_box_link">S'inscrire</div>
                                    
                                </div>
            
            
                                <form id="search_form" className="search_form bez_1">
                                    <input type="search" className="search_content_input bez_1"></input>
                                </form>
            
                                <div className="hamburger">
                                    <i className="fa fa-bars trans_200"></i>
                                </div>
                            </div>
                        </div>
                    </div>	
		        </nav>
            </div>
        )
    }
}

export default Navbar