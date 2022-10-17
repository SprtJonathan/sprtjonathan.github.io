import {
  createElementFromTemplate,
  toggleModal,
} from "../../../components/helpers.js";
import Collapsible from "../../../components/Collapsible/Collapsible.js";
import Modal from "../../../components/Modal/Modal.js";
import { resumeHeaderText, resumeContentText } from "./resume_text.js";
const PPCV = "/src/assets/images/resume/PPCV.png";

const fb1 =
  "/src/assets/images/portfolio/photo-editing/facebook/facebook-pp-1.png";
const fb2 =
  "/src/assets/images/portfolio/photo-editing/facebook/facebook-pp-2.png";

const HLA1 = "/src/assets/images/portfolio/gamedev/source-2/hla-1.jpg";
const HLA2 = "/src/assets/images/portfolio/gamedev/source-2/hla-2.jpg";

let importedHeaderText, importedContentText;
const lang = localStorage.getItem("language");
if (lang === "fr") {
  importedHeaderText = resumeHeaderText.fr;
  importedContentText = resumeContentText.fr;
} else {
  importedHeaderText = resumeHeaderText.en;
  importedContentText = resumeContentText.en;
}

const resumeHeader = createElementFromTemplate(
  "section",
  { class: "resume--header", id: "resume-header" },
  "",
  ""
);

const resumeTitleContainer = createElementFromTemplate(
  "div",
  {
    class: "resume--title",
    id: "resume-title",
  },
  "",
  resumeHeader
);

createElementFromTemplate(
  "h1",
  { class: "resume--h1", id: "resume-h1" },
  importedHeaderText.resumeHeaderName,
  resumeTitleContainer
);

const resumeIntroContainer = createElementFromTemplate(
  "div",
  { class: "resume--intro--container" },
  "",
  resumeTitleContainer
);

const profilePicture = createElementFromTemplate(
  "img",
  {
    class: "profile-picture",
    id: "profile-picture",
    src: PPCV,
    height: "92px",
  },
  "",
  resumeIntroContainer
);

const resumeIntroTextContainer = createElementFromTemplate(
  "div",
  { class: "resume--intro--text--container" },
  "",
  resumeIntroContainer
);

createElementFromTemplate(
  "h2",
  { class: "resume--description" },
  importedHeaderText.resumeDescription,
  resumeIntroTextContainer
);

createElementFromTemplate(
  "p",
  { class: "resume--description" },
  importedHeaderText.resumeIntroText,
  resumeIntroTextContainer
);

const resumeHeaderAside = createElementFromTemplate(
  "aside",
  { class: "resume--title--info", id: "resume-aside" },
  "",
  resumeTitleContainer
);

createElementFromTemplate(
  "p",
  {},
  importedHeaderText.resumeIntroAge,
  resumeHeaderAside
);
createElementFromTemplate(
  "p",
  {},
  importedHeaderText.resumeIntroContact,
  resumeHeaderAside
);
createElementFromTemplate(
  "p",
  {},
  importedHeaderText.resumeIntroLinkedin,
  resumeHeaderAside
);
createElementFromTemplate(
  "p",
  {},
  importedHeaderText.resumeIntroDrivingLicense,
  resumeHeaderAside
);

/**/
const resumeContent = createElementFromTemplate(
  "div",
  { class: "resume--content", id: "resume-content" },
  "",
  ""
);
/**/

/**/
const formationSection = createElementFromTemplate(
  "section",
  { id: "formation" },
  "",
  ""
);

createElementFromTemplate(
  "div",
  { class: "formation--description" },
  importedContentText.openclassroomsFrontend,
  formationSection
);

createElementFromTemplate(
  "div",
  { class: "formation--description" },
  importedContentText.openclassroomsWebdev,
  formationSection
);

createElementFromTemplate(
  "div",
  { class: "formation--description" },
  importedContentText.university,
  formationSection
);

createElementFromTemplate(
  "div",
  { class: "formation--description" },
  importedContentText.baccalaureate,
  formationSection
);

