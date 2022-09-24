import React,{useEffect, useState} from 'react'
import Moment from "react-moment";
import seatimg from '../../images/seat3.png'
import { useParams } from "react-router-dom";
import OfferService from '../../services/OfferService';


function DetailsOffre() {

  const [formData, setFormData] = useState([
    {
    idCovoit: "",
    event: "",
    ptDepart: "",
    ptArrivee: "",
    imageCovoit: "",
    heureCovoit: "",
    dateCovoit: "",
    nbPlace: "",
    tarif: "",
    covoitureurs: [
        {
            idUser: "",
            nom: "",
            prenom: "",
            mail: "",
            password: "",
            genre: "",
            adresse: "",
            contact: "",
            photo: "",
            date_naissance: "",
            interests: [],
            vehicules: [],
            evaluations: []
        }
    ],
    vehicule: {
        idVehicule: "",
        immat: "",
        marque: "",
        modele: "",
        type: "",
        userid: "",
        vehiculePhoto: ""
    },
    covoitureur: {
        idUser: "",
        nom: "",
        prenom: "",
        mail: "",
        password: "",
        genre: "",
        adresse: "",
        contact: "",
        photo: "",
        date_naissance: "",
        interests: [],
        vehicules: [],
        evaluations: []
    }
  }
  ]);
  
  let { idCovoit } = useParams();
  useEffect(()=>{
    try {
      OfferService.getOffersById(idCovoit).then((res)=>{
        setFormData(res.data)
        console.log(res.data)
        // alert(formData.ptDepart)
      
      });
    } catch (error) {
      
    }
 
  },[formData]);

  

  // const [marque,modele]= formData.vehicule;
  
 
    const close = () => {
        document.getElementById("detailOffreReservation").style.display = "none";
      };
      
     
  return (
    <div className="super_container">
        <div className="detailOffreBackground" id="detailOffreReservation">
          <div className='detailOffreContainer row'> 
               <div className="form_entete">
                  <div className="titleCloseBtn">
                    <button onClick={close}><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                  </div>
                </div>
                <div className='detailRow row'>
                  <div className="userContainer col-3">
                    <div className="ImageContainer">
                      <img
                        className="offersPimagebackground"
                        // src={photo}
                        alt="user"
                      />               
                      <div className="offerNameDriver">
                        {formData.covoitureur.nom} {formData.covoitureur.prenom}
                      </div>
                    </div>  
                  </div>    
                  <div className="detailContainer col-6">
                        <div className="offersContent">
                      <div className="offersPrice">
                      
                        {formData.ptDepart} - {formData.ptArrivee}
                      </div>
                      
                      <div className="offerReviews">
                        <div className="offerReviews_content">
                          <div className="offerReviews_title">
                          <i className="fas fa-calendar-alt mr-2" />
                          <Moment format="Do MMMM YYYY">{formData.dateCovoit}</Moment>
                          <br />
                          <br />

                          <i class="fa fa-clock-o" aria-hidden="true" />
                          {formData.heureCovoit}                      
                          </div>

                          
                        </div>
                      </div>
                      <div className="seat_nb seat_offre">
                        <span>{formData.nbPlace}</span> <img src={seatimg} className='seat_img' alt="" /> 
                      </div> 
                      
                      <p className="offersText">Centres d'intérêts : {formData.interet}</p>
                      
                      <div className="offerName"><i class="fa fa-money" aria-hidden="true"> {formData.tarif} Ar</i></div>
                      
                      <button
                        className="button book_button_offre"
                        
                        onClick=""
                      >
                        <a>
                        Réserver<span></span>
                          <span></span>
                          <span></span>
                        </a>
                          
                        
                      </button>
                    </div>
                  </div>    
                  <div className="vehiculeContainer col-3">
                    <div className="ImageContainer">
                      <img className="offersImageBackground" alt="car" />
                      <div className="offerDate">
                       
                      </div>
                      
                      {/* <div className="offerReviewsRating text-center">
                        {formData.vehicule.noteVehicule}
                        <span className="notespan">/20</span>
                      </div> */}
                    </div>
                  </div>   
                </div>   
                    
 
            </div>
      
    </div>
    </div>
    
  )
}

export default DetailsOffre
