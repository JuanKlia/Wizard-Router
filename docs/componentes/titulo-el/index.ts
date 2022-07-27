function initTitulo() {
  class Titulo extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.style.fontSize = "52px";
      this.style.fontWeight = "700";
      this.style.display = "block";
      this.style.lineHeight = "61px";
    }
  }
  customElements.define("titulo-el", Titulo);
}
export { initTitulo };
