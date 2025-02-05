import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Curso React
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/html">
                                HTML
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/css">
                                CSS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/javascript">
                                JavaScript
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/react">
                                React
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacto">
                                Contacto
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Auth">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
