import React from 'react';
import VehiculeService from '../../services/VehiculeService';

function VehiculeGestion() {
    const [formData, setFormData] = useState({
        immat: "",
        marque: "",
        modele: "",
        type: "",
        idUser: 1,
    });
  return (
    <div>
        <div className="modalBackground" id="formVehicule">
            <div className="modalContainer">
                <div className="modalHeader"><h1>Publier une annonce</h1></div>
                    <div className="titleCloseBtn">
                        <button onClick={close}><i className="fa fa-times-circle" aria-hidden="true"></i></button>
                    </div>
                <div className="modalForm">
                
                <input
                    type="text"
                    className="form-control"
                    placeholder="Immatriculation véhicule"
                    value={formData.immat}
                    onChange={(e) => {
                        setFormData({ ...formData, immat: e.target.value });
                    }}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Marque du véhicule"
                    value={formData.marque}
                    onChange={(e) => {
                        setFormData({ ...formData, marque: e.target.value });
                    }}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Modèle du véhicule"
                    value={formData.modele}
                    onChange={(e) => {
                        setFormData({ ...formData, modele: e.target.value });
                    }}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Modèle du véhicule"
                    value={formData.modele}
                    onChange={(e) => {
                        setFormData({ ...formData, modele: e.target.value });
                    }}
                />
                <select
                    type="text"
                    className="form-control form-control_place"
                    placeholder="Type du véhicule"
                    value={formData.type}
                    onChange={(e) => {
                    setFormData({ ...formData, type: e.target.value });
                    }}
                >
                            <option>Voiture</option>
                            <option>Moto</option>
                            
                </select>
                <button
                className="btn btn-primary"
                  onClick={() => {
                  
                    VehiculeService.publierVehicule(formData);
                    close();
                    
                  }}
                ></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VehiculeGestion