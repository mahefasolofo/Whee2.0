import React, {useState, useEffect} from 'react'
import AnnonceCovoiturageService from '../services/AnnonceCovoiturageService';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import '../styles/bootstrap4/bootstrap.min.css'
import '../styles/main_styles.css'


// import trajet from './data/Trajet'


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1170 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1170, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

function TrajetPopulaire() {
  const [annonces, setAnnonces] = useState([])
  useEffect(() => {
    getAnnonces()
}, [])

const getAnnonces = () => {

  AnnonceCovoiturageService.getAnnonces().then((response) => {
      setAnnonces(response.data)
      console.log(response.data);
  });
 
};
  return (
    <React.Fragment>
        <div className="row">
						<div className="col">
							<h2 className="intro_title text-center">Les trajets populaires</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-10 offset-lg-1">
							<div className="intro_text text-center">
								<p>On vous a sélectionné les trajets les plus recherchés ces derniers temps.</p>
							</div>
						</div>
					</div>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                // customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >     
                    {annonces.map((data) => {
                        return(
                            <div className="cardIntro" key={data.idCovoiturage}>
                                <div
                                className="card-img">
                                <img src={require('../images/analakely.png')} alt="" />
                                <div className="overlay">
                                    <div className="overlay-content">
                                    <a className="hover" href="#!">
                                        Voir Plus
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="card-content">
                                <a href="#!">
                                    <h1 className="text-center">
                                    <i className="fa fa-street-view" aria-hidden="true" /> {data.lieuDepart}
                                    </h1>
                                    <h1 className="text-center">
                                    <i className="fa fa-map-marker" aria-hidden="true" /> {data.lieuArriver}
                                    </h1>
                                    <h2 className="text-center">environ {data.tarif} MGA</h2>
                                </a>
                                </div>
                            </div>
                        )
                    })}
            
            

      </Carousel>
                                
                    
                          
    </React.Fragment>
  )
}

export default TrajetPopulaire
