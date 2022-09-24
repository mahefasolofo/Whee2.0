import React, { useState, useEffect, useRef, useContext } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { SocketContext } from "../../services/SocketContext";
import Moment from "react-moment";
import seatimg from "../../images/seat3.png";
import { useParams } from "react-router-dom";
import AnnonceCovoiturageService from "../../services/AnnonceCovoiturageService";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../services/UserContext";

let Sock = new SockJS("http://localhost:8090/ws");
var stompClient = over(Sock);

function DetailsOffre() {
  let navigate = useNavigate();
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
  let idCurrentUser = useContext(UserContext);
  
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
      navigate((`/espaceperso/${idCurrentUser}`))
    }
  };
  const [formData, setFormData] = useState([]);
  let { idCovoit } = useParams();
  useEffect(() => {
    getAnnoncesById(idCovoit);
  }, [idCovoit]);

  const getAnnoncesById = async (id) => {
    AnnonceCovoiturageService.getAnnoncesById(id).then((response) => {
      setFormData(response.data);
      console.log(response.data);
    });
  };

  return (
    <div className="detailOffreBackground">
      <div className="form_entete">
        <div className="titleCloseBtn_detail">
                    <button onClick={() => {navigate("/offres")}}
                  ><i class="fa fa-times-circle" aria-hidden="true"></i></button>
        </div>
      </div>
      
      <div className='detailOffreContainer row'>
                  
               {formData.map((annonceE) => (
                
                  <div key={annonceE.idCovoit} className='detailRow row'>
                    <div className="userContainer col-3">
                          <div className="ImageContainer">
                            <img
                              className="offersPimagebackground"
                              src={annonceE.covoitureur.photo}
                              alt="user"
                            />               
                            <div className="offerNameDriver">
                              {annonceE.covoitureur.nom} {annonceE.covoitureur.prenom}
                            </div>
                          </div> 
                        
                    </div>
                    <div className="detailContainer col-6">
                    <div className="offersContent"> 
                        <div className="offersPrice">
                          
                          {annonceE.ptDepart} - {annonceE.ptArrivee}
                        </div>
                        <div className="offerReviews">
                        <div className="offerReviews_content">
                          <div className="offerReviews_title">
                          <i className="fas fa-calendar-alt mr-2" />
                          <Moment format="Do MMMM YYYY">{annonceE.dateCovoit}</Moment>
                          <br />
                          <br />

                          <i class="fa fa-clock-o" aria-hidden="true" />
                          {annonceE.heureCovoit}                      
                          </div>

                          
                        </div>
                        </div>
                        <div className="seat_nb seat_offre">
                          <span>{annonceE.nbPlace}</span> <img src={seatimg} className='seat_img' alt="" /> 
                        </div> 
                        <p className="offersText">Centres d'intérêts : {annonceE.covoitureur.interet}</p>
                        <div className="offerName"><i class="fa fa-money" aria-hidden="true"> {annonceE.tarif} Ar</i></div>
                     </div>   
                        
                        <button
                          className="button book_button_offre text-center"
                          onClick={sendValueEvent}
                        >
                          Reserver
                        </button>

                       
                        <div className="map_detail_offre">
                          
                          </div>
                    </div>

                    <div className="vehiculeContainer col-3">
                      <div className="ImageContainer">
                        <img className="offersImageBackground" alt="car" src={annonceE.vehicule.vehiculePhoto}/>
                        <div className="offerDate">
                        {annonceE.vehicule.marque} - {annonceE.vehicule.modele}
                        </div>
                        
                      </div>
                    </div>
                    
                    
                  </div>
        ))}
      </div>
      <div></div>
    </div>
  );

}

export default DetailsOffre;
