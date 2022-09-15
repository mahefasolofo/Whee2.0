import React from 'react'
import carimg from '../images/car1.jpg'
import profimg from '../images/photoProfil.jpg'
import '../styles/offer.css'
import Moment from 'react-moment'


const Offeritem = ({offer,compte,vehicule}) => {
    const interet = "musique , sport, voyage"
    const avis = "26 avis"
    const {nom, prenom}=compte;
    const {modele, marque, noteVehicule} = vehicule;
    const {nbPlace, tarif, ptDepart, ptArrivee, heureCovoit,dateCovoit} = offer;
    return (
        <div className="col-lg-12">
        <div className="offers_grid">
        <div className="offers_item rating_3">
            <div className="row">
                <div className="col-lg-3 ">
                    <div className="offers_image_container">                                          
                        
                        <img className="offers_Pimage_background" src={profimg} alt="car"/>
                            
                        <div className="offer_name_driver">{nom} {prenom}</div>
                    </div>
                    
                </div>
                <div className="col-lg-5">
                    <div className="offers_content">
                        <div className="offers_price">{ptDepart} - {ptArrivee}</div>
                        <div className="rating_r rating_r_4 offers_rating" data-rating="3">
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                        <div className="offer_reviews">
                            
                            <div className="offer_reviews_content">
                                <div className="offer_reviews_title"><Moment format="Do MMMM YYYY">
                                {dateCovoit}</Moment></div> 
                                
                                <div className="offer_reviews_subtitle">{heureCovoit}</div>                              
                            </div>     
                                                   
                        </div> 
                        <p className="offers_text">Trajet régulier en semaine. {nbPlace} places disponibles. Voiture propre, conducteur courtois.</p>
                        <p className="offers_text">Centres d'intérêts : {interet}</p>
                        {/*<div className="offers_icons">
                            <ul class="offers_icons_list">
                                <li class="offers_icons_item"><img src="images/seat3.png" alt=""></li>
                                <li class="offers_icons_item"><img src="images/seat3.png" alt=""></li>
                                <li class="offers_icons_item"><img src="images/seat3.png" alt=""></li>
                            </ul>
                        </div>*/}
                        <button className="button book_button"><a href="#">Réserver<span></span><span></span><span></span></a></button>
                                               
                    </div>
                </div>
                <div className="col-lg-3 col-1680-4">
                    <div className="offers_image_container">                                
                        <img className="offers_image_background" src={carimg} alt="car"/>
                        <div className="offer_date">{marque} - {modele}</div>
                        <div className="offer_name">{tarif} Ar</div>
                        <div className="offer_reviews_rating text-center">{noteVehicule}<span className='notespan'>/20</span></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
  
}

export default Offeritem;