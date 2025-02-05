import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// añadimos las páginas
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import CSS from './pages/CSS';
import HTML from './pages/HTML';
import JavaScript from './pages/JavaScript';
import ReactPage from "./pages/React";
import Auth from "./components/Auth";


function App() {
  return (

    // // Este es el ejemplo que genera el Framework React
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


    // // Este sería otro ejemplo, donde cargaría el titulo Hola Mundo  
    // <h1>Hola mundoooooooo</h1>

    // // Otro ejemplo de un video
    // <div>
    //   <h1>Mi Video en React</h1>
    //   <video width="640" height="360" controls>
    //     <source src="videos/globo-terraqueo.mp4" type="video/mp4" />
    //     Tu navegador no soporta el elemento de video.
    //   </video>
    // </div>

    // Otro ejemplo de acceso a paginas o componentes
    <div>
      {/* dos formas de incluir el menu navegación */}
      {/* Esta es una de ellas, a través del Header */}
      <Header />

      {/* Esta es otra forma, esta sería explicita */}
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Inicio desde forma explicita</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav> */}



      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/html" element={<HTML />} />
        <Route path="/css" element={<CSS />} />
        <Route path="/javascript" element={<JavaScript />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/contacto" element={<Contacto />} />

        {/* Ruta para la autenticación */}
        <Route path="/auth" element={<Auth />} />
      </Routes>


      <Footer />
    </div>


  );
}

export default App;