const formationCollapsible = Collapsible(
  "formation",
  "",
  importedContentText.formationTitle,
  formationSection
);

resumeContent.append(formationCollapsible);
/**/

/**/
const proExpSection = createElementFromTemplate(
  "section",
  { id: "exp-pro" },
  "",
  ""
);

createElementFromTemplate(
  "div",
  { class: "profesionnal--description" },
  importedContentText.proExpLTDN,
  proExpSection
);

createElementFromTemplate(
  "div",
  { class: "profesionnal--description" },
  importedContentText.proExpPoleEmploi,
  proExpSection
);

createElementFromTemplate(
  "div",
  { class: "profesionnal--description" },
  importedContentText.proExpEpitech,
  proExpSection
);

const proExpCollapsible = Collapsible(
  "pro-exp",
  "",
  importedContentText.professionalExperienceTitle,
  proExpSection
);

resumeContent.append(proExpCollapsible);
/**/

/**/
const skillsSection = createElementFromTemplate(
  "section",
  { id: "skills", class: "skills" },
  "",
  ""
);

/* Computers Skills */
const computerSkillsContainer = createElementFromTemplate(
  "div",
  { class: "skills" },
  importedContentText.computerSkillsContent,
  ""
);

const computerSkillsCollapsible = Collapsible(
  "computers",
  "",
  importedContentText.computerSkillsTitle,
  computerSkillsContainer
);

skillsSection.append(computerSkillsCollapsible);
/**/

/* Soft Skills */
const softSkillsContainer = createElementFromTemplate(
  "div",
  { class: "skills" },
  importedContentText.softSkillsContent,
  ""
);

const softSkillsCollapsible = Collapsible(
  "soft-skills",
  "",
  importedContentText.softSkillsTitle,
  softSkillsContainer
);

skillsSection.append(softSkillsCollapsible);
/**/

/* Languages Skills */
const languagesSkillsContainer = createElementFromTemplate(
  "div",
  { class: "skills" },
  importedContentText.languagesSkillsContent,
  ""
);

const languagesSkillsCollapsible = Collapsible(
  "languages",
  "",
  importedContentText.languagesSkillsTitle,
  languagesSkillsContainer
);

skillsSection.append(languagesSkillsCollapsible);
/**/

const skillsMasterCollapsible = Collapsible(
  "skills",
  "",
  importedContentText.skillsTitle,
  skillsSection
);

resumeContent.append(skillsMasterCollapsible);
/**/

/**/
const notableProjectsSection = createElementFromTemplate(
  "section",
  { id: "projects" },
  "",
  ""
);

createElementFromTemplate(
  "div",
  { class: "profesionnal--description" },
  importedContentText.notableProjectsContent,
  notableProjectsSection
);

const notableProjectsCollapsible = Collapsible(
  "notable-projects",
  "",
  importedContentText.notableProjectsTitle,
  notableProjectsSection
);

resumeContent.append(notableProjectsCollapsible);
/**/

/**/
const hobbiesSection = createElementFromTemplate(
  "section",
  { class: "hobby--section" },
  "",
  ""
);

/* Music Hobby */
const musicContainer = createElementFromTemplate(
  "div",
  { class: "hobby" },
  importedContentText.hobbiesMusicContent,
  ""
);

const musicCollapsible = Collapsible(
  "music",
  "",
  importedContentText.hobbiesMusicTitle,
  musicContainer
);

hobbiesSection.append(musicCollapsible);
/**/

/* Editing Hobby */
const editingContainer = createElementFromTemplate(
  "div",
  { class: "hobby" },
  importedContentText.hobbiesEditingContent,
  ""
);

const editingCollapsible = Collapsible(
  "editing",
  "",
  importedContentText.hobbiesEditingTitle,
  editingContainer
);

const knowMoreEditingModalButton = createElementFromTemplate(
  "a",
  {
    id: "editing-know-more",
    class: "resume--example-modal--button",
    href: "#editing-example",
  },
  importedContentText.knowMoreText,
  editingContainer
);

