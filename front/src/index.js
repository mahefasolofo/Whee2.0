import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import {BrowserRouter} from "react-router-dom";
import 'moment/locale/fr';
import ProfilPage from './components/Pages/ProfilPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        {/* <ProfilPage/> */} </React.StrictMode>
);
