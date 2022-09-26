import React, { useEffect, useState, useContext, useRef } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { UserContext } from "../../services/UserContext";
import { SocketContext } from "../../services/SocketContext";
import { Dropdown } from "react-bootstrap";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

var stompClient = null;

const NavBar = () => {
  let idCurrentUser = useContext(UserContext);

  /*Connect socket*/

  const {
    userData,
    setUserData,
    privateChats,
    setPrivateChats,
    tab,
    setTab,
    publicChats,
    setPublicChats,
  } = useContext(SocketContext);

  const connect = () => {
    let Sock = new SockJS("http://localhost:8090/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    setUserData({ ...userData, connected: true });
    stompClient.subscribe("/chatroom/public", onMessageReceived);
    stompClient.subscribe(
      "/user/" + userData.username + "/private",
      onPrivateMessage
    );
    userJoin();
  };
  const [load, setLoad] = useState();

  const userJoin = () => {
    var chatMessage = {
      senderName: userData.username,
      status: "JOIN",
    };
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  };

  const onError = (err) => {
    console.log(err);
  };

  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case "JOIN":
        if (!privateChats.get(payloadData.senderName)) {
          privateChats.set(payloadData.senderName, []);
          setPrivateChats(new Map(privateChats));
        }
        break;
      case "MESSAGE":
        publicChats.push(payloadData);
        setPublicChats([...publicChats]);
        break;
    }
  };

  const onPrivateMessage = (payload) => {
    console.log(payload);
    var payloadData = JSON.parse(payload.body);
    if (privateChats.get(payloadData.senderName)) {
      privateChats.get(payloadData.senderName).push(payloadData);
      setPrivateChats(new Map(privateChats));
    } else {
      let list = [];
      list.push(payloadData);
      privateChats.set(payloadData.senderName, list);
      setPrivateChats(new Map(privateChats));
    }
  };
  const sendValueEvent = () => {
    if (stompClient) {
      var chatMessage = {
        senderName: "ADMIN",
        message: " : des événements qui pourraient vous intéresser",
        status: "MESSAGE",
      };
      console.log(chatMessage);
      stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: "" });
    }
  };

  const registerUser = () => {
    setUserData({ ...userData, username: "tsiry" });
    connect();
  };

  /*Fin Connect socket*/

  let value = "jieo";

  if (localStorage.getItem("token") != null) {
    if (localStorage.getItem("token").length > 14) {
      value = jwt_decode(localStorage.getItem("token"));
      console.log(localStorage.getItem("token"));
      console.log(localStorage.getItem("token"));
      value = jwt_decode(localStorage.getItem("token"));
      // console.log(jwt_decode(localStorage.getItem("token")));
      // console.log(value);
    } else {
      value = "nn";
    }
  }

  const afficherConnexion = () => {
    document.getElementById("id01").style.display = "block";
  };

  const afficherInscription = () => {
    document.getElementById("id02").style.display = "block";
  };
  const logOut = () => {
    localStorage.setItem("token", "tsia");
    setLoad({});
  };

  return (
    <React.Fragment>
      <header className="header">
        {/* Main Navigation */}
        <nav className="main_nav">
          <div className="container">
            <div className="row">
              <div className="col main_nav_col d-flex flex-row align-items-center justify-content-start">
                <div className="logo_container">
                  <div className="logo">
                    <a href="/">
                      <img src="/images/logo_4.png" />
                    </a>
                  </div>
                </div>
                <div className="main_nav_container ml-auto">
                  <ul className="main_nav_list">
                    <li className="main_nav_item">
                      <a href="/home">Accueil</a>
                    </li>
                    <li className="main_nav_item">
                      <a href="/offres">Offres</a>
                    </li>
                    <li className="main_nav_item">
                      <a href="/demandes">Demandes</a>
                    </li>
                    <li className="main_nav_item">
                      <a href="/evenements">évènements</a>
                    </li>
                    {value.length < 100 ? null : (
                      <li className="main_nav_item">
                        <Link to={`/espaceperso/${idCurrentUser}`}>
                          Espace Personel
                        </Link>
                      </li>
                    )}
                    <li className="main_nav_item">
                      <a href="/a_propos">à propos</a>
                    </li>
                  </ul>
                </div>
                <div className="hamburger">
                  <i className="fa fa-bars trans_200" />
                </div>
                {value.length < 10 ? (
                  <div className="user_box ml-auto user_box_s">
                    <div className="user_box_login user_box_link user_box_a">
                      {" "}
                      <span style={{ zIndex: 99 }} onClick={afficherConnexion}>
                        Se Connecter
                      </span>
                    </div>
                    <div className="user_box_register user_box_link user_box_a">
                      <span onClick={afficherInscription}>S'Inscrire</span>
                    </div>
                  </div>
                ) : (
                  <div
                    className="user_box_register user_box_a user_box_pdp"
                    id="imgPdp"
                    style={{
                      display: "flex",
                    }}
                  >
                    {tab == userData.username ? (
                      <div className="icon_notif">
                        <Dropdown>
                          <Dropdown.Toggle
                            variant=""
                            style={{
                              color: "white",
                              backgroundColor: "rgba(0, 0, 0, 0.0)",
                              border: "none",
                              position: "relative",
                            }}
                          >
                            <i className="fa fa-bell" aria-hidden="true" />
                            {publicChats.length !== 0 ? (
                              <div className="counterNotif">
                                {publicChats.length}
                              </div>
                            ) : null}
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            style={{
                              color: "white",
                              backgroundColor: "rgba(33, 33, 33, 0.5)",
                            }}
                          >
                            {publicChats.map((chat, index) => (
                              <Dropdown.Item
                                href="#/action-1"
                                className="menuDropDownItemNotif"
                                onLoad={sendValueEvent}
                              >
                                <li key={index}>
                                  {chat.senderName}

                                  {chat.message}
                                </li>
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    ) : (
                      <div className="icon_notif">
                        <i className="fa fa-bell" aria-hidden="true" />
                      </div>
                    )}

                    <img src={value.picture} alt="ImgPdp" id="pdpImage" />
                    {/* <a href="#" id="user_name " className='user_box_register user_box_a'> */}
                    <Dropdown style={{ color: "white", border: "none" }}>
                      <Dropdown.Toggle
                        variant=""
                        className="menuDropDownItem"
                        style={{}}
                      >
                        {value.name.split(" ").slice(0, 1)}
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        style={{
                          color: "white",
                          backgroundColor: "rgba(33, 33, 33, 0.5)",
                        }}
                      >
                        <Dropdown.Item
                          href="#/action-1"
                          className="menuDropDownItem"
                          onClick={logOut}
                        >
                          Se Déconnecter
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="/profil"
                          className="menuDropDownItem"
                        >
                          Profil
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-3"
                          className="menuDropDownItem"
                        >
                          Notification
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* </a> */}
                  </div>
                )}
                <form id="search_form" className="search_form bez_1">
                  <input type="search" className="search_content_input bez_1" />
                </form>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="menu trans_500">
        <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
          <div className="menu_close_container">
            <div className="menu_close" />
          </div>
          <div className="logo menu_logo">
            <a href="index.html">
              <img src="images/logo_4.png" alt="" />
            </a>
          </div>
          <ul>
            <li className="menu_item">
              <a href="/home">Accueil</a>
            </li>
            <li className="menu_item">
              <a href="/offres">Offres</a>
            </li>
            <li className="menu_item">
              <a href="/demandes">Demandes</a>
            </li>
            <li className="menu_item">
              <a href="/evenements">Evènements</a>
            </li>
            <li className="menu_item">
              <a href="/a_propos">A propos de nous</a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default NavBar;
