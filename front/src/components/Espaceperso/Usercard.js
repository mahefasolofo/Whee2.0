import React from 'react'
import { useAsyncValue } from 'react-router-dom'
import jwt_decode from "jwt-decode";

let value = "jieo";

  if (localStorage.getItem("token") != null) {
    if (localStorage.getItem("token").length > 14) {
      value = jwt_decode(localStorage.getItem("token"));
      console.log(localStorage.getItem("token"));
      console.log(localStorage.getItem("token"));
      value = jwt_decode(localStorage.getItem("token"));
      // console.log(jwt_decode(localStorage.getItem("token")));
      // console.log(value);
    } else {
      value = "nn";
    }
  }



const Usercard = () => {
  
    return (
        
        <div className="user-card-container d-flex justify-content-center mt-5 ">

        <div className="card1 text-center mb-5">

            <div className="circle-image">
                <img src={value.picture} width="70"/>
            </div>

                

            <span className="name mb-1 fw-500">{value.name}</span>

            <div className='row stat_card mb-1 ms-3 fw-650'> 
                <tr>
                    <td className="followers">Covoiturages</td>
                    <td className="followers">Annonces</td>
                </tr>
                <tr>
                    <td className='number_card'>150</td>
                    <td className='number_card'>120</td>
                </tr>
                
            </div>


            <div className="rate py-3 text-white mt-3">

                <h6 className="mb-0">Votre note</h6>

                <div className='note'>               
                
                <label for="3"><i className="rate-icon star-icon fa fa-star"> </i>  </label> 
                <label for="4">{'\u00A0'}<i className="rate-icon star-icon fa fa-star"></i>  </label> 
                <label for="4">{'\u00A0'}<i className="rate-icon star-icon fa fa-star"></i>  </label>
                <label for="1">{'\u00A0'}<i className="rate-icon0 star-icon fa fa-star"></i>  </label>
                <label for="2">{'\u00A0'}<i className="rate-icon0 star-icon fa fa-star"></i>  </label>
                </div>


                <div className="buttons px-4 mt-0">

                <button className="btn btn-warning btn-block rating-submit">Voir profil</button>
                
            </div>

                
            </div>
            
        </div>
    </div>
    
    )
  
}

export default Usercard

