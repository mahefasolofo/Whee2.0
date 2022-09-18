import React, { useState, useEffect } from "react";
import bg from "../../images/event2.jpg";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import "moment/locale/fr";
import EventService from "../../services/EventService";
Moment.globalLocale = "fr";

function ParticiperEvent() {
  let { idEvent } = useParams();
  const [event, setEvent] = useState([]);

  useEffect(() => {
    getEventByid(idEvent);
  }, [idEvent]);

  const getEventByid = (id) => {
    EventService.getEventById(id).then((response) => {
      setEvent(response.data);
      console.log(response.data);
    });
  };

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
          <div className="home_title">{event.titre}</div>
          <div className="home_title_dateTime">
            <i className="fas fa-calendar-alt mr-2" />
            <Moment format="Do MMMM YYYY">{event.dateEvent}</Moment>
            <span> - </span>
            <i class="fa fa-clock-o" aria-hidden="true" />
            {event.heureEvent}
          </div>
        </div>
      </div>
      {/* Blog */}
      <section className="light lightPadding" id="Section_List_Event"></section>
    </div>
  );
}
export default ParticiperEvent;
