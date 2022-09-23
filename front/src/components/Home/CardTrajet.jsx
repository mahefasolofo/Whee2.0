import React, { Component } from 'react'
import bg from '../../images/analakely.png'


export default function CardTrajet(props) {
  
    return (
        <div className="cardIntro item ">
        <div
        className=" card-img item ">
            {/* <img className=" card-img item " src={bg}></img> */}
        <img src={props.annonce.imageCovoit} alt="" className=" card-img item "/>
        <div className="overlay">
            <div className="overlay-content">
            <a className="hover" href="#!">
                Voir Plus
            </a>
            </div>
        </div>
        </div>
        <div className="card-content">
        <a href="#!">
            <h1 className="text-center">
            <i className="fa fa-street-view" aria-hidden="true" /> {props.annonce.ptDepart}
            </h1>
            <h1 className="text-center">
            <i className="fa fa-map-marker" aria-hidden="true" /> {props.annonce.ptArrivee}
            </h1>
            <h2 className="text-center">environ {props.annonce.tarif} MGA</h2>
        </a>
        </div>
    </div>
    )
  
}
