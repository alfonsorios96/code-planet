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
    
    .item {
        text-align: center;
    }
    
    li {
        list-style: none;
    }
    
    .container {
        display: flex;
    }
    
    .courses {
        width: 30%;
    }
    
    .modules {
        width: 70%;
    }
    
    .modules-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .stack {
        display: flex;
        flex-direction: column;
    }

    .stack span {
        background-color: #4A9E75;
        color: white;
        padding: 5px;
        margin-bottom: 10px;
    }
    
    .header {
        background-color: #EC6C2D;
        color: white;
        margin: -16px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
    
    .header h2 {
        padding: 0;
        margin: 0;
    }

    .body {
        display: flex;
        justify-content: space-between;
        width: 300px;
    }
    
    @media only screen and (max-width: 1350px) {
        .container {
          display: flex;
          flex-direction: column;
      }
      
      .courses {
        width: 100%;
      }
      
      .modules {
        width: 100%;
      }
      
      .stack {
        display: flex;
        justify-content: space-between;
    }
    
    .body {
        display: flex;
        justify-content: space-between;
    }
    }
</style>

<div class="container">
<div class="courses">
<h2>Cursos</h2>

<template is="dom-repeat" items="[[courses]]" as="courseIterable">
    <div class="card">
        <h2>[[courseIterable.name]]</h2>
        <h3>Objetivo</h3>
        <blackquote>
            [[courseIterable.goal]]
        </blackquote>
        <h3>Inversión</h3>
        <blackquote>
            $[[courseIterable.price]] MXN
        </blackquote>
        <h3>Duración total</h3>
        <blackquote>
            [[courseIterable.duration]] horas
        </blackquote>
        <h3>Stack tecnológico</h3>
        <div class="stack">
            <template is="dom-repeat" items="[[courseIterable.stack]]" as="label">
                <span>[[label]]</span>
            </template>
        </div>
        <div id$="[[courseIterable.tag]]" class="button" on-click="selectCourse">Ver más...</div>
    </div>
</template>
</div>

<div class="modules">
<h2>Módulos</h2>

<div class="modules-container">
    <template is="dom-repeat" items="[[modules]]" as="module">
        <div class="card">
            <div class="header">
                <h2>[[module.name]]</h2>
            </div>
            <div class="body">
                <div class="info item">
                    <h3>Inversión</h3>
                    <blackquote>
                        $[[module.price]] MXN
                    </blackquote>
                    <h3>Duración</h3>
                    <blackquote>
                        [[module.duration]] horas
                    </blackquote>
                </div>
                <div class="summary item">
                    <h3>Temario</h3>
                    <ul>
                        <template is="dom-repeat" items="[[module.summary]]" as="topic">
                            <li>[[topic]]</li>
                        </template>
                    </ul>
                </div>
            </div>
        </div>
    </template>
</div>
</div>
</div>
    `;
  }
  
  static get properties() {
    return {
      course: {
        type: String,
        value: '',
        observer: 'resetModulesVisibility'
      },
      courses: Array,
      modules: Array
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
    const buttons = this.shadowRoot.querySelectorAll('.button');
    for (const button of buttons) {
      if (button.getAttribute('id') === this.course) {
        button.innerText = 'Ver menos...';
      } else {
        button.innerText = 'Ver más...';
      }
    }
  }
}

window.customElements.define('courses-view', CoursesView);
