import { Header } from "/src/components/Header/Header.js";
import { selector } from "/src/pages/LanguageSelector/LanguageSelector.js";
import {
  createElementFromTemplate,
  toggleModal,
} from "/src/components/helpers.js";

import Modal from "/src/components/Modal/Modal.js";
import Collapsible from "/src/components/Collapsible/Collapsible.js";

const githubAPIUrl = "https://api.github.com/repos/";
const authorLink = "sprtjonathan/";

// Récupère la valeur de l'URL courante
const url = new URL(window.location.href);

// Récupère la valeur du paramètre "name"
const projectName = url.searchParams.get("project-name");

const projectUrl = githubAPIUrl + authorLink + projectName;

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
  app.appendChild(Header());
}

let lockPage = true;

const authModalForm = createElementFromTemplate(
  "form",
  { class: "auth--form", id: "repo-auth" },
  "",
  ""
);

createElementFromTemplate(
  "label",
  { class: "auth--label", for: "password" },
  "Enter your password",
  authModalForm
);

const authPassInput = createElementFromTemplate(
  "input",
  { class: "auth--input", id: "password", name: "password", type: "password" },
  "",
  authModalForm
);

const buttonContainer = createElementFromTemplate(
  "div",
  { class: "auth--button--container", name: "password", type: "password" },
  "",
  authModalForm
);

const submitButton = createElementFromTemplate(
  "input",
  { class: "button--base", type: "submit" },
  "Authenticate",
  buttonContainer
);

const authModal = Modal("auth--modal", "Limited Access", authModalForm);

authModal.closeButton.addEventListener("click", () => {
  window.location.pathname = "/";
});

const projectPass = "test";

authModalForm.onsubmit = function (event) {
  event.preventDefault();
  const password = document.getElementById("password").value;

  if (password == projectPass) {
    lockPage = false;
    toggleModal(authModal.htmlCode);
    displayPage();
  }
};

app.append(authModal.htmlCode);

toggleModal(authModal.htmlCode, app);

displayPage();

async function displayPage() {
  if (!lockPage) {
    async function fetchRepoInformations() {
      let repositoryInformations = {};
      const repoResponse = await fetch(projectUrl);
      const repoData = await repoResponse.json();

      repositoryInformations.name = repoData.name;
      repositoryInformations.description = repoData.description;
      repositoryInformations.language = repoData.language;
      repositoryInformations.stargazers_count = repoData.stargazers_count;

      const commitsResponse = await fetch(projectUrl + "/commits");
      const commitsData = await commitsResponse.json();

      repositoryInformations.commits = commitsData;

      return repositoryInformations;
    }

    const repoInfo = await fetchRepoInformations();

    const repoHeader = createElementFromTemplate(
      "section",
      { class: "repo--header" },
      "",
      app
    );

    createElementFromTemplate(
      "h1",
      { class: "repo--header--title" },
      repoInfo.name,
      repoHeader
    );

    createElementFromTemplate(
      "p",
      { class: "repo--header--description" },
      repoInfo.description,
      repoHeader
    );

    const repoUpdateSection = createElementFromTemplate(
      "section",
      { class: "repo--updates" },
      "",
      app
    );

    const repoUpdateDiv = createElementFromTemplate(
      "div",
      { class: "repo--updates--list", id: "repo-updates" },
      "",
      ""
    );

    const commitList = createElementFromTemplate(
      "div",
      { class: "repo--updates--list", id: "commit-list" },
      "",
      repoUpdateDiv
    );

    repoInfo.commits.forEach((commit) => {
      const li = document.createElement("li");
      li.textContent = commit.commit.message;
      commitList.appendChild(li);
    });

    const updatesCollapsible = Collapsible(
      "updates",
      "",
      "Mises à jour",
      repoUpdateDiv
    );

    repoUpdateSection.append(updatesCollapsible);
  }
}
