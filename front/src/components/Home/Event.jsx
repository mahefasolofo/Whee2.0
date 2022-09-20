import React, { Component } from "react";
import EventService from "../../services/EventService";
import { Link } from "react-router-dom";

import Moment from "react-moment";
import "moment/locale/fr";
Moment.globalLocale = "fr";

export default class Event extends Component {
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
      <div className="offers">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="section_title">Les évènements populaires</h2>
            </div>
          </div>
          <div className="row offers_items">
            {/* Offers Item */}
            {this.state.events.slice(0, 4).map((event, index) => (
              <div className="col-lg-6 offers_col" key={event.idEvent}>
                <div className="offers_item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="offers_image_container">
                        <div className="offers_overlay_separator"></div>
                        <div className="offers_overlay">
                          <div className="overlay-content">
                            <div className="button book_button">
                              <Link to={`/evenements/${event.idEvent}`}>
                                Voir plus
                                <span />
                                <span />
                                <span />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="offer_date">
                          <Moment format="Do MMMM YYYY">
                            {event.dateEvent}
                          </Moment>{" "}
                          {event.heureEvent.slice(0, -3)}
                        </div>
                        <img
                          src={event.image}
                          className="offers_image_background"
                        />
                        <div className="offer_name">
                          <a href="index.html">{event.lieuEvent}</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="offers_content">
                        <div className="offers_title">
                          {event.titre}
                          <span />
                        </div>
                        <div className={event.note}>
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                        <p className="offers_text">{event.description}</p>
                        <div className="offers_icons">
                          <ul className="offers_icons_list">
                            <li className="offers_icons_item">
                              {/* <img src={data.icone} alt="" /> */}
                            </li>
                          </ul>
                        </div>
                        {/* <div className="offers_link">
                          
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="test_border" />
        </div>
        
      </div>
    );
  }
}
