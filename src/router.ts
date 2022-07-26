import { initWelcome } from "./paginas/welcome";
import { initStep1 } from "./paginas/step-1";
import { initThanks } from "./paginas/thank-you";
const rutas = [
  {
    path: /\/welcome/,
    component: initWelcome,
  },
  { path: /\/step-1/, component: initStep1 },
  { path: /\/thankyou/, component: initThanks },
];

function initRouter(container) {
  function goTo(path: string) {
    history.pushState({}, "", path);

    handleRoute(path);
  }

  function handleRoute(path) {
    for (const r of rutas) {
      if (r.path.test(path)) {
        var el = r.component({ goTo: goTo });
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = function () {
    //evento que se ejecuta cuando cambia el estate , fijate lo que hay en el pathname y pasaselo al handleR
    handleRoute(location.pathname);

    //Es un pushEstate sin usar goTo
  };
}

export { initRouter };
