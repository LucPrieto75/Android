import React from "react";

function ReactPage() {
    return (
        <div className="container mt-5">
            <h1 className="text-center">React: Todo lo que necesitas saber</h1>
            <p className="lead mt-4">
                React es una biblioteca de JavaScript para construir interfaces de usuario de forma declarativa y eficiente.
                Permite dividir una aplicación en componentes reutilizables, facilitando el desarrollo y el mantenimiento.
            </p>

            {/* Requisitos para usar React */}
            <section className="mt-5">
                <h2>¿Qué se necesita para usar React?</h2>
                <p>
                    Para empezar con React, necesitas instalar Node.js y un gestor de paquetes como npm o yarn.
                    Aquí tienes los pasos básicos:
                </p>
                <ol>
                    <li>
                        <strong>Instalar Node.js:</strong> Lo puedes descargar desde{" "}
                        <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
                            la página oficial de Node.js
                        </a>.
                    </li>
                    <li>
                        Verifica la instalación ejecutando en la terminal:
                        <pre className="bg-light p-3">
                            {`node -v   // Muestra la versión de Node.js
npm -v    // Muestra la versión de npm`}
                        </pre>
                    </li>
                    <li>
                        Crea un proyecto React usando:
                        <pre className="bg-light p-3">
                            npx create-react-app nombre-del-proyecto
                        </pre>
                    </li>
                </ol>
            </section>

            {/* Estructura básica de carpetas */}
            <section className="mt-5">
                <h2>Organización de carpetas y archivos</h2>
                <p>
                    Al crear un proyecto React, obtendrás una estructura básica como esta:
                </p>
                <pre className="bg-light p-3">
                    {`mi-proyecto/
├── node_modules/        // Dependencias del proyecto
├── public/              // Archivos estáticos (HTML principal)
├── src/                 // Código fuente de tu aplicación
│   ├── App.js           // Componente principal de React
│   ├── index.js         // Punto de entrada del proyecto
│   ├── components/      // Carpeta para componentes reutilizables
│   └── styles.css       // Archivo CSS para estilos
├── package.json         // Configuración y dependencias
└── README.md            // Documentación del proyecto`}
                </pre>
            </section>

            {/* Fundamentos de React */}
            <section className="mt-5">
                <h2>Fundamentos de React</h2>
                <p>
                    Aquí tienes una lista de conceptos clave que necesitas entender para empezar a trabajar con React:
                </p>

                {/* JSX */}
                <h3 className="mt-4">1. JSX</h3>
                <p>
                    JSX (JavaScript XML) es una extensión de sintaxis que permite escribir código similar a HTML dentro de JavaScript.
                    Aunque no es obligatorio, JSX facilita la creación de componentes React.
                </p>
                <p>**Ejemplo de JSX:**</p>
                <pre className="bg-light p-3">
                    {`function Saludo() {
    return <h1>¡Hola, mundo!</h1>; // Esto es JSX
}`}
                </pre>

                {/* Componentes */}
                <h3 className="mt-4">2. Componentes</h3>
                <p>
                    Los componentes son bloques de construcción en React. Pueden ser funcionales o basados en clases.
                </p>
                <p>**Ejemplo de componente funcional:**</p>
                <pre className="bg-light p-3">
                    {`function Componente() {
    return <div>Hola desde un componente</div>;
}`}
                </pre>

                {/* Props */}
                <h3 className="mt-4">3. Props</h3>
                <p>
                    Las props son la forma en que los datos fluyen de un componente padre a un componente hijo.
                </p>
                <p>**Ejemplo de props:**</p>
                <pre className="bg-light p-3">
                    {`function Saludo(props) {
    return <h1>Hola, {props.nombre}!</h1>;
}

function App() {
    return <Saludo nombre="Juan" />;
}`}
                </pre>

                {/* Estado */}
                <h3 className="mt-4">4. Estado (`useState`)</h3>
                <p>
                    El estado permite a los componentes almacenar y gestionar datos que pueden cambiar con el tiempo.
                    Usamos el hook `useState` para trabajar con el estado en componentes funcionales.
                </p>
                <p>**Ejemplo con `useState`:**</p>
                <pre className="bg-light p-3">
                    {`import React, { useState } from "react";

function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </div>
    );
}`}
                </pre>

                {/* Eventos */}
                <h3 className="mt-4">5. Eventos</h3>
                <p>
                    Los eventos en React, como clics o cambios de entrada, se manejan mediante funciones.
                </p>
                <p>**Ejemplo de evento:**</p>
                <pre className="bg-light p-3">
                    {`function Boton() {
    function manejarClick() {
        alert("¡Hiciste clic!");
    }

    return <button onClick={manejarClick}>Clic aquí</button>;
}`}
                </pre>

                {/* Ciclo de vida */}
                <h3 className="mt-4">6. Ciclo de vida (`useEffect`)</h3>
                <p>
                    En React, el ciclo de vida de un componente controla cuándo se monta, actualiza o desmonta.
                    En componentes funcionales, esto se gestiona con el hook `useEffect`.
                </p>
                <p>**Ejemplo básico de `useEffect`:**</p>
                <pre className="bg-light p-3">
                    {`import React, { useState, useEffect } from "react";

function Reloj() {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHora(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalo); // Limpiar el intervalo al desmontar
    }, []);

    return <p>Hora actual: {hora}</p>;
}`}
                </pre>

                {/* Listas y keys */}
                <h3 className="mt-4">7. Listas y keys</h3>
                <p>
                    Para renderizar listas en React, usamos el método `map`. Cada elemento debe tener una propiedad `key` única.
                </p>
                <p>**Ejemplo de renderizado de lista:**</p>
                <pre className="bg-light p-3">
                    {`function ListaFrutas() {
    const frutas = ["Manzana", "Banana", "Cereza"];

    return (
        <ul>
            {frutas.map((fruta, index) => (
                <li key={index}>{fruta}</li>
            ))}
        </ul>
    );
}`}
                </pre>
            </section>

            {/* Conclusión */}
            <section className="mt-5">
                <h2>Conclusión</h2>
                <p>
                    React es una biblioteca poderosa y versátil para construir aplicaciones modernas.
                    Dominar los conceptos clave como JSX, componentes, props, estado y eventos te permitirá construir
                    interfaces dinámicas y escalables.
                </p>
            </section>
        </div>
    );
}

export default ReactPage;
