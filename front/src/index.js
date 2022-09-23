import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import {BrowserRouter} from "react-router-dom";
import 'moment/locale/fr';
import {UserContext} from './services/UserContext';
import ProfilPage from './components/Profil/ProfilPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <UserContext.Provider value="why">
        <React.StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>

           {/* <ProfilPage/> */}
            </React.StrictMode>
    </UserContext.Provider>
);
