import { aboutMeContent } from "./views/aboutMeUI.js";

const hpBgOne = "/src/assets/images/homepage/homepage-bg-1.jpg";
const hpBgTwoFrame = "/src/assets/images/homepage/homepage-bg-3_frame.png";

const aboutMeBackground = `
  <div id="aboutMe-background" class="aboutme--background">
  <div id="background-1" class="aboutme--background aboutme--background--darkgrey" style="background-image: url(${hpBgTwoFrame})"></div>
  <div id="background-2" class="hidden aboutme--background aboutme--background--yelloworange"></div>
  <div id="background-3" class="hidden aboutme--background aboutme--background--greenblue"></div>
  <video id="background-4" class="hidden" autoplay muted loop id="myVideo">
  <source class="mp4-source" autoplay="true" src="https://thumbs.gfycat.com/GrossPaltryIberianlynx-mobile.mp4">
  </video>
  <div id="background-5" class="aboutme--background" style="background-image: url(${hpBgOne})"></div>
  </div>
  `;

export function AboutMe() {
  const aboutMe = document.createElement("main");
  aboutMe.setAttribute("class", "aboutme");
  aboutMe.setAttribute("id", "aboutMe");

  aboutMe.appendChild(aboutMeContent);

  aboutMe.innerHTML += aboutMeBackground;

  let backgroundIndex = 0;

  function changeBackground() {
    const windowHeight = window.innerHeight;
    let newBackgroundIndex = 0;
    if (window.pageYOffset <= windowHeight * 2) {
      console.log("haha")
      document.getElementById("background-1").className =
        "aboutme--background aboutme--background--image";
      document.getElementById("background-2").className =
        "hidden aboutme--background aboutme--background--image";
      document.getElementById("background-3").className =
        "hidden aboutme--background aboutme--background--image";
      document.getElementById("background-4").className =
        "hidden aboutme--background aboutme--background--image";
      document.getElementById("background-5").className = "hidden";
    } else {
      console.log("hoho")
      document.getElementById("background-1").className =
        "hidden aboutme--background aboutme--background--image";
      document.getElementById("background-2").className =
        "hidden aboutme--background aboutme--background--image";
      document.getElementById("background-3").className =
        "hidden aboutme--background aboutme--background--image";
      document.getElementById("background-4").className =
        "aboutme--background aboutme--background--image";
      document.getElementById("background-5").className = "hidden";
    }

    if (backgroundIndex !== newBackgroundIndex) {
      backgroundIndex = newBackgroundIndex;
      display();
    }
  }

  document.addEventListener("scroll", function () {
    if (window.location.pathname.split("/about-me/")[1] == "") {
      console.log(window.pageYOffset)
      console.log(window.innerHeight)
      changeBackground();
    }
  });

  return aboutMe;
}
