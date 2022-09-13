import React from 'react'
import trajet from '../data/Trajet'


function Trajet() {
  return (
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
                        {trajet.map((data) => {
                        return(
                            <div className="cardIntro" key={data.idCovoiturage}>
                                <div
                                className="card-img">
                                <img src={data.image} alt="" />
                                <div className="overlay">
                                    <div className="overlay-content">
                                    <a className="hover" href="#!">
                                        Voir Plus
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="card-content">
                                <a href="#!">
                                    <h1 className="text-center">
                                    <i className="fa fa-street-view" aria-hidden="true" /> {data.depart}
                                    </h1>
                                    <h1 className="text-center">
                                    <i className="fa fa-map-marker" aria-hidden="true" /> {data.arrive}
                                    </h1>
                                    <h2 className="text-center">environ {data.prix} MGA</h2>
                                </a>
                                </div>
                            </div>
                        )
                    })}
                         
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
  )
}

export default Trajet
