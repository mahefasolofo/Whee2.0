import React, { useState, useEffect, useRef } from "react";
import bg from "../../images/event2.jpg";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import "moment/locale/fr";
import EventService from "../../services/EventService";
import AnnonceEvent from "./AnnonceEvent";
import CardEvent from "../Home/CardEvent";
import {
  LoadScript,
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Autocomplete,
} from "@react-google-maps/api";

const api = "AIzaSyDQLfoT69SVIMwn06NymNrSPw4qXKnm8ts";

const containerStyle = {
  width: "1100px",
  height: "500px",
  borderRadius: "10px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

Moment.globalLocale = "fr";

function ParticiperEvent() {
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const originRef = useRef();
  const destiantionRef =
    "No Comment BAR, Lalana Russie, Tananarive, Madagascar";

  async function calculateRoute() {
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }
  async function adressEvent() {
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: destiantionRef,
      destination: destiantionRef,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
  }

  let { idEvent } = useParams();
  const [annonce, setAnnonceEvent] = useState([]);
  const [event, setEvent] = useState(
    {titre:""}
  );

  useEffect(() => {
    getEventByid(idEvent);
  }, [idEvent]);

  const getEventByid = (id) => {
    EventService.getEventById(id).then((response) => {
      setAnnonceEvent(response.data);
      // setEvent({titre : annonce.event.titre})
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
          <div className="home_title">événement</div>          
        </div>
      </div>
      {/* Blog */}
      
      
      
          
      
      <section>
      {annonce.map((annonceE)=>(<AnnonceEvent key={annonceE.idCovoit} annonceEvent={annonceE} evenement={annonceE.event} vehicule={annonceE.vehicule}/>))}
      </section>
        
      <section className="card">
        <div className="container py-2">
          <button
            className="button book_button_blog "
            onClick={handleClick}
          ></button>
          <LoadScript googleMapsApiKey={api} libraries={["places"]}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
              onLoad={adressEvent}
            >
              <Marker position={center} />
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
              <Autocomplete>
                <div
                  className="card"
                  style={{
                    boxSizing: `border-box`,
                    border: `1px solid transparent`,
                    width: `500px`,
                    height: `200px`,
                    padding: `0 12px`,
                    opacity: show ? 0 : 1,
                    transition: "all 0.5s ease-in",
                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                    fontSize: `14px`,
                    outline: `none`,
                    textOverflow: `ellipses`,
                    position: "center",
                    left: "40%",
                    marginLeft: "-120px",
                    top: "2%",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Point de Départ..."
                    ref={originRef}
                  />
                  <button
                    colorScheme="red"
                    type="submit"
                    onClick={calculateRoute}
                  >
                    Votre Trajet
                  </button>
                </div>
              </Autocomplete>
              <></>
            </GoogleMap>
          </LoadScript>
        </div>
      </section>
    </div>
  );
}
export default React.memo(ParticiperEvent);
