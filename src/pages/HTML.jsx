import React from "react";

function HTML() {
    return (
        <div>
            <div className="container mt-5">
                <h1 className="text-center">HTML</h1>
                <p className="lead">
                    HTML es el lenguaje de marcado estándar para crear páginas web.
                    Con HTML defines la estructura de tu contenido.
                </p>
            </div>

            <section className="container mt-5">
                <h2>HTML para Principiantes</h2>
                <p>
                    HTML5 es la última versión del lenguaje y trae muchas características nuevas
                    que facilitan la creación de contenido semántico y compatible con dispositivos modernos.
                </p>

                <h3 className="mt-4">Principales Etiquetas HTML5</h3>
                <table className="table table-striped table-bordered mt-3">
                    <thead className="table-dark">
                        <tr>
                            <th>Etiqueta</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Etiquetas semánticas */}
                        <tr>
                            <td>&lt;header&gt;</td>
                            <td>Define la cabecera de un documento o sección.</td>
                        </tr>
                        <tr>
                            <td>&lt;nav&gt;</td>
                            <td>Define un bloque de navegación.</td>
                        </tr>
                        <tr>
                            <td>&lt;section&gt;</td>
                            <td>Define una sección genérica del documento.</td>
                        </tr>
                        <tr>
                            <td>&lt;article&gt;</td>
                            <td>Representa un artículo independiente.</td>
                        </tr>
                        <tr>
                            <td>&lt;aside&gt;</td>
                            <td>Define contenido relacionado (como una barra lateral).</td>
                        </tr>
                        <tr>
                            <td>&lt;footer&gt;</td>
                            <td>Define el pie de página de un documento o sección.</td>
                        </tr>

                        {/* Etiquetas de texto */}
                        <tr>
                            <td>&lt;h1&gt; - &lt;h6&gt;</td>
                            <td>Encabezados de nivel 1 a 6.</td>
                        </tr>
                        <tr>
                            <td>&lt;p&gt;</td>
                            <td>Define un párrafo de texto.</td>
                        </tr>
                        <tr>
                            <td>&lt;strong&gt;</td>
                            <td>Define texto con énfasis fuerte (negrita).</td>
                        </tr>
                        <tr>
                            <td>&lt;em&gt;</td>
                            <td>Define texto con énfasis (cursiva).</td>
                        </tr>
                        <tr>
                            <td>&lt;span&gt;</td>
                            <td>Define un contenedor genérico en línea.</td>
                        </tr>
                        <tr>
                            <td>&lt;br&gt;</td>
                            <td>Inserta un salto de línea.</td>
                        </tr>

                        {/* Etiquetas de imagen */}
                        <tr>
                            <td>&lt;img&gt;</td>
                            <td>Define una imagen en el documento.</td>
                        </tr>
                        <tr>
                            <td>&lt;figure&gt;</td>
                            <td>Asocia una imagen con su descripción.</td>
                        </tr>
                        <tr>
                            <td>&lt;figcaption&gt;</td>
                            <td>Proporciona una leyenda para una imagen.</td>
                        </tr>

                        {/* Etiquetas de listas */}
                        <tr>
                            <td>&lt;ul&gt;</td>
                            <td>Define una lista desordenada.</td>
                        </tr>
                        <tr>
                            <td>&lt;ol&gt;</td>
                            <td>Define una lista ordenada.</td>
                        </tr>
                        <tr>
                            <td>&lt;li&gt;</td>
                            <td>Define un elemento dentro de una lista.</td>
                        </tr>
                        <tr>
                            <td>&lt;dl&gt;</td>
                            <td>Define una lista de definiciones.</td>
                        </tr>
                        <tr>
                            <td>&lt;dt&gt;</td>
                            <td>Define un término dentro de una lista de definiciones.</td>
                        </tr>
                        <tr>
                            <td>&lt;dd&gt;</td>
                            <td>Define la descripción de un término en una lista de definiciones.</td>
                        </tr>

                        {/* Etiquetas de tablas */}
                        <tr>
                            <td>&lt;table&gt;</td>
                            <td>Define una tabla.</td>
                        </tr>
                        <tr>
                            <td>&lt;thead&gt;</td>
                            <td>Define la cabecera de una tabla.</td>
                        </tr>
                        <tr>
                            <td>&lt;tbody&gt;</td>
                            <td>Define el cuerpo de una tabla.</td>
                        </tr>
                        <tr>
                            <td>&lt;tr&gt;</td>
                            <td>Define una fila en una tabla.</td>
                        </tr>
                        <tr>
                            <td>&lt;td&gt;</td>
                            <td>Define una celda en una fila.</td>
                        </tr>
                        <tr>
                            <td>&lt;th&gt;</td>
                            <td>Define una celda de encabezado en una fila.</td>
                        </tr>

                        {/* Etiquetas de formularios */}
                        <tr>
                            <td>&lt;form&gt;</td>
                            <td>Define un formulario interactivo.</td>
                        </tr>
                        <tr>
                            <td>&lt;input&gt;</td>
                            <td>Define un campo de entrada de datos.</td>
                        </tr>
                        <tr>
                            <td>&lt;textarea&gt;</td>
                            <td>Define un área de texto de varias líneas.</td>
                        </tr>
                        <tr>
                            <td>&lt;button&gt;</td>
                            <td>Define un botón interactivo.</td>
                        </tr>
                        <tr>
                            <td>&lt;label&gt;</td>
                            <td>Etiqueta asociada a un campo de formulario.</td>
                        </tr>
                        <tr>
                            <td>&lt;select&gt;</td>
                            <td>Define un menú desplegable.</td>
                        </tr>
                        <tr>
                            <td>&lt;option&gt;</td>
                            <td>Define una opción dentro de un menú desplegable.</td>
                        </tr>
                    </tbody>
                </table>

                <h3 className="mt-4">Principales Atributos de HTML</h3>
                <table className="table table-striped table-bordered mt-3">
                    <thead className="table-dark">
                        <tr>
                            <th>Atributo</th>
                            <th>Descripción</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>Define un identificador único para un elemento.</td>
                            <td>&lt;div id="miDiv"&gt;&lt;/div&gt;</td>
                        </tr>
                        <tr>
                            <td>class</td>
                            <td>Asocia un elemento con una o más clases CSS.</td>
                            <td>&lt;div class="miClase"&gt;&lt;/div&gt;</td>
                        </tr>
                        <tr>
                            <td>src</td>
                            <td>Especifica la URL de un recurso, como imágenes o videos.</td>
                            <td>&lt;img src="imagen.jpg" /&gt;</td>
                        </tr>
                        <tr>
                            <td>href</td>
                            <td>Especifica la URL de un enlace.</td>
                            <td>&lt;a href="https://ejemplo.com"&gt;Enlace&lt;/a&gt;</td>
                        </tr>
                        <tr>
                            <td>alt</td>
                            <td>Proporciona texto alternativo para una imagen.</td>
                            <td>&lt;img src="imagen.jpg" alt="Descripción de la imagen" /&gt;</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>Proporciona información adicional que aparece como un tooltip.</td>
                            <td>&lt;p title="Texto extra"&gt;Texto&lt;/p&gt;</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>Aplica estilos en línea al elemento.</td>
                            <td>&lt;p style="color: red;"&gt;Texto&lt;/p&gt;</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>Define un texto de ayuda dentro de un campo de entrada.</td>
                            <td>&lt;input placeholder="Escribe aquí..." /&gt;</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>Especifica el tipo de un campo de entrada.</td>
                            <td>&lt;input type="text" /&gt;</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>Desactiva un elemento interactivo.</td>
                            <td>&lt;button disabled&gt;Botón&lt;/button&gt;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default HTML;
