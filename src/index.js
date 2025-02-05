import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; // Asegúrate de que esta línea esté aquí

import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// Importamos bootstrap después de haberlo instalado en el cdn
// con el comando npm install react-router-dom bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Usa createRoot en lugar de render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Cambia de unregister a register para activar el Service Worker
serviceWorker.register();  // Esto habilita el Service Worker y convierte tu app en una PWA



