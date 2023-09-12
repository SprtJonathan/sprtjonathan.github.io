const hpBgOne = "/src/assets/images/homepage/aboutMe-bg-1.jpg";
const hpBgTwoFrame = "/src/assets/images/homepage/aboutMe-bg-3_frame.png";

const aboutMeBackground = `
  <div id="aboutMe-background" class="aboutme--background">
  <div id="background-0" class="hidden aboutme--background aboutme--background--bluepurple" style="background-image: url(${hpBgOne})"></div>
  <div id="background-1" class="hidden aboutme--background aboutme--background--darkgrey" style="background-image: url(${hpBgTwoFrame})"></div>
  <div id="background-2" class="hidden aboutme--background aboutme--background--yelloworange"></div>
  <div id="background-3" class="hidden aboutme--background aboutme--background--greenblue"></div>
  <video id="background-4" class="hidden" autoplay muted loop id="myVideo">
  <source class="mp4-source" autoplay="true" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWI3ZHdxdWhkMjJxbnlkdTY3cW8xdWx0eGZld2VrOG95dDExbDE4ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Z5DdstajZxFOqmZ5TF/giphy.mp4">
  </video>
  <div id="background-5" class="aboutme--background" style="background-image: url(${hpBgOne})"></div>
  </div>
  `;

export { aboutMeBackground };
