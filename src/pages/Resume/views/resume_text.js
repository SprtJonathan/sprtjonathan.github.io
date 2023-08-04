let birthDate = new Date("02/14/1999");
let ageOperation = Date.now() - birthDate.getTime();
let ageDate = new Date(ageOperation);
let birthYear = ageDate.getUTCFullYear();
const age = Math.abs(birthYear - 1970);

export const resumeHeaderText = {
  fr: {
    resumeHeaderName: `JONATHAN BINOT`,
    resumeDescription: `Développeur web Frontend - Disponible immédiatement`,
    resumeIntroText: `Passionné d’informatique et du développement web et curieux des nouvelles
    technologies, je souhaite approfondir mes connaissances par la pratique en
    entreprise tout en suivant ma formation. Je m’adapte rapidement. Vous
    trouverez mes réalisations sur la page portfolio et sur mon github à cette
    adresse :
    <a href="http://github.com/SprtJonathan" target="_blank"
      >https://github.com/SprtJonathan/ <i class="fas fa-external-link-alt"></i
    ></a>`,
    resumeIntroAge: `14/02/1999 (${age} ans)`,
    resumeIntroContact: `<a href="mailto:jonathanbinot@gmail.com"
    >Me contacter par Mail <i class="fas fa-external-link-alt"></i
  ></a>`,
    resumeIntroLinkedin: `<a target="_blank" href="https://linkedin.com/in/jonathan-binot-260267154"
    >Mon profil LinkedIn <i class="fas fa-external-link-alt"></i
  ></a>`,
    resumeIntroDrivingLicense: `Permis B (depuis le 23/03/18)`,
  },
  en: {
    resumeHeaderName: `JONATHAN BINOT`,
    resumeDescription: `Frontend web developer - Available now`,
    resumeIntroText: `Passionate about computers, high tech and video games since I was a child, I wish to work in web development as it’s a 
    domain I really enjoy. I can easily and quickly adapt to change and resolve issues that could occur at work.
    You can check out my work on my portfolio and on my Github profile :
  <a href="http://github.com/SprtJonathan" target="_blank"
    >https://github.com/SprtJonathan/ <i class="fas fa-external-link-alt"></i
  ></a>`,
    resumeIntroAge: `02/14/1999 (${age} years old)`,
    resumeIntroContact: `<a href="mailto:jonathanbinot@gmail.com"
  >Send me an email <i class="fas fa-external-link-alt"></i
></a>`,
    resumeIntroLinkedin: `<a target="_blank" href="https://linkedin.com/in/jonathan-binot-260267154"
  >My LinkedIn profile <i class="fas fa-external-link-alt"></i
></a>`,
    resumeIntroDrivingLicense: `Driving license (since 03/23/18)`,
  },
};

