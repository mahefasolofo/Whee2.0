import React, { useState } from "react";
import TrajetInfo from "./TrajetInfo";
import DateHourInfo from "./DateHourInfo";
import VehiculeInfo from "./VehiculeInfo";
import AnnonceCovoiturageService from "../../services/AnnonceCovoiturageService"
import './offer.css'
import './Modal.css'

function FormOffre() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    ptDepart: "",
    ptArrivee: "",
    heureCovoit: "",
    dateCovoit: "",
    event:null,
    tarif:"",
    nbPlace: "",
    covoitureurs: [],
    vehicule: {
      idVehicule: 1},
    covoitureur: {
        idUser: 1}
      
  });

  const close=()=> {

    document.getElementById('formAnnonce').style.display='none';    

  };

  const saveAnnonce=(formData)=>{

    let annonce = {
    ptDepart: formData.ptDepart,
    ptArrivee: formData.ptArrivee,
    heureCovoit: formData.heureCovoit,
    dateCovoit: formData.dateCovoit,
    event:null,
    tarif:formData.tarif,
    nbPlace: formData.nbPlace,
    covoitureurs: [],
    vehicule: {
      idVehicule: 1},
    covoitureur: {
        idUser: 1}
      
  };

    
    AnnonceCovoiturageService.publierAnnonce(annonce).then(res=>{
        
        alert(annonce);
        
    });

  }

  const FormTitles = ["Votre Trajet", "Date et heure de Départ", "Renseignements sur le véhicule"];

  const PageDisplay = () => {
    if (page === 0) {
      return <TrajetInfo formData={formData} setFormData={setFormData}  />;
    } else if (page === 1) {
      return <DateHourInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <VehiculeInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="modalBackground" id="formAnnonce">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={close}
          >
            X
          </button>
        </div>
        <div className="container">
        
             
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="headerF">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="bodyF">{PageDisplay()}</div>
        <div className="footerF">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                console.log(formData)
                let annonce = {
                  ptDepart: formData.ptDepart,
                  ptArrivee: formData.ptArrivee,
                  heureCovoit: formData.heureCovoit,
                  dateCovoit: formData.dateCovoit,
                  event:null,
                  tarif:formData.tarif,
                  nbPlace: formData.nbPlace,
                  covoitureurs: [{
                    idUser: 1}],
                  vehicule: {
                    idVehicule: 1},
                  covoitureur: {
                      idUser: 1}
                    
                };
              
                  
                  AnnonceCovoiturageService.publierAnnonce(annonce);
                  console.log(annonce);

              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
        <button
            onClick={saveAnnonce}>
          </button>
      </div>
    

     
        
        </div>
      </div>
    </div>
    
   
    
  );
}

export default FormOffre;
