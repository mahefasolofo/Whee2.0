import React, { useState, useContext, useRef } from "react";
import TrajetInfo from "./TrajetInfo";
import Moment from "react-moment";
import { UserContext } from "../../services/UserContext";
import DateHourInfo from "./DateHourInfo";
import VehiculeInfo from "./VehiculeInfo";
import AnnonceCovoiturageService from "../../services/AnnonceCovoiturageService";
import {
  LoadScript,
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Autocomplete,
} from "@react-google-maps/api";

const api = "AIzaSyDQLfoT69SVIMwn06NymNrSPw4qXKnm8ts";
const center = {
  lat: -18.90341,
  lng: 47.52123,
};

const containerStyle = {
  width: "740px",
  height: "420px",
  borderRadius: "10px",
};

function DemandeOffre({ info }) {
  const [page, setPage] = useState(0);
  let idCurrentUser = useContext(UserContext);
  var idUSER = parseInt(idCurrentUser);
  const [formData, setFormData] = useState({
    ptDepart: "",
    ptArrivee: "",
    heureCovoit: "",
    dateCovoit: "",
  });
  const originRefVal = info.ptDepart;
  const destinationRefval = info.ptArrivee;

  const close = () => {
    document.getElementById("demandeAnnonce").style.display = "none";
  };
  const close2 = () => {
    document.getElementById("demandeAnnonce2").style.display = "none";
  };

  const FormTitles = [
    "Date et heure de Départ",
    "Renseignements sur le véhicule",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <DateHourInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <VehiculeInfo formData={formData} setFormData={setFormData} />;
    }
  };

  /*Google Map use */

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  // function clearRoute() {
  //   setDirectionsResponse(null);
  //   setDistance("");
  //   setDuration("");
  //   originRef.current.value = ""
  //   destinationRef.current.value = "";
  // }

  async function calculateRoute(depart, arrivee) {
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: depart,
      destination: arrivee,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  // const centerRef = useRef();
  // async function adressCenter() {
  //   // eslint-disable-next-line no-undef
  //   const directionsService = new google.maps.DirectionsService();
  //   const results = await directionsService.route({
  //     origin: centerRef,
  //     destination: centerRef,
  //     // eslint-disable-next-line no-undef
  //     travelMode: google.maps.TravelMode.DRIVING,
  //   });
  //   setDirectionsResponse(results);
  //   setDistance(results.routes[0].legs[0].distance.text);
  //   setDuration(results.routes[0].legs[0].duration.text);
  // }

  async function continuer() {
    document.getElementById("demandeAnnonce").style.display = "none";
    document.getElementById("demandeAnnonce2").style.display = "flex";
  }

  /* End of Google Map stuff */
  return (
    <div>
      <div className="modalBackground" id="demandeAnnonce2">
        <div className="modalContainer">
          <div className="modalHeader">
            <h1>Publier une annonce</h1>
          </div>
          <div className="titleCloseBtn">
            <button onClick={close2}>
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            </button>
          </div>
          <div className="container">
            <div className="progressbar">
              <div
                style={{
                  width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
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
                  Précédent
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    if (page === FormTitles.length - 1) {
                      AnnonceCovoiturageService.publierAnnonce(formData);
                      console.log(formData);
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

      <div className="form_event_background" id="demandeAnnonce">
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
              <h1>Trajet</h1>
              <div className="postcard__bar" />
            </div>

            <LoadScript googleMapsApiKey={api} libraries={["places"]}>
              <div className="google_map_form">
                <div className="gauche">
                  <div>
                    <label>Point de départ</label>
                    <input
                      type="text"
                      value={originRefVal}
                      className="input_ptDepart"
                      disabled="disable"
                    />
                  </div>

                  <div>
                    <label>Point d'arrivée</label>
                    <input
                      type="text"
                      value={destinationRefval}
                      className="input_ptDepart"
                      disabled="disable"
                    />
                    {/* <label>Date</label>
                                  <input type="text" value={dateFormate.text} className="input_ptDepart" />
                                  <label>Heure</label>
                                  <input type="hour" placeholder={info.heureCovoit} className="input_ptDepart"/> */}
                    {/* <button className="btn btn-primary" type="submit" onClick={calculateRoute(originRefVal,destinationRefval)}>Valider le trajet</button> */}
                    <button className="btn btn-primary" onClick={continuer}>
                      Continuer
                    </button>
                  </div>
                </div>
                <div className="droite">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={calculateRoute(originRefVal, destinationRefval)}
                    zoom={5}
                    options={{
                      zoomControl: false,
                      streetViewControl: false,
                      mapTypeControl: false,
                      fullscreenControl: false,
                    }}
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

export default DemandeOffre;
