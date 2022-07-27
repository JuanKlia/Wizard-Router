function initThanks(objeto) {
  const div = document.createElement("div");
  div.innerHTML = `
  
        <titulo-el>Gracias</titulo-el>
        <large-el>Toda la información que nos brindaste es muy importante</large-el>
        <button-el class="boton-thanks" type="button">De nada</button-el>
  
  `;
  div.classList.add("thanks");
  const boton = div.querySelector(".boton-thanks");
  boton?.addEventListener("click", () => {
    objeto.goTo("/welcome");
  });
  return div;
}

export { initThanks };
