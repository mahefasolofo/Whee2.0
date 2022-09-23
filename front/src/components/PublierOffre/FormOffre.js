import React, { useState } from "react";
import TrajetInfo from "./TrajetInfo";
import DateHourInfo from "./DateHourInfo";
import VehiculeInfo from "./VehiculeInfo";
import AnnonceCovoiturageService from "../../services/AnnonceCovoiturageService";



function FormOffre() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    ptDepart: "",
    ptArrivee: "",
    heureCovoit: "",
    dateCovoit: "",
    image:null,
    event: null,
    tarif: "",
    nbPlace: "",
    covoitureurs: [],
    vehicule: {
      idVehicule: 1,
    },
    covoitureur: {
      idUser: 1,
    },
  });

  const close = () => {
    document.getElementById("formAnnonce2").style.display = "none";
  };

  const FormTitles = [
    "Date et heure de Départ",
    "Renseignements sur le véhicule",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <DateHourInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <VehiculeInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div>
      
      <div className="modalBackground" id="formAnnonce2">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={close}>X</button>
          </div>
          <div className="container">
            <div className="progressbar">
              <div
                style={{
                  width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
                }}
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
                 
                      AnnonceCovoiturageService.publierAnnonce(formData);
                      
                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }}
                >
                  {page === FormTitles.length - 1 ? "Submit" : "Next"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modalBackground" id="formAnnonce">
        <div className="modalContainer">
          <div className="container">
            <div className="form-container">
              <div className="headerF">
                <h1>Trajet</h1>
              </div>

              <TrajetInfo formData={formData} setFormData={setFormData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormOffre;
