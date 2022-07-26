function initSubtitulo() {
  class Subtitulo extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.style.fontSize = "38px";
      this.style.fontWeight = "700";
      this.style.display = "block";
    }
  }
  customElements.define("subtitulo-el", Subtitulo);
}
export { initSubtitulo };
