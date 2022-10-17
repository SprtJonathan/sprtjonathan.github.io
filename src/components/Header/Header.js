import { createElementFromTemplate, toggleModal } from "../helpers.js";
import Modal from "../Modal/Modal.js";

import headerText from "./views/header_text.js";

const flagFr = "/src/assets/images/languages/FR.png";
const flagEn = "/src/assets/images/languages/EN.png";

export function Header(activePage) {
  const currentPage = activePage;

  const lang = localStorage.getItem("language");

  let importedHeaderText;
  if (lang === "fr") {
    importedHeaderText = headerText.fr;
  } else {
    importedHeaderText = headerText.en;
  }

  const navbar = document.createElement("nav");
  navbar.setAttribute("class", "navbar");
  navbar.setAttribute("id", "navbar-container");

  const navbarDisplayButton = document.createElement("div");
  navbarDisplayButton.setAttribute("id", "display-menu-button");
  navbarDisplayButton.setAttribute("class", "navbar--toggle");
  navbarDisplayButton.innerHTML = `<i class="navbar--toggle--icon fa-solid fa-bars" id="display-menu-icon"></i>`;

  navbarDisplayButton.addEventListener("click", (e) => {
    if (
      e.target.id === "display-menu-button" ||
      e.target.id === "display-menu-icon"
    ) {
      toggleMenu();
    }
  });

  const nav = document.createElement("div");
  nav.setAttribute("class", "hidden navbar--menu");
  nav.setAttribute("id", "navbar");

  navbar.append(nav);

  let homepageClass = "navbar--button";
  let resumeClass = "navbar--button";
  let portfolioClass = "navbar--button";

  const setActivePage = (page) => {
    if (page == "/home" || page == "/") {
      homepageClass = "navbar--button active-page";
      resumeClass = "navbar--button";
      portfolioClass = "navbar--button";
    } else if (page == "/resume") {
      homepageClass = "navbar--button";
      resumeClass = "navbar--button active-page";
      portfolioClass = "navbar--button";
    } else if (page == "/portfolio") {
      homepageClass = "navbar--button";
      resumeClass = "navbar--button";
      portfolioClass = "navbar--button active-page";
    }
  };
  setActivePage(currentPage);

  const menuUl = createElementFromTemplate(
    "ul",
    {
      id: "navbar-buttons-block",
      class: "navbar--block",
    },
    "",
    nav
  );
  createElementFromTemplate("div", { class: "modal--blur" }, "", menuUl);

  const homepageLi = createElementFromTemplate(
    "li",
    { class: "navbar--li" },
    "",
    menuUl
  );

  const homepageLink = createElementFromTemplate(
    "a",
    {
      id: "home",
      class: homepageClass,
      href: "../",
    },
    `<i class="fa-solid fa-house"></i>`,
    homepageLi
  );

  const resumeLi = createElementFromTemplate(
    "li",
    { class: "navbar--li" },
    "",
    menuUl
  );

  const resumeLink = createElementFromTemplate(
    "a",
    {
      id: "resume",
      class: resumeClass,
      href: "../resume",
    },
    importedHeaderText.resumeTitle,
    resumeLi
  );

  const portfolioLi = createElementFromTemplate(
    "li",
    { class: "navbar--li" },
    "",
    menuUl
  );

  const portfolioLiLink = createElementFromTemplate(
    "a",
    {
      id: "portfolio",
      class: portfolioClass,
      href: "../portfolio",
    },
    importedHeaderText.portfolioTitle,
    portfolioLi
  );

  const contactLi = createElementFromTemplate(
    "li",
    { class: "navbar--li" },
    "",
    menuUl
  );

  const contactLink = createElementFromTemplate(
    "a",
    {
      id: "contact-button",
      class: "navbar--button",
      href: "#contact",
    },
    importedHeaderText.contactTitle,
    contactLi
  );

  const languageLi = createElementFromTemplate(
    "li",
    { class: "navbar--li" },
    "",
    menuUl
  );

  const languageLink = createElementFromTemplate(
    "a",
    {
      id: "language-menu-button",
      class: "navbar--button",
      href: "#language-selection",
    },
    importedHeaderText.languageTitle,
    languageLi
  );

  const languageFlagContainer = createElementFromTemplate(
    "div",
    { id: "language-menu", class: "hidden" },
    "",
    languageLi
  );

  const flagFRLink = createElementFromTemplate(
    "a",
    {
      class: "navbar--button",
      href: "#",
    },
    `<img id="select-fr" class="language-flag" src="${flagFr}" width=48 height=48>`,
    languageFlagContainer
  );

  const flagENLink = createElementFromTemplate(
    "a",
    {
      class: "navbar--button",
      href: "#",
    },
    `<img id="select-en" class="language-flag" src="${flagEn}" width=48 height=48>`,
    languageFlagContainer
  );

  contactLink.addEventListener("click", (e) => {
    e.preventDefault();
    toggleModal(contactModal.htmlCode, nav);
  });

  languageLink.addEventListener("click", (e) => {
    e.preventDefault();
    switchLanguageMenu();
  });

  flagFRLink.addEventListener("click", () => {
    setLang("fr");
  });

  flagENLink.addEventListener("click", () => {
    setLang("en");
  });

  const contactModalContent = createElementFromTemplate(
    "div",
    {},
    importedHeaderText.contactForm,
    ""
  );

  const contactModal = Modal(
    "contact-modal",
    importedHeaderText.contactHeader,
    contactModalContent
  );

  navbar.append(navbarDisplayButton);
  navbar.append(contactModal.htmlCode);

  /**
   * If the class name of the element with the id "language-menu" is "hidden", then change the class
   * name to "navbar--li--dropdown". Otherwise, change the class name to "hidden".
   * </code>
   */
  function switchLanguageMenu() {
    if (document.getElementById("language-menu").className === "hidden") {
      document.getElementById("language-menu").className =
        "navbar--li--dropdown";
    } else {
      document.getElementById("language-menu").className = "hidden";
    }
  }

  /* Setting the language of the website. */
  function setLang(lang) {
    console.log("Changement en " + lang);
    localStorage.setItem("language", lang);

    location.reload();
  }

  contactModal.closeButton.addEventListener("click", () => {
    toggleModal(contactModal.htmlCode);
  });

  let displayMenu = false;

  function toggleMenu() {
    // console.log(displayMenu);
    displayMenu = !displayMenu;
    retractMenu();
  }

  function retractMenu() {
    if (displayMenu) {
      document.getElementById("navbar").className = "navbar--menu";
      document.getElementById("display-menu-icon").className =
        "navbar--toggle--icon--after fa-solid fa-bars";
    } else {
      document.getElementById("navbar").className = "navbar--slided navbar";
      document.getElementById("display-menu-icon").className =
        "navbar--toggle--icon fa-solid fa-bars";
    }
  }

  return navbar;
}
