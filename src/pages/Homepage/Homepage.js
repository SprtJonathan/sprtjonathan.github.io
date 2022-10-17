import { homepageContent } from "./views/homepageUI.js";

const hpBgOne = "src/assets/images/homepage/homepage-bg-1.jpg";
const hpBgTwoFrame = "src/assets/images/homepage/homepage-bg-3_frame.png";

const homepageBackground = `
  <div id="homepage-background" class="homepage--background">
  <div id="background-1" class="hidden homepage--background homepage--background--bluepurple" style="background-image: url(${hpBgOne})"></div>
  <div id="background-2" class="hidden homepage--background homepage--background--darkgrey" style="background-image: url(${hpBgTwoFrame})"></div>
  <div id="background-3" class="hidden homepage--background homepage--background--yelloworange"></div>
  <div id="background-4" class="hidden homepage--background homepage--background--greenblue"></div>
  <video id="background-5" class="hidden" autoplay muted loop id="myVideo">
  <source class="mp4-source" autoplay="true" src="https://thumbs.gfycat.com/GrossPaltryIberianlynx-mobile.mp4">
  </video>
  <div id="background-6" class="homepage--background" style="background-image: url(${hpBgOne})"></div>
  </div>
  `;

export function Homepage() {
  const homepage = document.createElement("main");
  homepage.setAttribute("class", "homepage");
  homepage.setAttribute("id", "homepage");

  homepage.appendChild(homepageContent);

  homepage.innerHTML += homepageBackground;

  let backgroundIndex = 0;

  function changeBackground() {
    const windowHeight = window.innerHeight;
    let newBackgroundIndex = 0;

    if (windowHeight >= window.pageYOffset) {
      document.getElementById("background-1").className =
        "homepage--background homepage--background--image";
      document.getElementById("background-2").className =
        "hidden homepage--background homepage--background--image";
      document.getElementById("background-3").className =
        "hidden homepage--background homepage--background--image";
      document.getElementById("background-4").className =
        "hidden homepage--background homepage--background--image";
      document.getElementById("background-5").className = "hidden";
      document.getElementById("background-6").className =
        "hidden homepage--background";
    } else if (
      windowHeight * 3 >= window.pageYOffset &&
      window.pageYOffset >= windowHeight
    ) {
      document.getElementById("background-1").className =
        "hidden homepage--background homepage--background--image";
      document.getElementById("background-2").className =
        "homepage--background homepage--background--image";
      document.getElementById("background-3").className =
        "hidden homepage--background homepage--background--image";
      document.getElementById("background-4").className =
        "hidden homepage--background homepage--background--image";
      document.getElementById("background-5").className = "hidden";
      document.getElementById("background-6").className =
        "hidden homepage--background";
    } else if (
      windowHeight * 5 >= window.pageYOffset &&
      window.pageYOffset >= windowHeight * 3
    ) {
      document.getElementById("background-1").className =
        "hidden homepage--background homepage--background--image";
      document.getElementById("background-2").className =
        "hidden homepage--background homepage--background--image";
      document.getElementById("background-3").className =
        "hidden homepage--background homepage--background--image";
      document.getElementById("background-4").className =
        "hidden homepage--background homepage--background--image";
      document.getElementById("background-5").className =
        "homepage--background";
      document.getElementById("background-6").className =
        "hidden homepage--background";
    }

    if (backgroundIndex !== newBackgroundIndex) {
      backgroundIndex = newBackgroundIndex;
      display();
    }
  }

  document.addEventListener("scroll", function () {
    if (window.location.pathname.split("/")[1] == "") {
      changeBackground();
    }
  });

  return homepage;
}
