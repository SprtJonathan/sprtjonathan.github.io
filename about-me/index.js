import { Header } from "../src/components/Header/Header.js";
import { AboutMe } from "../src/pages/AboutMe/AboutMe.js";
import { selector } from "../src/pages/LanguageSelector/LanguageSelector.js";
import { toggleModal } from "../src/components/helpers.js";
import Modal from "../src/components/Modal/Modal.js";

const lang = localStorage.getItem("language");

const app = document.getElementById("app");
if (!lang || lang == undefined) {
  console.log("Please select a language");
  const languageModal = Modal(
    "language-modal",
    "Choix de la langue / Select language",
    selector,
    "language-modal"
  );
  app.append(languageModal.htmlCode);
  toggleModal(languageModal.htmlCode, app);
} else {
  app.appendChild(Header("/about-me"));
}
app.appendChild(AboutMe());
