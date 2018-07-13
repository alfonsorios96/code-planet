/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class HomeView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h3>Objetivo</h3>
        <blackquote>
            Brindar skills técnicos de excelente calidad para afrontar retos puntuales a la hora de desarrollar un requirimiento funcional así como brindar herramientas y conocimientos necesarios para crecer como un desarrollador de software.
        </blackquote>
        </div>
        <div class="card">
        <h3>Metodología</h3>
        <ol>
            <li>Generamos contenido para un curso en específico; resolviendo una necesidad técnica en particular, por ejemplo, desarrollamos un curso de autenticación/autorización de usuarios</li>
            <li>Generamos módulos independientes que puedan aportar valor por sí mismos pero contemplen el curso de manera conjunta.</li>
            <li>De tal manera, que, puedes cursar sólo los módulos que requieras sin obligación de asistir al curso completo y pagar exclusivamente por los que te inscribes.</li>
        </ol>
</div>
      
     
      <div class="card">
      <h3>Valores</h3>
       <ul>
           <li>Le apostamos a genearar contenido útil, de calidad, que resuelva problemáticas reales. Si ustedes necesitan las habilidades, y conocimientos. Impartiremos un curso de ello.</li>
           <li>No impartimos cursos de temarios escolares, como Java, C#, Orientado a objetos, porque creemos que para ello está la escuela. Sí impartimos orientado a objetos pero con TypeScript enfocado a Angular, o programación estructurada con Python.</li>
           <li>Creemos en el código abierto, así que parte de las actividades de los alumnos es aportar a las comunidades de las tecnologías referentes a sus cursos y todas las prácticas o ejercicios son publicados en GitHub MIT License.</li>
       </ul>
        </div>
    `;
  }
}

window.customElements.define('home-view', HomeView);
