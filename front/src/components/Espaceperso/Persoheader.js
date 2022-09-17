import React, { Component } from 'react'
import bgUserspace from '../../images/blog_1.jpg'
//import '../styles/offer.css'


export default class persoheader extends Component {
  render() {
    return (
      <div className="home_offre">
      <img className="home_background parallax-window" src={bgUserspace} alt="" />
		    {/*<div className="home_background parallax-window" data-parallax="scroll" style={{ backgroundImage: `url(${bgUserspace})` }}></div>*/}
            <div className="home_content">
                <div className="home_title">Votre espace</div>
            </div>
	    </div>
    )
  }
}
