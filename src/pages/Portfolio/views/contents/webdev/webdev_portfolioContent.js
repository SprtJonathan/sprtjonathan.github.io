import {
  createElementFromTemplate,
  createListOfLinks,
} from "../../../../../components/helpers.js";
import webdevText from "./webdev_text.js";

const lang = localStorage.getItem("language");
let webdevTitle, importedWebdevText;
if (lang === "fr") {
  webdevTitle = webdevText.fr.modalTitle;
  importedWebdevText = webdevText.fr;
} else {
  webdevTitle = webdevText.en.modalTitle;
  importedWebdevText = webdevText.en;
}

const webdevContent = createElementFromTemplate(
  "div",
  { id: "webdev-content", class: "portfolio--modal-content" },
  "",
  ""
);

createElementFromTemplate(
  "p",
  {},
  importedWebdevText.modalIntroText,
  webdevContent
);

createElementFromTemplate(
  "h3",
  {},
  importedWebdevText.firstFormationTitle,
  webdevContent
);

createListOfLinks(
  importedWebdevText.webdevLinks,
  importedWebdevText.webdevTitles,
  webdevContent
);

createElementFromTemplate(
  "h3",
  {},
  importedWebdevText.secondFormationTitle,
  webdevContent
);

createListOfLinks(
  importedWebdevText.frontendLinks,
  importedWebdevText.frontendTitles,
  webdevContent
);

createElementFromTemplate("hr", {}, "", webdevContent);

// E-changR
const projectTitleContainer = createElementFromTemplate(
  "div",
  { class: "project--title--container" },
  "",
  webdevContent
);

createElementFromTemplate(
  "h3",
  {},
  importedWebdevText.echangrTitle,
  projectTitleContainer
);

createElementFromTemplate(
  "a",
  {
    href: "https://github.com/SprtJonathan/EchangR",
    class: "repo--button",
    target: "_blank",
  },
  "Repo",
  projectTitleContainer
);

createElementFromTemplate(
  "p",
  {},
  importedWebdevText.echangrDescription,
  webdevContent
);

const demoEchangRButton = createElementFromTemplate(
  "button",
  {
    class: "iframe--button",
    id: "iframe-button-1",
  },
  importedWebdevText.echangrToggleButton,
  webdevContent
);

const echangR = createElementFromTemplate(
  "div",
  { class: "iframe--wrapper" },
  "",
  webdevContent
);

const echangRDemo = createElementFromTemplate(
  "iframe",
  {
    class: "iframe",
    src: "",
    frameborder: "0",
  },
  "",
  echangR
);

echangR.style.maxHeight = "0px";

let isEchangRframeActive = false;
demoEchangRButton.addEventListener("click", (e) => {
  e.preventDefault();
  isEchangRframeActive = enableIframe(
    echangR,
    echangRDemo,
    isEchangRframeActive,
    demoEchangRButton,
    "https://e-changr.vercel.app/"
  );
});

createElementFromTemplate("hr", {}, "", webdevContent);

// JS Base

createElementFromTemplate(
  "h3",
  {},
  importedWebdevText.jsBaseTitle,
  webdevContent
);

createElementFromTemplate(
  "p",
  {},
  importedWebdevText.personalProjectFailed,
  webdevContent
);

createElementFromTemplate(
  "p",
  {},
  importedWebdevText.personalProjectRebooted,
  webdevContent
);

const demoJSBaseButton = createElementFromTemplate(
  "button",
  { class: "iframe--button" },
  importedWebdevText.administrativeManagerToggleButton,
  webdevContent
);

const jsBase = createElementFromTemplate(
  "div",
  { class: "iframe--wrapper" },
  "",
  webdevContent
);

const jsBaseDemo = createElementFromTemplate(
  "iframe",
  {
    class: "iframe",
    src: "",
    frameborder: "0",
  },
  "",
  jsBase
);

jsBase.style.maxHeight = "0px";

function enableIframe(
  iframeWrapper,
  iframeElement,
  switchVariable,
  buttonElement,
  link
) {
  if (!switchVariable) {
    iframeElement.src = link;
    iframeWrapper.style.paddingBottom = "56.25%";
    buttonElement.textContent =
      importedWebdevText.administrativeManagerExitButton;
  } else {
    iframeElement.src = "";
    iframeWrapper.style.paddingBottom = "0%";
    buttonElement.textContent =
      importedWebdevText.administrativeManagerToggleButton;
  }
  switchVariable = !switchVariable;
  return switchVariable;
}

let isJSBaseIframeActive = false;
demoJSBaseButton.addEventListener("click", (e) => {
  e.preventDefault();
  isJSBaseIframeActive = enableIframe(
    jsBase,
    jsBaseDemo,
    isJSBaseIframeActive,
    demoJSBaseButton,
    "https://sprtjonathan.github.io/js-project-base/"
  );
});

createElementFromTemplate("hr", {}, "", webdevContent);

// Admin Manager
createElementFromTemplate(
  "h3",
  {},
  importedWebdevText.administrativeManagerTitle,
  webdevContent
);
createElementFromTemplate(
  "p",
  {},
  importedWebdevText.administrativeManagerDescription,
  webdevContent
);

const demoAdminManagerButton = createElementFromTemplate(
  "button",
  {
    class: "iframe--button",
    id: "iframe-button-1",
  },
  importedWebdevText.administrativeManagerToggleButton,
  webdevContent
);

const adminManager = createElementFromTemplate(
  "div",
  { class: "iframe--wrapper" },
  "",
  webdevContent
);

const adminManagerDemo = createElementFromTemplate(
  "iframe",
  {
    class: "iframe",
    src: "",
    frameborder: "0",
  },
  "",
  adminManager
);

adminManager.style.maxHeight = "0px";

let isAMIframeActive = false;
demoAdminManagerButton.addEventListener("click", (e) => {
  e.preventDefault();
  isAMIframeActive = enableIframe(
    adminManager,
    adminManagerDemo,
    isAMIframeActive,
    demoAdminManagerButton,
    "https://sprtjonathan.github.io/AdministrativeManager/"
  );
});

createElementFromTemplate(
  "p",
  {},
  importedWebdevText.developperMotto,
  webdevContent
);

createElementFromTemplate(
  "div",
  { class: "spacer--vertical--medium" },
  "",
  webdevContent
);

export { webdevTitle, webdevContent };
