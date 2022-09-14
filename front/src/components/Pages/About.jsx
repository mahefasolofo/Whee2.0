import React, { Component } from 'react'
import bg from '../../images/people1.jpg'
import Avis from '../Home/Avis'

export default class About extends Component {
  render() {
    return (
      <div>
        
        <div className="home_offre">
            
            <img src={bg} alt="" className="home_background parallax-window" data-parallax="scroll"/>
            <div className="home_content">
            <div className="home_title_about">A propos de nous</div>
            </div>
        </div>
        {/* Intro */}
        <div className="intro">
            <div className="container">
            <div className="row">
                <div className="col-lg-7 intro_image">
                
                </div>
                <div className="col-lg-5">
                <div className="intro_content">
                    <div className="intro_title">Covoiturez autrement</div>
                    <p className="intro_text">
                    Whee! est une plateforme de covoiturage qui veut faire de vos
                    centres d'intérêt l'une de ses principales préoccupations.
                    Rendez-vous à des concerts ou à des matchs avec des gens qui
                    partageront les mêmes passions que vous, Whee! est là pour vous
                    garantir le maximum de convivialité en covoiturage.{" "}
                    </p>
                    <div className="button intro_button">
                    <div className="button_bcg" />
                    <a href="#">
                        Explorer
                        <span />
                        <span />
                        <span />
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        
        <Avis/>
      </div>
    )
  }
}
