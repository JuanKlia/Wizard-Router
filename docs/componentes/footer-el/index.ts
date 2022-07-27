function initFooter() {
  class Footer extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.textContent = "Footer";
      this.style.height = "233px";
      this.style.backgroundColor = "#FFA0EA";
      this.style.display = "flex";
      this.style.justifyContent = "center";
      this.style.alignItems = "center";
      this.style.fontSize = "22px";
      this.style.fontWeight = "500";
    }
  }
  customElements.define("footer-el", Footer);
}
export { initFooter };
