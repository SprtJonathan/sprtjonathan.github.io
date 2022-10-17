const hpBgOne = "./src/assets/images/homepage/homepage-bg-1.jpg";
const hpBgTwoFrame = "./src/assets/images/homepage/homepage-bg-3_frame.png";

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

export { homepageBackground };
