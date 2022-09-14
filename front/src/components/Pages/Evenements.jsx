import React, { Component } from 'react'
import bg from '../../images/event2.jpg'

export default class Evenements extends Component {
  render() {
    return (
        <div className="super_container">
            
                {/* Home */}
                <div className="home_offre">
                    <img className="home_background parallax-window" data-parallax="scroll" src={bg}></img>
                    <div className="home_content">
                    <div className="home_title">Les évènements</div>
                    </div>
                    <div className="search_panel_offre active col-lg-8">
                    <form
                        action="#"
                        id="search_form_1"
                        className="search_panel_content_offre d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
                        data-animation-in="flipInX"
                        data-animation-out="animate-out fadeOut"
                    >
                        <div className="search_item">
                        {/* <i class="fa fa-map-marker" aria-hidden="true"></i> Départ */}
                        <input
                            type="text"
                            className="destination search_input"
                            required="required"
                            placeholder=" Evènement"
                            style={{ fontFamily: "Arial, FontAwesome" }}
                        />
                        </div>
                        <div className="search_item">
                        {/* <i class="fa fa-map-marker" aria-hidden="true"></i> Destination */}
                        <input
                            type="text"
                            className="destination search_input"
                            required="required"
                            placeholder=" Lieu"
                            style={{ fontFamily: "Arial, FontAwesome" }}
                        />
                        </div>
                        <div className="search_item">
                        {/* <i class="fa fa-map-marker" aria-hidden="true"></i> Destination */}
                        <input
                            type="text"
                            className="destination search_input"
                            required="required"
                            placeholder=" Catégorie"
                            style={{ fontFamily: "Arial, FontAwesome" }}
                        />
                        </div>
                        <div className="search_item">
                        {/* <i class="fa fa-calendar" aria-hidden="true"></i> Date / heure */}
                        <input
                            type="datetime-local"
                            className="check_out search_input"
                            placeholder="Date | Heure"
                        />
                        </div>
                        <button className="button search_button">
                        <i className="fa fa-search" aria-hidden="true" />
                        </button>
                    </form>
                    </div>
                </div>
                {/* Blog */}
                <section className="light lightPadding">
                    <div className="container py-2">
                    {/* <div class="h1 text-center text-dark" id="pageHeaderTitle">My Cards Light</div> */}
                    <article className="postcard light blue">
                        <a className="postcard__img_link" href="#">
                        <img
                            className="postcard__img"
                            src="https://www.nocomment.mg/wp-content/plugins/k_builder/assets/js/jquery_kmp_composer/application/imagehandles.php?f=/wp-content/uploads/Ev%C3%A8nements/NCBar/2020/Decembre/no-comment-madagascar-PopUp-Silo.jpg&h=400&w=263&x=0&y=0&nh=400&nw=263"
                            alt="Image Title"
                        />
                        </a>
                        <div className="postcard__text t-dark">
                        <h1 className="postcard__title blue">
                            <a href="#">Tech House Madness by Bradih-Silo &amp; Friends</a>
                        </h1>
                        <div className="postcard__subtitle small">
                            <time dateTime="2020-05-25 12:00:00">
                            <i className="fas fa-calendar-alt mr-2" />
                            05 decembre 2020
                            </time>
                        </div>
                        <div className="postcard__bar" />
                        <div className="postcard__preview-txt">
                            no comment® bar vous présente Tech House Madness by Bradih-Silo
                            &amp; Friends ce samedi 5 décembre 2020 au no comment® bar Isoraka à
                            partir de 20h.
                        </div>
                        <div className="postcard__preview-txt">
                            Entrée gratuite – consommation obligatoire – l'établissement se
                            réserve le droit d'entrée.
                        </div>
                        <div className="postcard__preview-txt">Venez nombreux !!!</div>
                        <ul className="postcard__tagbox">
                            <div className="button book_button">
                            <a href="#">
                                Participer
                                <span />
                                <span />
                                <span />
                            </a>
                            </div>
                        </ul>
                        </div>
                    </article>
                    
                    </div>
                </section>
                

        </div>

    )
  }
}
