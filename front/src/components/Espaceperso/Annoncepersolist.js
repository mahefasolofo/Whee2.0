import React, { Component, useEffect, useState } from 'react'
import Annoncepersoritem from './Annoncepersoritem'
import UserspaceService from '../../services/UserspaceService'
import {withRouter} from 'react-router'
import { useParams } from "react-router-dom";



function Annoncepersolist() {
  
  let {idUser} = useParams();
  const [annonceUser, setAnnonceUser] = useState([]);

  useEffect(() => {
    getUserAnnonce(idUser);
  }, [idUser])
  
  const getUserAnnonce = (id) => {
    UserspaceService.getPubByUserId(id).then((res) => {
      setAnnonceUser(res.data);
      // console.log(res.data);
    });
  }
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     annoncesPerso: []
  //   }
  // }

  // componentDidMount(){
  //   UserspaceService.getPubByUserId().then((res) => {
  //     this.setState({
  //       annoncesPerso: res.data
  //     })
  //   })
  // }

  
    return (
        <section>
        {/*Offers Grid*/}

        

            {/*Offers Item */}
            {
              annonceUser.map( (annonce) =>
              
              <Annoncepersoritem key={annonce.idCovoit} annonce={annonce} vehicule={annonce.vehicule} conducteur={annonce.covoitureur} onload={()=>window.location.reload(false)}/>
              )

            }
                
                        

        
        </section>     
    )
  
}

export default Annoncepersolist;