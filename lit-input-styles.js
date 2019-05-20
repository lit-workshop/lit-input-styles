import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `lit-input-styles`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LitInputStyles extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'lit-input-styles',
      },
    };
  }
}

window.customElements.define('lit-input-styles', LitInputStyles);
