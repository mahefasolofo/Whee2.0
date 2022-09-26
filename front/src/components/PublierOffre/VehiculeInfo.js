import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../services/UserContext";
import VehiculeService from "../../services/VehiculeService";
function VehiculeInfo({ formData, setFormData }) {
  let idCurrentUser = useContext(UserContext);
  const [vehiculeData, SetVehiculeDate] = useState([]);
  useEffect(() => {
    getVehiculeById(idCurrentUser);
  }, [idCurrentUser]);

  const getVehiculeById = async (id) => {
    VehiculeService.getVehiculeById(id).then((response) => {
      SetVehiculeDate(response.data);
    });
  };
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
      <br />
      <select
        type="text"
        className="form-control form-control_place"
        placeholder="Vehicule..."
        onChange={(e) => {
          setFormData({
            ...formData,
            vehicule: {
              idVehicule: e.target.value,
            },
          });
        }}
      >
        {vehiculeData.map((vehicule) => (
          <option value={vehicule.idVehicule}>
            {vehicule.immat} - {vehicule.modele}
          </option>
        ))}
      </select>

      <br />
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
