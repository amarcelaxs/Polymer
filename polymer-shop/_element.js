import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `polymer-shop`
 * polymer init
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PolymerShop extends PolymerElement {
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
        value: 'polymer-shop',
      },
    };
  }
}

window.customElements.define('polymer-shop', PolymerShop);
