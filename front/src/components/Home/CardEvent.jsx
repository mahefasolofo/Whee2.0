import React, { Component } from "react";
import Moment from "react-moment";
import "moment/locale/fr";
import { useNavigate } from "react-router-dom";

Moment.globalLocale = "fr";

function CardEvent(props) {
  let navigate = useNavigate();

  return (
    <div className="container py-2">
      {/* <div class="h1 text-center text-dark" id="pageHeaderTitle">My Cards Light</div> */}
      <article className="postcard light blue">
        <a className="postcard__img_link" href="#">
          <img
            className="postcard__img"
            src={props.event.image}
            alt="Image Title"
          />
        </a>
        <div className="postcard__text t-dark">
          <h1 className="postcard__title blue">
            <a
              onClick={() => {
                navigate(`/evenements/${props.event.idEvent}`);
              }}
            >
              {props.event.titre}
            </a>
          </h1>
          <div className="postcard__subtitle small">
            <i className="fas fa-calendar-alt mr-2" />
            <Moment format="Do MMMM YYYY">{props.event.dateEvent}</Moment>
            <br />
            <br />
            <i class="fa fa-clock-o" aria-hidden="true" />
            {props.event.heureEvent.slice(0, -3)}
          </div>
          <div className="postcard__bar" />
          <div className="postcard__preview-txt">{props.event.description}</div>

          <ul className="postcard__tagbox">
            <div className="button book_button">
              <a
                style={{ color: "white" }}
                onClick={() => {
                  navigate(`/evenements/${props.event.idEvent}`);
                }}
              >
                Covoiturages
                <span />
                <span />
                <span />
              </a>
            </div>
          </ul>
        </div>
      </article>
    </div>
  );
}

export default CardEvent;
