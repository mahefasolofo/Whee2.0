import React from 'react'

function DetailsOffre() {
    const close = () => {
        document.getElementById("detailOffreReservation").style.display = "none";
      };
      
  return (
    <div className="detailOffreBackground" id="detailOffreReservation">
            <div className='detailOffreContainer'>
                    <button onClick={close}><i class="fa fa-times-circle" aria-hidden="true"></i></button>
            </div>
      
    </div>
  )
}

export default DetailsOffre
