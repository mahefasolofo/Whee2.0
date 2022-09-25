import React, { Component } from 'react'


export default class Carousel extends Component {
  render() {
    return (

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
              <div className="search_panel active col-lg-8" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                <form
                  action="index.html"
                  id="search_form_11"
                  className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
                  data-animation-in="flipInX"
                  data-animation-out="animate-out fadeOut"
                >
                  <div className="search_item" >
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
                      id="adults_3"
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
              <div className="search_panel active col-lg-8" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                <form
                  action="index.html"
                  id="search_form_5"
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
              <div className="search_panel active col-lg-8" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                <form
                  action="index.html"
                  id="search_form_2"
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
              fill="white"

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
              fill="white"
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

    )
  }
}
