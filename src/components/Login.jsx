import React, { useState } from "react";

function Login({ onPasswordRecovery }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Iniciando sesión con:", { email, password });
        alert("Inicio de sesión exitoso (demo).");
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Iniciar Sesión</h1>
            <form className="mt-4" onSubmit={handleLogin}>
                {/* Email */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Contraseña */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {/* Botón de inicio de sesión */}
                <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>

                {/* Enlace para recuperar contraseña */}
                <div className="text-center mt-3">
                    <button
                        type="button"
                        className="btn btn-link"
                        onClick={onPasswordRecovery}
                    >
                        ¿Olvidaste tu contraseña?
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
