import React, { useState, useEffect, useRef } from "react";
import bg from "../../images/event2.jpg";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import "moment/locale/fr";
import EventService from "../../services/EventService";
import AnnonceEvent from "./AnnonceEvent";
import EventForm from "./EventForm";


Moment.globalLocale = "fr";

function ParticiperEvent() {
  const [formData, setFormData] = useState({
    titre:"",
    lieuEvent:"",
    heureEvent:"",
    dateEvent:"",
    description:"",
    image:""

  })

  const [show, setShow] = useState(false);

  const handleClick = () => {
    document.getElementById('EventAnnonce').style.display= 'flex';
  };

  const destiantionRef =
   formData.lieuEvent;


  let { idEvent } = useParams();
  const [annonce, setAnnonceEvent] = useState([]);
  

  useEffect(() => {
    getEventByid(idEvent);
  }, [idEvent]);

  const getEventByid = (id) => {
    EventService.getEventById(id).then((response) => {
      setAnnonceEvent(response.data);
      console.log(response.data);
    });

  };

  return (
    <div className="super_container">
    <EventForm ArrEvent={destiantionRef}/>
      {/* Home */}
      <div className="home_offre">
        <img
          className="home_background parallax-window"
          data-parallax="scroll"
          src={bg}
        ></img>
        <div className="home_content">
          <div className="home_title">Les évènements</div> 
                  
        </div>
      </div>
      {/* Carte  */}
      <section className="card">
      <div className="container">
      {/* <div class="h1 text-center text-dark" id="pageHeaderTitle">My Cards Light</div> */}
      <article className="postcard light blue">
        <a className="postcard__img_link" href="#">
          <img
            className="postcard__img"
            src={`../../${formData.image}`}
            alt="Image Title"
          />
        </a>
        <div className="postcard__text t-dark">
          <h1 className="postcard__title blue">
            
            {formData.titre}
            
          </h1>
          <div className="postcard__subtitle small">
            <i className="fas fa-calendar-alt mr-2" />
            <Moment format="Do MMMM YYYY">{formData.dateEvent}</Moment>
            <br />
            <br />
            <i class="fa fa-clock-o" aria-hidden="true" />
            {formData.heureEvent}
          </div>
          <div className="postcard__bar" />
          <div className="postcard__preview-txt">{formData.description}</div>

        </div>
      </article>
    </div>
    </section>
    {/*Fin Carte*/}
      
    {/*Liste annonces*/}
    
      <section className="list_annonce_event">   
      <button
    className="button pub_button"
    onClick={handleClick}
  > Publier une annonce</button>  
  
  
      {annonce.map((annonceE)=>(<AnnonceEvent key={annonceE.idCovoit} annonceEvent={annonceE} evenement={annonceE.event} vehicule={annonceE.vehicule} formData={formData} setFormData={setFormData}/>))}
      </section>


    {/*Fin Liste annonces*/} 
        
    </div>
  );
}
export default React.memo(ParticiperEvent);
