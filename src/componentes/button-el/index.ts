function initButton() {
  class Button extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const texto = this.textContent;

      var shadow = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      shadow.appendChild(style);
      const boton = document.createElement("button");
      shadow.appendChild(boton);
      boton.textContent = texto;

      const tipo = this.getAttribute("type");
      if (tipo == "button") {
        boton.classList.add("boton");
        style.textContent = `
      
        .boton {
            height: 55px;
            background-color: #9cbbe9;
            display: block;
            width: 100%;
            border-radius: 4px;
            border: none;
            font-weight: 500;
            font-size: 22px;
            font-family: 'Roboto', sans-serif;
          }
      `;
      }
      if (tipo == "outlined") {
        boton.classList.add("outlined");
        style.textContent = `
      
        .outlined {
            height: 55px;
            background-color: white;
            display: block;
            width: 100%;
            border-radius: 4px;
            border: 2px solid #000000;
            font-weight: 500;
            font-size: 22px;
            font-family: 'Roboto', sans-serif;
          }
      `;
      }
    }
  }
  customElements.define("button-el", Button);
}
export { initButton };
