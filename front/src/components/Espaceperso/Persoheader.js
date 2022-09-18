import React, { Component } from 'react'
import bgUserspace from '../../images/esp3.jpg'



export default class persoheader extends Component {
  render() {
    return (
      <div className="home_offre">
         <img  src={bgUserspace} alt="" className="home_background parallax-window"/>
		    {/*<div className="home_background parallax-window" data-parallax="scroll" style={{ backgroundImage: `url(${bgUserspace})` }}></div>*/}
            <div className="home_content">
                <div className="home_title">Votre espace</div>
            </div>
	    </div>
    )
  }
}
