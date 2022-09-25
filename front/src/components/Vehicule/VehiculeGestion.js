import React, {useEffect, useState} from 'react';
import VehiculeService from '../../services/VehiculeService';

function VehiculeGestion(userID) {
    const [formData, setFormData] = useState({
        immat: "",
        marque: "",
        modele: "",
        type: "",
        kilometrage:"",
        vehiculePhoto:"",
        userid: ""
    });

    useEffect(() =>{
        setFormData({...formData, userid: userID, vehiculePhoto:"images/car/car_model_default.png"})
    }, [userID]);

    const close =() => {
        document.getElementById('formVehicule').style.display = 'none';
    }

    const preview =() =>{
        frame.src = URL.createObjectURL(e.target.files[0]);
    }

    const clearImage =() =>{
        document.getElementById('formFile').value = null;
        frame.src = "";
    }

  return (
    <div>
        <div className="modalBackground" id="formVehicule">
            <div className="modalContainer mc_vehicule">
                <div className="modalHeader"><h1>Ajouter un véhicule</h1></div>
                    <div className="titleCloseBtn">
                        <button onClick={close}><i className="fa fa-times-circle" aria-hidden="true"></i></button>
                    </div>

                    


                <div className="modalForm_vehicule">
                <div className='form_fields'>
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
                    placeholder="Kilométrage"
                    style={{width : 200}}
                    value={formData.kilometrage}
                    onChange={(e) => {
                        setFormData({ ...formData, kilometrage: e.target.value });
                    }}
                /> KM
                <select
                    className="form-control form-control_place"
                    style={{height: 50}}
                    value={formData.type}
                    onChange={(e) => {
                    setFormData({ ...formData, type: e.target.value });
                    }}
                >   
                            <option >Type de véhicule</option>
                            <option value="Voiture">Voiture</option>
                            <option value="Moto">Moto</option>
                            
                </select>
                <button
                className="btn btn-primary"
                  onClick={() => {
                  
                    VehiculeService.publierVehicule(formData);
                    console.log(formData)
                    close();
                    
                  }}
                >Valider</button>
                </div>
                <div className="container_img col-md-6">
                    <div className="mb-5">
                        <label for="Image" className="form-label">Charger une photo de votre véhicule (optionnel)</label>
                        <input className="form-control" type="file" id="formFile" style={{width : 400}}
                        onChange={(e) => {
                            setFormData({ ...formData, vehiculePhoto: e.target.files });
                            frame.src = URL.createObjectURL(e.target.files[0]);
                        }}/>
                    </div>
                    <img id="frame" src="" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VehiculeGestion