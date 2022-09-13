import React, { Component } from 'react'
import bg from '../../images/background8.jpg'
import demande from '../data/Demande'


export default class Demande extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="home">
                <img src={bg} alt="background demandes" className="home_background parallax-window"></img>
                <div className="home_content">
                <div className="home_title">Les demandes</div>
                </div>
                <div className="search_panel active2 col-lg-8">
                <form
                    action="#"
                    id="search_form_1"
                    className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
                    data-animation-in="flipInX"
                    data-animation-out="animate-out fadeOut"
                >
                    <div className="search_item">
                    
                    <input
                        type="text"
                        className="destination search_input"
                        required="required"
                        placeholder=" Départ"
                        style={{ fontFamily: "Arial, FontAwesome" }}
                    />
                    </div>
                    <div className="search_item">
                    
                    <input
                        type="text"
                        className="destination search_input"
                        required="required"
                        placeholder=" Destination"
                        style={{ fontFamily: "Arial, FontAwesome" }}
                    />
                    </div>
                    <div className="search_item">
                    
                    <input
                        type="datetime-local"
                        className="check_out search_input"
                        placeholder="Date | Heure"
                    />
                    </div>
                    <div className="search_item">
                    
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

            <div className="offers">
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
                                <span>Croissant</span>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <span className="sorting_text">Lieu</span>
                            <i className="fa fa-chevron-down" />
                            <ul>
                                <li
                                className="sort_btn"
                                data-isotope-option='{ "sortBy": "original-order" }'
                                >
                                <span>Tout afficher</span>
                                </li>
                                <li
                                className="sort_btn"
                                data-isotope-option='{ "sortBy": "name" }'
                                >
                                <span>Alphabétique</span>
                                </li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                        </div>
                        <div className="col-lg-12">
                            {/* Offers Grid */}
                            <div className="offers_grid">
                                {/* Offers Item */}
                            {demande.map((data) => {
                                
                                return(
                                <div className="offers_item rating_4" key={data.id}>
                                    <div className="row">
                                    <div className="col-lg-1 temp_col" />
                                    <div className="col-lg-3 col-1680-4">
                                        <div className="offers_image_container">
                                        
                                        <img src={data.image} className="offers_image_background" alt="carte" />
                                        <div className="offer_date_demande">
                                            <a href="index.html">{data.date} - {data.heure}</a>
                                        </div>
                                        <div className="demande_name">
                                            <a href="index.html">{data.depart} -{data.arrive}</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="offers_content">
                                        <div className="offers_price">{data.tarif}</div>
                                        <p className="offers_text">
                                            Recherche de covoitirage régulier en semaine pour 4
                                            personnes. Voiture propre et conducteur courtois requis.
                                        </p>
                                        <p className="offers_text">Centres d'intérêts: Musiques</p>
                                        <div className="offers_icons_demandes">
                                            <ul className="offers_icons_list">
                                                <li className="offers_icons_people">
                                                    <img src="images/people.png" alt="" />
                                                </li>
                                                <li className="offers_icons_people">
                                                    <img src="images/people.png" alt="" />
                                                </li>
                                                <li className="offers_icons_people">
                                                    <img src="images/people.png" alt="" />
                                                </li>
                                                <li className="offers_icons_people">
                                                    <img src="images/people.png" alt="" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="button book_button">
                                            <a href="index.html">
                                            Proposer
                                            <span />
                                            <span />
                                            <span />
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>)
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
      
      
    )
  }
}
