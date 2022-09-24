import React from "react";
import "moment/locale/fr";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { useState, useMemo, useEffect, useContext } from "react";
import { SocketContext } from "./services/SocketContext";
import Home from "./components/Home";
import Offre from "./components/Pages/Offre";
import Demande from "./components/Pages/Demande";
import Footer from "./components/Home/Footer";
import Navbar from "./components/Home/Navbar";
import Evenements from "./components/Pages/Evenements";
import ParticiperEvent from "./components/Evenement/ParticiperEvent";
import Espaceperso from "./components/Pages/EspacePerso";
import About from "./components/Pages/About";
import { Routes, Route } from "react-router-dom";
import Connexion from "./components/Pages/Connexion";
import Inscription from "./components/Pages/Inscription";
import { UserContext } from "./services/UserContext";
import UserService from "./services/UserService";
import FormOffre from "./components/PublierOffre/FormOffre";
import jwt_decode from "jwt-decode";
import { AccordionButton } from "react-bootstrap";
import { set } from "react-hook-form";
import DetailsOffre from "./components/PublierOffre/DetailsOffre";

var stompClient = null;
function App() {
  /*Socket*/

  const [privateChats, setPrivateChats] = useState(new Map());
  const [publicChats, setPublicChats] = useState([]);
  const [tab, setTab] = useState("CHATROOM");
  const [userData, setUserData] = useState({
    username: "",
    receivername: "",
    connected: false,
    message: "",
  });
  const value = useMemo(
    () => ({
      userData,
      setUserData,
      tab,
      setTab,
      publicChats,
      setPublicChats,
      privateChats,
      setPrivateChats,
    }),
    [userData, tab, publicChats, privateChats]
  );

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

  const registerUser = (nom) => {
    setUserData({ ...userData, username: nom });
    connect();
  };

  /*FIN SOCKET*/

  const [user, setUser] = useState(0);
  const [essai, setEssai] = useState(0);

  function handleCredentialResponse(response) {
    try {
      console.log("Encode JWT id Token: " + response.credential);
      console.log(jwt_decode(response.credential));

      // setAuth(jwt_decode(response.credential));

      document.getElementById("id01").style.display = "none";
      localStorage.setItem("token", response.credential);

      console.log(jwt_decode(localStorage.getItem("token")));
      setUser(jwt_decode(localStorage.getItem("token")).name);

      window.location.reload(false);
    } catch {
      console.log("tsa poinsa");
    }
  }

  useEffect(() => {
    /* global google */
    if (localStorage.getItem("token") !== null) {
      if (localStorage.getItem("token").length > 10) {
        // setUser(UserService.getByMail("joelandriambola@gmail.com"));
        const logInterest = async () => {
          const resp = await UserService.getIdByMail(
            jwt_decode(localStorage.getItem("token")).email
          );
        setUser(resp.data);

        };

        logInterest();
        registerUser(jwt_decode(localStorage.getItem("token")).email);
      }
    }
    setEssai(7);
    console.log("essai ty", essai);
    console.log("user", user);

    try {
      google.accounts.id.initialize({
        client_id:
          "162247164460-u010auh9f2t4er36klc81sqd7g8elg7u.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });
    } catch {}

    try {
      google.accounts.id.initialize({
        client_id:
          "162247164460-u010auh9f2t4er36klc81sqd7g8elg7u.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });

      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        theme: "outline",
        size: "large",
        width: "signInDiv",
        width: 1500,
        height: 150,
        longtitle: true,
        theme: "dark",
        "border-radius": 180,
        border: "none",
      });
    } catch (error) {}
  }, [user, setUser, essai, setEssai]);

  return (
    <React.Fragment>
      <UserContext.Provider value={user}>
        <SocketContext.Provider value={value}>
          <FormOffre />

          <div className="super_container">
            <Navbar />
            <Connexion />
            <Inscription />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/offres" element={<Offre />} />
              <Route path="/offres/:idCovoit" element={<DetailsOffre />} />
              <Route path="/demandes" element={<Demande />} />
              <Route path="/evenements" element={<Evenements />} />
              <Route path="/espaceperso/:idUser" element={<Espaceperso />} />
              <Route
                path="/evenements/:idEvent"
                element={<ParticiperEvent />}
              />
              {/* <Route path="/offres/:idCovoit" element={<DetailsOffre />} /> */}
              <Route path="/a_propos" element={<About />} />
            </Routes>

            <Footer />
          </div>
        </SocketContext.Provider>
      </UserContext.Provider>
    </React.Fragment>
  );
}
export default App;
