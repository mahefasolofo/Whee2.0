import React from 'react'

function EventForm() {
    const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    ptDepart: "",
    ptArrivee: "",
    heureCovoit: "",
    dateCovoit: "",
    image: null,
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

  const close2 = () => {
    document.getElementById("formAnnonce").style.display = "none";
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
        <div className="modalHeader"><h1>Publier une annonce</h1></div>
          <div className="titleCloseBtn">
            <button onClick={close}><i className="fa fa-times-circle" aria-hidden="true"></i></button>
          </div>
          <div className="modalForm">
            <div className="progressbar">
              <div
                style={{
                  width: page === 0 ? "200px" : page === 1 ? "400px" : "600px",
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
                  className="btn btn-primary"
                  disabled={page === 0}
                  onClick={() => {
                    setPage((currPage) => currPage - 1);
                  }}
                >
                  Prev
                </button>
                <button
                className="btn btn-primary"
                  onClick={() => {
                    if (page === FormTitles.length - 1) {
                      AnnonceCovoiturageService.publierAnnonce(formData);
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
        </div>
      </div>

      <div className="modalBackground" id="formAnnonce">
        
        <div className="modalContainer">
        <div className="modalHeader"><h1>Publier une annonce</h1></div>
        <div className="titleCloseBtn">
            <button onClick={close2}><i className="fa fa-times-circle" aria-hidden="true"></i></button>
          </div>
          <div className="modalForm">
            <div className="form-container">
              <div className="headerF">
                <h1>Votre trajet?</h1>
                <div className="postcard__bar" />
              </div>

              <TrajetInfo formData={formData} setFormData={setFormData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventForm
