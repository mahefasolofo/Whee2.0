import React, { useState, useEffect } from 'react'
import Usercard from './Usercard'
import Annoncepersoritem from './Annoncepersoritem'
import UserspaceService from '../../services/UserspaceService'
import { useParams } from "react-router-dom";



function Persobody() {
  
  let {idUser} = useParams();
  const [annonceUser, setAnnonceUser] = useState([]);

  useEffect(() => {
    getUserAnnonce(idUser);
  }, [idUser])
  
  const getUserAnnonce = (id) => {
    UserspaceService.getPubByUserId(id).then((res) => {
      setAnnonceUser(res.data);
      console.log(res.data);
    });
  }

    return (
      <div className='container-espaceperso'>
        <div className="wrapper wrapper-content animated list-container fadeInRight">
            <div className="row">
            <div className="col-sm-8 box_ibox">
            <div className="ibox">
            <div className="ibox-title">
            <span className="pull-right fs-6">(<strong>3</strong>) annonces</span>
            <h3>Les annonces que vous avez publiées</h3>
             </div>
             {
              annonceUser.map( (annonce) =>
              
              <Annoncepersoritem key={annonce.idCovoit} annonce={annonce} vehicule={annonce.vehicule} conducteur={annonce.covoitureur}/>
              )

            }               

                </div>        
                </div>
              <div className="col-sm-4">
                <Usercard/>
              
              </div>
            </div>
        </div>	
    </div>
    )
  
}

export default Persobody;