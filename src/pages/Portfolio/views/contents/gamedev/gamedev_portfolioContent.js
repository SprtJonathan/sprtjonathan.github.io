import {
  createElementFromTemplate,
  createMultipleMediaSection,
} from "../../../../../components/helpers.js";
import Carousel from "../../../../../components/Carousel/Carousel.js";
import gamedevText from "./gamedev_text.js";

const HLA1 = "/src/assets/images/portfolio/gamedev/source-2/hla-1.jpg";
const HLA2 = "/src/assets/images/portfolio/gamedev/source-2/hla-2.jpg";
const HLA3 = "/src/assets/images/portfolio/gamedev/source-2/hla-3.jpg";
const HLA4 = "/src/assets/images/portfolio/gamedev/source-2/hla-4.jpg";
const HLA5 = "/src/assets/images/portfolio/gamedev/source-2/hla-5.jpg";
const HLA6 = "/src/assets/images/portfolio/gamedev/source-2/hla-6.jpg";

const projectUdemyVideo = "/src/assets/videos/portfolio/unreal/udemy-project.mp4";
const poldekVideo = "/src/assets/videos/portfolio/unreal/poldek.mp4";

const blender1 = "/src/assets/images/portfolio/gamedev/blender/jonathan_player-model.gif";
const blender2 = "/src/assets/images/portfolio/gamedev/blender/poldek.png";
const blender3 = "/src/assets/images/portfolio/gamedev/blender/vending_machine.png";
const blender4 = "/src/assets/images/portfolio/gamedev/blender/trainstation_wagons.png";

const lang = localStorage.getItem("language");
let gamedevTitle, importedGamedevText;
if (lang === "fr") {
  gamedevTitle = gamedevText.fr.gamedevTitle;
  importedGamedevText = gamedevText.fr;
} else {
  gamedevTitle = gamedevText.en.gamedevTitle;
  importedGamedevText = gamedevText.en;
}

const gamedevContent = createElementFromTemplate(
  "div",
  { id: "gamedev-content", class: "portfolio--modal-content" },
  "",
  ""
);

createElementFromTemplate(
  "p",
  {},
  importedGamedevText.modalIntroText,
  gamedevContent
);

createElementFromTemplate("hr", {}, "", gamedevContent);

createElementFromTemplate(
  "h3",
  {},
  importedGamedevText.firstCategoryName,
  gamedevContent
);

createElementFromTemplate(
  "p",
  {},
  importedGamedevText.firstCategoryDescription,
  gamedevContent
);

const carouselGamesMedias = [
  {
    type: "iframe",
    title: "Half-Life Alyx (VR) - Intro",
    link: "https://www.youtube.com/embed/Z2JupOt6zGw",
    description: "",
  },
  {
    type: "image",
    title: "Half-Life Alyx (VR) - Intro",
    link: HLA1,
    description: "",
  },
  {
    type: "image",
    title: "Half-Life Alyx (VR) - Intro",
    link: HLA2,
    description: "",
  },
  {
    type: "image",
    title: "Half-Life Alyx (VR) - Intro",
    link: HLA3,
    description: "",
  },
  {
    type: "image",
    title: "Half-Life Alyx (VR) - Intro",
    link: HLA4,
    description: "",
  },
  {
    type: "image",
    title: "Half-Life Alyx (VR) - Intro",
    link: HLA5,
    description: "",
  },
  {
    type: "image",
    title: "Half-Life Alyx (VR) - Intro",
    link: HLA6,
    description: "",
  },
];

const carouselGames = Carousel("source-2", carouselGamesMedias, "");

gamedevContent.append(carouselGames);

createElementFromTemplate("hr", {}, "", gamedevContent);

createElementFromTemplate(
  "h3",
  {},
  importedGamedevText.secondCategoryName,
  gamedevContent
);

createElementFromTemplate(
  "p",
  {},
  importedGamedevText.secondCategoryDescription,
  gamedevContent
);

const carouselUnrealMedias = [
  {
    type: "iframe",
    title: importedGamedevText.secondCategoryExamplesTitles[0],
    link: "https://www.youtube.com/embed/XE7vBEb5Bfs",
    description: importedGamedevText.secondCategoryExamplesDescriptions[0],
  },
  {
    type: "iframe",
    title: importedGamedevText.secondCategoryExamplesTitles[1],
    link: "https://www.youtube.com/embed/fBMcEnJWfec",
    description: importedGamedevText.secondCategoryExamplesDescriptions[1],
  },
];

const carouselUnreal = Carousel("unreal", carouselUnrealMedias, "");

gamedevContent.append(carouselUnreal);

createElementFromTemplate("hr", {}, "", gamedevContent);

createElementFromTemplate(
  "h3",
  {},
  importedGamedevText.thirdCategoryName,
  gamedevContent
);

createElementFromTemplate(
  "p",
  {},
  importedGamedevText.thirdCategoryDescription,
  gamedevContent
);

const carouselBlenderMedias = [
  {
    type: "image",
    title: importedGamedevText.thirdCategoryExamplesTitles[0],
    link: blender1,
    description: importedGamedevText.thirdCategoryExamplesDescription[0],
  },
  {
    type: "image",
    title: importedGamedevText.thirdCategoryExamplesTitles[1],
    link: blender2,
    description: importedGamedevText.thirdCategoryExamplesDescription[1],
  },
  {
    type: "image",
    title: importedGamedevText.thirdCategoryExamplesTitles[2],
    link: blender3,
    description: importedGamedevText.thirdCategoryExamplesDescription[2],
  },
  {
    type: "image",
    title: importedGamedevText.thirdCategoryExamplesTitles[3],
    link: blender4,
    description: importedGamedevText.thirdCategoryExamplesDescription[3],
  },
];

const carouselBlender = Carousel("source-2", carouselBlenderMedias, "");

gamedevContent.append(carouselBlender);

createElementFromTemplate(
  "div",
  { class: "spacer--vertical--medium" },
  "",
  gamedevContent
);
export { gamedevTitle, gamedevContent };
