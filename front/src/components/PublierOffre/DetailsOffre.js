import React from 'react'
import Moment from "react-moment";
import seatimg from '../../images/seat3.png'

function DetailsOffre({ offer, compte, vehicule }) {
    const close = () => {
        document.getElementById("detailOffreReservation").style.display = "none";
      };
      const { nom, prenom } = compte;
      const { modele, marque, noteVehicule } = vehicule;
      const { nbPlace, tarif, dateCovoit } = offer;
      const interet = "musique , sport, voyage";
      const avis = "26 avis";
    
      let depart = offer.ptDepart;
      let arrivee = offer.ptArrivee;
      let photo = compte.photo;
      let vehiculephoto = vehicule.vehiculePhoto;
      let t = offer.heureCovoit;
      let d = depart.split(",").slice(0, 1);
      let a = arrivee.split(",").slice(0, 1);
     
  return (
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
                        src={photo}
                        alt="user"
                      />               
                      <div className="offerNameDriver">
                        {nom} {prenom}
                      </div>
                    </div>  
                  </div>    
                  <div className="detailContainer col-6">
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

                          
                        </div>
                      </div>
                      <div className="seat_nb seat_offre">
                        <span>{nbPlace}</span> <img src={seatimg} className='seat_img' alt="" /> 
                      </div> 
                      
                      <p className="offersText">Centres d'intérêts : {interet}</p>
                      
                      <div className="offerName"><i class="fa fa-money" aria-hidden="true"> {tarif} Ar</i></div>
                      
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
  )
}

export default DetailsOffre
