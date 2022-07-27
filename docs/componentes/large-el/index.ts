function initLarge() {
  class Large extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.style.fontSize = "22px";
      this.style.fontWeight = "500";
      this.style.display = "block";
    }
  }
  customElements.define("large-el", Large);
}
export { initLarge };
