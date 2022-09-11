import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import '../styles/bootstrap4/bootstrap.min.css'
import '../styles/main_styles.css'
import avis from './data/Avis'


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function AvisClient() {
  return (
    <React.Fragment>
      
        <div className="container">
            <div className="row">
            <div className="col text-center">
                <h2 className="section_title">
                Qu'est-ce que nos clients disent de nous?
                </h2>
            </div>
            </div>
            <div className="row">
            <div className="col">
                {/* Testimonials Slider */}
                <Carousel 
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    // customTransition="all 1"
                    // transitionDuration={1000}
                    transitionTime={1000}
                    autoPlay={1000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className="carouselContainer"
                > 
                    {avis.map((data) => {
                            return(
                                <div className="test_item" key={data.id}>
                        <div className="test_image">
                            <img src={data.image} alt="" />
                        </div>
                        <div className="test_icon">
                            <img src={data.icone} alt="" />
                            
                        </div>
                        <div className="test_content_container">
                            <div className="test_content">
                            <div className="test_item_info">
                                <div className="test_name">{data.nom}</div>
                                <div className="test_date">{data.date}</div>
                            </div>
                            <div className="test_quote_title">" {data.titre} "</div>
                            <p className="test_quote_text">{data.avis}</p>
                            <div className={data.note}>
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                            </div>
                            </div>
                        </div>
                    </div>
                            )
                        })
                    }
                    
                    
                    
                </Carousel>
            </div>
            </div>
        </div>
    
    </React.Fragment>
  )
}

export default AvisClient
