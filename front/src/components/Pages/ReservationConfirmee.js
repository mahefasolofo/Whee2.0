import React from "react";

function ReservationConfirmee() {
  const closeConfirmer = () => {
    document.getElementById("ConfirmerReservation").style.display = "none";
    navigate(`/home`);
  };

  return (
    <div>
      <div id="ConfirmerReservation" className="modal">
        <span
          onClick={closeConfirmer}
          className="close"
          title="Close Modal"
        ></span>
        <div className="modal-content animate card">
          <div>
            {/* <span onClick={"document.getElementById('id01').style.display='none'"} className="close" title="Fermer"> */}
            <span onClick={closeConfirmer} className="close" title="Fermer">
              <i class="fa fa-times-circle" aria-hidden="true"></i>
            </span>
          </div>

          <div className="container text-center">
            <h5 className="text-center">
              Réservation Enregistrée
              <i
                className="fa-solid fa-circle-check"
                style={{ color: "green", marginLeft: 15 }}
              ></i>
            </h5>
            <p>
              Votre réservation a bien été enregistrée
              <br />
              Joignez l'utile à l'agréable et covoiturez autrement. Dites Whee à
              la vie !
              <br />
            </p>

            <button onClick={closeConfirmer} className="buttonConnexion">
              Confirmer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationConfirmee;
