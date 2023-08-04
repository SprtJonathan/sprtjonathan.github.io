const JSLogo = "src/assets/images/homepage/javascript.svg";
const OCLogo = "src/assets/images/homepage/oc-logo.png";

let birthDate = new Date("02/14/1999");
let ageOperation = Date.now() - birthDate.getTime();
let ageDate = new Date(ageOperation);
let birthYear = ageDate.getUTCFullYear();
const age = Math.abs(birthYear - 1970);

export const homepageText = {
  fr: {
    homepageIntroName: "Jonathan Binot",
    homepageIntroJob: "Développeur web et alternant développeur C# / .NET",
    homepageActivityDescription: `Bonjour, je m'appelle Jonathan Binot, développeur web et actuellement à la recherche d'une alternance en tant que développeur C# / .NET. <br>
      Je dispose d’une expérience de deux ans dans le développement web et plus en comptant le temps dédié à l’apprentissage en autodidacte. J’ai pu réaliser un certain nombre de projets, site vitrine, réseau social d’entreprise, applications et outils en ligne pour les entreprises, en passant par les projets centrés sur l’amélioration du référencement et du SEO de sites web.  <br>  <br>
      
      Passionné par le développement informatique (web, logiciels et jeux vidéo), je suis motivé à développer mes compétences tout en continuant d'apprendre afin d'être en capacité de travailler au mieux sur des projets variés. Je vais prochainement débuter une formation de développeur concepteur logiciel me permettant d'apprendre le langage de Microsoft C# et la plateforme .NET. <br> <br>

      Sur ce site vous trouverez une présentation de mon travail, mon CV ainsi que mon portfolio sur lequel j'ai listé mes réalisations. Pour accéder au menu du site, vous pouvez cliquer sur le bouton flottant en haut à gauche de la page.
      `,
  },
  en: {
    homepageIntroName: "Jonathan Binot",
    homepageIntroJob: "Web Developer and Apprentice C# / .NET Developer",
    homepageActivityDescription: `  Passionate about computer development (web, software, and video games), I am motivated to enhance my skills while continuing to learn to be able to work effectively on diverse projects. I will soon begin a software developer training program to learn the Microsoft language C# and the .NET platform. <br> <br>

    On this website, you will find an overview of my work, my resume, and my portfolio where I have listed the projects I have worked on. To access the site menu, you can click on the floating button at the top left of the page.
    `,
  },
};
