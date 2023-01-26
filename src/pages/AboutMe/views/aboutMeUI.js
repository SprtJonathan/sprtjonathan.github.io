import { createElementFromTemplate } from "../../../components/helpers.js";

import Collapsible from "/src/components/Collapsible/Collapsible.js";

import { aboutMeText } from "./aboutMe_text.js";

const webdevImage = "/src/assets/images/homepage/webdev.png";
const gamedevImage = "/src/assets/images/homepage/gamedev.png";
const webdevBackgroudVideo = "/src/assets/videos/WebBackground.webm";

const lang = localStorage.getItem("language");

let importedText;

if (lang === "fr") {
  importedText = aboutMeText.fr;
} else {
  importedText = aboutMeText.en;
}

export const aboutMeContent = createElementFromTemplate(
  "div",
  { class: "aboutme--content", id: "aboutMe-content" },
  "",
  ""
);

// /**/
// const summaryIntroNameSection = createElementFromTemplate(
//   "section",
//   { id: "summary", class: "intro--section intro--name" },
//   "",
//   aboutMeContent
// );

// const introTitleBlock = createElementFromTemplate(
//   "div",
//   { class: "aboutme--title--block" },
//   "",
//   summaryIntroNameSection
// );

// const introTitle = createElementFromTemplate(
//   "h1",
//   { class: "text-light" },
//   "",
//   introTitleBlock
// );

// createElementFromTemplate(
//   "mark",
//   { class: "text-light blue-underline" },
//   importedText.aboutMeIntroName,
//   introTitle
// );

// createElementFromTemplate(
//   "h2",
//   { class: "text-light" },
//   importedText.aboutMeIntroJob,
//   introTitleBlock
// );
// /**/

/* Title */
const summarySection = createElementFromTemplate(
  "section",
  { class: "intro--section intro--summary" },
  "",
  aboutMeContent
);

const summarySectionTextContainer = createElementFromTemplate(
  "div",
  { class: "intro--inner-text--block" },
  "",
  summarySection
);

createElementFromTemplate(
  "h2",
  { class: "intro--inner-title" },
  importedText.aboutMeIntroSummary,
  summarySectionTextContainer
);

createElementFromTemplate(
  "div",
  { class: "intro--blurred-background" },
  "",
  summarySection
);
/**/

/* Intro Text */
const introSection = createElementFromTemplate(
  "section",
  {
    class: "intro--section intro--introduction",
    style: "background-color: #1e1e1e",
  },
  "",
  aboutMeContent
);

createElementFromTemplate(
  "p",
  { class: "intro--inner-text" },
  importedText.aboutMeIntroIntroduction,
  introSection
);
/**/

/* Web Dev */
const webdevSection = createElementFromTemplate(
  "section",
  {
    class: "intro--section intro--type webdev",
  },
  "",
  aboutMeContent
);

const webdevTitle = createElementFromTemplate(
  "span",
  { id: "webdev-title", class: "text-light" },
  importedText.aboutMeWebdevTitle,
  webdevSection
);

createElementFromTemplate(
  "img",
  {
    class: "intro--type--image",
    src: webdevImage,
    height: "30%",
    alt: "Web development illustration picture",
  },
  "",
  webdevSection
);

/* Web Dev Description */
const webdevObjectives = createElementFromTemplate(
  "section",
  {
    class: "intro--section intro--objectives--web webdev",
  },
  "",
  aboutMeContent
);

createElementFromTemplate(
  "p",
  { class: "intro--objectives--text" },
  importedText.aboutMeIntroObjectivesWeb,
  webdevObjectives
);
/**/
webdevTitle.addEventListener("click", (e) => {
  expandSection();
});

let sectionState = false;

function expandSection() {
  if (sectionState) {
    webdevObjectives.style.maxHeight = "0px";
    sectionState = !sectionState;
  } else {
    webdevObjectives.style.maxHeight = "1000vh";
    sectionState = !sectionState;
  }
}

/* Game dev*/
const gamedevSection = createElementFromTemplate(
  "section",
  {
    class: "intro--section intro--type gamedev",
  },
  "",
  aboutMeContent
);

createElementFromTemplate(
  "img",
  {
    class: "intro--type--image",
    src: gamedevImage,
    height: "30%",
    alt: "Game development illustration picture",
  },
  "",
  gamedevSection
);

createElementFromTemplate(
  "span",
  { class: "text-light" },
  importedText.aboutMeGamedevTitle,
  gamedevSection
);
/**/

/* Game dev description */
const gamedevObjectives = createElementFromTemplate(
  "section",
  {
    class: "intro--section intro--objectives--game",
  },
  "",
  aboutMeContent
);

createElementFromTemplate(
  "p",
  { class: "intro--objectives--text" },
  importedText.aboutMeIntroObectivesGame,
  gamedevObjectives
);
/**/
