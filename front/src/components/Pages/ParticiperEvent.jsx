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

      <div className="card">
        <div className="container py-2">
          <div className="row">
            <div className="col-lg-9 ">
              <div className="postcard__text t-dark">
                <h1 className="postcard__title blue">
                  <a>{event.titre}</a>
                </h1>
                <div className="postcard__subtitle small">
                  <i className="fas fa-calendar-alt mr-2" />
                  <Moment format="Do MMMM YYYY">{event.dateEvent}</Moment>
                  <br />
                  <br />
                  <i class="fa fa-clock-o" aria-hidden="true" />
                  {event.heureEvent}
                </div>
                <div className="postcard__bar" />
                <div className="postcard__preview-txt">{event.description}</div>

                <ul className="postcard__tagbox">
                  <div className="button book_button">
                    <a style={{ color: "white" }}>
                      Covoiturages
                      <span />
                      <span />
                      <span />
                    </a>
                  </div>
                </ul>
              </div>
            </div>
            <div className="col-lg-3  ">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src={event.image}
                  alt="Image Title"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ParticiperEvent;
