import React from 'react'
import offre from '../data/Offre'

function Event() {
  return (
    <div className="offers">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2 className="section_title">Les évènements populaires</h2>
          </div>
        </div>
        <div className="row offers_items">
          {/* Offers Item */}
          {offre.map((data) => {
            return (
              <div className="col-lg-6 offers_col" key={data.id}>
                <div className="offers_item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="offers_image_container">

                        <div className="offer_date">{data.date}</div>
                        <img
                          src={data.image}
                          className="offers_image_background"

                        />
                        <div className="offer_name">
                          <a href="index.html">{data.lieu}</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="offers_content">
                        <div className="offers_title">
                          {data.titre}
                          <span />
                        </div>
                        <div className={data.note}>
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                        <p className="offers_text">
                          {data.contenu}
                        </p>
                        <div className="offers_icons">
                          <ul className="offers_icons_list">
                            <li className="offers_icons_item">
                              <img src={data.icone} alt="" />
                            </li>

                          </ul>
                        </div>
                        <div className="offers_link">
                          <a href="offers.html">voir plus</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            )
          })}


        </div>
      </div>
    </div>
  )
}

export default Event
