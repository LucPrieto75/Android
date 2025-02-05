// Importamos la libreria 
import React from "react";

// Declaramos la función Inicio, que lo unico que hace es devolvernos un html
function Inicio() {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Bienvenides al curso de React</h1>
            <p className="lead">Antes de empezar a aprender React, es importante tener una buena base en **HTML**
                HTML (Hypertext Markup Language) es el lenguaje de marcado estándar utilizado para crear la estructura y el contenido de las aplicaciones web.
            </p>
        </div>
    );

}

// Al final tenemos que exportar la funcion creada 
export default Inicio; 