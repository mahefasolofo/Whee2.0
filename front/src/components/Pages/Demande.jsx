import axios from 'axios';
import React, {Component, useState, useEffect} from 'react'
import bg from '../../images/background8.jpg'
// import demande from '../data/Demande'
import OfferService from '../../services/OfferService';


function Demande() {
    const [recherche, setRecherche] = useState([]);
    const [recherche2, setRecherche2] = useState([]);

    const [response, setResponse] = useState({});
    const [demande, setDemande] = useState([]);
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');


    const [displayDepart, setDisplayDepart] = useState(false);
    const [displayArrivee, setDisplayArrivee] = useState(false)
    let newMatchesDepart = [];
    let newMatchesArrivee = []
    useEffect(() => {
        const logUsers = async () => {

            const resp = await OfferService.getOffers()

            // console.log(resp.data);
            // setResponse(resp.data);
            setResponse(resp.data);
            setDemande(resp.data)


        } logUsers();

    }, [response]);


    const onChangeHandlerDepart = (text) => {
        let matchesDepart = [];
        matchesDepart = response.map((val, key) => {
            return val.ptDepart;
        })
        matchesDepart = [...new Set(matchesDepart)];


        if (text.length != "") {
            function checkMatch(match) {
                return match.includes;
            }
            newMatchesDepart = matchesDepart.filter((element, key) => {
                if (element != null) {
                    if (element.toLowerCase().includes(text.toLowerCase())) {
                        return element;
                    }
                }
            })
            // matchesDepart = response.yfilter((element, index)=>{
            // const regex = new RegExp('${text}', "gi");
            // return response.match({text})
            // })
            setDisplayArrivee(false)
            setDisplayDepart(true)

        }


        setRecherche(newMatchesDepart)
        setText(text);
        console.log(recherche2);

    }
    const onChangeHandlerArrivee = (text2) => {

        let matchesArrivee = []
        matchesArrivee = response.map((val, key) => {
            return val.ptArrivee;
        })
        matchesArrivee = [...new Set(matchesArrivee)];


        for (let i = 0; i < response.length; i++) {
            if (matchesArrivee.indexOf(response[i].data) === -1) {
                matchesArrivee.push(response[i].data);
            }

        }
        if (text2.length != "") {
            function checkMatch(match) {
                return match.includes;
            }
            newMatchesArrivee = matchesArrivee.filter((element, key) => {
                if (element != null) {
                    if (element.toLowerCase().includes(text2.toLowerCase())) {
                        return element;
                    }
                }
            })
            // matchesArrivee = response.filter((element, index)=>{
            // const regex = new RegExp('${text}', "gi");
            // return response.match({text})
            // })
            setDisplayDepart(false);
            setDisplayArrivee(true);
        }


        setRecherche2(newMatchesArrivee)
        setText2(text2);
        console.log(recherche2);
    }
    const handleSearch=()=>{

    }


    return (<React.Fragment>
        <div className="home_offre">
            <img src={bg}
                alt="background demandes"
                className="home_background parallax-window"></img>
            <div className="home_content">
                <div className="home_title">Les demandes</div>
            </div>
            <div className="search_panel_offre active_offre col-lg-8">
                <form action="#" id="search_form_1" className="search_panel_content_offre d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                    <div className="search_item_offre">

                        <input type="text" className="destination search_input_offre" required="required" placeholder=" Départ"
                            style={
                                {fontFamily: "Arial, FontAwesome"}
                            }
                            onChange={
                                e => onChangeHandlerDepart(e.target.value)
                            }
                            value={text}/> {
                        displayDepart == false ? null : (
                            <div style={
                                    {
                                        color: "black",
                                        backgroundColor: "rgba(146, 145, 145, 0.7)"
                                    }
                                }
                                className="autoComptletionDiv">
                                {/* parcourez le tableau */}
                                {
                                recherche.map(function (v, i) {
                                    return (
                                        <div className="searchAutocompletion"
                                            key={
                                                v.id
                                        }>
                                            {/* imprimez le nom de l'élément */}
                                            <span onClick={
                                                    (e) => (onChangeHandlerDepart(v), setDisplayDepart(false))
                                                }
                                                className="searchAutocompletionValue"
                                                value={v}>
                                                {v}</span>
                                        </div>
                                    );
                                })
                            } </div>
                        )
                    } </div>
                    <div className="search_item_offre">

                        <input type="text" className="destination search_input_offre" required="required" placeholder=" Destination"
                            onChange={
                                e => onChangeHandlerArrivee(e.target.value)
                            }
                            style={
                                {fontFamily: "Arial, FontAwesome"}
                            }
                            value={text2}/> {
                        displayArrivee == false ? null : (
                            <div style={
                                {
                                    backgroundColor: "rgba(33, 33, 33, 0.8)",
                                    color: "black"
                                }
                            }>
                                {/* parcourez le tableau */}
                                {
                                recherche2.map(function (v, i) {
                                    return (
                                        <div className="searchAutocompletion"
                                            key={
                                                v.id
                                        }>
                                            {/* imprimez le nom de l'élément */}
                                            <span onClick={
                                                    (e) => (onChangeHandlerArrivee(v), setDisplayArrivee(false))
                                                }
                                                className="searchAutocompletionValue"
                                                value={v}>
                                                {v}</span>
                                        </div>
                                    );
                                })
                            } </div>
                        )
                    } </div>
                    <div className="search_item_offre">

                        <input type="datetime-local" className="check_out search_input_offre" placeholder="Date | Heure"/>
                    </div>
                    <div className="search_item_offre">

                        <select name="adults" id="adults_1" className="dropdown_item_select search_input_offre" placeholder="Personnes">
                            <option value="">Passagers</option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                        </select>
                    </div>
                    <button className="button search_button">
                        <i className="fa fa-search" aria-hidden="true"/>
                    </button>
                </form>
            </div>
        </div>

        <div className="offers_offre">
            <div className="container">
                <div className="row">
                    <div className="col-lg-1 temp_col"/>
                    <div className="col-lg-11">
                        {/* Offers Sorting */}
                        <div className="offers_sorting_container">
                            <ul className="offers_sorting">
                                <li>
                                    <span className="sorting_text">Prix</span>
                                    <i className="fa fa-chevron-down"/>
                                    <ul>
                                        <li className="sort_btn" data-isotope-option='{ "sortBy": "original-order" }' data-parent=".price_sorting">
                                            <span>Tout afficher</span>
                                        </li>
                                        <li className="sort_btn" data-isotope-option='{ "sortBy": "price" }' data-parent=".price_sorting">
                                            <span>Croissant</span>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="sorting_text">Lieu</span>
                                    <i className="fa fa-chevron-down"/>
                                    <ul>
                                        <li className="sort_btn" data-isotope-option='{ "sortBy": "original-order" }'>
                                            <span>Tout afficher</span>
                                        </li>
                                        <li className="sort_btn" data-isotope-option='{ "sortBy": "name" }'>
                                            <span>Alphabétique</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-lg-12">
                        {/* Offers Grid */}
                        <div className="offers_grid">
                            {/* Offers Item */}
                            {demande.map((val, key) => {
                                                                
                                                                return(
                                                                <div className="offers_item rating_4" key={val.id}>
                                                                    <div className="row">
                                                                    <div className="col-lg-1 temp_col" />
                                                                    <div className="col-lg-3 col-1680-4">
                                                                        <div className="offers_image_container_offre">
                                                                        
                                                                        <img src={val.image} className="offers_image_background_offre" alt="carte" />
                                                                        <div className="offer_date_demande">
                                                                            <a href="index.html">{val.dateCovoit} - {val.heureCovoit}</a>
                                                                        </div>
                                                                        <div className="demande_name">
                                                                            <a href="index.html">{val.ptDepart} -{val.ptArrivee}</a>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-8">
                                                                        <div className="offers_content">
                                                                        <div className="offers_price_offre">{val.tarif}</div>
                                                                        <p className="offers_text_offre">
                                                                            Recherche de covoiturage régulier en semaine pour 4
                                                                            personnes. Voiture propre et conducteur courtois requis.
                                                                        </p>
                                                                        <p className="offers_text_offre">Centres d'intérêts: Musiques</p>
                                                                        <div className="offers_icons_demandes">
                                                                            <ul className="offers_icons_list">
                                                                                <li className="offers_icons_people">
                                                                                    <img src="images/people.png" alt="" />
                                                                                </li>
                                                                                <li className="offers_icons_people">
                                                                                    <img src="images/people.png" alt="" />
                                                                                </li>
                                                                                <li className="offers_icons_people">
                                                                                    <img src="images/people.png" alt="" />
                                                                                </li>
                                                                                <li className="offers_icons_people">
                                                                                    <img src="images/people.png" alt="" />
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="button book_button">
                                                                            <a href="index.html">
                                                                            Proposer
                                                                            <span />
                                                                            <span />
                                                                            <span />
                                                                            </a>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                </div>)
                                                            })}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                
                                        </React.Fragment>


                            )
                        }
                        export default Demande;
