import React, {Component, useContext, useEffect, useState} from "react";
import {UserContext} from "../../services/UserContext";
import {Dropdown} from "react-bootstrap";
import jwt_decode from "jwt-decode";
import voiture from "../../images/audi.png";
import UserService from "../../services/UserService";
import bgUserspace from '../../images/bgProfile.jpg';
import InterestService from "../../services/InterestService";
import Interestitem from "./Interestitem";

function ProfilPage() {

    let idCurrentUser = useContext(UserContext);
    const [user, setUser] = useState({});
    const [interests, setInterests] = useState([]);

    let value = "jieo";
    
    useEffect(() => {
        getUserById(idCurrentUser);
        getUserCi(idCurrentUser);
      }, [idCurrentUser])

    
      
    const getUserById = (id) => {
    UserService.getById(id).then((res) => {
        
        setUser(res.data);
        //console.log(res.data);
        
    });
    }

    const getUserCi = (id) => {
        InterestService.getUserInterests(id).then((response) => {
            setInterests(response.data);
            console.log(response.data)
        })
    }

    if (localStorage.getItem("token") != null) {
        if (localStorage.getItem("token").length > 14) {
            value = jwt_decode(localStorage.getItem("token"));

            console.log(localStorage.getItem("token"));
            console.log(localStorage.getItem("token"));
            value = jwt_decode(localStorage.getItem("token"));
            console.log(jwt_decode(localStorage.getItem("token")));
            console.log(value);
        } else {
            value = "nn";
        }
    }
    return (
        

            <div className="super_container">
            {/*<EventForm ArrEvent={destiantionRef}/>*/}
                {/* Home */}
                
                <div className="home_profil">
                <img
                    className="parallax-window"
                    data-parallax="scroll"
                    src={bgUserspace}
                ></img>
                <div className="home_content">
                    <div className="home_title">Profil</div> 
                            
                </div>
                </div>
                <div className="container">
                <div className="row d-flex  h-100" 
                style={{
                        backgroundColor: "#003049",
                        width : "100vw",
                        marginLeft : "-140px"
                }}>
                    {/*<div className="col col-lg-9 col-xl-7" style={{backgroundColor: "#003049"}}>*/}
                        <div className="card" style={{width: "50%"}}>
                            <div className="rounded-top text-white d-flex flex-row"
                                style={
                                    {
                                        backgroundColor: "#003049",
                                        backgroundSize: "100%",
                                        height: 120,
                                    }
                            }>
                                <div className="d-flex flex-column"
                                    style={
                                        {
                                            width: 150,
                                            height: 500,
                                            marginTop: 120
                                        }
                                }>
                                    <img src={
                                            value.picture
                                        }
                                        alt="Photo de Profil"

                                        style={
                                            {
                                                height: 140,
                                                borderRadius: "50%",
                                                zIndex: 1,
                                                marginTop: -50,
                                                marginLeft: 15
                                            }
                                        }/>

                                </div>

                            </div>
                            <div className="mb-2 d-flex">
                                <a style={
                                    {
                                        marginLeft: 180,
                                        fontSize: 25,
                                        marginTop: 10,
                                        fontWeight: "bold",
                                        color: "black"
                                    }
                                }>
                                    {
                                    value.name
                                } </a>
                                <h4 className="font-weight-normal"></h4>

                            </div>
                            <div className="p-4 text-black light blue"
                                style={
                                    {
                                    color: "#686868"}
                            }>
                                <div className="d-flex justify-content-end text-center py-1">

                                    <div>
                                        <p className="mb-1 h5">7</p>
                                        <p className="small text-muted mb-0">Participation</p>
                                    </div>
                                    <div className="px-3">
                                        <p className="mb-1 h5">4</p>
                                        <p className="small text-muted mb-0">Annonce</p>
                                    </div>
                                    <div>
                                        <p className="mb-1 h5">0</p>
                                        <p className="small text-muted mb-0">Demande</p>
                                    </div>
                                </div>


                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">


                                            <div className="mb-2">
                                                <ul className="list-unstyled">
                                                    <li className="media">

                                                        <span className="text-black font-weight-normal" style={{width: "140px"}}>
                                                            Genre :
                                                        </span>
                                                        <label className="media-body">{user.genre}</label>
                                                    </li>
                                                    <li className="media">
                                                        <span className="text-black font-weight-normal" style={{width: "140px"}}>
                                                            Date de naissance : </span>
                                                        <label className="media-body">{user.date_naissance}</label>
                                                    </li>
                                                    <li className="media">
                                                        <span className="text-black font-weight-normal" style={{width: "140px"}}>
                                                        Adresse :
                                                        </span>
                                                        <label className="media-body">{user.adresse}</label>
                                                    </li>
                                                    <li className="media">
                                                        <span className="text-black font-weight-normal" style={{width: "140px"}}>
                                                        Contact :
                                                        </span>
                                                        <label className="media-body">{user.contact}</label>
                                                    </li>
                                                    <li className="media">

                                                        <span className="text-black font-weight-normal" style={{width: "140px"}}>
                                                        Email :
                                                        </span>
                                                        <label className="media-body">{user.mail}</label>

                                                    </li>
                                                    <label>
                                                    
                                            
                                                    </label>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark"
                                    style={
                                        {zIndex: 1}
                                }>
                                    Modifier
                                </button>

                            </div>
                            </div>
                    
                        <div className="profile_vehicule_card">
                        <div className="row photos">

                        {interests.map((interest) => {
                            return(
                            <div>
                            <ul>
                                <li>{interest.nomCI}</li>
                                
                                
                            </ul>
                            <img src={interest.imageCI} alt="imgCI" className="imageCI"/>
                            </div>
                            
                            )
                                
                        })}
                        
                        
                    
                                        
                        </div>
                        </div>
                    
                    <div className="lightbox-gallery">
                                <div className="container">
                                    <label>Vos Véhicules</label>
                                    <div className="row photos">
                                        <div className="col-sm-6 col-md-4 col-lg-3 item">
                                            <a href="https://i.imgur.com/zmzERpe.jpg" data-lightbox="photos">
                                                <img className="img-fluid" src="https://i.imgur.com/zmzERpe.jpg"/>
                                            </a>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 item"
                                            style={
                                                {
                                                    width: 125,
                                                    height: 125,
                                                    marginTop: 15,
                                                    borderRadius: 15
                                                }
                                        }>
                                            <div style={
                                                {
                                                    width: 110,
                                                    height: 110,
                                                    marginTop: 10,
                                                    borderRadius: 15,
                                                    paddingLeft: 15,
                                                    backgroundImage: 'url(' + voiture + ')'
                                                }
                                            }>
                                                <label htmlFor="" className="labelCentreInteretProfil">
                                                    Beaux-arts
                                                </label>
                                            </div>

                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 item"
                                            style={
                                                {
                                                    width: 125,
                                                    height: 125,
                                                    marginTop: 15,
                                                    borderRadius: 15
                                                }
                                        }>
                                            <div style={
                                                {
                                                    width: 110,
                                                    height: 110,
                                                    marginTop: 10,
                                                    borderRadius: 15,
                                                    paddingLeft: 15,

                                                    backgroundImage: 'url(' + voiture + ')'
                                                }
                                            }>
                                                <label htmlFor="" className="labelCentreInteretProfil">
                                                    Beaux-arts
                                                </label>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                                <div className="container">
                                    <label>Vos Centres d'Intérêt</label>
                                    <div className="row photos">
                                        <div className="col-sm-6 col-md-4 col-lg-3 item">
                                            <a href="https://i.imgur.com/zmzERpe.jpg" data-lightbox="photos">
                                                <img className="img-fluid" src="https://i.imgur.com/zmzERpe.jpg"/>
                                            </a>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 item"
                                            style={
                                                {
                                                    width: 125,
                                                    height: 125,
                                                    marginTop: 15,
                                                    borderRadius: 15
                                                }
                                        }>
                                            <div style={
                                                {
                                                    width: 110,
                                                    height: 110,
                                                    marginTop: 10,
                                                    borderRadius: 15,
                                                    paddingLeft: 15,
                                                    backgroundImage: 'url(' + voiture + ')'
                                                }
                                            }>
                                                <label htmlFor="" className="labelCentreInteretProfil">
                                                    Beaux-arts
                                                </label>
                                            </div>

                                        </div>
                                        


                                    </div>
                                </div>
                            </div>

                        
                    </div>
                
                
            </div>


                
                
            
        
            {/*Fin Liste annonces*/} 
            
            
            </div>

    )
}

export default ProfilPage
