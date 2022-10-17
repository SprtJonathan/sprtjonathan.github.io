import { createElementFromTemplate } from "../../components/helpers.js";

const flagFr = "/src/assets/images/languages/FR.png";
const flagEn = "/src/assets/images/languages/EN.png";

export const selector = document.createElement("div");
const errorDiv = createElementFromTemplate(
  "div",
  { class: "error-404--go-back" },
  "",
  selector
);

const setLangFRLink = createElementFromTemplate(
  "p",
  { class: "error-404--go-back--button", href: "" },
  "",
  errorDiv
);

const frLinkContentDiv = createElementFromTemplate(
  "div",
  { class: "error-404--go-back--link" },
  "",
  setLangFRLink
);

createElementFromTemplate(
  "img",
  { class: "language-flag", src: flagFr, width: 64, height: 64 },
  "",
  frLinkContentDiv
);
createElementFromTemplate("br", {}, "", frLinkContentDiv);
createElementFromTemplate(
  "div",
  { class: "error-404--go-back--text" },
  " Site web en Français",
  frLinkContentDiv
);

const setLangENLink = createElementFromTemplate(
  "p",
  { class: "error-404--go-back--button", href: "" },
  "",
  errorDiv
);

const enLinkContentDiv = createElementFromTemplate(
  "div",
  { class: "error-404--go-back--link" },
  "",
  setLangENLink
);

createElementFromTemplate(
  "img",
  { class: "language-flag", src: flagEn, width: 64, height: 64 },
  "",
  enLinkContentDiv
);

createElementFromTemplate(
  "div",
  { class: "error-404--go-back--text" },
  " Website in English",
  enLinkContentDiv
);

frLinkContentDiv.addEventListener("click", (e) => {
  localStorage.setItem("language", "fr");
  location.reload();
});
enLinkContentDiv.addEventListener("click", (e) => {
  localStorage.setItem("language", "en");
  location.reload();
});
