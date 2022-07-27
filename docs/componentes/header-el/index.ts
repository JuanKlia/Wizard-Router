function initHeader() {
  class Header extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.textContent = "Header";
      this.style.height = "60px";
      this.style.backgroundColor = "#FF8282";
      this.style.display = "flex";
      this.style.justifyContent = "center";
      this.style.alignItems = "center";
      this.style.fontSize = "22px";
      this.style.fontWeight = "500";
    }
  }
  customElements.define("header-el", Header);
}
export { initHeader };
