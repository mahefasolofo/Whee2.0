import React, { useContext } from "react";
import { UserContext } from "../../services/UserContext";
function VehiculeInfo({ formData, setFormData }) {
  let idCurrentUser = useContext(UserContext);
  return (
    <div className="other-info-container">
      <select
        type="text"
        className="form-control form-control_place"
        placeholder="Nombre de places..."
        value={formData.nbPlace}
        onChange={(e) => {
          setFormData({
            ...formData,
            nbPlace: e.target.value,
            covoitureur: {
              idUser: idCurrentUser,
            },
          });
        }}
      >
        <option value="">Nombre de places...</option>
        <option>01</option>
        <option>02</option>
        <option>03</option>
        <option>04</option>
      </select>
      <br/>
      
      <input
        type="text"
        className="form-control"
        placeholder="Prix..."
        value={formData.tarif}
        onChange={(e) => {
          setFormData({ ...formData, tarif: e.target.value });
        }}
      />
    </div>
  );
}

export default VehiculeInfo;
