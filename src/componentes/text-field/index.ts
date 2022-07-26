function initTextField() {
  class TextField extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const textLabel = this.getAttribute("label");
      var shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      div.classList.add("container");
      div.innerHTML = `
      
      <label class="label" for="">${textLabel}</label>
      <input class="input" type="text" placeholder="Ingresa tu ${textLabel}" />

      `;
      shadow.appendChild(div);

      var style = document.createElement("style");
      style.innerText = `
      * {
      box-sizing: border-box;
    }
      
      .container{
        display: flex;
        flex-direction: column;
        gap:3px;
        
        font-size: 18px;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
      }
      .label{
        
        
      }
      .input{
        height: 55px;
        font-size: 18px;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        padding: 17px 13px;
        border: 2px solid #000000;
        border-radius: 4px;
      }


      
      `;
      shadow.appendChild(style);
    }
  }
  customElements.define("text-field-el", TextField);
}
export { initTextField };
