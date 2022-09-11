import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../styles/bootstrap4/bootstrap.min.css'
import '../styles/main_styles.css'
import bg1 from '../images/Itaosy.png'
import bg2 from '../images/Faravohitra.png'
import bg3 from '../images/analakely.png'


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function Essai() {
  return (
    <React.Fragment>
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
                        <a href="#">
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
                        Que vous soyez adeptes de rock torrides ou des tendres mélodies
                        de la musique acoustique traditionnelle, vous serrez ébahis par
                        la passion de votre compagnon de covoiturage.
                    </p>
                    <div className="button cta_button">
                        <div className="button_bcg" />
                        <a href="#">
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
                        Le sport est mieux si on a d'autres personnes à qui le partager.
                        Le covoiturage aussi. Le "match" est vite fait!
                    </p>
                    <div className="button cta_button">
                        <div className="button_bcg" />
                        <a href="#">
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
                        <stop offset="0%" stopColor="#fa9e1b" />
                        <stop offset="100%" stopColor="#8d4fff" />
                        </linearGradient>
                    </defs>
                    <path
                        className="nav_path"
                        fill="#F3F6F9"
                        d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                                        M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                                        C22.545,2,26,5.541,26,9.909V23.091z"
                    />
                    <polygon
                        className="nav_arrow"
                        fill="#F3F6F9"
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
                        <stop offset="0%" stopColor="#fa9e1b" />
                        <stop offset="100%" stopColor="#8d4fff" />
                        </linearGradient>
                    </defs>
                    <path
                        className="nav_path"
                        fill="#F3F6F9"
                        d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                                    M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                                    C22.545,2,26,5.541,26,9.909V23.091z"
                    />
                    <polygon
                        className="nav_arrow"
                        fill="#F3F6F9"
                        points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
                                    17.046,15.554 "
                    />
                    </svg>
                </div>
                </div>
    </React.Fragment>
    
  )
}

export default Essai
