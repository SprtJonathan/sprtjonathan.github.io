const webdevText = {
  fr: {
    modalTitle: "Développement web",
    modalIntroText: `Durant mes deux formations avec OpenClassrooms (développeur web et développeur d'applications JS et React), 
    j'ai pu réaliser de nombreux projets, en voici la liste`,
    firstFormationTitle: `Développeur Web : `,
    webdevLinks: [
      "https://github.com/SprtJonathan/JonathanBinot_2_17112020",
      "https://github.com/SprtJonathan/JonathanBinot_3_14122020",
      "https://github.com/SprtJonathan/JonathanBinot_4_30012021",
      "https://github.com/SprtJonathan/JonathanBinot_5_25022021",
      "https://github.com/SprtJonathan/JonathanBinot_6_04042021",
      "https://github.com/SprtJonathan/JonathanBinot_7_28042021",
    ],
    webdevTitles: [
      "Transformez une maquette en site web avec HTML & CSS",
      "Dynamisez une page web avec des animations CSS",
      "Optimisez un site web existant",
      "Construisez un site e-commerce en JavaScript",
      "Construisez une API sécurisée pour une application d'avis gastronomiques",
      "Créez un réseau social d’entreprise",
    ],
    secondFormationTitle: `Développeur Front-End / Développeur d'applications React Javascript : `,
    frontendLinks: [
      "https://github.com/SprtJonathan/JonathanBinot_4_27092021",
      "https://github.com/SprtJonathan/JonathanBinot_6_15102021",
      "https://github.com/SprtJonathan/JonathanBinot_7_01122021",
      "https://github.com/SprtJonathan/JonathanBinot_9_14012022",
      "https://github.com/SprtJonathan/JonathanBinot_10_25022022",
      "https://github.com/SprtJonathan/JonathanBinot_11_01042022",
      "https://github.com/SprtJonathan/JonathanBinot_12_25042022",
      "https://github.com/SprtJonathan/JonathanBinot_13_23052022",
      "https://github.com/SprtJonathan/JonathanBinot_2_17112020",
    ],
    frontendTitles: [
      "Créez une landing page avec Javascript",
      "Créez un site accessible pour une plateforme de photographes",
      "Développez un algorithme de recherche en JavaScript",
      "Débuggez et testez un SaaS RH",
      "Définissez les besoins pour une app de soutien scolaire",
      "Développez une application Web avec React et React Router",
      "Développez un tableau de bord d'analytics avec React",
      "Utilisez une API pour un compte utilisateur bancaire avec React",
      "Faites passer une librairie jQuery vers React",
    ],
    personalProjectFailed: `Je me suis également essayé à des projets plus personnels. Par exemple, en souhaitant retravailler mon site web personnel, j'ai débuté un projet que j'avais sobrement nommé <a class="link" href="https://github.com/SprtJonathan/BasicJS">BasicJS</a> 
    et dont le but était de créer un projet de type starter pour tous mes projets web futurs. Je souhaitais faire en sorte de rendre possible la réutilisation de composants sans devoir réécrire leur code, à la manière d'un framework de type React/Vue, mais le tout en JS Vanilla.`,
    personalProjectRebooted: `J'ai récemment recréé un projet du même type mais sans utiliser ce système de composants que je n'avais pas réussi à rendre viable à ce moment là. Ce projet, nommé JS Project Base 
    permet, comme son nom l'indique, de débuter un projet plus rapidement. Il contient une base de projet avec un index.html, un index.js contenant une simple fonction permettant de faire tourner le logo JS au clic, une base de CSS organisée à la manière de SASS avec un fichier maître 
    important le code de tous les fichiers dépendants, ceci afin de mieux organiser l'espace de travail du style et d'optimiser au mieux le code en facilitant la cohérence stylistique des pages et en évitant de réécrire du code déjà existant sur des pages précédentes. Car après tout : 
    <blockquote>Do not repeat yourself*</blockquote>`,
    jsBaseTitle: `<a class="link" href="https://github.com/SprtJonathan/js-project-base">JS Project Base</a>`,
    administrativeManagerDescription: `Enfin, je travaille actuellement pendant mon temps libre sur un autre projet, débuté grâce à mon starter pack d'ailleurs. Il s'agit d'un outil en ligne permettant de créer
    un formulaire avec des champs personnalisables puis de remplir ces champs et de retrouver les données entrées dans un tableau situé sur une autre page. 
    L'objectif est de proposer un outil simple et complet afin de pouvoir effectuer des tâches administratives simples et de façon intuitive : Création de tableaux (avec fonctionnalité de recherche et de tri), exportation des données, importation de données pré-existantes, 
    exportation du code html du formulaire créé afin de simplifier la création de formulaires pour des projets de site web, création de sondages avec affichage et exploitation des résulats, formulaires de type Google Form. L'idéal serait de pouvoir rendre cet outil 
    accesible au plus grand nombre en proposant une interface simple et compréhensible, la possibilité pour chaque utilisateur de créer une instance et de la sauvegarder (et aussi de restreindre l'accès à une instance personnelle). <br/>
    Vous pouvez explorer le site web grâce à la fenêtre intégrée ci-dessous. <br/>
    `,
    administrativeManagerTitle: `<a class="link" href="https://github.com/SprtJonathan/AdministrativeManager">Administrative Manager</a>`,
    administrativeManagerToggleButton: "Lancer la démo",
    administrativeManagerExitButton: "Quitter la démo",
    echangrDescription: `Depuis mi-mars 2023, en parallèle de ma recherche de mission pour mon auto-entreprise, je travaille sur un projet de petit réseau social codé avec Next.js car je souhaitais apprende ce framework. L'objectif était initialement de créer un site web simple permettant aux utilisateurs connectés avec des services comme Discord, de publier 
    des posts accompagnés d'images. Les autres utilisateurs auraient enusite pu les commenter et réagir aux posts. Au fur et à mesure de l'avancement du projet, je me suis finalement orienté vers un service de gestion d'utilisateurs plus classique avec une inscription au site. En plus de Next.js 
    le projet est déployé sur Vercel, la base de données est gérée par postgreSQL sur un service nommé Aiven, les images envoyées par les utilisateurs sont stockées dans le cloud grâce à Cloudinary, les emails de confirmation sont envoyés grâce à SendInBlue, les mots de passes sécurisés avec bcrypt et les données de connexion sécurisées avec JWT. <br/><br/>
    
    Ce projet est probablement le plus important que j'ai pu réaliser à ce jour car il regroupe les compétences que j'ai pu apprendre pendant mes deux formations (développement front et back).<br/> <br/>
    
    Une autre particularité de ce projet est que je l'ai réalisé en "collaboration" avec l'outil d'openAI: ChatGPT (3 et 4). En effet, les technologies d'intelligence artificielles et LLM (Large Language Models) étant de plus en plus développés et aboutis, ils prendront très probablement une place 
    de plus en plus importante tant pour les développeurs que les consommateurs. Je me suis donc dit qu'il valait mieux apprendre à correctement se servir de ces outils formidables qui seront probablement omniprésents à l'avenir dans le monde du développement. Malgré tout, ChatGPT n'a pas toujours été 
    la solution à tous les obstacles rencontrés au cours de ce projet. En effet, le problème de cet outil est qu'il dépend d'OpenAI (et des limitations d'utilisation) mais également qu'il n'a pas non plus réponse à tout. Il m'a par exemple plutôt desservi lors du développement de certains aspects de la fonctionnalité d'envoi 
    d'images au site. À de nombreuses reprises, j'ai dû résoudre certains problèmes par moi même. <br/><br/>
    Ainsi dans la réalisation de ce projet, ChatGPT a principalement été un atout qui m'a permis de résoudre certains problèmes rencontrés et d'accélérer le développment en me permettant de créer certainses fonctionnalités redondantes plus simplement puis de déployer le projet, le tout, en un peu plus d'un mois et demi.<br/>
    Vous pouvez consulter le site ci-dessous: `,
    echangrTitle: `<a class="link" href="https://e-changr.vercel.app/">E-ChangR</a>`,
    echangrToggleButton: "Lancer la démo",
    echangrExitButton: "Quitter la démo",
    developperMotto:
      "*Ne vous répétez pas : une des philosophies principales du développeur.",
  },
  en: {
    modalTitle: "Web development",
    modalIntroText: `During my two trainings with OpenClassrooms (web developer and developer of JS and React applications),
    I was able to carry out many projects, here is the list`,
    firstFormationTitle: `Web developer : `,
    webdevLinks: [
      "https://github.com/SprtJonathan/JonathanBinot_2_17112020",
      "https://github.com/SprtJonathan/JonathanBinot_3_14122020",
      "https://github.com/SprtJonathan/JonathanBinot_4_30012021",
      "https://github.com/SprtJonathan/JonathanBinot_5_25022021",
      "https://github.com/SprtJonathan/JonathanBinot_6_04042021",
      "https://github.com/SprtJonathan/JonathanBinot_7_28042021",
    ],
    webdevTitles: [
      "Turn a model into a website with HTML & CSS",
      "Energize a web page with CSS animations",
      "Optimize an existing website",
      "Build an e-commerce site in JavaScript",
      "Build a secure API for a food reviews app",
      "Create a corporate social network",
    ],
    secondFormationTitle: `Front-End developer / React Javascript apps developer : `,
    frontendLinks: [
      "https://github.com/SprtJonathan/JonathanBinot_4_27092021",
      "https://github.com/SprtJonathan/JonathanBinot_6_15102021",
      "https://github.com/SprtJonathan/JonathanBinot_7_01122021",
      "https://github.com/SprtJonathan/JonathanBinot_9_14012022",
      "https://github.com/SprtJonathan/JonathanBinot_10_25022022",
      "https://github.com/SprtJonathan/JonathanBinot_11_01042022",
      "https://github.com/SprtJonathan/JonathanBinot_12_25042022",
      "https://github.com/SprtJonathan/JonathanBinot_13_23052022",
      "https://github.com/SprtJonathan/JonathanBinot_2_17112020",
    ],
    frontendTitles: [
      "Create a landing page with JavaScript",
      "Create an accessible site for a platform of photographers",
      "Develop a search algorithm in JavaScript",
      "Debug and test an HR SaaS",
      "Define the needs for a tutoring app",
      "Develop a web application with React and React Router",
      "Build an analytics dashboard with React",
      "Use an API for a bank user account with React",
      "Move a jQuery library to React",
    ],
    personalProjectFailed: `I also tried my hand at more personal projects. For example, wanting to rework my personal website, I started a project that I had soberly named <a class="link" href="https://github.com/SprtJonathan/BasicJS">BasicJS</a >
    and whose goal was to create a starter type project for all my future web projects. I wanted to make it possible to reuse components without having to rewrite their code, like a React/Vue type framework, but all in JS Vanilla.`,
    personalProjectRebooted: `I recently recreated a project of the same type but without using this component system that I hadn't managed to make viable at the time. This project, named <a class="link" href="https://github.com/SprtJonathan/js-project-base">JS Project Base</a>
    allows, as its name suggests, to start a project more quickly. It contains a project base with an index.html, an index.js containing a simple function to rotate the JS logo on click, a CSS base organized like SASS with a master file
    importing the code of all the dependencies files, this in order to better organize the workspace of the style and to better optimize the code by facilitating the stylistic consistency of the pages and avoiding rewriting code already existing on previous pages. Because after all:
    <blockquote>Do not repeat yourself*</blockquote>`,
    jsBaseTitle: `<a class="link" href="https://github.com/SprtJonathan/js-project-base">JS Project Base</a>`,
    administrativeManagerDescription: `Finally, I am currently working in my spare time on another project, started thanks to my starter pack by the way. This is an online tool for creating
    a form with customizable fields then fill in these fields and view the data entered in a table located on another page.
    The objective is to offer a simple and complete tool in order to be able to carry out simple administrative tasks in an intuitive way: Creation of tables (with search and sorting functionality), export of data, import of pre-existing data,
    export of the html code of the form created in order to simplify the creation of forms for website projects, creation of surveys with display and exploitation of the results, Google Form type forms. The ideal would be to be able to make this tool
    accessible to as many people as possible by offering a simple and understandable interface, the possibility for each user to create an instance and save it (and also to restrain access to a personal instance). <br/>
    You can explore the website through the integrated window below.`,
    administrativeManagerTitle: `<a class="link" href="https://github.com/SprtJonathan/AdministrativeManager">Administrative Manager</a>`,
    administrativeManagerToggleButton: "Launch demo",
    administrativeManagerExitButton: "Close demo",
    echangrDescription: `Since mid-March 2023, while looking for a freelance mission to accomplish, I have been working on a small social network project programmed with Next.js because I wanted to learn this framework. The initial goal was to create a simple website allowing users logged in with services like Discord to publish posts with by images.
    Other users could then comment and react to the posts. As the project progressed, I ultimately shifted towards a more traditional user management service with website registration. In addition to Next.js, the project is deployed on Vercel, the database is managed by PostgreSQL on a service named Aiven, 
    user-uploaded images are stored in the cloud using Cloudinary, confirmation emails are sent using SendInBlue, passwords are secured with bcrypt, and login data is secured with JWT.

    This project is probably the most important one I developed to date, as it brings together the skills I have learned during my two formations (front and back development).
    
    Another unique aspect of this project is that I completed it in "collaboration" with the openAI tool: ChatGPT (3 and 4). Indeed, as artificial intelligence and LLM (Large Language Models) technologies become more developed and refined, they will likely play an increasingly important role for both developers and consumers. 
    I therefore thought it best to learn how to properly use these fantastic tools, which will probably be everywhere in the future of development. Nevertheless, ChatGPT was not always the solution to all the obstacles encountered during this project. Indeed, the problem with this tool is that it depends on OpenAI (and its usage limitations) 
    but also that it does not have all the answers. It actually was counter productive for me in some aspects of the development of the image upload functionality for the site. Many times, I had to solve certain problems on my own.
    Thus, in the development of this project, ChatGPT was primarily an asset that allowed me to solve certain problems encountered, and accelerate development by allowing me to create certain redundant features more simply and then deploy the project, all in just over a month and a half. 
    You can visit the site below:`,
    echangrTitle: `<a class="link" href="https://e-changr.vercel.app/">E-ChangR</a>`,
    echangrToggleButton: "Launch demo",
    echangrExitButton: "Close demo",
    developperMotto:
      "*Don't repeat yourself: one of the main philosophies of the developer.",
  },
};

export default webdevText;
