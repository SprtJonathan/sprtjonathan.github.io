import { Header } from "./src/components/Header/Header.js";
import { Homepage } from "./src/pages/Homepage/Homepage.js";
import { selector } from "./src/pages/LanguageSelector/LanguageSelector.js";
import { toggleModal } from "./src/components/helpers.js";
import Modal from "./src/components/Modal/Modal.js";
import { websiteDescription } from "./src/components/websiteDescription.js";

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

  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", websiteDescription.fr);
} else {
  if (lang == "fr") {
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", websiteDescription.fr);
  } else if (lang == "en") {
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", websiteDescription.en);
  }
  app.appendChild(Header("/home"));
}
app.appendChild(Homepage());
