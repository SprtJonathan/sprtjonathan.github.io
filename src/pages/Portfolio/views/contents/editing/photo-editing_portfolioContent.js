import { createElementFromTemplate } from "../../../../../components/helpers.js";
import Carousel from "../../../../../components/Carousel/Carousel.js";
import photoEditingText from "./photo-editing_text.js";

/* Facebook pictures */
const fb1 =
  "/src/assets/images/portfolio/photo-editing/facebook/facebook-pp-1.png";
const fb2 =
  "/src/assets/images/portfolio/photo-editing/facebook/facebook-pp-2.png";
const fb3 =
  "/src/assets/images/portfolio/photo-editing/facebook/facebook-pp-3.png";
const fbBanner1 =
  "/src/assets/images/portfolio/photo-editing/facebook/facebook-banner-1.png";
const fbBanner2 =
  "/src/assets/images/portfolio/photo-editing/facebook/facebook-banner-2.png";

/* StreamKit pictures */
const streamKit1 =
  "/src/assets/images/portfolio/photo-editing/stream-kit/stream-kit-1.png";
const streamKit2 =
  "/src/assets/images/portfolio/photo-editing/stream-kit/stream-kit-2.png";

/* Logos pictures */
const logoDDP = "/src/assets/images/portfolio/photo-editing/logos/ddp-logo.png";
const logoSeehna =
  "/src/assets/images/portfolio/photo-editing/logos/seehna-logo.png";
const logoSpart =
  "/src/assets/images/portfolio/photo-editing/logos/spart-logo.png";
const logoHybridus =
  "/src/assets/images/portfolio/photo-editing/logos/hybridus-logo.png";
const logoRyzer =
  "/src/assets/images/portfolio/photo-editing/logos/ryzer-logo.png";
const logo1stin =
  "/src/assets/images/portfolio/photo-editing/logos/1stin-logo.png";

/* Company pictures */
const companyLogo1 =
  "/src/assets/images/portfolio/photo-editing/company/company-logo-1.png";
const companyLogo2 =
  "/src/assets/images/portfolio/photo-editing/company/company-logo-2.png";

const lang = localStorage.getItem("language");
export let photoEditingTitle, importedPhotoEditingText;
if (lang === "fr") {
  photoEditingTitle = photoEditingText.fr.photoEditingTitle;
  importedPhotoEditingText = photoEditingText.fr;
} else {
  photoEditingTitle = photoEditingText.en.photoEditingTitle;
  importedPhotoEditingText = photoEditingText.en;
}

export const photoEditingContent = createElementFromTemplate(
  "div",
  { id: "photoEditing-content", class: "portfolio--modal-content" },
  "",
  ""
);

createElementFromTemplate(
  "p",
  {},
  importedPhotoEditingText.modalIntroText,
  photoEditingContent
);

createElementFromTemplate("hr", {}, "", photoEditingContent);

const facebookPpSection = createElementFromTemplate(
  "div",
  {},
  "",
  photoEditingContent
);

createElementFromTemplate(
  "h3",
  {},
  importedPhotoEditingText.facebookPpTitle,
  facebookPpSection
);

const carouselFacebookMedias = [
  {
    type: "image",
    title: "",
    link: fb1,
    description: "",
  },
  {
    type: "image",
    title: "",
    link: fb2,
    description: "",
  },
  {
    type: "image",
    title: "",
    link: fb3,
    description: "",
  },
  {
    type: "image",
    title: "",
    link: fbBanner1,
    description: "",
  },
  {
    type: "image",
    title: "",
    link: fbBanner2,
    description: "",
  },
];

const facebookCarousel = Carousel("streamKit", carouselFacebookMedias, "");

facebookPpSection.append(facebookCarousel);

createElementFromTemplate(
  "p",
  {},
  importedPhotoEditingText.facebookPpText,
  facebookPpSection
);

createElementFromTemplate("hr", {}, "", photoEditingContent);

const streamKitSection = createElementFromTemplate(
  "div",
  {},
  "",
  photoEditingContent
);

createElementFromTemplate(
  "h3",
  {},
  importedPhotoEditingText.streamKitTitle,
  streamKitSection
);

const carouselStreamKitMedias = [
  {
    type: "image",
    title: "",
    link: streamKit1,
    description: "",
  },
  {
    type: "image",
    title: "",
    link: streamKit2,
    description: "",
  },
];

const streamKitCarousel = Carousel("streamKit", carouselStreamKitMedias, "");

streamKitSection.append(streamKitCarousel);

createElementFromTemplate(
  "p",
  {},
  importedPhotoEditingText.streamKitText,
  streamKitSection
);

createElementFromTemplate("hr", {}, "", photoEditingContent);

const logosSection = createElementFromTemplate(
  "div",
  {},
  "",
  photoEditingContent
);

createElementFromTemplate(
  "h3",
  {},
  importedPhotoEditingText.logosTitle,
  logosSection
);

const carouselLogosMedias = [
  {
    type: "image",
    title: "",
    link: logoDDP,
    description: "",
  },
  {
    type: "image",
    title: "",
    link: logoSeehna,
    description: "",
  },
  {
    type: "image",
    title: "My logo",
    link: logoSpart,
    description: "",
  },
  {
    type: "image",
    title: "Discord bot logo",
    link: logoHybridus,
    description: "",
  },
  {
    type: "image",
    title: "",
    link: logoRyzer,
    description: "",
  },
  {
    type: "image",
    title: "",
    link: logo1stin,
    description: "",
  },
];

const logosCarousel = Carousel("streamKit", carouselLogosMedias, "");

logosSection.append(logosCarousel);

createElementFromTemplate(
  "p",
  {},
  importedPhotoEditingText.logosText,
  logosSection
);

createElementFromTemplate("hr", {}, "", photoEditingContent);

const companySection = createElementFromTemplate(
  "div",
  {},
  "",
  photoEditingContent
);

createElementFromTemplate(
  "h3",
  {},
  importedPhotoEditingText.companyLogoTitle,
  companySection
);

const carouselCompanyMedias = [
  {
    type: "image",
    title: "",
    link: companyLogo1,
    description: "",
  },
  {
    type: "image",
    title: "",
    link: companyLogo2,
    description: "",
  },
];

const companyCarousel = Carousel("streamKit", carouselCompanyMedias, "");

companySection.append(companyCarousel);

createElementFromTemplate(
  "p",
  {},
  importedPhotoEditingText.companyLogoText,
  companySection
);

createElementFromTemplate(
  "div",
  { class: "spacer--vertical--medium" },
  "",
  photoEditingContent
);
