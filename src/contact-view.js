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
import '@polymer/iron-icon/iron-icon.js';
import './shared-styles.js';

class ContactView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
    :host {
        display: block;
        padding: 10px;
    }
    
    li {
        list-style: none;
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
        border: 5px solid white;
    }

    .profile {
        display: flex;
        flex-direction: row;
    }

    .content {
        padding: 20px;
    }

    .header {
        width: 400px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #EC6C2D;
        color: white;
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
        <p>Instructor apasionado por la vida, y las nuevas tecnologías. Trabaja actualmente para BBVA como desarrollador
            Front-end y para Centraal Academy como instructor de Frontend Avanzado con Polymer</p>
            <h4>Redes sociales</h4>
                    <span>
                <a href="www.linkedin.com/in/manuel-alfonso-rios-medellín-43017b161">
                <iron-icon src="images/linkedin-brands.svg"></iron-icon>
</a></span>
<span>
                <a href="https://github.com/alfonsorios96">
                <iron-icon src="images/github-brands.svg"></iron-icon>
</a></span>
    </div>
</div>

<div class="card profile">
    <div class="content header">
        <h2>Jaqui Hernández</h2>
        <img src="../images/jaqui.jpeg" alt="Jaqui Hernández">
    </div>
    <div class="content">
        <h3>CMO</h3>
        <p>Estudiante de la carrera de psicología por parte del CICS Santo Tomás del IPN, apasionada de los perros y
            trabajo en equipos multidisciplinarios, su goal es el éxito en todo aquello que se propone.</p>
        <span>
                <a href="https://www.facebook.com/jaqeelin.osorio">
                <iron-icon src="images/facebook-square-brands.svg"></iron-icon>
</a></span>
    </div>
</div>
    `;
  }
}

window.customElements.define('contact-view', ContactView);
