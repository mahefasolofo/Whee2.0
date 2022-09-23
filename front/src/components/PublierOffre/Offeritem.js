import React, { useContext } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import carimg from "../../images/car1.jpg";
import profimg from "../../images/photoProfil.jpg";
import Moment from "react-moment";
import { SocketContext } from "../../services/SocketContext";

import seatimg from '../../images/seat3.png'
import DetailsOffre from './DetailsOffre' 
import Offre from "../Pages/Offre";


let Sock = new SockJS("http://localhost:8090/ws");
var stompClient = over(Sock);

const Offeritem = ({ offer, compte, vehicule }) => {
  const afficherDetail = () => {
    document.getElementById("detailOffreReservation").style.display = "flex";
  };

  const {
    userData,
    setUserData,
    privateChats,
    setPrivateChats,
    tab,
    setTab,
    publicChats,
    setPublicChats,
  } = useContext(SocketContext);

  const sendValueEvent = () => {
    if (stompClient) {
      var chatMessage = {
        senderName: userData.username,
        message: " vient de reserver un truc",
        status: "MESSAGE",
      };
      console.log(chatMessage);
      stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: "" });
    }
  };

  const interet = "musique , sport, voyage";
  const avis = "26 avis";
  const { nom, prenom, photo } = compte;
  const { modele, marque, noteVehicule } = vehicule;
  const { nbPlace, tarif, dateCovoit } = offer;

  let depart = offer.ptDepart;
  let arrivee = offer.ptArrivee;

  let vehiculephoto = vehicule.vehiculePhoto;
  let t = offer.heureCovoit;
  let d = depart.split(",").slice(0, 1);
  let a = arrivee.split(",").slice(0, 1);


  let o = offer;
  let c= offer.covoitureur;
  let v= offer.vehicule;


  return (
    <div className="col-lg-12">
      
      <div className="GridOffre">
        <div className="offersItem rating_3">
          <div className="rowF">
            <div className="col-lg-3 ">
              <div className="ImageContainer">

                <img
                  className="offersPimagebackground"
                  src={photo}
                  alt="user"
                />
                
                

                <div className="offerNameDriver">
                  {nom} {prenom}
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="offersContent">
                <div className="offersPrice">
                  {d} - {a}
                </div>
                
                <div className="offerReviews">
                  <div className="offerReviews_content">
                    <div className="offerReviews_title">
                      <i className="fas fa-calendar-alt mr-2" />
                      <Moment format="Do MMMM YYYY">{dateCovoit}</Moment>
                      <br />
                      <br />

                      <i class="fa fa-clock-o" aria-hidden="true" />
                      {t}
                    </div>

                    {/* <div className="offerReviews_subtitle">{t}</div> */}
                  </div>
                </div>
                <div className="seat_nb seat_offre">
                  <span>{nbPlace}</span>{" "}
                  <img src={seatimg} className="seat_img" alt="" />
                </div>
                {/* <p className="offersText">
                  Trajet régulier en semaine. {nbPlace} places disponibles.
                  Voiture propre, conducteur courtois.
                </p> */}
                <p className="offersText">Centres d'intérêts : {interet}</p>
                {/*<div className="offersIcons">
                            <ul class="offersIcons_list">
                                <li class="offersIcons_item"><img src="images/seat3.png" alt=""></li>
                                <li class="offersIcons_item"><img src="images/seat3.png" alt=""></li>
                                <li class="offersIcons_item"><img src="images/seat3.png" alt=""></li>
                            </ul>
                        </div>*/}

                <div className="offerName"><i class="fa fa-money" aria-hidden="true"> {tarif} Ar</i></div>
                
                <button
                  className="button book_button_offre"
                  // onClick={afficherInscription} 
                  onClick={afficherDetail}
                >
                  <a>
                  Voir plus<span></span>
                    <span></span>
                    <span></span>
                  </a>
                    
                  

                </button>
              </div>
            </div>
            <div className="col-lg-3 col-1680-4">
              <div className="ImageContainer">
                <img className="offersImageBackground" src={vehiculephoto} alt="car" />
                <div className="offerDate">
                  {marque} - {modele}
                </div>

                <div className="offerReviewsRating text-center">
                  {noteVehicule}
                  {/* <span className="notespan">/20</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DetailsOffre key={offer.idCovoit} offer={o} compte={c} vehicule={v} />
    </div>

  );
};

export default Offeritem;
