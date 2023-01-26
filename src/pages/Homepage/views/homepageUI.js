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
  { id: "summary", class: "homepage--section homepage--name" },
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
  { class: "homepage--section homepage--name" },
  "",
  homepageContent
);

const summarySectionTextContainer = createElementFromTemplate(
  "div",
  { class: "homepage--inner-text--block" },
  "",
  summarySection
);

createElementFromTemplate(
  "p",
  { class: "text-light homepage--inner-text" },
  importedText.homepageActivityDescription,
  summarySectionTextContainer
);

/**/
