import React, { Component } from 'react'
import Annoncepersolist from './Annoncepersolist'
import Usercard from './Usercard'
import Moment from 'react-moment'



export default class persobody extends Component {
  render() {
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
                <Annoncepersolist/>
                

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
}
