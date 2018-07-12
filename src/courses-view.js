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
      </style>
      
      <div class="card">
        <h2>Backend</h2>
        <h3>Objetivo</h3>
        <blackquote>
            Generar un perfil backend básico en desarrolladores que les permita asumir responsabilidades del lado de servicios; crear api rest, darles mantenimiento y publicarlas para su consumo.
        </blackquote>
        <h3>Stack tecnológico</h3>
        <ul>
            <li>JavaScript (ECMAScript 7) </li>
            <li>Git (GitHub)</li>
            <li>NodeJS 8</li>
            <li>Express 4</li>
        </ul>
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
