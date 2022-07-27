import { initHeader } from "./componentes/header-el";
import { initFooter } from "./componentes/footer-el";
import { initTitulo } from "./componentes/titulo-el";
import { initSubtitulo } from "./componentes/subtitulo-el";
import { initLarge } from "./componentes/large-el";
import { initBody } from "./componentes/body-el";
import { initTextField } from "./componentes/text-field";
import { initSelect } from "./componentes/select-el";
import { initButton } from "./componentes/button-el";

import { initRouter } from "./router";

function main() {
  initFooter();
  initHeader();
  initTitulo();
  initSubtitulo();
  initLarge();
  initBody();
  initTextField();
  initSelect();
  initButton();

  const container = document.querySelector(".container");

  initRouter(container);
}
main();
