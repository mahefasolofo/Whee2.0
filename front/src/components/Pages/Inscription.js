import React, { Component, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
// import '../styles/inscription_styles.css';
import UserService from "../../services/UserService";
import VousEtesBienInscrit from "./VousEtesBienInscrit";

import { Helmet } from "react-helmet";
import InterestService from "../../services/InterestService";
const Inscription = () => {
  const [interet, setInterest] = useState([]);
  const [myInterest, setMyInterest] = useState([]);
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState({
    nom: "Randria",
    prenom: "Miora",
    mail: "eeramanjay@gmail.com",
    password: "0508",
    genre: "Femme",
    adresse: "Soavinimerina",
    contact: "0345270631",
    photo: null,
    date_naissance: "1992-08-05",
    vehicules: {},
    evaluations: {},
  });
 
  const onSubmit = (d) => {
    // d.date_naissance="hieu";
    // d.interests = [];
    // alert(JSON.stringify(d));
    // alert(d);
    console.log(d);
    UserService.newCompte(d);
    // UserService.newCompte(JSON.stringify(d));
    // alert("mety");
    d.date_naissance = "aohana";
    // d.interests = [{
    //         "idCI": 8,
    //         "category": {
    //             "idCateg": 1,
    //             "nomCateg": "Musique"
    //         },
    //         "nomCI": "Soul",
    //         "img": "Sport"
    //     }];
    d.evaluation = [];
    d.vehicules = [];
    console.log(d.interests);
    UserService.newCompte(d);
    alert(JSON.stringify(d));
    console.log(JSON.stringify(d));
    console.log("ty ny my interest", JSON.stringify(formData.myInterest));
    console.log(d);
  };
  useEffect(() => {
    const logInterest = async () => {
      const resp = await InterestService.getInterest();
      setInterest(resp.data);
    };
    logInterest();
  }, []);

    const seConnecter = () => {
        console.log(myInterest);
        formData.interests = myInterest.val;
        UserService.newCompte(formData);
        console.log(formData.interests);
        // alert(JSON.stringify(formData))
        closeInscription();
        document.getElementById('Felicitation').style.display = 'block';
        localStorage.setItem("token", "eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwOWMwNTdkM2JkZDhjMDhmMmQ1NzM5Nzg4NjMyNjczZjdjNjI0MGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NjM1ODUyMjEsImF1ZCI6IjE2MjI0NzE2NDQ2MC11MDEwYXVoOWYydDRlcjM2a2xjODFzcWQ3ZzhlbGc3dS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMjU5MjAyOTg2NTE4NTMyNzg1NCIsImVtYWlsIjoiam9lbGFuZHJpYW1ib2xhQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIxNjIyNDcxNjQ0NjAtdTAxMGF1aDlmMnQ0ZXIzNmtsYzgxc3FkN2c4ZWxnN3UuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoiSm9lbCBBbmRyaWEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FDTlBFdS1uUTJhcDJEZWtNMXdYdXRQTEU5Zk1qLUg3Ny1QOG9wVFhuczVJPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkpvZWwiLCJmYW1pbHlfbmFtZSI6IkFuZHJpYSIsImlhdCI6MTY2MzU4NTUyMSwiZXhwIjoxNjYzNTg5MTIxLCJqdGkiOiI1ZGNkNjVmYjZjMTc2YzM3NmE4MGQ2ODc4ZDZlYzk3ZDNjODNmNDczIn0.n9w5JvfrMhkBs6fYOCoC9ojyuGdQH7kMqgED46AX4hXtTt2Q0EUcvXgB1Yjdb3dz5nyC7ZCvYJDbZH3LZafpK_px_IzwDftnayHQkZfY-vWXHIKB3MJelAmiKCU7H1rIOORbc9n6hFiNbfJ_AmfZ5-KJ8yUoC6-8XTS6rDVN_rpnusPJBsycW1MExXJQasmhH61ErInS2mH1VgrSiUY4JHcNYC-H1MsRac5A2oPDVNFckw8bpSG-Fns8yg1oIhn2Sz4ChwOuM-2_XeTe-wCKwdPCa3rVqeh7SUXr8szCKnIoEfsaH-VaLuzihdaFuFB8EmGToab_9Csh2LI8qCn4Mg");
    }
    const continuer = () => {
        window.location.reload(false);
        localStorage.setItem("token", "eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwOWMwNTdkM2JkZDhjMDhmMmQ1NzM5Nzg4NjMyNjczZjdjNjI0MGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NjM1ODUyMjEsImF1ZCI6IjE2MjI0NzE2NDQ2MC11MDEwYXVoOWYydDRlcjM2a2xjODFzcWQ3ZzhlbGc3dS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMjU5MjAyOTg2NTE4NTMyNzg1NCIsImVtYWlsIjoiam9lbGFuZHJpYW1ib2xhQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIxNjIyNDcxNjQ0NjAtdTAxMGF1aDlmMnQ0ZXIzNmtsYzgxc3FkN2c4ZWxnN3UuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoiSm9lbCBBbmRyaWEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FDTlBFdS1uUTJhcDJEZWtNMXdYdXRQTEU5Zk1qLUg3Ny1QOG9wVFhuczVJPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkpvZWwiLCJmYW1pbHlfbmFtZSI6IkFuZHJpYSIsImlhdCI6MTY2MzU4NTUyMSwiZXhwIjoxNjYzNTg5MTIxLCJqdGkiOiI1ZGNkNjVmYjZjMTc2YzM3NmE4MGQ2ODc4ZDZlYzk3ZDNjODNmNDczIn0.n9w5JvfrMhkBs6fYOCoC9ojyuGdQH7kMqgED46AX4hXtTt2Q0EUcvXgB1Yjdb3dz5nyC7ZCvYJDbZH3LZafpK_px_IzwDftnayHQkZfY-vWXHIKB3MJelAmiKCU7H1rIOORbc9n6hFiNbfJ_AmfZ5-KJ8yUoC6-8XTS6rDVN_rpnusPJBsycW1MExXJQasmhH61ErInS2mH1VgrSiUY4JHcNYC-H1MsRac5A2oPDVNFckw8bpSG-Fns8yg1oIhn2Sz4ChwOuM-2_XeTe-wCKwdPCa3rVqeh7SUXr8szCKnIoEfsaH-VaLuzihdaFuFB8EmGToab_9Csh2LI8qCn4Mg");
        window.location.reload(false);
    }


    const closeInscription = () => {
        document.getElementById("id02").style.display = "none";
    };


    return (
        <div> {/* Hello world */}
           <VousEtesBienInscrit/>

            <div className="inscriptionModal" id="id02">
                <div>
                
                    <div className="containerInscription d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-6">
                                {" "}
                                {/* <button type="button" className="btn btn-lg btn-warning" data-toggle="modal" data-target="#myModal">
                                    Open Congratulations card Modal
                                </button> */}
                                {" "} </div>
                        </div>
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <div data-multi-step="" className="multi-step-form"
                            //     onSubmit={
                            //         handleSubmit(onSubmit)
                            // }
                        >
                            <div className="card cardInscription" data-step="">
                                <span className="close" title="Fermer"
                                    onClick={closeInscription}>
                                    <i className="fa fa-times-circle closeInscription" aria-hidden="true"/>
                                </span>
                                <div className="imgcontainer">
                                    <div style={
                                        {
                                            textAlign: "center",
                                            marginTop: 15
                                        }
                                    }>
                                        <span className="dot"
                                            style={
                                                {backgroundColor: "black"}
                                            }/>
                                        <span className="dot"/>
                                        <span className="dot"/>
                                        <span className="dot"/>
                                    </div>
                                    <h5 className="card-title text-center pb-0 fs-4">
                                        {" "}
                                        Bienvenue sur Whee!
                                    </h5>
                                </div>
                                <div style={
                                    {}
                                }>
                                    <b>
                                        Nom*
                                    </b>
                                    <input type="text" placeholder="Nom d'Utilisateur" name="uname" className="inscriptionInput"
                                        onChange={
                                            (e) => {
                                                setFormData({
                                                    ...formData,
                                                    nom: e.target.value
                                                })
                                            }
                                        }/>
                                    <b htmlFor="psw">
                                        Prenom*
                                    </b>
                                    <input type="text" placeholder="Prénom" name="prenom" className="inscriptionInput"
                                        style={
                                            {marginBottom: 15}
                                        }
                                        onChange={
                                            (e) => {
                                                setFormData({
                                                    ...formData,
                                                    prenom: e.target.value
                                                })
                                            }
                                        }/>
                                    <b htmlFor="psw">
                                        Mot de Passe*
                                    </b>
                                    <input type="password" placeholder="Mot de passe" name="psw" className="inscriptionInput"
                                        onChange={
                                            (e) => {
                                                setFormData({
                                                    ...formData,
                                                    password: e.target.value
                                                })
                                            }
                                        }/>
                                    <button type="button" className="buttonInscription" data-next="">
                                        Suivant
                                    </button>
                                    {/* <input type="checkbox" checked="checked" name="remember"> Remember me */}
                                    <div style={
                                        {
                                            marginTop: 12,
                                            alignItems: "center"
                                        }
                                    }>
                                        <span className="" id="spanCondition">
                                            <span>
                                                <input type="checkbox" name="condition" id="checkboxCondition" required="required"/>
                                                En continuant, vous acceptez les{" "}
                                                <a className="conditionTexte" href="#" rel="noopener noreferrer" target="_blank">
                                                    Conditions d'utilisation
                                                </a>
                                                {" "}
                                                de Whee et reconnaissez avoir lu nos{" "}
                                                <a className="Wk9 CCY czT eEj KhY xQ4 uCz" href="#" rel="noopener noreferrer" target="_blank">
                                                    Politiques de confidentialité
                                                </a>
                                            </span>
                                        </span>
                                        <div style={
                                            {
                                                marginTop: 12,
                                                alignItems: "center",
                                                textAlign: "center"
                                            }
                                        }>
                                            <button aria-label="" className="buttonConnexionInscription active" data-test-id="login-signup-toggle" type="button">
                                                Vous êtes déjà sur Whee!&nbsp;? Connectez-vous
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* //Genre */}
                            <div className="card cardInscription" data-step="">
                                <i className="fa-solid fa-arrow-left previous"
                                    style={
                                        {fontSize: 25}
                                    }
                                    data-previous=""/>
                                <div style={
                                    {
                                        textAlign: "center",
                                        marginTop: 15
                                    }
                                }>
                                    <span className="dot"/>
                                    <span className="dot"
                                        style={
                                            {backgroundColor: "black"}
                                        }/>
                                    <span className="dot"/>
                                    <span className="dot"/>
                                </div>
                                <h5 className="cardInscription-title text-center pb-0 genreTitle"
                                    style={
                                        {marginTop: 30}
                                }>
                                    Vous êtes identifié en tant que:
                                </h5>
                                {/* <div className="form-group"> */}


                                <table>
                                    <tbody>
                                        <tr>
                                            <td> {" "}
                                                <label htmlFor="homme" className="sexeLabel">
                                                    Homme
                                                </label>
                                            </td>
                                            <td>
                                                <input type="radio" id="autres" name="fav_language" defaultValue="HTML" value="homme" checked
                                                    onChange={
                                                        (e) => {
                                                            setFormData({
                                                                ...formData,
                                                                genre: e.target.value
                                                            })
                                                        }
                                                    }/>
                                            </td>
                                    </tr>
                                    <tr>
                                        <td> {" "}
                                            <label htmlFor="html" className="sexeLabel">
                                                Femme
                                            </label>
                                        </td>
                                        <td>
                                            <input type="radio" id="autres" name="fav_language" defaultValue="HTML" value="femme"
                                                onChange={
                                                    (e) => {
                                                        setFormData({
                                                            ...formData,
                                                            genre: e.target.value
                                                        })
                                                    }
                                                }/>
                                        </td>
                                </tr>
                                <tr>
                                    <td> {" "}
                                        <label htmlFor="html" className="sexeLabel">
                                            Autre
                                        </label>
                                    </td>
                                    <td> {" "}
                                        <label htmlFor="html">
                                            <input type="radio" id="autres" name="fav_language" defaultValue="HTML" value="autre"    onChange={
                                                    (e) => {
                                                        setFormData({
                                                            ...formData,
                                                            genre: e.target.value
                                                        })
                                                    }
                                                }/>
                                        </label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="button" className="buttonInscription" data-next="">
                            Suivant
                        </button>
                    </div>
                    <div className="card cardInscription"
                        style={
                            {alignItems: "center"}
                        }
                        data-step="">
                        <i className="fa-solid fa-arrow-left previous"
                            style={
                                {fontSize: 25}
                            }
                            data-previous=""/>
                        <div style={
                            {
                                textAlign: "center",
                                marginTop: 15
                            }
                        }>
                            <span className="dot"/>
                            <span className="dot"/>
                            <span className="dot"
                                style={
                                    {backgroundColor: "black"}
                                }/>
                            <span className="dot"/>
                        </div>
                        <h3 className="step-title cardInscription-title">
                            Avant-dernière étape{" "} </h3>
                        <div className="container containereInscritpion"
                            style={
                                {
                                    alignItems: "start",
                                    marginLeft: 5
                                }
                        }>


                            <b>Email</b>
                            <input type="text" placeholder="Email" name=" uname" required=" " className="inscriptionInput"
                                onChange={
                                    (e) => {
                                        setFormData({
                                            ...formData,
                                            mail: e.target.value
                                        })
                                    }
                                }/>

                            <b>Contact</b>
                            <input type="text" placeholder="Numéro" name="contact" required=" " className="inscriptionInput"
                                onChange={
                                    (e) => {
                                        setFormData({
                                            ...formData,
                                            contact: e.target.value
                                        })
                                    }
                                }/>
                            <b>Adresse</b>
                            <input type="text" placeholder=" Adresse" name="adresse" required=" " className="inscriptionInput"
                                onChange={
                                    (e) => {
                                        setFormData({
                                            ...formData,
                                            adresse: e.target.value
                                        })
                                    }
                                }/>
                            <button type=" button" className=" buttonInscription" data-next=" ">
                                Suivant
                            </button>
                        </div>
                    </div>
                    <div className="card cardInscriptionCentreInteret cardInscription" data-step="">
                        <i className="fa-solid fa-arrow-left previous"
                            style={
                                {fontSize: 25}
                            }
                            data-previous=""/>
                        <div style={
                            {
                                textAlign: "center",
                                marginTop: 15
                            }
                        }>
                            <span className="dot"/>
                            <span className="dot"/>
                            <span className="dot"/>
                            <span className="dot"
                                style={
                                    {backgroundColor: "black"}
                                }/>
                        </div>
                        <h3 className="step-title cardInscription-title">
                            Dernière étape ! Dites-nous ce qui vous intéresse{" "} </h3>
                        <div className="rowCentreInteret row"
                            style={
                                {width: "100%"}
                        }>
                            {
                            interet.map((val, key) => {

                                return (
                                    <div className="col-2 divCentreInteret"
                                        style={
                                            {
                                                backgroundImage: 'url("images/interests/' + val.imageCI + '.png")',
                                                backgroundSize: "100% 105%"
                                            }
                                        }
                                        key={
                                            val.id
                                    }>

                                        <label className="option_item overlay-image">

                                            <input type="checkbox" id="checkbox" className="checkbox-rounded"
                                                value={
                                                    val.idCI
                                                }

                                                key={
                                                    val.idCI
                                                }
                                                onChange={
                                                    (e) => {
                                                        if (formData.interests != null) {
                                                            setFormData({
                                                                ...formData,
                                                                interests: [
                                                                    formData.interests, {
                                                                        "idCI": e.target.value
                                                                    }
                                                                ]

                                                            });
                                                        } else {
                                                            setFormData({
                                                                ...formData,
                                                                interests: [
                                                                    {

                                                                        "idCI": e.target.value
                                                                    }
                                                                ]

                                                            });

                                                        }

                                                        setMyInterest({
                                                            ...myInterest.val,
                                                            val
                                                        });
                                                    }
                                                }/>

                                            <label htmlFor="" className="labelCentreInteret">
                                                {
                                                val.nomCI
                                            } </label>

                                        </label>
                                    </div>
                                )
                            })
                        } </div>
                        <button className="buttonInscription" data-toggle="modal"
                            onClick={seConnecter}>
                            S'INSCRIRE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Helmet>
        <script src="../js/inscriptionScript.js" defer></script>
    </Helmet>
</div>

  );
};

export default Inscription;
