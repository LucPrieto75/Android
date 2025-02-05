import React from "react";

function JavaScript() {
    return (
        <div className="container mt-5">
            <h1 className="text-center">JavaScript</h1>
            <p className="lead mt-4">
                JavaScript es un lenguaje de programación que se utiliza para crear contenido dinámico en las páginas web.
                Es el lenguaje que permite que tus páginas sean interactivas, como manejar eventos de clic, actualizar datos sin recargar la página,
                o construir aplicaciones web completas.
            </p>

            <section className="mt-5">
                <h2>1. Variables</h2>
                <p>
                    Las **variables** en JavaScript son contenedores donde se almacenan valores que puedes usar y modificar en tu programa.
                    Hay tres formas principales de declararlas:
                </p>
                <ul>
                    <li><code>var</code>: Declaración antigua (menos recomendable hoy en día).</li>
                    <li><code>let</code>: Para variables que pueden cambiar.</li>
                    <li><code>const</code>: Para valores constantes que no cambian.</li>
                </ul>
                <p>**Ejemplo:**</p>
                <pre className="bg-light p-3">
                    {`let nombre = "Juan"; // Una variable que puede cambiar
const edad = 25; // Una constante que no cambia
var ciudad = "Madrid"; // Variable más antigua`}
                </pre>
            </section>

            <section className="mt-5">
                <h2>2. Operadores</h2>
                <p>Los operadores permiten realizar cálculos, comparaciones, y otras operaciones. Algunos operadores comunes son:</p>
                <ul>
                    <li><strong>Aritméticos:</strong> <code>+ - * / %</code> (suma, resta, multiplicación, división, módulo).</li>
                    <li><strong>Comparación:</strong> <code>== != === !== &gt; &lt; &gt;= &lt;=</code> (igualdad, desigualdad, etc.).</li>
                    <li><strong>Lógicos:</strong> <code>&& || !</code> (AND, OR, NOT).</li>
                    <li><strong>Asignación:</strong> <code>= += -= *= /=</code> (asignar valores).</li>
                </ul>
                <p>**Ejemplo:**</p>
                <pre className="bg-light p-3">
                    {`let a = 10, b = 5;
let suma = a + b; // 15
let esMayor = a > b; // true
let esPar = (a % 2) === 0; // true`}
                </pre>
            </section>

            <section className="mt-5">
                <h2>3. Condicionales</h2>
                <p>
                    Los **condicionales** permiten ejecutar diferentes bloques de código según una condición.
                    La estructura más común es <code>if</code>, pero también puedes usar <code>else</code>, <code>else if</code>,
                    o incluso <code>switch</code>.
                </p>
                <p>**Ejemplo:**</p>
                <pre className="bg-light p-3">
                    {`let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// Otro ejemplo con switch
let dia = "lunes";
switch (dia) {
    case "lunes":
        console.log("Es lunes, ánimo!");
        break;
    case "viernes":
        console.log("Es viernes, casi fin de semana!");
        break;
    default:
        console.log("Es un día normal");
}`}
                </pre>
            </section>

            <section className="mt-5">
                <h2>4. Bucles</h2>
                <p>
                    Los **bucles** permiten repetir un bloque de código mientras una condición sea verdadera.
                    Los más comunes son <code>for</code>, <code>while</code> y <code>do-while</code>.
                </p>
                <p>**Ejemplo:**</p>
                <pre className="bg-light p-3">
                    {`// Bucle for
for (let i = 0; i < 5; i++) {
    console.log("Número: " + i);
}

// Bucle while
let j = 0;
while (j < 5) {
    console.log("Número: " + j);
    j++;
}

// Bucle do-while
let k = 0;
do {
    console.log("Número: " + k);
    k++;
} while (k < 5);`}
                </pre>
            </section>

            <section className="mt-5">
                <h2>5. Funciones</h2>
                <p>
                    Las **funciones** son bloques de código reutilizables que se ejecutan cuando son llamadas.
                    Puedes pasarles argumentos y devolver valores.
                </p>
                <p>**Ejemplo:**</p>
                <pre className="bg-light p-3">
                    {`// Declaración de una función
function saludar(nombre) {
    return "Hola, " + nombre;
}

// Llamando a la función
let saludo = saludar("Juan");
console.log(saludo); // "Hola, Juan"

// Función flecha (moderna)
const multiplicar = (a, b) => a * b;
console.log(multiplicar(3, 4)); // 12`}
                </pre>
            </section>
            <section className="mt-5">
                <h2>2. Comandos de salida en JavaScript</h2>
                <p>
                    Los **comandos de salida** son métodos que permiten mostrar información al usuario o desarrollador.
                    A continuación, se explican los principales:
                </p>

                <h3 className="mt-3">1. <code>console.log()</code></h3>
                <p>
                    Muestra mensajes en la consola del navegador. Es muy útil para depurar tu código y verificar valores
                    durante la ejecución.
                </p>
                <pre className="bg-light p-3">
                    {`console.log("Hola, mundo"); // Muestra "Hola, mundo" en la consola
let x = 10;
console.log("El valor de x es:", x); // Muestra "El valor de x es: 10"`}
                </pre>

                <h3 className="mt-3">2. <code>alert()</code></h3>
                <p>
                    Muestra un cuadro de diálogo en el navegador con un mensaje. Es ideal para notificar al usuario, aunque
                    no se recomienda abusar de este método, ya que interrumpe la experiencia.
                </p>
                <pre className="bg-light p-3">
                    {`alert("Bienvenido a mi página web"); // Muestra un cuadro de alerta`}
                </pre>

                <h3 className="mt-3">3. <code>document.write()</code></h3>
                <p>
                    Escribe directamente en el documento HTML. Se usa principalmente en ejemplos educativos, pero no es
                    común en aplicaciones modernas.
                </p>
                <pre className="bg-light p-3">
                    {`document.write("<h1>Hola, mundo</h1>"); // Escribe "Hola, mundo" en la página web`}
                </pre>

                <h3 className="mt-3">4. <code>console.error()</code></h3>
                <p>
                    Muestra mensajes de error en la consola con un formato diferente, útil para destacar errores o advertencias.
                </p>
                <pre className="bg-light p-3">
                    {`console.error("Ha ocurrido un error"); // Muestra un error en la consola`}
                </pre>

                <h3 className="mt-3">5. <code>console.table()</code></h3>
                <p>
                    Muestra datos en forma de tabla en la consola, lo que es ideal para depurar arrays u objetos complejos.
                </p>
                <pre className="bg-light p-3">
                    {`let usuarios = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
];
console.table(usuarios); // Muestra los datos en formato de tabla`}
                </pre>

                <h3 className="mt-3">6. <code>prompt()</code></h3>
                <p>
                    Muestra un cuadro de diálogo que permite al usuario introducir un valor. El valor ingresado se puede
                    guardar en una variable.
                </p>
                <pre className="bg-light p-3">
                    {`let nombre = prompt("¿Cómo te llamas?");
console.log("Hola, " + nombre); // Muestra "Hola, [nombre]"`}
                </pre>
            </section>
        </div>
    );
}

export default JavaScript;
