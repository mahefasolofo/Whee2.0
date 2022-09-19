import React from 'react'
import bg from '../../images/background7.png'
import Offerlist from '../PublierOffre/Offerlist';
import {Component, useState, useEffect} from 'react';
import OfferService from '../../services/OfferService';



function Offre () {
  const afficherInscription=()=> {
    document.getElementById('formAnnonce').style.display='flex';    
  }
  const [recherche, setRecherche] = useState([]);
  const [recherche2, setRecherche2] = useState([]);

  const [response, setResponse] = useState([]);
  const [demande, setDemande] = useState(response);
  const [demandeSearch, setDemandeSearch]= useState([]);
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');


  const [displayDepart, setDisplayDepart] = useState(false);
  const [displayArrivee, setDisplayArrivee] = useState(false)
  let newMatchesDepart = [];
  let newMatchesArrivee = []
  useEffect(() => {
      const logUsers = async () => {

          const resp = await OfferService.getOffers()

          // console.log(resp.data);
          // setResponse(resp.data);
          setResponse(resp.data);
          setDemande(resp.data);
         
      }
       logUsers();

  }, []);

 

  const onChangeHandlerDepart = (text) => {
      let matchesDepart = [];
      matchesDepart = response.map((val, key) => {
          return val.ptDepart;
      }) 
      matchesDepart = [...new Set(matchesDepart)];


      if (text.length != "") {
         
          newMatchesDepart = matchesDepart.filter((element, key) => {
              if (element != null) {
                  if (element.toLowerCase().includes(text.toLowerCase())) {
                      return element;
                  }
              }
          })
          // matchesDepart = response.yfilter((element, index)=>{
          // const regex = new RegExp('${text}', "gi");
          // return response.match({text})
          // })
          setDisplayArrivee(false)
          setDisplayDepart(true)

      }


      setRecherche(newMatchesDepart)
      setText(text);
      console.log(recherche2);

  }
  const onChangeHandlerArrivee = (text2) => {

      let matchesArrivee = []
      matchesArrivee = response.map((val, key) => {
          return val.ptArrivee;
      })
      matchesArrivee = [...new Set(matchesArrivee)];


      for (let i = 0; i < response.length; i++) {
          if (matchesArrivee.indexOf(response[i].data) === -1) {
              matchesArrivee.push(response[i].data);
          }

      }
      if (text2.length != "") {
          function checkMatch(match) {
              return match.includes;
          }
          newMatchesArrivee = matchesArrivee.filter((element, key) => {
              if (element != null) {
                  if (element.toLowerCase().includes(text2.toLowerCase())) {
                      return element;
                  }
              }
          })
          // matchesArrivee = response.filter((element, index)=>{
          // const regex = new RegExp('${text}', "gi");
          // return response.match({text})
          // })
          setDisplayDepart(false);
          setDisplayArrivee(true);
      }


      setRecherche2(newMatchesArrivee)
      setText2(text2);
      console.log(recherche2);
  }
  const handleSearch=()=>{
    let elementSearched = [];
    setDemande([]);
    response.map((value, key)=>{
        if(value.ptDepart.includes(text)){
          setDemande(response);
          setDemande(demande => ({
            ...demande,
            ...response.filter((rsp) =>
            rsp.ptDepart.toLowerCase().includes(text.toLowerCase()))}));

          setDemande(response.filter((rsp) =>
          rsp.ptDepart.toLowerCase().includes(text.toLowerCase())));
        }else{
          console.log("tsy mety");
        }

    })
  }
  
    
    return (
      <React.Fragment>
          <div className="home_offre">
          <img className="home_background parallax-window" src={bg} alt="" />
          <div className="home_content">
            <div className="home_title" >Les offres</div>
          </div>
            <div className="search_panel_offre active_offre col-lg-8">
            <form
              action="#"
              id="search_form_1"
              className="search_panel_content_offre d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
              data-animation-in="flipInX"
              data-animation-out="animate-out fadeOut"
            >
              <div className="search_item_offre">
                {/* <i class="fa fa-map-marker" aria-hidden="true"></i> Départ */}
                <input
                  type="text"
                  className="destination search_input_offre"
                  required="required"
                  placeholder=" Départ"
                  style={{ fontFamily: "Arial, FontAwesome" }}
                />
              </div>
              <div className="search_item_offre">
                {/* <i class="fa fa-map-marker" aria-hidden="true"></i> Destination */}
                <input
                  type="text"
                  className="destination search_input_offre"
                  required="required"
                  placeholder=" Destination"
                  style={{ fontFamily: "Arial, FontAwesome" }}
                />
              </div>
              <div className="search_item_offre">
                {/* <i class="fa fa-calendar" aria-hidden="true"></i> Date / heure */}
                <input
                  type="datetime-local"
                  className="check_out search_input_offre"
                  placeholder="Date | Heure"
                />
              </div>
              <div className="search_item_offre">
                {/* <i class="fa fa-male" aria-hidden="true"></i> Personnes */}
                <select
                  name="adults"
                  id="adults_1"
                  className="dropdown_item_select search_input_offre"
                  placeholder="Personnes"
                >
                  <option value="">Passagers</option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                </select>
              </div>
              <button className="button search_button">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </form>
            </div>

            

          </div>

          <div className="offers_offre">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1 temp_col" />
                        <div className="col-lg-11">
                          {/* Offers Sorting */}
                          <div className="offers_sorting_container">
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
                                    <span>Croissante</span>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <span className="sorting_text">Localisation</span>
                                <i className="fa fa-chevron-down" />
                                <ul>
                                  <li
                                    className="sort_btn"
                                    data-isotope-option='{ "sortBy": "original-order" }'
                                  >
                                    <span>Décroissante</span>
                                  </li>
                                  <li className="sort_btn" data-isotope-option='{ "sortBy": "name" }'>
                                    <span>Croissante</span>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <span className="sorting_text">Note</span>
                                <i className="fa fa-chevron-down" />
                                <ul>
                                  <li className="filter_btn" data-filter="*">
                                    <span>Afficher tout</span>
                                  </li>
                                  <li className="sort_btn" data-isotope-option='{ "sortBy": "stars" }'>
                                    <span>Décroissante</span>
                                  </li>
                                  <li className="filter_btn" data-filter=".rating_3">
                                    <span>3</span>
                                  </li>
                                  <li className="filter_btn" data-filter=".rating_4">
                                    <span>4</span>
                                  </li>
                                  <li className="filter_btn" data-filter=".rating_5">
                                    <span>5</span>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <button className="button publier_button" onClick={afficherInscription} ><p>Publier une annonce</p></button>
                          </div>
                        </div>

                        <Offerlist/>
                           
                    </div>
                </div>

          </div>

       
        
        
      </React.Fragment>
        

      
    )
  }

export default Offre