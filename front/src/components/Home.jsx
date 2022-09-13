import React, { Component } from 'react'
import Avis from './Home/Avis'
import Carousel from './Home/Carousel'


import Event from './Home/Event'
import Cta from './Home/Cta'
import Trajet from './Home/Trajet'


export default class Home extends Component {
  render() {
    return (

        <div>


         <Carousel />
                 
          <Trajet/>
          
          <Cta />
       
          <Event />
          
          <Avis />


        </div>



    )
  }
}
