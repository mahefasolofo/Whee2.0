import React, { useEffect, useState, useContext, useRef } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { UserContext } from "../../services/UserContext";
import { SocketContext } from "../../services/SocketContext";
import { Dropdown } from "react-bootstrap";
import jwt_decode from "jwt-decode";

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
  useEffect(() => {
    registerUser();
  }, []);

  const connect = () => {
    let Sock = new SockJS("http://localhost:8090/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    setUserData({ ...userData, connected: true });
    setUserData({ ...userData, username: "tsiry" });
    stompClient.subscribe("/chatroom/public", onMessageReceived);
    stompClient.subscribe(
      "/user/" + userData.username + "/private",
      onPrivateMessage
    );
    userJoin();
  };

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
    connect();
  };

  const afficherInscription = () => {
    document.getElementById("id02").style.display = "block";
  };
  const logOut = () => {
    localStorage.setItem("token", "tsia");
    window.location.reload(false);
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
                      <a href="/home">Accueil{idCurrentUser}</a>
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
                        <a href="/espaceperso">Espace Personel</a>
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
                    <div className="icon_notif">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant=""
                          style={{
                            color: "white",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            border: "none",
                          }}
                        >
                          <i class="fa fa-bell" aria-hidden="true" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          style={{
                            color: "white",
                            backgroundColor: "rgba(33, 33, 33, 0.5)",
                          }}
                        >
                          <Dropdown.Item
                            href="#/action-1"
                            className="menuDropDownItemNotif"
                            onLoad={sendValueEvent}
                          >
                            {publicChats.map((chat, index) => (
                              <li
                                className={`message ${
                                  chat.senderName === userData.username &&
                                  "self"
                                }`}
                                key={index}
                              >
                                {chat.senderName !== userData.username && (
                                  <div className="avatar">
                                    {chat.senderName}
                                  </div>
                                )}
                                <div className="message-data">
                                  {chat.message}
                                </div>
                                {chat.senderName === userData.username && (
                                  <div className="avatar self">
                                    {chat.senderName}
                                  </div>
                                )}
                              </li>
                            ))}
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <img src={value.picture} alt="ImgPdp" id="pdpImage" />
                    {/* <a href="#" id="user_name " className='user_box_register user_box_a'> */}
                    <Dropdown style={{ color: "white", border: "none" }}>
                      <Dropdown.Toggle
                        variant=""
                        className="menuDropDownItem"
                        style={{
                          color: "white",
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          border: "none",
                        }}
                      >
                        {value.name}
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
                          href="#/action-2"
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
              <a href="index.html">Accueil</a>
            </li>
            <li className="menu_item">
              <a href="offers.html">Offres</a>
            </li>
            <li className="menu_item">
              <a href="offers.html">Demandes</a>
            </li>
            <li className="menu_item">
              <a href="blog.html">Evènements</a>
            </li>
            <li className="menu_item">
              <a href="about.html">A propos de nous</a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default NavBar;
