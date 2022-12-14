import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../services/UserContext";

import AnnonceCovoiturageService from "../../services/AnnonceCovoiturageService";
import DateHourInfo from "../PublierOffre/DateHourInfo";
import VehiculeInfo from "../PublierOffre/VehiculeInfo";
import {
  LoadScript,
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Autocomplete,
} from "@react-google-maps/api";

const api = "AIzaSyDQLfoT69SVIMwn06NymNrSPw4qXKnm8ts";
const center = {
  lat: -3.745,
  lng: -38.523,
};

const containerStyle = {
  width: "740px",
  height: "420px",
  borderRadius: "10px",
};

function EventForm({ ArrEvent }) {
  /*Google Map use */

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  let idCurrentUser = useContext(UserContext);

  const originRef = useRef();
  const destiantionRef = ArrEvent;
  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
  }

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

  async function continuer() {
    setFormData({
      ...formData,
      ptDepart: originRef.current.value,
      ptArrivee: destiantionRef,
      covoitureur: {
        idUser: idCurrentUser,
      },
    });
    document.getElementById("EventAnnonce").style.display = "none";
    document.getElementById("EventAnnonce2").style.display = "flex";
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

  /* End of Google Map stuff */

  /* Manipulation du formulaire */

  let navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    ptDepart: "",
    ptArrivee: "",
    heureCovoit: "",
    dateCovoit: "",
    image: null,
    event: null,
    tarif: "",
    nbPlace: "",
    covoitureurs: [],
    vehicule: {
      idVehicule: "",
    },
    covoitureur: {
      idUser: "",
    },
  });

  const close = () => {
    document.getElementById("EventAnnonce").style.display = "none";
  };

  const close2 = () => {
    document.getElementById("EventAnnonce2").style.display = "none";
  };

  const FormTitles = [
    "Date et heure de D??part",
    "Renseignements sur le v??hicule",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <DateHourInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <VehiculeInfo formData={formData} setFormData={setFormData} />;
    }
  };

  /* Fin manipulation formulaire */

  return (
    <div>
      <div className="modalBackground" id="EventAnnonce2">
        <div className="modal_container">
          <div className="modalHeader">
            <h1>Publier une annonce</h1>
          </div>
          <div className="titleCloseBtn">
            <button onClick={close2}>
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            </button>
          </div>

          <div className="modal_Form">
            <div className="progressbar">
              <div
                style={{
                  width: page === 0 ? "200px" : page === 1 ? "400px" : "600px",
                  heigh: "5px",
                }}
              ></div>
            </div>
            <div className="form-container">
              <div className="headerF">
                <h1>{FormTitles[page]}</h1>
              </div>
              <div className="bodyF">{PageDisplay()}</div>
              <div className="footerF">
                <button
                  className="btn btn-primary"
                  disabled={page === 0}
                  onClick={() => {
                    setPage((currPage) => currPage - 1);
                  }}
                >
                  Pr??c??dent
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    if (page === FormTitles.length - 1) {
                      AnnonceCovoiturageService.publierAnnonce(formData);
                      navigate(`/espaceperso/${formData.covoitureur.idUser}`);
                      close();
                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }}
                >
                  {page === FormTitles.length - 1 ? "Publier" : "Suivant"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form_event_background" id="EventAnnonce">
        <div className="modal_container">
          <div className="modalHeader">
            <h1>Publier une annonce</h1>
          </div>
          <div className="titleCloseBtn">
            <button onClick={close}>
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            </button>
          </div>

          <div className="form_event_container">
            <div className="headerF">
              <h1>Votre trajet?</h1>
              <div className="postcard__bar" />
            </div>

            <LoadScript googleMapsApiKey={api} libraries={["places"]}>
              <div className="google_map_form">
                <div className="gauche">
                  <Autocomplete>
                    <div>
                      <label>Point de d??part</label>
                      <input
                        type="text"
                        placeholder="Point de D??part..."
                        ref={originRef}
                        className="input_ptDepart"
                        onChange={calculateRoute}
                      />
                      <label>Point d'arriv??e</label>
                      <input
                        type="text"
                        value={ArrEvent}
                        disabled="disabled"
                        className="input_ptDepart"
                      />
                      {/* <button className="btn btn-primary" type="submit" onClick={calculateRoute}>Valider le trajet</button> */}
                      <div className="div_info_sup_event">
                        <p className="info_sup">
                          <i
                            className="fa fa-globe info_sup_label"
                            aria-hidden="true"
                          >
                            {" "}
                          </i>{" "}
                          {distance}{" "}
                        </p>
                        <p className="info_sup">
                          <i
                            class="fa fa-clock-o info_sup_label"
                            aria-hidden="true"
                          >
                            {" "}
                          </i>{" "}
                          {duration}
                        </p>
                      </div>
                      <button className="btn btn-primary" onClick={continuer}>
                        Continuer
                      </button>
                    </div>
                  </Autocomplete>
                </div>
                <div className="droite">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={5}
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
                  </GoogleMap>
                </div>
              </div>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventForm;
