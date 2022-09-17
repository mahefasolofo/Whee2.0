import React from "react";

function VehiculeInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        className="form-control"
        placeholder="Nombre de Place..."
        value={formData.nbPlace}
        onChange={(e) => {
          setFormData({ ...formData, nbPlace: e.target.value });
        }}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Other..."
        value={formData.tarif}
        onChange={(e) => {
          setFormData({ ...formData, tarif: e.target.value });
        }}
      />
    </div>
  );
}

export default VehiculeInfo;
