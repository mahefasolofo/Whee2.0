import React, { Component } from 'react'
import bg from '../../images/background7.png'



export default class Offre extends Component {
  render() {
    return (
        <div className="home_offre">
        <div
        //   className="home_offre_background parallax-window"
        //   data-parallax="scroll"
        //   data-image-src={bg}
        />
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
      
    )
  }
}
