import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



import '../styles/bootstrap4/bootstrap.min.css'
import '../styles/main_styles.css'
import bg1 from '../images/background5.jpg'
import bg2 from '../images/people4.png'
import bg3 from '../images/event3.jpg'
import TrajetPopulaire from './TrajetPopulaire';
import Cta from './Cta';
import Offre from './Offre';
import Footer from './Footer';
import AvisClient from './AvisClient';



  
class Main extends Component {
    
    render() {
        return (
            <React.Fragment>
                {/* Home */}
                <div className='home'>
                    <div className='owl-carousel owl-theme home_slider'>
                        <Carousel autoPlay interval={5000} infiniteLoop showStatus={false} showThumbs={false} transitionTime={1000}>
                            {/* Slider Item 1 */}
                            <div className='owl-item home_slider_item'>
                                <div className='home_slider_background' style={{ backgroundImage: `url(${bg1})` }}></div>
                                <div className='home_slider_content text-center'>
                                    <div className='home_slider_content_inner' data-animation-in='flipInX' data-animation-out='animate-out fadeOut'>
                                        <h1> </h1>
                                        <h1>Offres!</h1>
                                    </div>
                                </div>
                                <div className='search_panel active col-lg-8'>
                                <Form action="#" id="search_form_1" className='search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start' data-animation-in='flipInX' data-animation-out='animate-out fadeOut'>
                                    
                                    <Form.Group className="search_item">
                                        <Form.Control className='destination search_input' type="text" placeholder="Départ" required="required"/>
                                    </Form.Group>
                                    <Form.Group className="search_item">
                                        <Form.Control className='destination search_input' type="text" placeholder="Destination" required="required"/>
                                    </Form.Group>
                                    <Form.Group className="search_item">
                                        <Form.Control type="datetime-local" className="check_out search_input" placeholder="Date | Heure"/>
                                    </Form.Group>
                                    <Form.Group className="search_item">
                                        <Form.Select name="adults" id="adults_1" className="dropdown_item_select search_input" placeholder="Personnes">
                                            <option value="">Passagers</option>
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                            <option>04</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Button className="button search_button"><i className="fa fa-search" aria-hidden="true"></i></Button>
                                </Form>
                                </div>
                            </div>

                            {/* Slider Item 2 */}
                            <div className='owl-item home_slider_item'>
                                <div className='home_slider_background' style={{ backgroundImage: `url(${bg2})` }}></div>
                                <div className='home_slider_content text-center'>
                                    <div className='home_slider_content_inner' data-animation-in='flipInX' data-animation-out='animate-out fadeOut'>
                                        <h1> </h1>
                                        <h1>Demandes!</h1>
                                    </div>
                                </div>
                                <div className='search_panel active col-lg-8'>
                                <Form action="#" id="search_form_1" className='search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start' data-animation-in='flipInX' data-animation-out='animate-out fadeOut'>
                                    
                                    <Form.Group className="search_item">
                                        <Form.Control className='destination search_input' type="text" placeholder="Départ" required="required"/>
                                    </Form.Group>
                                    <Form.Group className="search_item">
                                        <Form.Control className='destination search_input' type="text" placeholder="Destination" required="required"/>
                                    </Form.Group>
                                    <Form.Group className="search_item">
                                        <Form.Control type="datetime-local" className="check_out search_input" placeholder="Date | Heure"/>
                                    </Form.Group>
                                    <Form.Group className="search_item">
                                        <Form.Select name="adults" id="adults_1" className="dropdown_item_select search_input" placeholder="Personnes">
                                            <option value="">Passagers</option>
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                            <option>04</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Button className="button search_button"><i className="fa fa-search" aria-hidden="true"></i></Button>
                                </Form>
                                </div>
                            </div>

                            {/* Slider Item 3 */}
                            <div className='owl-item home_slider_item'>
                                <div className='home_slider_background' style={{ backgroundImage: `url(${bg3})` }}></div>
                                <div className='home_slider_content text-center'>
                                    <div className='home_slider_content_inner' data-animation-in='flipInX' data-animation-out='animate-out fadeOut'>
                                        <h1> </h1>
                                        <h1>Evènements!</h1>
                                    </div>
                                </div>
                                <div className='search_panel active col-lg-8'>
                                <Form action="#" id="search_form_1" className='search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start' data-animation-in='flipInX' data-animation-out='animate-out fadeOut'>
                                    
                                    <Form.Group className="search_item">
                                        <Form.Control className='destination search_input' type="text" placeholder="Evènement" required="required"/>
                                    </Form.Group>
                                    <Form.Group className="search_item">
                                        <Form.Control className='destination search_input' type="text" placeholder="Lieu" required="required"/>
                                    </Form.Group>
                                    <Form.Group className="search_item">
                                        <Form.Control className='destination search_input' type="text" placeholder="Catégorie" required="required"/>
                                    </Form.Group>
                                    <Form.Group className="search_item">
                                        <Form.Control type="datetime-local" className="check_out search_input" placeholder="Date | Heure"/>
                                    </Form.Group>
                                    <Button className="button search_button"><i className="fa fa-search" aria-hidden="true"></i></Button>
                                </Form>
                                </div>
                            </div>
                        </Carousel>
                        

                    </div>    
                     
                </div>
                
                
                {/* Trajets populaires */}
                <div className="intro">
                    <TrajetPopulaire/>
                    <div className="test_border"></div> 
                </div>
                <div className="test_border"></div> 
                {/* CTA */}
                <div class="cta">
                    <Cta/>
                    
                </div>
                 
                {/* Evènements */}
                <div className="offers">
                    <Offre/>
                    <div className="test_border"></div>
	            </div>
                
                {/* Avis clients */}
                <div className="testimonials">
                    <AvisClient />
                </div>
                
                <Footer/>
                
            </React.Fragment>
                
            
        )
    }
}

export default Main