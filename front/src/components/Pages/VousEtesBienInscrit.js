import React from 'react'
import {Helmet} from "react-helmet";
import {UserContext} from "../../services/UserContext";
import { useContext} from "react";


    

function VousEtesBienInscrit() {
  let idCurrentUser = useContext(UserContext);

  const handleClick = () => {
    document.getElementById('Felicitation').style.display = 'block';
}
const closeFelicitation=()=>{
  document.getElementById('Felicitation').style.display = 'none';

}
const seConnecter = () => {
  localStorage.setItem("token", "eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwOWMwNTdkM2JkZDhjMDhmMmQ1NzM5Nzg4NjMyNjczZjdjNjI0MGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NjM1ODUyMjEsImF1ZCI6IjE2MjI0NzE2NDQ2MC11MDEwYXVoOWYydDRlcjM2a2xjODFzcWQ3ZzhlbGc3dS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMjU5MjAyOTg2NTE4NTMyNzg1NCIsImVtYWlsIjoiam9lbGFuZHJpYW1ib2xhQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIxNjIyNDcxNjQ0NjAtdTAxMGF1aDlmMnQ0ZXIzNmtsYzgxc3FkN2c4ZWxnN3UuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoiSm9lbCBBbmRyaWEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FDTlBFdS1uUTJhcDJEZWtNMXdYdXRQTEU5Zk1qLUg3Ny1QOG9wVFhuczVJPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkpvZWwiLCJmYW1pbHlfbmFtZSI6IkFuZHJpYSIsImlhdCI6MTY2MzU4NTUyMSwiZXhwIjoxNjYzNTg5MTIxLCJqdGkiOiI1ZGNkNjVmYjZjMTc2YzM3NmE4MGQ2ODc4ZDZlYzk3ZDNjODNmNDczIn0.n9w5JvfrMhkBs6fYOCoC9ojyuGdQH7kMqgED46AX4hXtTt2Q0EUcvXgB1Yjdb3dz5nyC7ZCvYJDbZH3LZafpK_px_IzwDftnayHQkZfY-vWXHIKB3MJelAmiKCU7H1rIOORbc9n6hFiNbfJ_AmfZ5-KJ8yUoC6-8XTS6rDVN_rpnusPJBsycW1MExXJQasmhH61ErInS2mH1VgrSiUY4JHcNYC-H1MsRac5A2oPDVNFckw8bpSG-Fns8yg1oIhn2Sz4ChwOuM-2_XeTe-wCKwdPCa3rVqeh7SUXr8szCKnIoEfsaH-VaLuzihdaFuFB8EmGToab_9Csh2LI8qCn4Mg");
  window.location.reload(false);
  
}
    

    return (

      <div>
      <div id="Felicitation" className="modal">
          <span onClick={handleClick}
              className="close"
              title="Close Modal"></span>
          <div className="modal-content animate card"
            >
              <div>
                  {/* <span onClick={"document.getElementById('id01').style.display='none'"} className="close" title="Fermer"> */}
                  <span onClick={closeFelicitation}
                      className="close"
                      title="Fermer">
                      <i className="fa-solid fa-x close"/>
                  </span>
              </div>
     
              <div className="container text-center" >
              <h5 className="text-center" id="titreFelicitation">
                     Inscription validée<i class="fa-solid fa-circle-check" style={{color:"green", marginLeft:15}}></i></h5>
                <h5 style={{fontSize:20}}>Dites Whee à la vie</h5>
                <p>Grâce à la première plateforme de covoiturage mettant en relation les personnes ayant des centres d'intérêt communs, faites de nouvelles rencontres.<br/>
                Joignez l'utile à l'agréable et covoiturez autrement. Dites Whee à la vie !
                <br/>
                </p>
                 
               
                 
                  <button  onClick={seConnecter} className="buttonConnexion">
                      Se Connecter
                  </button>
                 
              </div>
          </div>
      </div>

  </div>


      
      )
}

export default VousEtesBienInscrit
