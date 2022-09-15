import React from "react";

function DateHourInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <input
        type="date"
        placeholder="Date de Départ..."
        value={formData.dateCovoit}
        onChange={(e) => {
          setFormData({ ...formData, ptDepart: e.target.value });
        }}
      />
      <input
        type="time"
        placeholder="Heure de Départ..."
        value={formData.ptArrivee}
        onChange={(e) => {
          setFormData({ ...formData, ptArrivee: e.target.value });
        }}
      />
    </div>
  );
}

export default DateHourInfo;
