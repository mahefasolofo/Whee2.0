import React from "react";
import carimg from "../../images/car1.jpg";
import profimg from "../../images/photoProfil.jpg";
import "./offer.css";
import Moment from "react-moment";

const Offeritem = ({ offer, compte, vehicule }) => {
  const interet = "musique , sport, voyage";
  const avis = "26 avis";
  const { nom, prenom } = compte;
  const { modele, marque, noteVehicule } = vehicule;
  const { nbPlace, tarif, heureCovoit, dateCovoit } = offer;

  let depart = offer.ptDepart;
  let arrivee = offer.ptArrivee;

  let d = depart.split(",").slice(0, 1);
  let a = arrivee.split(",").slice(0, 1);

  return (
    <div className="col-lg-12">
      <div className="GridOffre">
        <div className="offersItem rating_3">
          <div className="rowF">
            <div className="col-lg-3 ">
              <div className="ImageContainer">
                <img
                  className="offersPimagebackground"
                  src={profimg}
                  alt="car"
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
                <div
                  className="rating_r rating_r_4 offersRating"
                  data-rating="3"
                >
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <div className="offerReviews">
                  <div className="offerReviews_content">
                    <div className="offerReviews_title">
                      <Moment format="Do MMMM YYYY">{dateCovoit}</Moment>
                    </div>

                    <div className="offerReviews_subtitle">{heureCovoit}</div>
                  </div>
                </div>
                <p className="offersText">
                  Trajet régulier en semaine. {nbPlace} places disponibles.
                  Voiture propre, conducteur courtois.
                </p>
                <p className="offersText">Centres d'intérêts : {interet}</p>
                {/*<div className="offersIcons">
                            <ul class="offersIcons_list">
                                <li class="offersIcons_item"><img src="images/seat3.png" alt=""></li>
                                <li class="offersIcons_item"><img src="images/seat3.png" alt=""></li>
                                <li class="offersIcons_item"><img src="images/seat3.png" alt=""></li>
                            </ul>
                        </div>*/}
                <button className="button book_button">
                  <a href="#">
                    Réserver<span></span>
                    <span></span>
                    <span></span>
                  </a>
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-1680-4">
              <div className="ImageContainer">
                <img className="offersImageBackground" src={carimg} alt="car" />
                <div className="offerDate">
                  {marque} - {modele}
                </div>
                <div className="offerName">{tarif} Ar</div>
                <div className="offerReviewsRating text-center">
                  {noteVehicule}
                  <span className="notespan">/20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offeritem;
