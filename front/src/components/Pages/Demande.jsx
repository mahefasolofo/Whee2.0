import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import { set } from "react-hook-form";
import bg from "../../images/background8.jpg";
import Moment from "react-moment";
import DemandeService from "../../services/DemandeService";
import peopletimg from "../../images/people.png";
import DemandeOffre from "../PublierOffre/DemandeOffre";

function Demande() {
  const afficherInscription=()=> {
    document.getElementById('formAnnonce').style.display='flex';    
  }
  const [recherche, setRecherche] = useState([]);
  const [recherche2, setRecherche2] = useState([]);

  const [response, setResponse] = useState([]);
  const [demande, setDemande] = useState(response);
  const [demandeSearch, setDemandeSearch] = useState([]);
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [formData, setFormData] = useState({
    ptDepart: "",
    ptArrivee: "",
    heureCovoit: "",
    dateCovoit: "",
  });

  const destinationRef = formData.ptArrivee;
  const originRef = formData.ptDepart;

  const interet = "musique , sport, voyage";
  const [displayDepart, setDisplayDepart] = useState(false);
  const [displayArrivee, setDisplayArrivee] = useState(false);
  let newMatchesDepart = [];
  let newMatchesArrivee = [];

  useEffect(() => {
    const logDemandes = async () => {
      const resp = await DemandeService.getDemandes();

      // console.log(resp.data);
      // setResponse(resp.data);
      setResponse(resp.data);
      setDemande(resp.data);
    };
    logDemandes();
  }, []);

  const onChangeHandlerDepart = (text) => {
    let matchesDepart = [];
    matchesDepart = response.map((val, key) => {
      return val.ptDepart;
    });
    matchesDepart = [...new Set(matchesDepart)];

    if (text.length != "") {
      newMatchesDepart = matchesDepart.filter((element, key) => {
        if (element != null) {
          if (element.toLowerCase().includes(text.toLowerCase())) {
            return element;
          }
        }
      });
      // matchesDepart = response.yfilter((element, index)=>{
      // const regex = new RegExp('${text}', "gi");
      // return response.match({text})
      // })
      setDisplayArrivee(false);
      setDisplayDepart(true);
    }

    setRecherche(newMatchesDepart);
    setText(text);
    console.log(recherche2);
  };
  const onChangeHandlerArrivee = (text2) => {
    let matchesArrivee = [];
    matchesArrivee = response.map((val, key) => {
      return val.ptArrivee;
    });
    matchesArrivee = [...new Set(matchesArrivee)];

    if (text2.length != "") {
      newMatchesArrivee = matchesArrivee.filter((element, key) => {
        if (element != null) {
          if (element.toLowerCase().includes(text2.toLowerCase())) {
            return element;
          }
        }
      });
      // matchesArrivee = response.filter((element, index)=>{
      // const regex = new RegExp('${text}', "gi");
      // return response.match({text})
      // })
      setDisplayDepart(false);
      setDisplayArrivee(true);
    }

    setRecherche2(newMatchesArrivee);
    setText2(text2);
    console.log(recherche2);
  };
  const handleSearch = () => {
    let elementSearched = [];
    setDemande([]);
    response.map((value, key) => {
      if (value.ptDepart.includes(text)) {
        setDemande(response);
        setDemande((demande) => ({
          ...demande,
          ...response.filter((rsp) =>
            rsp.ptDepart.toLowerCase().includes(text.toLowerCase())
          ),
        }));

        setDemande(
          response.filter((rsp) =>
            rsp.ptDepart.toLowerCase().includes(text.toLowerCase())
          )
        );
      } else {
        console.log("tsy mety");
      }
    });
  };
  /*ouverture demandeOffre */
  const afficherDemandeOffre = (depart, arrivee, date, heure) => {
    document.getElementById("demandeAnnonce").style.display = "flex";
    setFormData({
      ...formData,
      ptDepart: depart,
      ptArrivee: arrivee,
      dateCovoit: date,
      heureCovoit: heure,
    });
  };

  return (
    <React.Fragment>
      <DemandeOffre info={formData} />
      <div className="home_offre">
        <img
          src={bg}
          alt="background demandes"
          className="home_background parallax-window"
        ></img>
        <div className="home_content">
          <div className="home_title">Les demandes</div>
        </div>
        <div className="search_panel_offre active_offre col-lg-8">
          <form
            action="#"
            id="search_form_1"
            className="search_panel_content_offre d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
            data-animation-in="flipInX"
            data-animation-out="animate-out fadeOut"
          >
            

            <div className="search_item">
              <input
                type="text"
                className="destination search_input search_input_first"
                required="required"
                placeholder=" Départ"
                style={{ fontFamily: "Arial, FontAwesome" }}
                onChange={(e) => onChangeHandlerDepart(e.target.value)}
                value={text}
              />{" "}
              {displayDepart == false ? null : (
                <div className="autoCompletionDiv">
                  {recherche.map(function (v, i) {
                    return (
                      <div className="searchAutocompletion" key={v.id}>
                        {/* imprimez le nom de l'élément */}
                        <span
                          onClick={(e) => (
                            onChangeHandlerDepart(v), setDisplayDepart(false)
                          )}
                          className="searchAutocompletionValue"
                          value={v}
                        >
                          <i class="fa fa-map-marker"></i>
                          {v}
                        </span>
                      </div>
                    );
                  })}{" "}
                </div>
              )}{" "}
            </div>
            <div className="search_item">
              <input
                type="text"
                className="destination search_input"
                required="required"
                placeholder=" Destination"
                onChange={(e) => onChangeHandlerArrivee(e.target.value)}
                style={{ fontFamily: "Arial, FontAwesome" }}
                value={text2}
              />{" "}
              {displayArrivee == false ? null : (
                <div className="autoCompletionDiv">
                  {/* parcourez le tableau */}
                  {recherche2.map(function (v, i) {
                    return (
                      <div className="searchAutocompletion" key={v.id}>
                        {/* imprimez le nom de l'élément */}
                        <span
                          onClick={(e) => (
                            onChangeHandlerArrivee(v), setDisplayArrivee(false)
                          )}
                          className="searchAutocompletionValue"
                          value={v}
                        >
                          <i class="fa fa-map-marker"></i>
                          {v}
                        </span>
                      </div>
                    );
                  })}{" "}
                </div>
              )}{" "}
            </div>
            <div className="search_item">
              <input
                type="datetime-local"
                className="check_out search_input"
                placeholder="Date | Heure"
              />
            </div>
            <div className="search_item">
              <select
                name="adults"
                id="adults_1"
                className="dropdown_item_select search_input"
                placeholder="Personnes"
              >
                <option value="">Passagers</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
              </select>
            </div>
            <button
              className="button search_button"
              onClick={(e) => handleSearch()}
            >
              <i className="fa fa-search" aria-hidden="true" />
            </button>

            {/* <button
              className="button search_button"
              onClick={(e) => handleSearch()}
            >
              <i className="fa fa-search" aria-hidden="true" />
            </button> */}
          </form>
        </div>
      </div>

      <div className="offers_offre">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 temp_col" />
            <div className="col-lg-11">
              {/* Offers Sorting */}
              {/* <div className="offers_sorting_container">
                <ul className="offers_sorting">
                  <li>
                    <span className="sorting_text">Prix</span>
                    <i className="fa fa-chevron-down" />
                    <ul>
                      <li
                        className="sort_btn"
                        data-isotope-option='{ "sortBy": "original-order" }'
                        data-parent=".price_sorting"
                      >
                        <span>Tout afficher</span>
                      </li>
                      <li
                        className="sort_btn"
                        data-isotope-option='{ "sortBy": "price" }'
                        data-parent=".price_sorting"
                      >
                        <span>Croissant</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="sorting_text">Lieu</span>
                    <i className="fa fa-chevron-down" />
                    <ul>
                      <li
                        className="sort_btn"
                        data-isotope-option='{ "sortBy": "original-order" }'
                      >
                        <span>Tout afficher</span>
                      </li>
                      <li
                        className="sort_btn"
                        data-isotope-option='{ "sortBy": "name" }'
                      >
                        <span>Alphabétique</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div> */}
            </div>
            <button className="button publier_button" onClick={afficherInscription} ><p>Publier une annonce</p></button>
            <div className="col-lg-12">
              {/* Offers Grid */}

              <div className="offers_grid">
                {/* Offers Item */}
                {demande.map((val, key) => {
                  return (
                    <div className="GridOffre" key={val.id}>
                      <div className="offers_item rating_4">
                        <div className="row">
                          <div className="col-lg-2" />
                          <div className="col-lg-2">
                            <div className="ImageContainer">
                              <img
                                className="offersPimagebackground"
                                src={val.covoitureur.photo}
                                alt="user"
                              />

                              <div className="offerNameDriver">
                                {val.covoitureur.nom} {val.covoitureur.prenom}
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="offersContent">
                              <div className="offersPrice">
                                {val.ptDepart.split(",").slice(0, 1)} -{" "}
                                {val.ptArrivee.split(",").slice(0, 1)}{" "}
                              </div>
                              <div className="offerReviews">
                                <div className="offerReviews_content">
                                  <div className="offerReviews_title">
                                    <i className="fas fa-calendar-alt mr-2" />
                                    <Moment format="Do MMMM YYYY">
                                      {val.dateCovoit}
                                    </Moment>
                                    <br />
                                    <br />

                                    <i
                                      class="fa fa-clock-o"
                                      aria-hidden="true"
                                    />
                                    {val.heureCovoit}
                                  </div>
                                </div>
                              </div>
                              <div className="seat_nb seat_offre">
                                <span>{val.nbPersonne}</span>{" "}
                                <img
                                  src={peopletimg}
                                  className="seat_img"
                                  alt=""
                                />
                              </div>
                              <p className="offersText">
                                Centres d'intérêts : {interet}
                              </p>
                              <div
                                className="button book_button_demande"
                                onClick={() =>
                                  afficherDemandeOffre(
                                    val.ptDepart,
                                    val.ptArrivee,
                                    val.dateCovoit,
                                    val.heureCovoit
                                  )
                                }
                              >
                                {" "}
                                {/*onClick={afficherDemandeOffre(val.ptDepart,val.ptArrivee)}*/}
                                <a>
                                  Proposer
                                  <span />
                                  <span />
                                  <span />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Demande;
