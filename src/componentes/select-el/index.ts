function initSelect() {
  class Select extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const type = this.getAttribute("type");
      var shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      div.classList.add("container");
      if (type == "juego") {
        div.innerHTML = `
        <label class="label" for="">Alguna de estas tres opciones</label>
        <select class="select" name="select">
        <option value="value1">Piedra</option>
        <option value="value2" selected>Papel</option>
        <option value="value3">Tijera</option>
      </select>
    
          `;
      }

      shadow.appendChild(div);

      var style = document.createElement("style");
      style.innerText = `
        * {
        box-sizing: border-box;
      }
        .container{
            display: flex;
            flex-direction: column;
            font-weight: 400;
            font-size: 18px;
        }
        .select{
            height:55px;
            font-weight: 400;
            font-size: 18px;
            border: 2px solid #000000;
            border-radius: 4px;
            padding: 10px ;
        }
  
        
        `;
      shadow.appendChild(style);
    }
  }
  customElements.define("select-el", Select);
}
export { initSelect };
