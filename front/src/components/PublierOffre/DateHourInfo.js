import React from "react";

function DateHourInfo({ formData, setFormData }) {
  return (
    <div >
      <div>
      <input
        type="date"
        className="form-control"
        placeholder="Date de Départ..."
        value={formData.dateCovoit}
        onChange={(e) => {
          setFormData({ ...formData, dateCovoit: e.target.value });
        }}
      />
      </div>
      <div>
        

      <input
        type="time"
        className="form-control"
        placeholder="Heure de Départ..."
        value={formData.heureCovoit}
        onChange={(e) => {
          setFormData({ ...formData, heureCovoit: e.target.value });
        }}
      />
        </div>
      
      
      
   
    </div>
  );
}

export default DateHourInfo;
