import React, { Component } from 'react'
import bg from '../../images/background7.png'
import offre from '../data/Offre'


export default class Offre extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="home_offre">
          <img className="home_background parallax-window" src={bg} alt="" />
          <div className="home_content">
            <div className="home_title">Les offres</div>
          </div>
            <div className="search_panel_offre active_offre col-lg-8">
            <form
              action="#"
              id="search_form_1"
              className="search_panel_content_offre d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
              data-animation-in="flipInX"
              data-animation-out="animate-out fadeOut"
            >
              <div className="search_item_offre">
                {/* <i class="fa fa-map-marker" aria-hidden="true"></i> Départ */}
                <input
                  type="text"
                  className="destination search_input_offre"
                  required="required"
                  placeholder=" Départ"
                  style={{ fontFamily: "Arial, FontAwesome" }}
                />
              </div>
              <div className="search_item_offre">
                {/* <i class="fa fa-map-marker" aria-hidden="true"></i> Destination */}
                <input
                  type="text"
                  className="destination search_input_offre"
                  required="required"
                  placeholder=" Destination"
                  style={{ fontFamily: "Arial, FontAwesome" }}
                />
              </div>
              <div className="search_item_offre">
                {/* <i class="fa fa-calendar" aria-hidden="true"></i> Date / heure */}
                <input
                  type="datetime-local"
                  className="check_out search_input_offre"
                  placeholder="Date | Heure"
                />
              </div>
              <div className="search_item_offre">
                {/* <i class="fa fa-male" aria-hidden="true"></i> Personnes */}
                <select
                  name="adults"
                  id="adults_1"
                  className="dropdown_item_select search_input_offre"
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

          <div className="offers_offre">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1 temp_col" />
                        <div className="col-lg-11">
                          {/* Offers Sorting */}
                          <div className="offers_sorting_container">
                            <ul className="offers_sorting">
                              <li>
                                <span className="sorting_text">Prix</span>
                                <i className="fa fa-chevron-down" />
                                <ul>
                                  <li
                                    className="sort_btn"
                                    data-isotope-option='{ "sortBy": "original-order" }'
                                    data-parent=".price_sorting"
                                  >
                                    <span>Tout afficher</span>
                                  </li>
                                  <li
                                    className="sort_btn"
                                    data-isotope-option='{ "sortBy": "price" }'
                                    data-parent=".price_sorting"
                                  >
                                    <span>Croissante</span>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <span className="sorting_text">Localisation</span>
                                <i className="fa fa-chevron-down" />
                                <ul>
                                  <li
                                    className="sort_btn"
                                    data-isotope-option='{ "sortBy": "original-order" }'
                                  >
                                    <span>Décroissante</span>
                                  </li>
                                  <li className="sort_btn" data-isotope-option='{ "sortBy": "name" }'>
                                    <span>Croissante</span>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <span className="sorting_text">Note</span>
                                <i className="fa fa-chevron-down" />
                                <ul>
                                  <li className="filter_btn" data-filter="*">
                                    <span>Afficher tout</span>
                                  </li>
                                  <li className="sort_btn" data-isotope-option='{ "sortBy": "stars" }'>
                                    <span>Décroissante</span>
                                  </li>
                                  <li className="filter_btn" data-filter=".rating_3">
                                    <span>3</span>
                                  </li>
                                  <li className="filter_btn" data-filter=".rating_4">
                                    <span>4</span>
                                  </li>
                                  <li className="filter_btn" data-filter=".rating_5">
                                    <span>5</span>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>

                        
                            <div className="col-lg-12" >
                              <div className="offers_grid">
                                {offre.map((data) => {
                                  return(
                                      <div className="offers_item rating_4" key={data.id}>
                                          <div className="row">
                                            
                                            <div className="col-lg-3 ">
                                              <div className="offers_image_container">
                                                <div
                                                  className="offers_image_background"
                                                  style={{ backgroundImage: "url(images/car1.jpg)" }}
                                                />
                                                <div className="offer_name_driver">
                                                  <a href="#">Daniel</a>
                                                </div>
                                                <div className="offer_name_car">
                                                  <a href="#">Volkswagen Golf VII</a>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-lg-5">
                                              <div className="offers_content">
                                                <div className="offers_price">10 €</div>
                                                <div className="rating_r rating_r_4 offers_rating" data-rating={4}>
                                                  <i />
                                                  <i />
                                                  <i />
                                                  <i />
                                                  <i />
                                                </div>
                                                <p className="offers_text">
                                                  Trajet régulier en semaine. 4 places disponibles. Voiture propre,
                                                  conducteur courtois.
                                                </p>
                                                <p className="offers_text">
                                                  Centres d'intérêts : <span>Musique, Rock</span>|
                                                  <span>Sport, Basketball</span>
                                                </p>
                                                <div className="offers_icons">
                                                  <ul className="offers_icons_list">
                                                    <li className="offers_icons_item">
                                                      <img src="images/seat3.png" alt="" />
                                                    </li>
                                                    <li className="offers_icons_item">
                                                      <img src="images/seat3.png" alt="" />
                                                    </li>
                                                    <li className="offers_icons_item">
                                                      <img src="images/seat3.png" alt="" />
                                                    </li>
                                                    <li className="offers_icons_item">
                                                      <img src="images/seat3.png" alt="" />
                                                    </li>
                                                  </ul>
                                                </div>
                                                <div className="button book_button">
                                                  <a href="#">
                                                    Réserver
                                                    <span />
                                                    <span />
                                                    <span />
                                                  </a>
                                                </div>
                                                <div className="offer_reviews">
                                                  <div className="offer_reviews_content">
                                                    <div className="offer_reviews_title">Bien</div>
                                                    <div className="offer_reviews_subtitle">26 avis</div>
                                                  </div>
                                                  <div className="offer_reviews_rating text-center">8.1</div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-lg-3 col-1680-4">
                                              <div className="offers_image_container">
                                                <div
                                                  className="offers_image_background"
                                                  style={{ backgroundImage: "url(images/Faravohitra.png)" }}
                                                />
                                                <div className="offer_date">
                                                  <a href="#">03 octobre 2022 - 07:00</a>
                                                </div>
                                                <div className="offer_name">
                                                  <a href="#">Ankorondrano -Faravohitra</a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                      </div>
                
                          

                          )})}
                            </div>
                          </div>
                    </div>
                </div>

          </div>

       
        
        
      </React.Fragment>
        

      
    )
  }
}
