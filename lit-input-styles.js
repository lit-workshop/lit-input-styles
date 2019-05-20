import { LitElement, html } from "lit-element";

/**
 * `lit-input-styles`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LitInputStyles extends LitElement {
  render() {
    return html`
      <style>
        .input-text {
          border: 1px solid var(--neutral-color);
          font-size: var(--font-size);
          margin: 5px 0px;
          border-radius: 4px;
        }

        .input-text:focus {
          outline: none;
          border: 2px solid var(--primary-light-color);
        }
      </style>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

window.customElements.define("lit-input-styles", LitInputStyles);
