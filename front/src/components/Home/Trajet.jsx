import React,{Component} from 'react'
import trajet from '../data/Trajet'
import AnnonceCovoiturageService from '../../services/AnnonceCovoiturageService'
import CardTrajet from './CardTrajet'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default class Trajet extends Component {
  constructor(props){
    super(props)

    this.state={
        annonces:[]
    }

   
  }
  componentDidMount(){
    AnnonceCovoiturageService.getAnnonces().then((res)=>{
        this.setState({annonces:res.data});

    });
  }

  render(){
    return (
    <div className="intro">
            <div className="container">
              <div className="testimonials ">
                <div className="test_border" />
                <div className="container ">
                  <div className="row">
                    <div className="col">
                      <h2 className="intro_title text-center">
                        Les trajets populaires
                      </h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      <div className="intro_text text-center">
                        <p>
                          On vous a sélectionné les trajets les plus recherchés ces
                          derniers temps.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col card">
                      {/* Testimonials Slider */}
                      {/* <div className="test_slider_container">
                      <div className="owl-carousel owl-theme test_slider "> 
                      */}

                      <Carousel 
                        responsive={responsive}
                        infinite={true}
                        autoPlay={1000}
                      >
                        {this.state.annonces.slice(0, 6).map((annonce,index)=> (
                            <CardTrajet annonce={annonce} key={annonce.idCovoit}/>
                            )                                                        
                        )}                    
                        </Carousel>
                        
                      </div>
                    
                  </div>
                </div>
              </div>
            </div>
    </div>
  )}
}


