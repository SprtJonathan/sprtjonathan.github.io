const JSLogo = "/src/assets/images/homepage/javascript.svg";
const OCLogo = "/src/assets/images/homepage/oc-logo.png";

let birthDate = new Date("02/14/1999");
let ageOperation = Date.now() - birthDate.getTime();
let ageDate = new Date(ageOperation);
let birthYear = ageDate.getUTCFullYear();
const age = Math.abs(birthYear - 1970);

export const aboutMeText = {
  fr: {
    aboutMeIntroName: "Jonathan Binot",
    aboutMeIntroJob:
      "Développeur web Freelance - Spécialisé Frontend - Applications JS",
    aboutMeIntroSummary: "Quelques informations à mon propos",
    aboutMeIntroIntroduction: `Je m'appelle Jonathan Binot, j'ai <span id="age">${age}</span> ans et je
suis titulaire d'un diplôme de développeur web de niveau Bac +2 mais
également de développeur d'applications Javascript
<img src="${JSLogo}" height="18px" /> de niveau Bac +3 obtenus avec
OpenClassrooms <img src="${OCLogo}" height="18px" />.<br /><br />Depuis
tout petit, je suis passionné d'informatique et de jeux vidéo, si bien que
j'ai décidé de me donner les moyens de travailler dans le domaine.
L'informatique étant très vaste, il y a deux disciplines pour lesquelles
j'ai envie de m'investir professionnellement : <br /><br />`,
    aboutMeWebdevTitle: `<mark class="blue-underline text-light">Le dévelop</mark>pement web`,
    aboutMeGamedevTitle: `<mark class="blue-underline text-light">Le dévelop</mark>pement de jeux vidéo`,
    aboutMeIntroObectivesGame: `Motivé pour atteindre mes objectifs, j'ai commencé très tôt à apprendre en
autodidacte, avec mon ordinateur et les logiciels de développement à ma
disposition. J'ai commencé sur FPS Creator (mais cette partie là ne compte
pas vraiment) puis avec l'éditeur de niveaux de Half-Life² en regardant
des tutoriels vidéo en ligne. Les années passant, j'ai commencé à me
diversifier au niveau de mon apprentissage, en découvrant l'Unreal Engine
3 (avec UDK) puis l'Unreal Engine 4.<br /><br />J'ai également été
intéressé par l'apprentissage de différents logiciels de montage photo et
vidéo (comme Photoshop, Sony Vegas, Adobe Premiere etc.), que je continue
à utiliser régulièrement aujourd'hui. <br /><br />
Enfin, avec la sortie de Half-Life: Alyx en VR ainsi que de ses outils de
développement, j'ai découvert le développement sur Source² Engine (qui
possède de fortes similitudes avec son prédécesseur de 2003) cette fois-ci. <br /><br />J'apprécie fortement apprendre de nouvelles
techniques, et découvrir tout ce qu'il est possible de faire avec les
moteurs de jeu modernes.`,
    aboutMeIntroObjectivesWeb: `J'ai découvert le développement web lors
de ma première année à la faculté de Mathématiques-Informatique de Lyon. Le
cursus universitaire ne m'a malheureusement pas plu, mais l'unité
d'enseignement "Introduction aux réseaux et au web" m'a fortement
interessée. Grâce à elle, j'ai découvert le potentiel des langages HTML et
CSS et après un an en tant que salarié dans la salle d'arcade familiale La
Tête dans les Nuages, je me suis donné pour objectif de réaliser un site
web personnel sur lequel se trouverait mon CV ainsi qu'une vitrine de mes
réalisations. J'ai recommencé à apprendre en autodidacte grâce notamment
aux cours gratuits en ligne sur le développement web.
<br />
<br />
Aujourd'hui, vous vous trouvez sur la page d'accueil de ce site, et si
vous avez pris le temps de lire ce texte, je vous en remercie et j'espère
que vous comprenez ma determination à réaliser mes objectifs au travers de
l'alternance.
<br />
<br />
Vous avez maintenant le choix d'accéder à mon CV, à mon portfolio ou à me
contacter directement en cliquant sur l'un des liens du menu en haut de la
page. Bonne visite.`,
  },
  en: {
    aboutMeIntroName: "Jonathan Binot",
    aboutMeIntroJob: "Web developer - Frontend - JS Apps",
    aboutMeIntroSummary: "Some informations about me",
    aboutMeIntroIntroduction: `My name is Jonathan Binot, I'm <span id="age">${age}</span> year old and I
    have a degree in web development with a level of Bachelor + 2, but also a
    degree in web development with a level of Bachelor +3/4 with OpenClassrooms
    <img src="${OCLogo}" height="18px" />.<br /><br />
    Since I was a child, I'm passionate about computer technology and video
    games, that's why I decided to give myself the means to work in the sector.
    Computer tech being a vast domain, there are two disciplins in which I would
    like to invest professionnaly : <br /><br />`,
    aboutMeWebdevTitle: `<mark class="blue-underline text-light">Web</mark> development`,
    aboutMeGamedevTitle: `<mark class="blue-underline text-light">Gam</mark>e development`,
    aboutMeIntroObectivesGame: `Motivated to achieve my goals, I started learning on my own very early, with
    my computer and the software I had at my disposal. I started with FPS
    Creator (but that part doesn't really count) then with the Half-Life² level
    editor by watching video tutorials online. As the years went by, I started
    to learn new things, by discovering Unreal Engine 3 (with UDK) then Unreal
    Engine 4. Motivé pour atteindre mes objectifs, j'ai commencé très tôt à
    apprendre en autodidacte, avec mon ordinateur et les logiciels de
    développement à ma disposition. J'ai commencé sur FPS Creator (mais cette
    partie là ne compte pas vraiment) puis avec l'éditeur de niveaux de
    Half-Life² en regardant des tutoriels vidéo en ligne.
    <br /><br />More recently, I found a passion for virtual reality and I was
    finally able to invest in quality equipment thanks to the job I had found.
    Finally, with the release of Half-Life: Alyx in VR as well as its
    development tools, I discovered the development on Source² Engine (which has
    strong similarities with its predecessor from 2003) this time and I Also
    discovered the basics of virtual reality development on Unreal Engine 4 and
    the basics of the Unity engine less than a month ago. <br /><br />I really
    enjoy learning new techniques, and discovering all that is possible to do
    with modern game engines.`,
    aboutMeIntroObjectivesWeb: `I discovered web development during my first year of
    university at the Mathematics-Computer Science high school of Lyon.
    Unfortunately, I did not like the way the university worked and the
    mathematics course we were learning, but the teaching unit "Introduction to
    networks and web dev" really interested me. Thanks to this, I discovered the
    potential of HTML and CSS and after a year as an employee in the family
    arcade room "La Tête dans les Nuages", I set myself the goal of creating a
    personal website on which would be my resume and a showcase of my
    achievements in the form of a portfolio. I started to learn on my own again
    thanks to the free Openclassrooms lessons in particular.
    <br />
    <br />
    Today you are on the home page of this website, and if you have taken the
    time to read this text, I thank you and I hope you understand my
    determination to achieve my goals through the work-study program.
    <br />
    <br />
    You now have the choice to access my resume, my portfolio or contact me
    directly by clicking on one of the menu links at the top of the page. Enjoy
    your visit.`,
  },
};
