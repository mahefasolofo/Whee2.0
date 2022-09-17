import React, { Component } from 'react'
import Annoncepersoritem from './Annoncepersoritem'
import list from '../../Annoncedata'

export default class annoncepersolist extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     annonces: []
  //   }
  // }

  // componentDidMount(){
  //   list.then((res) => {
  //     this.setState({
  //       annonces: res.data
  //     })
  //   })
  // }

  render() {
    return (
        <section>
        {/*Offers Grid*/}

        

            {/*Offers Item */}
            {list.map((annonce) => (
                <Annoncepersoritem key={annonce.id} annonce={annonce}/>
            ))}            

        
        </section>     
    )
  }
}
