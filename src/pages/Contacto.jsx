import React, { useState } from "react";

function Contacto() {
    // Usamos useState para almacenar los valores del formulario y los errores de validación.
    //formData almacena todos los datos introducidos por el usuario.
    //Cada campo del formulario se asocia con una clave (name) en el objeto formData.
    const [formData, setFormData] = useState({
        nombre: "",
        apellidos: "",
        dni: "",
        telefono: "",
        direccion: "",
        codigoPostal: "",
        edad: "",
        nacionalidad: "",
        mensaje: "",
    });

    // Estado para errores de validación
    //errors almacena mensajes de error para cada campo si no cumple las validaciones.
    const [errors, setErrors] = useState({});

    // Manejar cambios en los campos del formulario
    //Esta función actualiza el estado formData con el valor introducido por el usuario.
    //Esta línea descompone e.target para extraer:
    //name: El atributo name del campo que activó el evento. Este indica qué dato del formulario está cambiando.
    //value: El valor actual del campo (lo que el usuario está escribiendo).
    // { ...formData }:

    //Esta parte hace una copia del estado actual de formData (desestructuración del objeto).
    //Esto es necesario para mantener intactos los valores de los otros campos del formulario.
    //[name]: value:

    //Usamos la notación de propiedad calculada ([name]) para actualizar dinámicamente la propiedad correspondiente al campo que cambió.
    //Por ejemplo:
    //Si name es "nombre", actualiza la propiedad formData.nombre con el valor de value.
    //setFormData(...):

    //Llama a la función de estado de React (setFormData) para actualizar el estado formData con los nuevos valores.

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Validaciones
    //Qué hace cada validación:

    //Comprueba si el campo está vacío (trim() elimina espacios en blanco al inicio y final).
    //Realiza validaciones adicionales con expresiones regulares:
    //DNI: Debe tener 8 números seguidos de una letra.
    //Teléfono: Debe tener exactamente 9 dígitos.
    //Código postal: Debe tener exactamente 5 dígitos.
    //Edad: Debe ser un número entre 1 y 120.

    const validate = () => {
        let newErrors = {};

        if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
        if (!formData.apellidos.trim()) newErrors.apellidos = "Los apellidos son obligatorios.";
        if (!formData.dni.trim()) {
            newErrors.dni = "El DNI es obligatorio.";
        } else if (!/^\d{8}[A-Za-z]$/.test(formData.dni)) {
            newErrors.dni = "El DNI debe tener 8 números y una letra.";
        }
        if (!formData.telefono.trim()) {
            newErrors.telefono = "El teléfono es obligatorio.";
        } else if (!/^\d{9}$/.test(formData.telefono)) {
            newErrors.telefono = "El teléfono debe tener 9 dígitos.";
        }
        if (!formData.direccion.trim()) newErrors.direccion = "La dirección es obligatoria.";
        if (!formData.codigoPostal.trim()) {
            newErrors.codigoPostal = "El código postal es obligatorio.";
        } else if (!/^\d{5}$/.test(formData.codigoPostal)) {
            newErrors.codigoPostal = "El código postal debe tener 5 dígitos.";
        }
        if (!formData.edad.trim()) {
            newErrors.edad = "La edad es obligatoria.";
        } else if (isNaN(formData.edad) || formData.edad < 1 || formData.edad > 120) {
            newErrors.edad = "Introduce una edad válida (1-120).";
        }
        if (!formData.nacionalidad.trim()) newErrors.nacionalidad = "La nacionalidad es obligatoria.";
        if (!formData.mensaje.trim()) newErrors.mensaje = "El mensaje es obligatorio.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Datos del formulario:", formData);
            alert("¡Formulario enviado con éxito!");
            setFormData({
                nombre: "",
                apellidos: "",
                dni: "",
                telefono: "",
                direccion: "",
                codigoPostal: "",
                edad: "",
                nacionalidad: "",
                mensaje: "",
            });
            setErrors({});
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Formulario de Contacto</h1>
            <p className="lead text-center">Completa el formulario para ponerte en contacto con nosotros.</p>

            <form className="mt-4" onSubmit={handleSubmit}>
                <div className="row">
                    {/* Columna izquierda */}
                    <div className="col-md-6">
                        {/* Nombre */}
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input
                                type="text"
                                className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />
                            {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                        </div>

                        {/* Apellidos */}
                        <div className="mb-3">
                            <label htmlFor="apellidos" className="form-label">Apellidos</label>
                            <input
                                type="text"
                                className={`form-control ${errors.apellidos ? "is-invalid" : ""}`}
                                id="apellidos"
                                name="apellidos"
                                value={formData.apellidos}
                                onChange={handleChange}
                                required
                            />
                            {errors.apellidos && <div className="invalid-feedback">{errors.apellidos}</div>}
                        </div>

                        {/* DNI */}
                        <div className="mb-3">
                            <label htmlFor="dni" className="form-label">DNI</label>
                            <input
                                type="text"
                                className={`form-control ${errors.dni ? "is-invalid" : ""}`}
                                id="dni"
                                name="dni"
                                value={formData.dni}
                                onChange={handleChange}
                                required
                            />
                            {errors.dni && <div className="invalid-feedback">{errors.dni}</div>}
                        </div>

                        {/* Teléfono */}
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input
                                type="tel"
                                className={`form-control ${errors.telefono ? "is-invalid" : ""}`}
                                id="telefono"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                required
                            />
                            {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
                        </div>
                    </div>

                    {/* Columna derecha */}
                    <div className="col-md-6">
                        {/* Dirección */}
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Dirección</label>
                            <input
                                type="text"
                                className={`form-control ${errors.direccion ? "is-invalid" : ""}`}
                                id="direccion"
                                name="direccion"
                                value={formData.direccion}
                                onChange={handleChange}
                                required
                            />
                            {errors.direccion && <div className="invalid-feedback">{errors.direccion}</div>}
                        </div>

                        {/* Código Postal */}
                        <div className="mb-3">
                            <label htmlFor="codigoPostal" className="form-label">Código Postal</label>
                            <input
                                type="text"
                                className={`form-control ${errors.codigoPostal ? "is-invalid" : ""}`}
                                id="codigoPostal"
                                name="codigoPostal"
                                value={formData.codigoPostal}
                                onChange={handleChange}
                                required
                            />
                            {errors.codigoPostal && <div className="invalid-feedback">{errors.codigoPostal}</div>}
                        </div>

                        {/* Edad */}
                        <div className="mb-3">
                            <label htmlFor="edad" className="form-label">Edad</label>
                            <input
                                type="number"
                                className={`form-control ${errors.edad ? "is-invalid" : ""}`}
                                id="edad"
                                name="edad"
                                value={formData.edad}
                                onChange={handleChange}
                                required
                            />
                            {errors.edad && <div className="invalid-feedback">{errors.edad}</div>}
                        </div>

                        {/* Nacionalidad */}
                        <div className="mb-3">
                            <label htmlFor="nacionalidad" className="form-label">Nacionalidad</label>
                            <input
                                type="text"
                                className={`form-control ${errors.nacionalidad ? "is-invalid" : ""}`}
                                id="nacionalidad"
                                name="nacionalidad"
                                value={formData.nacionalidad}
                                onChange={handleChange}
                                required
                            />
                            {errors.nacionalidad && <div className="invalid-feedback">{errors.nacionalidad}</div>}
                        </div>
                    </div>
                </div>

                {/* Mensaje */}
                <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                    <textarea
                        className={`form-control ${errors.mensaje ? "is-invalid" : ""}`}
                        id="mensaje"
                        name="mensaje"
                        rows="4"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                    ></textarea>
                    {errors.mensaje && <div className="invalid-feedback">{errors.mensaje}</div>}
                </div>

                {/* Botón de enviar */}
                <button type="submit" className="btn btn-primary w-100">
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default Contacto;
