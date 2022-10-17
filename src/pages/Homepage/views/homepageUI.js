import { createElementFromTemplate } from "../../../components/helpers.js";

import { homepageText } from "./homepage_text.js";

const webdevImage = "./src/assets/images/homepage/webdev.png";
const gamedevImage = "./src/assets/images/homepage/gamedev.png";

const lang = localStorage.getItem("language");

let importedText;

if (lang === "fr") {
  importedText = homepageText.fr;
} else {
  importedText = homepageText.en;
}

export const homepageContent = createElementFromTemplate(
  "div",
  { class: "homepage--content", id: "homepage-content" },
  "",
  ""
);

/**/
const summaryIntroNameSection = createElementFromTemplate(
  "section",
  { id: "summary", class: "intro--section intro--name" },
  "",
  homepageContent
);

const introTitleBlock = createElementFromTemplate(
  "div",
  { class: "homepage--title--block" },
  "",
  summaryIntroNameSection
);

const introTitle = createElementFromTemplate(
  "h1",
  { class: "text-light" },
  "",
  introTitleBlock
);

createElementFromTemplate(
  "mark",
  { class: "text-light blue-underline" },
  importedText.homepageIntroName,
  introTitle
);

createElementFromTemplate(
  "h2",
  { class: "text-light" },
  importedText.homepageIntroJob,
  introTitleBlock
);
/**/

/**/
const summarySection = createElementFromTemplate(
  "section",
  { class: "intro--section intro--summary" },
  "",
  homepageContent
);

const summarySectionTextContainer = createElementFromTemplate(
  "div",
  { class: "intro--inner-text--block" },
  "",
  summarySection
);

createElementFromTemplate(
  "p",
  { class: "intro--inner-text" },
  importedText.homepageIntroSummary,
  summarySectionTextContainer
);
/**/

/**/
const introSection = createElementFromTemplate(
  "section",
  {
    class: "intro--section intro--introduction",
    style: "background-color: #1e1e1e",
  },
  "",
  homepageContent
);

createElementFromTemplate(
  "p",
  { class: "intro--inner-text" },
  importedText.homepageIntroIntroduction,
  introSection
);
/**/

/**/
const webdevSection = createElementFromTemplate(
  "section",
  {
    class: "intro--section intro--type webdev",
  },
  "",
  homepageContent
);

createElementFromTemplate(
  "span",
  { class: "text-light" },
  importedText.homepageWebdevTitle,
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
/**/

/**/
const gamedevSection = createElementFromTemplate(
  "section",
  {
    class: "intro--section intro--type gamedev",
  },
  "",
  homepageContent
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
  importedText.homepageGamedevTitle,
  gamedevSection
);
/**/

/**/
const gamedevObjectives = createElementFromTemplate(
  "section",
  {
    class: "intro--section intro--objectives--game",
  },
  "",
  homepageContent
);

createElementFromTemplate(
  "p",
  { class: "intro--objectives--text" },
  importedText.homepageIntroObectivesGame,
  gamedevObjectives
);
/**/

/**/
const webdevObjectives = createElementFromTemplate(
  "section",
  {
    class: "intro--section intro--objectives--web",
  },
  "",
  homepageContent
);

createElementFromTemplate(
  "p",
  { class: "intro--objectives--text" },
  importedText.homepageIntroObjectivesWeb,
  webdevObjectives
);
/**/
