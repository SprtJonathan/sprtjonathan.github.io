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
    homepageIntroJob:
      "Développeur web Freelance - Spécialisé Frontend - Applications JS",
    homepageActivityDescription: `Bonjour, je m'appelle Jonathan Binot, développeur web freelance. Mon objectif est d'aider les entreprises à développer leur présence en ligne grâce à la création de sites web et outils web personnalisés selon leurs besoins. <br>
      Je dispose d’une expérience de deux ans dans le développement web et plus en comptant le temps dédié à l’apprentissage en autodidacte. J’ai pu réaliser un certain nombre de projets, site vitrine, réseau social d’entreprise, applications et outils en ligne pour les entreprises, en passant par les projets centrés sur l’amélioration du référencement et du SEO de sites web.  <br>  <br>
      
      Ma priorité et de répondre convenablement aux besoins des personnes faisant appel à mes services en étant à l’écoute des demandes de mes clients. Pour ce faire, je tente de m’organiser au mieux lors d’un projet afin de pouvoir produire un travail de qualité et en adéquation avec les demandes.  <br> <br>
      
      Parce que chaque projet est unique, je peux vous proposer de nombreuses options de personnalisation adaptées au votre. Nous abordons tous les points que vous souhaitez voir en place pour votre projet et nous discutons de leur faisabilité. Si nécessaire, je peux vous apporter quelques conseils et propositions en me basant sur mes expériences passées et mon expertise dans le domaine, dans le but de vous proposer un projet qui réponde au mieux à vos besoins. <br> <br>
      
      Si vous êtes à la recherche d'un développeur web professionnel, passionné et dévoué pour votre prochain projet, n'hésitez pas à me contacter. Je serais heureux de discuter de vos besoins et de voir comment je peux vous aider à réussir.
      `,
  },
  en: {
    homepageIntroName: "Jonathan Binot",
    homepageIntroJob: "Web developer - Frontend - JS Apps",
    homepageActivityDescription: `Hello, my name is Jonathan Binot, I am a freelancer web developer. My goal is to help companies develop their online presence through the creation of websites and web tools customized to their needs. <br>
    I have two years of experience in web development and more if we include the time dedicated to self-taught learning. I was able to achieve a certain number of projects, ranging from showcase site, corporate social network, applications and online tools for companies, to projects centered on improving the referencing and SEO of websites. <br> <br>
    
    My priority is to respond appropriately to the needs of people needing my services by being attentive to the requests of my clients. To do this, I try to organize myself as well as possible during a project in order to be able to produce quality work that meets the demands. <br> <br>
    
    Because each project is unique, I can offer you many customization options adapted to yours. We address all the points you want to see in place for your project and we discuss their feasibility. If necessary, I can provide you with some advice and proposals based on my past experiences and my expertise in the field, with the aim of offering you a project that best meets your needs. <br> <br>
    
    If you are looking for a professional, passionate and dedicated web developer for your next project, do not hesitate to contact me. I would be happy to discuss your needs and see how I can help you succeed.`,
  },
};
