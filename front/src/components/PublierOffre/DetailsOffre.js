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
      <div className='detailOffreContainer row'>
                  <div className="titleCloseBtn">
                    <button onClick={() => {navigate("/offres")}}
                  ><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                  </div>
        {formData.map((annonceE) => (
          <div key={annonceE.idCovoit}>
            <h1 className="text-center">
              {annonceE.covoitureur.nom} {annonceE.covoitureur.prenom}
            </h1>
            <h1 className="text-center">
              {annonceE.ptDepart} ----- {annonceE.ptArrivee}
            </h1>
            <h1 className="text-center">
              {annonceE.vehicule.modele} {annonceE.vehicule.marque}
            </h1>
            <button
              className="button book_button_offre text-center"
              onClick={sendValueEvent}
            >
              Reserver
            </button>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );

}

export default DetailsOffre;
