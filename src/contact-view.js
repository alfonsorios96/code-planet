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

class ContactView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        
        h2 {
            padding: 0;
            margin: 0 0 20px 0;
        }
        
        a {
         text-decoration: none;
         color: black;
         font-size: 18px;
         font-style: oblique;
        }
        
        img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
        }
        
        .profile {
            display: flex;
            flex-direction: row;
        }
        
        .content {
            padding: 20px;
        }
        
        .header {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        @media only screen and (max-width: 900px) {
            .profile {
                display: flex;
                flex-direction: column;
            }
        }
      </style>

      <div class="card profile">
      <div class="content header">
      <h2>Alfonso Ríos</h2>
        <img src="../images/poncho.jpg" alt="Alfonso Ríos">
      </div>
            <div class="content">
            <h3>CEO and Founder</h3>
              <p>Instructor apasionado por la vida, y las nuevas tecnologías. Trabaja actualmente para BBVA como desarrollador Front-end y para Centraal Academy como instructor de Frontend Avanzado con Polymer</p>
              <ul>
              <li>Linkedin: <a href="www.linkedin.com/in/manuel-alfonso-rios-medellín-43017b161">malforime</a></li>
      </div>
</ul>
      </div>
      
      <div class="card profile">
      <div class="content header">
            <h2>Jaqui Hernández</h2>
            <img src="../images/jaqui.jpeg" alt="Jaqui Hernández">
      </div>
      <div class="content">
      <h3>CMO</h3>
          <p>Estudiante de la carrera de psicología por parte del CICS Santo Tomás del IPN, apasionada de los perros y trabajo en equipos multidisciplinarios, su goal es el éxito en todo aquello que se propone.</p>
          <ul>
          <li>Facebook: <a href="https://www.facebook.com/jaqeelin.osorio">Jaqui</a></li>
      </div>
</ul>
</div>
    `;
  }
}

window.customElements.define('contact-view', ContactView);
