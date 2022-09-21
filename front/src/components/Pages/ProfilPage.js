import React, {Component, useContext, useState} from "react";
import {UserContext} from "../../services/UserContext";
import {Dropdown} from "react-bootstrap";
import jwt_decode from "jwt-decode";
import voiture from "../../images/audi.png"
function ProfilPage() {


    let value = "jieo";
    localStorage.setItem("token", "eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwOWMwNTdkM2JkZDhjMDhmMmQ1NzM5Nzg4NjMyNjczZjdjNjI0MGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NjM1ODUyMjEsImF1ZCI6IjE2MjI0NzE2NDQ2MC11MDEwYXVoOWYydDRlcjM2a2xjODFzcWQ3ZzhlbGc3dS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMjU5MjAyOTg2NTE4NTMyNzg1NCIsImVtYWlsIjoiam9lbGFuZHJpYW1ib2xhQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIxNjIyNDcxNjQ0NjAtdTAxMGF1aDlmMnQ0ZXIzNmtsYzgxc3FkN2c4ZWxnN3UuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoiSm9lbCBBbmRyaWEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FDTlBFdS1uUTJhcDJEZWtNMXdYdXRQTEU5Zk1qLUg3Ny1QOG9wVFhuczVJPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkpvZWwiLCJmYW1pbHlfbmFtZSI6IkFuZHJpYSIsImlhdCI6MTY2MzU4NTUyMSwiZXhwIjoxNjYzNTg5MTIxLCJqdGkiOiI1ZGNkNjVmYjZjMTc2YzM3NmE4MGQ2ODc4ZDZlYzk3ZDNjODNmNDczIn0.n9w5JvfrMhkBs6fYOCoC9ojyuGdQH7kMqgED46AX4hXtTt2Q0EUcvXgB1Yjdb3dz5nyC7ZCvYJDbZH3LZafpK_px_IzwDftnayHQkZfY-vWXHIKB3MJelAmiKCU7H1rIOORbc9n6hFiNbfJ_AmfZ5-KJ8yUoC6-8XTS6rDVN_rpnusPJBsycW1MExXJQasmhH61ErInS2mH1VgrSiUY4JHcNYC-H1MsRac5A2oPDVNFckw8bpSG-Fns8yg1oIhn2Sz4ChwOuM-2_XeTe-wCKwdPCa3rVqeh7SUXr8szCKnIoEfsaH-VaLuzihdaFuFB8EmGToab_9Csh2LI8qCn4Mg");

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
        <section className="h-100 gradient-custom-2">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-9 col-xl-7">
                        <div className="card">
                            <div className="rounded-top text-white d-flex flex-row"
                                style={
                                    {
                                        backgroundColor: "#000",
                                        backgroundImage: 'url(' + voiture + ')',
                                        backgroundSize: "100% 110%",
                                        height: 300
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
                                                marginTop: "0px",
                                                borderRadius: "50%",
                                                zIndex: 1,
                                                marginTop: 110,
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
                                <div className="social d-flex ml-auto">
                                    <p className="pr-2 font-weight-normal">Suivre:</p>
                                    <a href="#" className="text-muted mr-1">
                                        <i className="fab fa-facebook-f"/>
                                    </a>
                                    <a href="#" className="text-muted mr-1">
                                        <i className="fab fa-twitter"/>
                                    </a>
                                    <a href="#" className="text-muted mr-1">
                                        <i className="fab fa-instagram"/>
                                    </a>
                                    <a href="#" className="text-muted">
                                        <i className="fab fa-linkedin"/>
                                    </a>
                                </div>

                            </div>
                            <div className="p-4 text-black"
                                style={
                                    {backgroundColor: "rgb(248, 248, 253)"}
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


                                {/* PUT THE DIV HERE */}
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">


                                            <div className="mb-2">
                                                <ul className="list-unstyled">
                                                    <li className="media">
                                                        <span className="w-25 text-black font-weight-normal">
                                                            Profession:
                                                        </span>
                                                        <label className="media-body">Design</label>
                                                    </li>
                                                    <li className="media">
                                                        <span className="w-25 text-black font-weight-normal">
                                                            Experience:{" "} </span>
                                                        <label className="media-body">10 Years</label>
                                                    </li>
                                                    <li className="media">
                                                        <span className="w-25 text-black font-weight-normal">Phone:
                                                        </span>
                                                        <label className="media-body">789 456 1230</label>
                                                    </li>
                                                    <li className="media">
                                                        <span className="w-25 text-black font-weight-normal">Email:
                                                        </span>
                                                        <label className="media-body">support@technol.com</label>
                                                    </li>
                                                    <li className="media">
                                                        <span className="w-25 text-black font-weight-normal">
                                                            Location:{" "} </span>
                                                        <label className="media-body">
                                                            5557 Cottey St Fort Worth, Texas(TX), 76119, New York, USA
                                                        </label>
                                                    </li>
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
                            <div className="lightbox-gallery">
                                <div className="container">
                                    <label>Vos Centres d'Intérêt</label>
                                    <div className="row photos">
                                        <div className="col-sm-6 col-md-4 col-lg-3 item">
                                            <a href="https://i.imgur.com/zmzERpe.jpg" data-lightbox="photos">
                                                <img className="img-fluid" src="https://i.imgur.com/zmzERpe.jpg"/>
                                            </a>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 item">
                                            <img className="img-fluid"
                                                src={voiture}
                                                style={
                                                    {
                                                        width: 110,
                                                        height: 110,
                                                        marginTop: 15,
                                                        borderRadius: 15
                                                    }
                                                }/>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 item">
                                            <img className="img-fluid"
                                                src={voiture}
                                                style={
                                                    {
                                                        width: 110,
                                                        height: 110,
                                                        marginTop: 15,
                                                        borderRadius: 15
                                                    }
                                                }/>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 item">
                                            <img className="img-fluid"
                                                src={voiture}
                                                style={
                                                    {
                                                        width: 110,
                                                        height: 110,
                                                        marginTop: 15,
                                                        borderRadius: 15
                                                    }
                                                }/>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 item">
                                            <img className="img-fluid"
                                                src={voiture}
                                                style={
                                                    {
                                                        width: 110,
                                                        height: 110,
                                                        marginTop: 15,
                                                        borderRadius: 15
                                                    }
                                                }/>
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
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ProfilPage
