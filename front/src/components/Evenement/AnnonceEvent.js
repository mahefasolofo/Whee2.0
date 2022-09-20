import React from 'react'
import '../Espaceperso/userspace.css'
import seatimg from '../../images/seat3.png'
import Moment from 'react-moment';

const AnnonceEvent = ({annonceEvent, vehicule}) => {
    
    return (
        <div className="ibox-content">
                    <div className="table-responsive">
                        <table className="table shoping-cart-table">
                            <tbody>
                            <tr>
                                <td className='annoncetype_cont'>
                                    <div className="cart-product-imitation">demande
                                    </div>
                                </td>
                                <td className="desc">
                                    <h3>
                                    <h2 className="text-navy">
                                    <i className="fa fa-map-marker start"></i> {annonceEvent.ptDepart} -- <i className="fa fa-map-marker stop mt-2"></i> {annonceEvent.ptArrivee}
                                    </h2>
                                    </h3>
                                    <p className="date_annonce">
                                        <Moment format="Do MMMM YYYY">{annonceEvent.dateCovoit}</Moment> - <time format="HH:mm">{annonceEvent.heureCovoit}</time>
                                    </p>
                                    <dl className="car_annonce m-b-none">
                                        <dt><i className="fa fa-car"></i> {vehicule.marque} {vehicule.modele}</dt>
                                    </dl>

                                    <div className="menu_annonce m-t-sm">
                                        <a href="#" className="text-muted"><i className="fa fa-play"></i> Voir annonce </a>
                                        |
                                        <a href="#" className="text-muted"> <i className="fa fa-trash"></i> Supprimer annonce</a>
                                        
                                    </div>
                                </td>
                                <td>                                
                                <tl>
                                    
                                    <td width="40">
                                    
                                    <div className="seat_nb">
                                    <span>{annonceEvent.nbPlace}</span> <img src={seatimg} className='seat_img' alt="" /> 
                                    </div>                              
                                
                                    </td>
                                    
                                    <td className='annonce_price'>
                                    <h4>
                                        {annonceEvent.tarif} MGA
                                    </h4>
                                    </td>
                                </tl>
                                <tl>
                                        <div className='pub m-b-none'>
                                            <dl>Date de publication : 19/09/2022</dl>
                                        </div>
                                    
                                </tl>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
    );
  
}

export default AnnonceEvent;