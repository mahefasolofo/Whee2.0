import React, { useRef } from "react";

import { LoadScript, Autocomplete } from "@react-google-maps/api";

const api = "AIzaSyDQLfoT69SVIMwn06NymNrSPw4qXKnm8ts";

function TrajetInfo({ formData, setFormData }) {
  const originRef = useRef();
  const destiantionRef = useRef();

  const Valider = () => {
    setFormData({
      ...formData,
      ptDepart: originRef.current.value,
      ptArrivee: destiantionRef.current.value,
    });
    document.getElementById("formAnnonce").style.display = "none";
    document.getElementById("formAnnonce2").style.display = "flex";
  };

  return (
    <LoadScript googleMapsApiKey={api} libraries={["places"]}>
      <Autocomplete>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Point de Départ..."
            ref={originRef}
          />
        </div>
      </Autocomplete>
      <Autocomplete>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Point d'Arrivée..."
            ref={destiantionRef}
          />
        </div>
      </Autocomplete>

      <button type="button" className="btn btn-primary" onClick={Valider}>
        Valider
      </button>
    </LoadScript>
  );
}

export default TrajetInfo;