export const resumeContentText = {
  fr: {
    formationTitle: `Formation`,
    openclassroomsCSBackend: `<h3>2023-2025</h3>
    <p>
      <b
        >OpenClassrooms : Développeur Back-End C# / .NET - Diplôme RNCP de Niveau VI (Bac
        +3/4) : </b
      ><br /><br />
      <li>Formation en alternance</li>
      <li>Développement de fonctionnalités back-end</li>
      <li>Maintenance et amélioration d'une application existante</li>
      <li>Collaboration avec l'équipe front-end</li>
      <li>Sécurité et conformité</li>
    </p>`,
    openclassroomsFrontend: `
    <h3>2022</h3>
    <p>
      <b
        >OpenClassrooms : Développeur Frontend - Diplôme RNCP de Niveau VI (Bac
        +3/4) : </b
      ><br /><br />
      <li>Analyser les besoins</li>
      <li>Implémenter des mockups avec du code de qualité</li>
      <li>Optimiser le temps de chargement des pages</li>
      <li>Utilisation de frameworks, notamment React</li>
    </p>`,
    openclassroomsWebdev: `
    <h3>2020</h3>
    <p>
      <b
        >OpenClassrooms : Développeur Web - Diplôme RNCP de Niveau III (Bac
        +2/3) :</b
      ><br /><br />
      <li>Assemblage de pages web en HTML5 et CSS3</li>
      <li>Intégration de contenus multimédias dans le code</li>
      <li>Respect des normes W3C</li>
      <li>Gestion de base de données</li>
    </p>`,
    university: `
    <h3>2017 - 2018</h3>
    <p>
      <b
        >Première année de licence Maths-Informatique à l'Université Claude
        Bernard Lyon 1</b
      >
      et validation des UE "Introduction aux Réseaux et au Web", "Algorithmique
      Programmation Impérative, Initiation", "UNIX" et "Bases de l'architecture
      pour la programmation".
    </p>`,
    baccalaureate: `
    <h3>2017</h3>
    <p>
      <b>Baccalauréat général Scientifique SVT spécialité Physique-Chimie</b>
      au lycée Saint Marc de Lyon.
    </p>`,
    /**/
    professionalExperienceTitle: `Expérience Professionnelle`,
    proExpLTDN: `
    <h3>
      Octobre 2018 à janvier 2019 en CDD, puis février 2019 à juillet 2020 en
      CDI
    </h3>
    <div class="exp-content">
      <a href="https://latetedanslesnuages.com"
        ><img
          src="https://latetedanslesnuages.com/wp-content/themes/ltdn/assets/images/logo-footer.svg"
          alt="logo la tete dans les nuages"
          class="ltdn-logo"
          height="92"
          width="92"
      /></a>

      <p>
        <b
          >Conseiller loisirs dans le centre de loisirs familial "La Tête Dans
          Les Nuages" de Lyon Confluence (bowling, VR, Jeux arcade) :</b
        >
        <br />
        <br />
      </p>
      <li>Accueil, présentation du concept et de l'offre aux clients.</li>
      <li>Responsable de la fermeture en cas d’absence de la manager.</li>
      <li>Vente, techniques commerciales.</li>
      <li>Relationnel clients / conseillers / supérieurs.</li>
      <li>Maintenance basique des jeux mais aussi des caisses.</li>
    </div>`,
    proExpEpitech: `
    <h3>Février 2016 - 1 semaine</h3>
    <div class="exp-content">
      <a href="https://www.epitech.eu/"
        ><img
          src="https://newsroom.ionis-group.com/wp-content/uploads/2021/10/LOGO-EPITECH-SS-BASELINE-QUADRI.png"
          alt="logo epitech"
          class="epitech-logo"
          width="92"
      /></a>
      <p>
        <b>Stage d'intégration à l'école Epitech Lyon :</b> Apprentissage de la
        programmation de base en C puis de la base de la création d’un jeu vidéo
        sur Unity. Ce stage m’a réellement conforté dans mon projet de
        travailler dans le domaine informatique.
      </p>
    </div>`,
    proExpPoleEmploi: `
    <h3>Février 2015 - 1 semaine</h3>
    <div class="exp-content">
      <a href="https://www.pole-emploi.fr/accueil/"
        ><img
          src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c0/Logo_P%C3%B4le_Emploi_2008.svg/1200px-Logo_P%C3%B4le_Emploi_2008.svg.png"
          alt="logo pole emploi"
          class="epitech-logo"
          width="92"
      /></a>
      <p>
        <b
          >Stage d'intégration au Service Informatique Régional Centre-Est
          (Service informatique de Pôle Emploi) :</b
        >
        Semaine d'intégration en entreprise au Service Informatique Régional
        Centre-Est d'Oullins avec découverte de différentes activités, du
        matériel et de leur fonction, mais aussi gestion et résolution
        d'incidents.
      </p>
    </div>`,
    /**/
    skillsTitle: `Compétences`,
    computerSkillsTitle: `Informatiques`,
    computerSkillsContent: `
    <div class="content">
      <p>C# /.NET : Apprentissage du C# au cours de ma formation en alternance</p>
      <p>HTML/CSS/SASS : Création de site web (Mon portfolio et les projets de ma formation chez OpenClassrooms)</p>
      <p>Création d’animations CSS</p>
      <p>Javascript : Frontend niveau avancé, backend niveau débutant.</p>
      <p>React/Vue/ViteJS : Création de sites communiquant avec des API</p>
      <p>Vegas Pro, Adobe Premiere Pro et Kdenlive : niveau opérationnel</p>
      <p>Adobe Photoshop : Photomontages et création de visuels</p>
      <p>Diffusion en direct : XSplit Broadcaster, OBS et dérivés</p>
      <p>
        Unreal Engine 4 & 5 et codage en blueprints : notions élémentaires
      </p>
      <p>Source Engine 1 & 2 : Notions élémentaires en Level Design</p>
      <p>Montage complet et maintenance de base d'un PC</p>
      <p>Installation et configuration d'un OS</p>
    </div>`,
    softSkillsTitle: `Soft Skills`,
    softSkillsContent: `
    <div class="soft-skills">
    <div class="content">
        <p>Adaptabilité</p>
        <p>Relation de confiance avec mes collaborateurs</p>
        <p>Résolution de différents types de problèmes (humains et matériels)</p>
        <p>Sens commercial</p>
        <p>Communication avec mes collègues et les clients.</p>
        <p>Autodidacte</p>
        <p>Immaginatif et créatif</p>
    </div>          
    </div>`,
    languagesSkillsTitle: `Linguistiques`,
    languagesSkillsContent: `
    <div class="content">
        <p>Anglais : niveau courant</p>
        <p>Polonais : Langue maternelle/Niveau basique (plus parlé que lu)</p>
    </div>`,
    /**/
    notableProjectsTitle: `Projets notables`,
    notableProjectsContent: `
        <div class="openclassroooms-projects">
            <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_7_28042021" target="_blank">Création d’un réseau social d’entreprise avec express et VueJS (fullstack)</a></li>
            <li><a class="link" href="https://github.com/SprtJonathan/jonathanbinot" target="_blank">Portfolio personnel</a></li>
            <li><a class="link" href="https://github.com/SprtJonathan/AdministrativeManager" target="_blank">Application de création de formulaires et d’exploitation des données (sondages, tableaux)</a></li>
            <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_14_16062022" target="_blank">Transposition d’une application JQuery vers React</a></li>
        </div>`,
    /**/
    hobbiesSectionTitle: `Centres d'intérêts`,
    hobbiesMusicTitle: `Musique`,
    hobbiesMusicContent: `
    <div class="hobby-desc">
    <p><b>2006 à 2014 (8 ans) - </b>Piano au Conservatoire à Rayonnement Régional de Lyon, pratiqué quotidiennement.
        <b>2014 - </b>Brevet de fin de deuxième cycle de piano.</p>
    <p><b>2006 à 2013 (7 ans) - </b>Solfège au Conservatoire de Lyon.
        <b>2013 - </b>Brevet de fin de deuxième cycle de solfège.</p>
    <p><b>Depuis 2014 - </b>Musique en autodidacte.</p>
    <p>Je possède également <i>l'oreille absolue !</i></p>
    </div>`,
    hobbiesEditingTitle: `Montage`,
    hobbiesEditingContent: `
        <h3>Montage</h3>
        <p>Tournage et montage de différents courts métrages avec utilisation de fond vert</p>
        <p>Montage vidéo (sur Vegas, Premiere Pro et Kdenlive) pour des projets personnels.</p>
        <p>Montage photo (sur Photoshop) pour des projets personnels.`,
    hobbiesEditingModalTitle: `Montage Photo`,
    hobbiesEditingModalContent: `J'aime beaucoup manipuler des logiciels de retouches tels que photoshop. Comme exemple concret, j'ai créé toutes les images de fond de ce site web. Il m'arrive également de faire quelques retouches "fantaisistes" (exemple mes photos de profil Facebook)`,
    hobbiesGamesTitle: `Jeu vidéo`,
    hobbiesGamesContent: `
    <h3>Jeu Vidéo</h3>
    <p>Apprentissage de différents logiciels de développement de jeux vidéo (Unreal Engine 4,  Source 1 et 2) en autodidacte.
    <p>Fort intérêt pour les nouvelles technologies et notamment la réalité virtuelle et ses utilisations.</p>`,
    hobbiesGamesModalTitle: `Création Vidéoludique`,
    hobbiesGamesModalContent: `Étant passionné par les jeux vidéo, j'ai toujours été fasciné par leur conception. J'ai donc appris, au fil des années, à utiliser quelques moteurs graphiques, notamment l'Unreal Engine 4 mais surtout les moteurs de Valve : Source 1 et plus récemment avec l'arrivée d'Half-Life: Alyx en Réalité Virtuelle, Source 2.`,
    knowMoreText: `En savoir plus...`,
    charitySectionTitle: `Associatif`,
    charitySectionContent: `
    <section id="associatif">
    <div class="amnesty">
        <h3>Amnesty International</h3>
        <p>2015-2016 (Première S) - Action de solidarité Amnesty International, signature de pétitions pour défendre un prisonnier d'opinion.</p>            
    </div>
    </section>`,
  },
  en: {
    formationTitle: `Training`,
    openclassroomsCSBackend: `<h3>2023-2025</h3>
    <p>
      <b>
        OpenClassrooms: Back-End Developer C#/.NET - RNCP Level VI Diploma (Bac +3/4):
      </b><br /><br />
      <li>Apprenticeship training</li>
      <li>Development of back-end functionalities</li>
      <li>Maintenance and improvement of an existing application</li>
      <li>Collaboration with the front-end team</li>
      <li>Security and compliance</li>
    </p>`,
    openclassroomsFrontend: `
    <h3>2022</h3>
    <p>
      <b
        >OpenClassrooms: Frontend Developer - Level VI RNCP Diploma (Bac
        +3/4): </b
      ><br /><br />
      <li>Analyze needs</li>
      <li>Implement mockups with quality code</li>
      <li>Optimize page load time</li>
      <li>Use of frameworks, including React</li>
    </p>`,
    openclassroomsWebdev: `
    <h3>2020</h3>
    <p>
      <b
        >OpenClassrooms: Web Developer - Level III RNCP Diploma (Bac
        +2/3):</b
      ><br /><br />
      <li>Assembling web pages in HTML5 and CSS3</li>
      <li>Integrating multimedia content into the code</li>
      <li>Compliance with W3C standards</li>
      <li>Database management</li>
    </p>`,
    university: `
    <h3>2017 - 2018</h3>
    <p>
      <b
        >First year of Maths-Computer science degree at Claude University
        Bernard Lyon 1</b
      >
      and validation of the teaching units "Introduction to Networks and the Web", "Algorithms
      Imperative Programming, Initiation", "UNIX" and "Basics of architecture
      for programming".
    </p>`,
    baccalaureate: `
    <h3>2017</h3>
    <p>
      <b>General Scientific Baccalaureate SVT specialty Physics-Chemistry</b>
      at Saint Marc high school in Lyon.
    </p>`,
    /**/
    professionalExperienceTitle: `Professional Experience`,
    proExpLTDN: `
    <h3>
      October 2018 to January 2019 on fixed-term contracts, then February 2019 to July 2020 on
      CDI
    </h3>
    <div class="exp-content">
      <a href="https://latetedanslesnuages.com"
        ><img
          src="https://latetedanslesnuages.com/wp-content/themes/ltdn/assets/images/logo-footer.svg"
          alt="head in the clouds logo"
          class="ltdn-logo"
          height="92"
          width="92"
      /></a>

      <p>
        <b
          >Customer advisor in the family entertainement center "La Tête Dans
          Les Nuages" at Lyon Confluence (bowling, VR, arcade games):</b
        >
        <br />
        <br />
      </p>
      <li>Reception, presentation of the concept and the offer to customers.</li>
      <li>Responsible for closing the center in the absence of the manager.</li>
      <li>Sales and sales techniques.</li>
      <li>Good relations with clients / colleagues / managers.</li>
      <li>Basic maintenance of the games but also of the automated checkouts.</li>
    </div>`,
    proExpPoleEmploi: `
    <h3>February 2016 - 1 week</h3>
    <div class="exp-content">
      <a href="https://www.epitech.eu/"
        ><img
          src="https://newsroom.ionis-group.com/wp-content/uploads/2021/10/LOGO-EPITECH-SS-BASELINE-QUADRI.png"
          alt="epitech logo"
          class="epitech-logo"
          width="92"
      /></a>
      <p>
        <b>Internship at the Epitech Lyon school:</b> Learning the
        basic programming in C then the basics of creating a video game
        in Unity. This internship really strengthened me in my project of
        work in the computer field.
      </p>
    </div>`,
    proExpEpitech: `
    <h3>February 2015 - 1 week</h3>
    <div class="exp-content">
      <a href="https://www.pole-emploi.fr/accueil/"
        ><img
          src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c0/Logo_P%C3%B4le_Emploi_2008.svg/1200px-Logo_P%C3%B4le_Emploi_2008.svg.png"
          alt="job center logo"
          class="epitech-logo"
          width="92"
      /></a>
      <p>
        <b
          >Integration internship at the Centre-Est Regional IT Service
          (IT department of Pôle Emploi):</b
        >
        Business integration week at the Regional IT Service
        Center-East of Oullins with discovery of different activities,
        hardware and their function, but also management and resolution
        incidents.
      </p>
    </div>`,
    /**/
    skillsTitle: `Skills`,
    computerSkillsTitle: `Computers`,
    computerSkillsContent: `
    <div class="content">
      <p>C# / .NET : Learning of C# during my apprenticeship</p>
      <p>HTML/CSS/SASS: Website creation (My portfolio and the projects of my training at OpenClassrooms)</p>
      <p>Creating CSS animations</p>
      <p>Javascript: Advanced level frontend, beginner level backend.</p>
      <p>React/Vue/ViteJS: Creation of sites communicating with APIs</p>
      <p>Vegas Pro, Adobe Premiere Pro and Kdenlive: operational level</p>
      <p>Adobe Photoshop: Photomontages and creation of visuals</p>
      <p>Live broadcast: XSplit Broadcaster, OBS and derivatives</p>
      <p>
        Unreal Engine 4 & 5 and Coding in Blueprints: The Basics
      </p>
      <p>Source Engine 1 & 2: Level Design Basics</p>
      <p>Complete assembly and basic maintenance of a PC</p>
      <p>Installation and configuration of an OS</p>
    </div>`,
    softSkillsTitle: `Soft Skills`,
    softSkillsContent: `
    <div class="soft-skills">
    <div class="content">
        <p>Adaptability</p>
        <p>Relationship of trust with my collaborators</p>
        <p>Solving different types of problems (human and material)</p>
        <p>Business sense</p>
        <p>Communication with my colleagues and clients.</p>
        <p>Self-taught</p>
        <p>Imaginative and creative</p>
    </div>
    </div>`,
    languagesSkillsTitle: `Linguistics`,
    languagesSkillsContent: `
    <div class="content">
        <p>English: fluent level</p>
        <p>Polish: Mother tongue/Basic level (more spoken than read)</p>
    </div>`,
    /**/
    notableProjectsTitle: `Notable Projects`,
    notableProjectsContent: `
        <div class="openclassrooms-projects">
            <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_7_28042021" target="_blank">Building an enterprise social network with express and VueJS (fullstack)</a ></li>
            <li><a class="link" href="https://github.com/SprtJonathan/jonathanbinot" target="_blank">Personal Portfolio</a></li>
            <li><a class="link" href="https://github.com/SprtJonathan/AdministrativeManager" target="_blank">Application for creating forms and using data (polls, tables)</a ></li>
            <li><a class="link" href="https://github.com/SprtJonathan/JonathanBinot_14_16062022" target="_blank">Transposing a JQuery application to React</a></li>
        </div>`,
    /**/
    hobbiesSectionTitle: `Hobbies`,
    hobbiesMusicTitle: `Music`,
    hobbiesMusicContent: `
    <div class="hobby-desc">
    <p><b>2006 to 2014 (8 years) - </b>Piano at the Regional Conservatory of Lyon, practiced daily.
        <b>2014 - </b>End of second cycle piano certificate.</p>
    <p><b>2006 to 2013 (7 years) - </b>Solfège at the Lyon Conservatory.
        <b>2013 - </b>Certificate of end of second cycle of music theory.</p>
    <p><b>Since 2014 - </b>Self-taught music.</p>
    <p>I also have <i>perfect pitch!</i></p>
    </div>`,
    hobbiesEditingTitle: `Editing`,
    hobbiesEditingContent: `
        <h3>Editing</h3>
        <p>Filming and editing of various short films with use of green screen</p>
        <p>Video editing (on Vegas, Premiere Pro and Kdenlive) for personal projects.</p>
        <p>Photo editing (on Photoshop) for personal projects.`,
    hobbiesEditingModalTitle: `Photo Editing`,
    hobbiesEditingModalContent: `I really like working with editing software such as photoshop. As a concrete example, I created all the background images for this website. I also sometimes do some "fancy" retouching (example my Facebook profile photos)`,
    hobbiesGamesTitle: `Video Game`,
    hobbiesGamesContent: `
    <h3>Video Game</h3>
    <p>Learning different video game development software (Unreal Engine 4, Source 1 and 2) as an autodidact.
    <p>Strong interest in new technologies and in particular virtual reality and its uses.</p>`,
    hobbiesGamesModalTitle: `Video Game Creation`,
    hobbiesGamesModalContent: `Being passionate about video games, I have always been fascinated by their design. So I learned, over the years, to use some graphic engines, in particular the Unreal Engine 4 but especially the engines of Valve: Source 1 and more recently with the arrival of Half-Life: Alyx in Virtual Reality, Source 2.`,
    knowMoreText: `Learn more...`,
    charitySectionTitle: `Associative`,
    charitySectionContent: `
    <section id="associative">
    <div class="amnesty">
        <h3>Amnesty International</h3>
        <p>2015-2016 (Première S) - Amnesty International solidarity action, signature of petitions to defend a prisoner of conscience.</p>
    </div>
    </section>`,
  },
};
