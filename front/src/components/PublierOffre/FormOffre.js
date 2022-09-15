import React, { useState } from "react";
import TrajetInfo from "./TrajetInfo";
import DateHourInfo from "./DateHourInfo";
import VehiculeInfo from "./VehiculeInfo";

function FormOffre() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    ptDepart: "",
    ptArrivee: "",
    heureCovoit: "",
    dateCovoit: "",
    nbPlace: "",
    covoitureurs: [],
    vehicule: {
      idVehicule: ""},
      covoitureur: {
        idUser: ""}
      
  });

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
    <div className="formF">
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
                alert("FORM SUBMITTED");
                console.log(formData);
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
  );
}

export default FormOffre;