hobbiesSection.append(editingCollapsible);
/**/

/* Gamedev Hobby */
const videoGamesContainer = createElementFromTemplate(
  "div",
  { class: "hobby" },
  importedContentText.hobbiesGamesContent,
  ""
);

const videoGamesCollapsible = Collapsible(
  "video-games",
  "",
  importedContentText.hobbiesGamesTitle,
  videoGamesContainer
);

const knowMoreGamedevModalButton = createElementFromTemplate(
  "a",
  {
    id: "gamedev-know-more",
    class: "resume--example-modal--button",
    href: "#gamedev-example",
  },
  importedContentText.knowMoreText,
  videoGamesContainer
);

hobbiesSection.append(videoGamesCollapsible);
/**/

const hobbiesMasterCollapsible = Collapsible(
  "hobbies",
  "",
  importedContentText.hobbiesSectionTitle,
  hobbiesSection
);

resumeContent.append(hobbiesMasterCollapsible);
/**/

/**/
const charitySection = createElementFromTemplate("section", {}, "", "");

createElementFromTemplate(
  "div",
  { class: "profesionnal--description" },
  importedContentText.charitySectionContent,
  charitySection
);

const charityCollapsible = Collapsible(
  "charity",
  "",
  importedContentText.charitySectionTitle,
  charitySection
);

resumeContent.append(charityCollapsible);
/**/

/* Know More modal */

const knowMoreEditModalBodyContent = createElementFromTemplate(
  "div",
  { class: "resume--example-modal--content" },
  importedContentText.hobbiesEditingModalContent,
  ""
);

const knowMoreEditImgContainer = createElementFromTemplate(
  "div",
  { class: "resume--example-modal--image--container" },
  "",
  knowMoreEditModalBodyContent
);

createElementFromTemplate(
  "img",
  {
    class: "resume--example-modal--image",
    src: fb1,
  },
  "",
  knowMoreEditImgContainer
);
createElementFromTemplate(
  "img",
  {
    class: "resume--example-modal--image",
    src: fb2,
  },
  "",
  knowMoreEditImgContainer
);

const knowMoreEditModal = Modal(
  "know-more-modal",
  importedContentText.hobbiesEditingModalTitle,
  knowMoreEditModalBodyContent
);
knowMoreEditModal.closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  toggleModal(knowMoreEditModal.htmlCode);
});
resumeContent.append(knowMoreEditModal.htmlCode);

const knowMoreGameModalBodyContent = createElementFromTemplate(
  "div",
  { class: "resume--example-modal--content" },
  importedContentText.hobbiesGamesModalContent,
  ""
);

const knowMoreEditGameContainer = createElementFromTemplate(
  "div",
  { class: "resume--example-modal--image--container" },
  "",
  knowMoreGameModalBodyContent
);

createElementFromTemplate(
  "img",
  {
    class: "resume--example-modal--image",
    src: HLA1,
  },
  "",
  knowMoreEditGameContainer
);

const testContent = createElementFromTemplate("div", {}, "", "");
const testText = createElementFromTemplate("div", {}, "Test", testContent);
const testButton = createElementFromTemplate(
  "button",
  {},
  "Test Click",
  testContent
);
testButton.addEventListener("click", () => {
  console.log("Test");
});

const knowMoreGameModal = Modal(
  "know-more-modal",
  importedContentText.hobbiesGamesModalTitle,
  knowMoreGameModalBodyContent
);
knowMoreGameModal.closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  toggleModal(knowMoreGameModal.htmlCode);
});
resumeContent.append(knowMoreGameModal.htmlCode);

knowMoreEditingModalButton.addEventListener("click", (e) => {
  e.preventDefault();
  toggleModal(knowMoreEditModal.htmlCode, true);
});
knowMoreGamedevModalButton.addEventListener("click", (e) => {
  e.preventDefault();
  toggleModal(knowMoreGameModal.htmlCode, true);
});
/**/

export { resumeHeader, resumeContent };
