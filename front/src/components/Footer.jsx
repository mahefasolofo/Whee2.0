import React from 'react'
import '../plugins/font-awesome-4.7.0/css/font-awesome.min.css'


function Footer() {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="container">
            <div className="row">
            {/* Footer Column */}
            <div className="col-lg-4 footer_column">
                <div className="footer_col">
                <div className="footer_content footer_about">
                    {/* <div class="logo_container footer_logo">
                                        <div class="logo"><a href="#"><img src="images/logo.png" alt="">travelix</a></div>
                                    </div> */}
                    <p className="footer_about_text">
                    Il nous est venu l’idée de créer une application qui, en plus des
                    solutions économiques et écologiques apportées par le concept de
                    covoiturage, permet en quelques clics de trouver des partenaires
                    de covoiturage partageant idéalement les mêmes centres d’intérêts,
                    rendant ainsi, l’expérience plus enrichissante.
                    </p>
                    <ul className="footer_social_list">
                    <li className="footer_social_item">
                        <a href="#">
                        <i className="fa fa-pinterest" />
                        </a>
                    </li>
                    <li className="footer_social_item">
                        <a href="#">
                        <i className="fa fa-facebook-f" />
                        </a>
                    </li>
                    <li className="footer_social_item">
                        <a href="#">
                        <i className="fa fa-twitter" />
                        </a>
                    </li>
                    <li className="footer_social_item">
                        <a href="#">
                        <i className="fa fa-dribbble" />
                        </a>
                    </li>
                    <li className="footer_social_item">
                        <a href="#">
                        <i className="fa fa-behance" />
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            {/* Footer Column */}
            <div className="col-lg-4 footer_column">
                <div className="footer_col">
                <div className="footer_title">Mots clés</div>
                <div className="footer_content footer_tags">
                    <ul className="tags_list clearfix">
                    <li className="tag_item">
                        <a href="#">design</a>
                    </li>
                    <li className="tag_item">
                        <a href="#">sport</a>
                    </li>
                    <li className="tag_item">
                        <a href="#">musique</a>
                    </li>
                    <li className="tag_item">
                        <a href="#">video</a>
                    </li>
                    <li className="tag_item">
                        <a href="#">spéctacles</a>
                    </li>
                    <li className="tag_item">
                        <a href="#">photographie</a>
                    </li>
                    <li className="tag_item">
                        <a href="#">aventure</a>
                    </li>
                    <li className="tag_item">
                        <a href="#">voyages</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            {/* Footer Column */}
            <div className="col-lg-4 footer_column">
                <div className="footer_col">
                <div className="footer_title">contact info</div>
                <div className="footer_content footer_contact">
                    <ul className="contact_info_list">
                    <li className="contact_info_item d-flex flex-row">
                        <div>
                        <div className="contact_info_icon">
                            <i
                            className="fa fa-map-marker contact_info_icon"
                            aria-hidden="true"
                            />
                        </div>
                        </div>
                        <div className="contact_info_text">
                        5 Avenue de l'Indépendance Analakely Antananarivo Madagascar
                        </div>
                    </li>
                    <li className="contact_info_item d-flex flex-row">
                        <div>
                        <div className="contact_info_icon">
                            <i
                            className="fa fa-volume-control-phone contact_info_icon"
                            aria-hidden="true"
                            />
                        </div>
                        </div>
                        <div className="contact_info_text">+261 32 77 747 69</div>
                    </li>
                    <li className="contact_info_item d-flex flex-row">
                        <div>
                        <div className="contact_info_icon">
                            <i
                            className="fa fa-envelope-o contact_info_icon"
                            aria-hidden="true"
                            />
                        </div>
                        </div>
                        <div className="contact_info_text">
                        <a
                            href="mailto:contactme@gmail.com?Subject=Hello"
                            target="_top"
                        >
                            contactwhee@gmail.com
                        </a>
                        </div>
                    </li>
                    <li className="contact_info_item d-flex flex-row">
                        <div>
                        <div className="contact_info_icon">
                            <i
                            className="fa fa-globe contact_info_icon"
                            aria-hidden="true"
                            />
                        </div>
                        </div>
                        <div className="contact_info_text">
                        <a href="https://colorlib.com">www.whee!.com</a>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
    </footer>

    </React.Fragment>
  )
}

export default Footer
