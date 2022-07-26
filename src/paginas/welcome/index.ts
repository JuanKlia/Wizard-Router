import { initTitulo } from "../../componentes/titulo-el";
import { initSubtitulo } from "../../componentes/subtitulo-el";
import { initLarge } from "../../componentes/large-el";
import { initBody } from "../../componentes/body-el";
import { initTextField } from "../../componentes/text-field";
import { initSelect } from "../../componentes/select-el";
import { initButton } from "../../componentes/button-el";
function initWelcome(objeto): Element {
  //initTitulo();
  //initSubtitulo();
  //initLarge();
  //initBody();
  //initTextField();
  //initSelect();
  //initButton();
  const div = document.createElement("div");
  div.innerHTML = `
  
  <div class="welcome-presentacion">
  <titulo-el>Te damos la bienvenida a esta página</titulo-el>
  <body-el
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
    consequuntur iure voluptas quia accusantium voluptatum aspernatur
    provident et repudiandae quam veritatis, libero porro sit beatae
    laboriosam a aut consequatur quidem?</body-el
  >
</div>
<div class="welcome-form">
  <large-el>Para continuar ingresá tu nombre</large-el>
  <div class="welcome-form__form">
    <text-field-el label="Nombre"></text-field-el>
    <button-el class="comenzar" type="button">Comenzar</button-el>
  </div>
</div>

  `;
  const comenzar = div.querySelector(".comenzar");
  comenzar!.addEventListener("click", (x) => {
    objeto.goTo("/step-1");
  });
  return div;
}
export { initWelcome };
