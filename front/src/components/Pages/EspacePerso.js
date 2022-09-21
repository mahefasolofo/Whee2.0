import React, { Component } from 'react'
import Persoheader from '../Espaceperso/Persoheader'
import Persobody from '../Espaceperso/Persobody'


export default class Espaceperso extends Component {
  render() {
    return (
      <React.Fragment>
        <Persoheader/>
        <Persobody/>
        <div className="new_footer"></div>
        
      </React.Fragment>
    )
  }
}


