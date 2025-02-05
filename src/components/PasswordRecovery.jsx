import React, { useState } from "react";

function PasswordRecovery({ onBackToLogin }) {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleRecovery = (e) => {
        e.preventDefault();
        console.log("Enviando correo de recuperación a:", email);
        setIsSubmitted(true); // Marca el formulario como enviado
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Recuperar Contraseña</h1>
            {isSubmitted ? (
                <div className="alert alert-success text-center">
                    Se ha enviado un correo para recuperar tu contraseña a <strong>{email}</strong>.
                </div>
            ) : (
                <form className="mt-4" onSubmit={handleRecovery}>
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

                    {/* Botón para enviar */}
                    <button type="submit" className="btn btn-primary w-100">Enviar Correo de Recuperación</button>
                </form>
            )}

            {/* Botón para volver al login */}
            <div className="text-center mt-3">
                <button
                    type="button"
                    className="btn btn-link"
                    onClick={onBackToLogin}
                >
                    Volver al Inicio de Sesión
                </button>
            </div>
        </div>
    );
}

export default PasswordRecovery;
