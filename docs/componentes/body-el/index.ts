function initBody() {
  class Body extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.style.fontSize = "18px";
      this.style.fontWeight = "400";
      this.style.display = "block";
    }
  }
  customElements.define("body-el", Body);
}
export { initBody };
