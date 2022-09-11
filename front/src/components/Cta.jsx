import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Button from 'react-bootstrap/Button';
import '../styles/main_styles.css'
import '../plugins/font-awesome-4.7.0/css/font-awesome.min.css'

import bg1 from '../images/background3.jpg'

function Cta() {
  return (
    <React.Fragment>
      
        <div
            className="cta_background"
            style={{ backgroundImage: `url(${bg1})` }}
        />
        <div className="container">
            <div className="row">
            <div className="col">
            <Carousel autoPlay interval={5000} infiniteLoop showStatus={false} showThumbs={false}>

                <div className="cta_item text-center">
                    <div className="cta_title">Centres d'intérêt</div>
                    <p className="cta_text">
                        Whee! c'est aussi une mise en relation des gens de même centre d'intérêt.
                    </p>
                    <p className="cta_text">
                        Ce qui va vous garantir un ambiance convivial pendant votre voyage
                    </p>
                    <Button className="button cta_button">
                        
                        <a href="#">
                            Découvrir
                            <span />
                            <span />
                            <span />
                        </a>
                    </Button>
                </div>

                <div className="cta_item text-center">
                    <div className="cta_title">
                        <i className="fa fa-music" aria-hidden="true" /> Musiques
                    </div>
                    <p className="cta_text">
                        Que vous soyez adeptes de rock torrides ou des tendres mélodies de la
                        musique acoustique traditionnelle, vous serrez ébahis par la passion de
                        votre compagnon de covoiturage.
                    </p>
                    <Button className="button cta_button">
                        <a href="#">
                            Découvrir
                            <span />
                            <span />
                            <span />
                        </a>
                    </Button>
                </div>
                

                <div className="cta_item text-center">
                    <div className="cta_title">
                    <i className="fa fa-soccer-ball-o" aria-hidden="true"></i> Sports
                    </div>
                    <p className="cta_text">
                    Le sport est mieux si on a d'autres personnes à qui le partager. Le
                    covoiturage aussi. Le "match" est vite fait!
                    </p>
                    <Button className="button cta_button">
                        <a href="#">
                            Découvrir
                            <span />
                            <span />
                            <span />
                        </a>
                    </Button>
                </div>

            </Carousel>
                
            </div>
            </div>
        </div>


    </React.Fragment>
  )
}

export default Cta
