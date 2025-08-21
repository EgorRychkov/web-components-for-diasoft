class MySelect extends HTMLElement {
  constructor(){
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `<p>IM A WEBCOMPONENT</p>`
  }
}
