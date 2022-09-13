import React, { Component } from 'react'
import Avis from './Home/Avis'
import Carousel from './Home/Carousel'


import Event from './Home/Event'
import Cta from './Home/Cta'
import Trajet from './Home/Trajet'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

import Demande from './Pages/Demande'
import Offre from './Pages/Offre'


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
