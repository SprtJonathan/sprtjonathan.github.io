import errorUI from "./views/invalidRouteUI";

export function InvalidRoute() {
  const error404 = document.createElement("main");

  error404.append(errorUI);

  return error404;
}
