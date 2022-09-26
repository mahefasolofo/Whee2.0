import React, { Component } from "react";
import bg from "../../images/event2.jpg";
import EventService from "../../services/EventService";

import Moment from "react-moment";
import "moment/locale/fr";
import CardEvent from "../Home/CardEvent";
Moment.globalLocale = "fr";

export default class Evenements extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    };
  }
  componentDidMount() {
    EventService.getEvents().then((res) => {
      this.setState({ events: res.data });
    });
  }
  render() {
    return (
      <div className="super_container">
        {/* Home */}
        <div className="home_offre">
          <img
            className="home_background parallax-window"
            data-parallax="scroll"
            src={bg}
          ></img>
          <div className="home_content">
            <div className="home_title">Les évènements</div>
          </div>
          <div className="search_panel_offre active col-lg-8">
            <form
              action="#"
              id="search_form_1"
              className="search_panel_content_offre d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
              data-animation-in="flipInX"
              data-animation-out="animate-out fadeOut"
            >
              <div className="search_item">
                {/* <i class="fa fa-map-marker" aria-hidden="true"></i> Départ */}
                <input
                  type="text"
                  className="destination search_input search_input_first"
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
                  className="check_out search_input search_input_last"
                  placeholder="Date | Heure"
                />
              </div>
              <button className="button search_button">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
        {/* Blog */}
        <section className="light lightPadding" id="Section_List_Event">
          {this.state.events.map((event, index) => (
            <CardEvent event={event} key={event.idEvent} />
          ))}
        </section>
      </div>
    );
  }
}
