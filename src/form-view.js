import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './bootstrap-styles.js';

class FormView extends PolymerElement {
  static get template() {
    return html`
        <style include="bootstrap-styles"></style>
        <style>
        .content {
            width: 550px;
            display: flex;
            flex-direction: column;
            padding: 20px;
            justify-content: center;
            margin: 0 auto;
        }
        input {
            margin-top: 5px;
        }
        button {
            margin-top: 15px;
        }
</style>
      <div class="content">
            <h2>Forma parte de esta experiencia</h2>
            <input type="text" class="form-control" placeholder="Nombre completo" id="name">
            <input type="text" class="form-control" placeholder="Curso o módulos de interés" id="modules">
            <input type="text" class="form-control" placeholder="Número celular" id="phone">
            <input type="text" class="form-control" placeholder="Correo electrónico" id="email">
            <button type="button" class="btn btn-success" on-click="register">Solicitar información</button>
</div>
      </div>
    `;
  }
  
  register() {
    const newClient = {};
    newClient.name = this.$.name.value;
    newClient.modules = this.$.modules.value;
    newClient.phone = this.$.phone.value;
    newClient.email = this.$.email.value;
    
    // Create a new user reference with an auto-generated id
    const newClientRef = clients.push();
    newClientRef.set(newClient);
  }
}

window.customElements.define('form-view', FormView);
