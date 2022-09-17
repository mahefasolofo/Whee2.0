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
          <input type="text" placeholder="Point de Départ..." ref={originRef} />
        </div>
      </Autocomplete>
      <Autocomplete>
        <div>
          <input
            type="text"
            placeholder="Point d'Arriver..."
            ref={destiantionRef}
          />
        </div>
      </Autocomplete>

      <button type="button" onClick={Valider}>
        Valider
      </button>
    </LoadScript>
  );
}

export default TrajetInfo;

// import React from "react";

// function TrajetInfo({ formData, setFormData }) {
//   return (
//     <div >
//       <div>
//       <input
//         type="text"
//         placeholder="Date de Départ..."
//         value={formData.ptDepart}
//         onChange={(e) => {
//           setFormData({ ...formData, ptDepart: e.target.value });
//         }}
//       />
//       </div>
//       <div>

//       <input
//         type="text"
//         placeholder="Heure de Départ..."
//         value={formData.ptArrivee}
//         onChange={(e) => {
//           setFormData({ ...formData, ptArrivee: e.target.value });
//         }}
//       />
//         </div>

//     </div>
//   );
// }

// export default TrajetInfo;
