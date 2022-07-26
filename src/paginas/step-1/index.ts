import { initTitulo } from "../../componentes/titulo-el";
import { initSubtitulo } from "../../componentes/subtitulo-el";
import { initLarge } from "../../componentes/large-el";
import { initBody } from "../../componentes/body-el";
import { initTextField } from "../../componentes/text-field";
import { initSelect } from "../../componentes/select-el";
import { initButton } from "../../componentes/button-el";

function initStep1(objeto) {
  const div = document.createElement("div");
  div.innerHTML = `
  
  <titulo-el class="step-titulo">Necesitamos algunos datos más</titulo-el>
        <div class="step1-form">
          <text-field-el label="Email"></text-field-el>
          <text-field-el label="Comida favorita"></text-field-el>
          <select-el type="juego"></select-el>
          <button-el class = "boton" type="button">Continuar</button-el>
          <button-el type="outlined">Volver</button-el>
        </div>
  
  `;
  const boton = div.querySelector(".boton");
  boton?.addEventListener("click", () => {
    objeto.goTo("/thankyou");
  });
  return div;
}

export { initStep1 };
