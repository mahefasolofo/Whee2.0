import React from 'react'

const Usercard = () => {
  
    return (
        
        <div className="user-card-container d-flex justify-content-center mt-5 ">

        <div className="card text-center mb-5">

            <div className="circle-image">
                <img src="https://i.imgur.com/hczKIze.jpg" width="70"/>
            </div>

                

            <span className="name mb-1 fw-500">Bryan Williams</span>

            <div className='row mb-1 ms-3 fw-500'> 
                <tr className='stat_card'>
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

