import React, { Component } from "react";
import bg from "../../images/event3.jpg";
import EventService from "../../services/EventService";

import Moment from "react-moment";
import "moment/locale/fr";
import CardEvent from "../Home/CardEvent";
Moment.globalLocale = "fr";

export default class ParticiperEvent extends Component {
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
        </div>
        {/* Blog */}
        <section
          className="light lightPadding"
          id="Section_List_Event"
        ></section>
      </div>
    );
  }
}
