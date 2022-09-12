import React, { Component } from 'react'

export default class Avis extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="testimonials">
            <div className="test_border" />
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
                  <div className="test_slider_container">
                    <div className="owl-carousel owl-theme test_slider">
                      {/* Testimonial Item */}
                      <div className="owl-item">
                        <div className="test_item">
                          <div className="test_image">
                            <img
                              src="images/test_1.jpg"
                              alt="https://unsplash.com/@anniegray"
                            />
                          </div>
                          <div className="test_icon">
                            <img src="images/kayak.png" alt="" />
                          </div>
                          <div className="test_content_container">
                            <div className="test_content">
                              <div className="test_item_info">
                                <div className="test_name">Alina PARIS</div>
                                <div className="test_date">24 mai 2022</div>
                              </div>
                              <div className="test_quote_title">
                                " Meilleures vacances de ma vie "
                              </div>
                              <p className="test_quote_text">
                                Mes vacances se sont passés à merveille grace ... aux
                                covoiturages.
                              </p>
                              <div className="rating_r rating_r_5 offers_rating">
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Testimonial Item */}
                      <div className="owl-item">
                        <div className="test_item">
                          <div className="test_image">
                            <img
                              src="images/test_4.jpg"
                              alt="https://unsplash.com/@tschax"
                            />
                          </div>
                          <div className="test_icon">
                            <img src="images/backpack.png" alt="" />
                          </div>
                          <div className="test_content_container">
                            <div className="test_content">
                              <div className="test_item_info">
                                <div className="test_name">Magnus ANDERSON</div>
                                <div className="test_date">12 janvier 2022</div>
                              </div>
                              <div className="test_quote_title">" Je suis sérein "</div>
                              <p className="test_quote_text">
                                Grace à l'existence de covoiturages je suis sérein pour
                                mes déplacements journaliers.
                              </p>
                              <div className="rating_r rating_r_4 offers_rating">
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Testimonial Item */}
                      <div className="owl-item">
                        <div className="test_item">
                          <div className="test_image">
                            <img
                              src="images/test_5.jpg"
                              alt="https://unsplash.com/@seefromthesky"
                            />
                          </div>
                          <div className="test_icon">
                            <img src="images/island_t.png" alt="" />
                          </div>
                          <div className="test_content_container">
                            <div className="test_content">
                              <div className="test_item_info">
                                <div className="test_name">Michelle RABE</div>
                                <div className="test_date">15 août 2022</div>
                              </div>
                              <div className="test_quote_title">
                                " Ecologique et pratique "
                              </div>
                              <p className="test_quote_text">
                                C'est écologique, il y aura moins de circulation dans la
                                ville. C'est pratique avec son système très intuitif.
                              </p>
                              <div className="rating_r rating_r_5 offers_rating">
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Testimonial Item */}
                      <div className="owl-item">
                        <div className="test_item">
                          <div className="test_image">
                            <img src="images/people2.jpg" alt="" />
                          </div>
                          <div className="test_icon">
                            <img src="images/island_t.png" alt="" />
                          </div>
                          <div className="test_content_container">
                            <div className="test_content">
                              <div className="test_item_info">
                                <div className="test_name">John RADISON</div>
                                <div className="test_date">05 juillet 2022</div>
                              </div>
                              <div className="test_quote_title">
                                " Pour éviter les bus "
                              </div>
                              <p className="test_quote_text">
                                Même si les contacts humaines ne m'intéressent pas, celà
                                me permet d'éviter les longs trajets en bus.
                              </p>
                              <div className="rating_r rating_r_3 offers_rating">
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Testimonial Item */}
                      <div className="owl-item">
                        <div className="test_item">
                          <div className="test_image">
                            <img src="images/test_6.jpg" alt="" />
                          </div>
                          <div className="test_icon">
                            <img src="images/backpack.png" alt="" />
                          </div>
                          <div className="test_content_container">
                            <div className="test_content">
                              <div className="test_item_info">
                                <div className="test_name">Leonardo ZORZI</div>
                                <div className="test_date">26 juin 2022</div>
                              </div>
                              <div className="test_quote_title">
                                " Lieu de rencontre "
                              </div>
                              <p className="test_quote_text">
                                C'est plaisant de rencontrer d'autres personnes de même
                                passion que vous pendant le temps d'un voyage.
                              </p>
                              <div className="rating_r rating_r_5 offers_rating">
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Testimonials Slider Nav - Prev */}
                    <div className="test_slider_nav test_slider_prev">
                      <svg
                        version="1.1"
                        id="Layer_6"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="28px"
                        height="33px"
                        viewBox="0 0 28 33"
                        enableBackground="new 0 0 28 33"
                        xmlSpace="preserve"
                      >
                        <defs>
                          <linearGradient id="test_grad_prev">
                            <stop offset="0%" stopColor="index.html003049" />
                            <stop offset="100%" stopColor="index.htmlcfcfcf" />
                          </linearGradient>
                        </defs>
                        <path
                          className="nav_path"
                          fill="index.htmlF3F6F9"
                          d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                                        M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                                        C22.545,2,26,5.541,26,9.909V23.091z"
                        />
                        <polygon
                          className="nav_arrow"
                          fill="index.htmlF3F6F9"
                          points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
                                        11.042,18.219 "
                        />
                      </svg>
                    </div>
                    {/* Testimonials Slider Nav - Next */}
                    <div className="test_slider_nav test_slider_next">
                      <svg
                        version="1.1"
                        id="Layer_7"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="28px"
                        height="33px"
                        viewBox="0 0 28 33"
                        enableBackground="new 0 0 28 33"
                        xmlSpace="preserve"
                      >
                        <defs>
                          <linearGradient id="test_grad_next">
                            <stop offset="0%" stopColor="index.htmlfa9e1b" />
                            <stop offset="100%" stopColor="index.html8d4fff" />
                          </linearGradient>
                        </defs>
                        <path
                          className="nav_path"
                          fill="index.htmlF3F6F9"
                          d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                                    M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                                    C22.545,2,26,5.541,26,9.909V23.091z"
                        />
                        <polygon
                          className="nav_arrow"
                          fill="index.htmlF3F6F9"
                          points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
                                    17.046,15.554 "
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact">
            <div
              className="contact_background"
              style={{ backgroundImage: "url(images/contact.png)" }}
            />
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="contact_image"></div>
                </div>
                <div className="col-lg-7">
                  <div className="contact_form_container">
                    <div className="contact_title">Nous contacter</div>
                    <form action="index.html" id="contact_form" className="contact_form">
                      <input
                        type="text"
                        id="contact_form_name"
                        className="contact_form_name input_field"
                        placeholder="Nom"
                        required="required"
                        data-error="Ce champ est requis."
                      />
                      <input
                        type="text"
                        id="contact_form_email"
                        className="contact_form_email input_field"
                        placeholder="E-mail"
                        required="required"
                        data-error="Ce champ est requis."
                      />
                      <input
                        type="text"
                        id="contact_form_subject"
                        className="contact_form_subject input_field"
                        placeholder="Objet"
                        required="required"
                        data-error="Ce champ est requis."
                      />
                      <textarea
                        id="contact_form_message"
                        className="text_field contact_form_message"
                        name="message"
                        rows={4}
                        placeholder="Message"
                        required="required"
                        data-error="Veuillez saisir votre message"
                        defaultValue={""}
                      />
                      <button
                        type="submit"
                        id="form_submit_button"
                        className="form_submit_button button"
                      >
                        Envoyer <span />
                        <span />
                        <span />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}
