import React, { Component } from 'react'
import OfferService from '../services/OfferService'
import Offeritem from './Offeritem'

export default class offerlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      offers: []
    }
  }

  componentDidMount(){
    OfferService.getOffers().then((res) => {
      this.setState({
        offers: res.data
      })
    })
  }

  render() {
    return (
        <section>
        {/*Offers Grid*/}

        

            {/*Offers Item */}
            {this.state.offers.map((offer) => (
                <Offeritem key={offer.idCovoit} offer={offer} compte={offer.covoitureur} vehicule={offer.vehicule} datecov={Date(offer.dateCovoit).toLocaleString()}/>
            ))}            

        
        </section>     
    )
  }
}
