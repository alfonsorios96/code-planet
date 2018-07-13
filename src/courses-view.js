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
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import './shared-styles.js';

class CoursesView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        
        paper-button {
            width: 100%;
            height: 54px;
            background-color: #EC6C2D;
            color: white;
        }
        
        .stack {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        
        .stack span {
            background-color: #4A9E75;
            color: white;
            padding: 10px;
        }
      </style>
      
      <div class="card">
        <h2>Backend</h2>
        <h3>Objetivo</h3>
        <blackquote>
            Generar un perfil backend básico en desarrolladores que les permita asumir responsabilidades del lado de servicios; crear api rest, darles mantenimiento y publicarlas para su consumo.
        </blackquote>
        <h3>Costos</h3>
        <blackquote>
            <ul>
                <li>Curso completo: $8,000. Pagando $2,000 quincenales, siendo el primer pago antes del primer módulo</li>
                <li>Curso por módulo: $2,000 por concepto de inscripción y $2,000 el módulo correspondiente.</li>
                <li>El pago de inscripción es único por alumno y te da derecho a inscribirte a cualquier cantidad de módulo que quieras</li>
                <li>El pago del módulo correspondiente se realiza en dos partes, los primeros $1,000 tienen que ser antes de la clase.</li>
                <li>Si no llegas al curso, no tienes que pagar los otros $1,000</li>
                <li>Si tu evaluación es excelente (revisar la metodología de evalución), se te hace un descuento final de $500.</li>
            </ul>
        </blackquote>
        <h3>Stack tecnológico</h3>
        <div class="stack">
        <span>JavaScript (ECMAScript 7) </span>
            <span>Git (GitHub)</span>
            <span>NodeJS 8</span>
            <span>Express 4</span>
        </div>
        <paper-button id="backend" on-click="selectCourse">Revisar módulos</paper-button>
      </div>
      
      <iron-pages selected="[[course]]" attr-for-selected="course" role="main">
            <div course="backend">
                <div class="card">
                  <h2>Módulo I - Control de versiones</h2>
                  <h3>Duración</h3>
                  <blackquote>
                      4 horas
                  </blackquote>
                  <h3>Temario</h3>
                  <ul>
                      <li>Repositorios</li>
                      <li>Flujo para arquitecturas remote</li>
                      <li>Branches</li>
                      <li>Resolución de conflictos</li>
                      <li>Tags</li>
                      <li>Comandos (add, commit, branch, remote, push, merge, fetch, etc…)</li>
                  </ul>
                </div>
                <div class="card">
                  <h2>Módulo II - JavaScript ES7</h2>
                  <h3>Duración</h3>
                  <blackquote>
                      4 horas
                  </blackquote>
                  <h3>Temario</h3>
                  <ul>
                      <li>Variables</li>
                      <li>Condicionales</li>
                      <li>Iteradores</li>
                      <li>Objetos complejos</li>
                      <li>Arrow functions</li>
                      <li>Clases</li>
                      <li>Módulos</li>
                  </ul>
                </div>
                <div class="card">
                  <h2>Módulo III - NodeJS</h2>
                  <h3>Duración</h3>
                  <blackquote>
                      4 horas
                  </blackquote>
                  <h3>Temario</h3>
                  <ul>
                      <li>Environment</li>
                      <li>Scripts</li>
                      <li>Módulo FileSystem</li>
                      <li>Importación / Exportación</li>
                      <li>Dependencias y devDependencies (manejo de NPM y YARN)</li>
                  </ul>
                </div>
                <div class="card">
                  <h2>Módulo IV - API Rest</h2>
                  <h3>Duración</h3>
                  <blackquote>
                      4 horas
                  </blackquote>
                  <h3>Temario</h3>
                  <ul>
                      <li>Códigos HTTP</li>
                      <li>Métodos GET, PUT, DELETE, POST</li>
                      <li>Query Params</li>
                      <li>Manejo de excepciones</li>
                      <li>Manejo de archivos como almacenamiento</li>
                      <li>Objetos Request/Response</li>
                  </ul>
                </div>
            </div>
          </iron-pages>
    `;
  }
  
  static get properties() {
    return {
      course: {
        type: String,
        value: '',
        observer: 'resetModulesVisibility'
      }
    };
  }
  
  selectCourse(event) {
    const course = event.currentTarget.getAttribute('id');
    if (this.course === course) {
      this.set('course', '');
    } else {
      this.set('course', course);
    }
  }
  
  resetModulesVisibility() {
    const buttons = this.shadowRoot.querySelectorAll('paper-button');
    for (const button of buttons) {
      if (button.getAttribute('id') === this.course) {
        button.innerText = 'Ocultar Módulos';
      } else {
        button.innerText = 'Mostrar Módulos';
      }
    }
  }
}

window.customElements.define('courses-view', CoursesView);
