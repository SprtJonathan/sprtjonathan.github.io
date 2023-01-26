import { homepageContent } from "./views/homepageUI.js";

const hpBgOne = "src/assets/videos/WebBackground.webm";

const homepageBackground = `
  <div id="homepage-background" class="homepage--background"> 
    <video id="background-5" class="homepage--background--video" autoplay muted loop id="myVideo">
      <source class="mp4-source" autoplay="true" src=${hpBgOne}>
    </video>
  </div>
  `;

export function Homepage() {
  const homepage = document.createElement("main");
  homepage.setAttribute("class", "homepage");
  homepage.setAttribute("id", "homepage");

  homepage.appendChild(homepageContent);

  homepage.innerHTML += homepageBackground;

  return homepage;
}
