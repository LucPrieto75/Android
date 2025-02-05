import React from "react";

function CSS() {
    return (
        <div className="container mt-5">
            <h1 className="text-center">CSS: Hojas de Estilo en Cascada</h1>
            <p className="lead mt-4">
                CSS (Cascading Style Sheets) es un lenguaje utilizado para describir la presentación de un documento HTML.
                Con CSS puedes cambiar colores, tamaños, márgenes, alineaciones y mucho más.
            </p>

            <section className="mt-5">
                <h2>¿Cómo incluir CSS en HTML y React?</h2>
                <p>
                    Existen 3 maneras principales de incluir CSS en un documento HTML o en React:
                </p>
                <h3 className="mt-4">1. CSS Inline (Estilos en línea)</h3>
                <p>
                    Se define directamente en la etiqueta HTML usando el atributo <code>style</code>.
                </p>

                <h3 className="mt-4">2. CSS Interno</h3>
                <p>
                    Se utiliza una etiqueta <code>&lt;style&gt;</code> dentro del archivo HTML.
                </p>

                <h3 className="mt-4">3. CSS Externo</h3>
                <p>
                    Se define en un archivo externo (por ejemplo, <code>styles.css</code>).
                </p>
            </section>

            <section className="mt-5">
                <h2>Propiedades CSS Comunes</h2>
                <p>
                    A continuación, se muestra una tabla con una amplia lista de propiedades CSS, su descripción y ejemplos de valores posibles.
                </p>

                <table className="table table-striped table-bordered mt-3">
                    <thead className="table-dark">
                        <tr>
                            <th>Propiedad</th>
                            <th>Descripción</th>
                            <th>Valores</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Colores y Fondo */}
                        <tr>
                            <td>color</td>
                            <td>Color del texto.</td>
                            <td>red, #ff0000, rgb(255,0,0)</td>
                        </tr>
                        <tr>
                            <td>background-color</td>
                            <td>Color de fondo del elemento.</td>
                            <td>blue, #0000ff, transparent</td>
                        </tr>
                        <tr>
                            <td>background-image</td>
                            <td>Imagen de fondo.</td>
                            <td>url('imagen.jpg'), none</td>
                        </tr>

                        {/* Tipografía */}
                        <tr>
                            <td>font-family</td>
                            <td>Fuente del texto.</td>
                            <td>Arial, 'Courier New', sans-serif</td>
                        </tr>
                        <tr>
                            <td>font-size</td>
                            <td>Tamaño del texto.</td>
                            <td>16px, 1em, 120%</td>
                        </tr>
                        <tr>
                            <td>font-weight</td>
                            <td>Grosor del texto.</td>
                            <td>normal, bold, 400</td>
                        </tr>
                        <tr>
                            <td>font-style</td>
                            <td>Estilo del texto.</td>
                            <td>normal, italic</td>
                        </tr>
                        <tr>
                            <td>text-transform</td>
                            <td>Transformación del texto.</td>
                            <td>uppercase, lowercase, capitalize</td>
                        </tr>
                        <tr>
                            <td>text-align</td>
                            <td>Alineación horizontal del texto.</td>
                            <td>left, center, right, justify</td>
                        </tr>
                        <tr>
                            <td>line-height</td>
                            <td>Altura de línea del texto.</td>
                            <td>normal, 1.5, 120%</td>
                        </tr>

                        {/* Tamaño y Espaciado */}
                        <tr>
                            <td>width</td>
                            <td>Ancho del elemento.</td>
                            <td>100px, 50%, auto</td>
                        </tr>
                        <tr>
                            <td>height</td>
                            <td>Altura del elemento.</td>
                            <td>100px, 50%, auto</td>
                        </tr>
                        <tr>
                            <td>margin</td>
                            <td>Margen externo del elemento.</td>
                            <td>10px, auto</td>
                        </tr>
                        <tr>
                            <td>padding</td>
                            <td>Margen interno del elemento.</td>
                            <td>10px, 5%</td>
                        </tr>
                        <tr>
                            <td>border</td>
                            <td>Borde del elemento.</td>
                            <td>1px solid black</td>
                        </tr>
                        <tr>
                            <td>border-radius</td>
                            <td>Radio de los bordes (bordes redondeados).</td>
                            <td>5px, 50%</td>
                        </tr>

                        {/* Posicionamiento */}
                        <tr>
                            <td>position</td>
                            <td>Define cómo se posiciona un elemento.</td>
                            <td>static, relative, absolute, fixed, sticky</td>
                        </tr>
                        <tr>
                            <td>top, right, bottom, left</td>
                            <td>Desplazamiento relativo a su contenedor.</td>
                            <td>10px, 50%</td>
                        </tr>
                        <tr>
                            <td>z-index</td>
                            <td>Define la superposición del elemento.</td>
                            <td>auto, 1, 100</td>
                        </tr>

                        {/* Flexbox */}
                        <tr>
                            <td>display</td>
                            <td>Define cómo se muestra un elemento.</td>
                            <td>block, inline, flex, grid, none</td>
                        </tr>
                        <tr>
                            <td>justify-content</td>
                            <td>Alinea los elementos en un contenedor flex.</td>
                            <td>flex-start, center, space-between</td>
                        </tr>
                        <tr>
                            <td>align-items</td>
                            <td>Alinea los elementos en el eje cruzado.</td>
                            <td>flex-start, center, stretch</td>
                        </tr>
                        <tr>
                            <td>flex</td>
                            <td>Define cómo crece o encoge un elemento flex.</td>
                            <td>1, 0 1 auto</td>
                        </tr>

                        {/* Otros */}
                        <tr>
                            <td>box-shadow</td>
                            <td>Sombra alrededor del elemento.</td>
                            <td>2px 2px 5px black</td>
                        </tr>
                        <tr>
                            <td>opacity</td>
                            <td>Opacidad del elemento.</td>
                            <td>0, 0.5, 1</td>
                        </tr>
                        <tr>
                            <td>overflow</td>
                            <td>Define cómo manejar el contenido desbordado.</td>
                            <td>visible, hidden, scroll</td>
                        </tr>
                        <tr>
                            <td>cursor</td>
                            <td>Tipo de cursor al pasar sobre el elemento.</td>
                            <td>pointer, default, move</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default CSS;
