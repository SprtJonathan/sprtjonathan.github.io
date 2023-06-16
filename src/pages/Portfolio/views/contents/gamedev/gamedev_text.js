const gamedevText = {
  fr: {
    gamedevTitle: "Développement de Jeux Vidéo",
    modalIntroText: `Depuis un certain nombre d'années, pendant mon temps libre, je m'intéresse au développement de jeux vidéo. Je cherche à comprendre comment les différents jeux auquels je joue habituellement sont créés, j'apprends également (toujours en autodidacte) 
    à créer du contenu par moi même, que ce soit des maps (cartes de jeu), majoritairement sur Half-Life 2 et plus récemment Half-Life: Alyx (en VR), sur Dying Light grâce aux outils de modding, ou plus globalement des mécaniques de jeu sur Unreal Engine (4 et 5). Enfin je me 
    suis également essayé à la modélisation 3D grâce à l'outil gratuit Blender. J'ai réussi à créer quelques modèles simples ou a modifier des modèles déjà existants afin de les intégrer à différents jeux. Ci-dessous, vous trouverez différentes catégories montrant 
    quelques exemples de ce que j'ai pu réaliser au cours de ces quelques années. Aucun projet n'a réellement abouti mais chaque réalisation m'a permis de m'améliorer à chaque fois un peu plus.`,
    firstCategoryName: `Source² Engine (Half-Life: Alyx / VR) : `,
    firstCategoryDescription: `Depuis mars 2020, je me suis intéressé au moteur Source² de Valve, utilisé dans Half-Life Alyx: notamment. Ce moteur, bien que récent, partage de nombreux aspects avec son prédécesseur, sur lequel j'ai passé beaucoup de temps au cours de ces dernières années, 
    à apprendre des techniques de Level Design. J'ai pris un immense plaisir à y retourner et à approfondir mes bases. C'est un outil que je trouve très agréable à prendre en mains. 
    L'exemple suivant est une carte pour le jeu Half-Life Alyx sur laquelle je travaille depuis un mois. Je continue mon processus d'apprentissage du moteur au fur et à mesure que je progresse sur la géométrie de la map. J'ai appris à utiliser quelques uns des outils intégrés au moteur :
    <br/>
    - Tile Meshing : modèles 3D programmés pour former des cheminements définis par l'utilisateur (par exemple, les tuyaux aux murs, les conduits d'aérations etc.)
    <br/>
    - Skybox 3D : utilisation d'une map externe afin de la "projeter" sur la map en cours afin d'optimiser l'affichage des modèles 3D à distance en les zoomant.
    <br/>
    - Scripted Sequences (Des entités permettant de scripter les animations de personnages afin de leur faire réaliser une action définie)
    <br/>
    - L'éclairage dynamique
    <br/>`,
    firstCategoryVideosDescription: [
      "Cette vidéo montre le début de la map, les tuyaux visibles ont étés placés grâce à l'outil de tile meshing",
      `Ici il est question de séquence scriptée. La créature (un headcrab) qui arrive du pilier est "appelée" par une entité qui la fait apparaître, et une autre entité (nommée "scripted sequence") se charge de lui faire faire son animation. Une fois l'animation terminée, l'intelligence artificelle par défaut du headcrab reprend la main.`,
      `Un autre exemple de séquence scriptée. Ici le zombie (nom donnée à ces presonnages non jouables dans le jeu Half-Life) effectue une animation de base (il pointe le projecteur du doigt). Une fois que le joueur passe la zone de détection (trigger), l'animation du pointage s'arrête et le zombie doit rejoindre la deuxième séquence scriptée en marchant. Arrivé à celle-ci, un output (une sortie activée lorsque le zombie arrive à destination) le fait ragdoll (active la physique du modèle 3D, ce qui cause sa chute). Une fois arrivé au sol, un autre output met sa valeur de vie à 0.`,
      `Dernier exemple de séquence scriptée. Cette fois-ci lorsque le joueur s'approche de la porte, un trigger déclenche la marche des soldats ainsi que le son de la radio qui se joue derrière la porte.`,
    ],
    firstCategoryPhotosSectionIntro: `Voici enfin une galerie montrant quelques photos de mon travail sur le moteur Source². Les images en format carré proviennent de captures d'écran en réalité virtuelle.`,
    secondCategoryName: `Unreal Engine 4 / 5 : `,
    secondCategoryDescription: `L'Unreal Engine 4 doit être le moteur graphique sur lequel j'ai passé le plus de temps à apprendre le développement en général. Alors que je me concentrais davantage sur le level design avec le moteur Source, l'UE4 m'a permis de commencer à coder grâce au système de blueprints (programmation visuelle) intégré au moteur. 
    En suivant plusieurs cours en ligne, j'ai pu apprendre à créer les bases d'un jeu simple, plus spécialement, des jeux de type FPS. J'ai été très touche-à-tout avec le moteur graphique et j'ai abordé différents thèmes tels que le "Player Controler", 
    faisant l'interface entre le joueur et le personnage joué, la gestion de la caméra (passage de la première à la troisième personne), l'affichage des armes et leur fonctionnement, les bases de l'IA non joueur, les widgets (permettant d'afficher le HUD par exemple).
    
    Malheureusement, je n'ai jamais réellement terminé quoi que ce soit. Chaque projet m'ayant toutefois permis d'en apprendre plus dans le domaine du développement de jeux vidéo.`,
    secondCategoryExamplesTitles: [
      "Projet de TPS réalisé avec Udemy",
      "Projet de FPS également réalisé avec Udemy",
    ],
    secondCategoryExamplesDescriptions: [
      "",
      "Polonez Caro: Voiture Polonaise que j'ai intégrée à mon projet Unreal afin d'apprendre le fonctionnement des véhicules dans le moteur.",
    ],
    thirdCategoryName: `Blender / Modélisation 3D : `,
    thirdCategoryDescription: `Lorsque j'ai étudié le développement de jeux vidéo, que ce soit sur Unreal ou Source, j'ai pu aborder certains aspects de la modélisation 3D. Plus précisemment, je me suis initié à l'utilisation de Blender (Logiciel de modélisation 3D gratuit mais puissant) 
    afin de répondre à certains besoins, tout en apprendant une discipline supplémentaire. Mes utilisations principales de Blender ont surtout été la modification de modèles pré-existants afin de les adapter à mes besoins. J'ai toutefois pu créer de toute pièce quelques modèles simples 
    pour une utilisation autre que le jeu vidéo : l'impression 3D, à laquelle je m'initie depuis fin 2021.
    
    Vous trouverez ci-dessous une nouvelle galerie contenant quelques exemple de mes travaux sur Blender. Je tiens tout de même à préciser que les modèles provenant d'autres personnes que j'ai utilisé n'ont pas vocation à être redistribués.`,
    thirdCategoryExamplesTitles: [
      "Ma tête dans Half-Life²",
      "Projet de FPS également réalisé avec Udemy",
      "Distributeur automatique",
      "Locomotive et wagon de passagers",
    ],
    thirdCategoryExamplesDescription: [
      `Oui, ceci est bien ma tête ajoutée à un modèle de personnage de Half-Life². Je souhaitais faire découvrir le jeu à un ami en y jouant en coopération et je me suis dit que l'immersion n'en serait que plus grande si nos têtes étaient en jeu. J'ai appris comment adapter le modèle afin que les animations fonctionnent toujours, je suis plutôt fier du résultat final (Scan des têtes réalisés avec AvatarSDK)`,
      `Une FSO Polonez Caro: voiture bien connue en Pologne. Je souhaitais pouvoir utiliser cette voiture dans un projet Unreal Engine, j'ai donc adapté un modèle trouvé en ligne afin de pouvoir l'exploiter dans l'éditeur. J'ai ensuite réalisé les textures en me servant d'images réelles`,
      `Probablement un de mes modèles les plus complexes réalisés de toute pièce : Ce distributeur automatique devait servir comme objet de décor lorsque je m'amusais à recréer le premier niveau de Half-Life² sur Unreal Engine 4`,
      `J'ai également créé des modèles simples et non optimisés d'un train et d'un wagon de passagers (les modèles gris sur cette image)`,
      `Ce pistolet provient de SktechFab (bibliothèque de modèles 3D), j'ai adapté ce modèle à Half-Life: Alyx afin qu'il remplace le pistolet original du jeu`,
    ],
  },
  en: {
    gamedevTitle: "Video Game Development",
    modalIntroText: `For several years, in my spare time, I have been interested in developing video games. I try to understand how the different games I usually play are created, I also learn (still self-taught)
    to create content by myself, whether maps (game cards), mainly on Half-Life 2 and more recently Half-Life: Alyx (in VR), on Dying Light thanks to modding tools, or more generally game mechanics on Unreal Engine (4 and 5). Finally I
    am also tried at 3D modeling thanks to the free tool Blender. I managed to create some simple models or modify existing models in order to integrate them into different games. Below you will find different categories showing
    some examples of what I have been able to achieve during these few years. No project has really succeeded, but each achievement has allowed me to improve a little more each time.`,
    firstCategoryName: `Source² Engine (Half-Life: Alyx / VR) : `,
    firstCategoryDescription: `Since March 2020, I have been interested in Valve's Source² engine, used in Half-Life Alyx: in particular. This engine, although recent, shares many aspects with its predecessor, on which I have spent a lot of time over the past few years,
    to learn Level Design techniques. I took great pleasure in going back and deepening my knowledge. It is a tool that I find very pleasant to use.
    The following example is a Half-Life Alyx map I've been working on for a month. I continue my engine learning process as I progress on the geometry of the map. I learned to use some of the tools built into the engine:
    <br/>
    - Tile Meshing: 3D models programmed to form user-defined pathways (e.g. pipes on walls, air ducts etc.)
    <br/>
    - Skybox 3D: use of an external map to "project" it onto the current map in order to optimize the display of 3D models from a distance by zooming them.
    <br/>
    - Scripted Sequences (Entities allowing character animations to be scripted in order to make them perform a defined action)
    <br/>
    - Dynamic lighting
    <br/>`,
    firstCategoryVideosDescription: [
      "This video shows the beginning of the map, the visible pipes have been placed using the tile meshing tool",
      `This shows scripted sequences. The creature (a headcrab) that comes from the pillar is "called" by an entity that makes it appear, and another entity (named "scripted sequence") is responsible for making it do its animation. Once the animation is complete, the headcrab's default AI takes over.`,
      `Another example of a scripted sequence. Here the zombie (name given to these non-playable characters in the Half-Life game) performs a basic animation (he points to the projector). Once the player passes the detection zone (trigger), the pointing animation stops and the zombie must join the second scripted sequence by walking. Arrived at this one, an output (an output activated when the zombie arrives at its destination) makes it ragdoll (activates the physics of the 3D model, which causes its fall). Once on the ground, another output sets its life value to 0.`,
      `Last example of scripted sequence. This time when the player approaches the door, a trigger triggers the march of the soldiers as well as the sound of the radio playing behind the door.`,
    ],
    firstCategoryPhotosSectionIntro: `Here is finally a gallery showing some photos of my work on the Source² engine. Square format images are from VR screenshots.`,
    secondCategoryName: `Unreal Engine 4 / 5 : `,
    secondCategoryDescription: `Unreal Engine 4 has to be the graphics engine I've spent the most time learning about development in general. While I was focusing more on level design with the Source engine, the UE4 allowed me to start coding thanks to the engine's built-in blueprints (visual programming) system.
    By taking several online courses, I was able to learn how to create the basics of a simple game, more specifically, FPS type games. I was very hands-on with the graphics engine and I tackled different themes such as the "Player Controller",
    making the interface between the player and the character played, the management of the camera (passage from the first to the third person), the display of weapons and their operation, the basics of the non-player AI, the widgets (allowing to display the HUD for example).
    
    Unfortunately, I never actually finished anything. Each project, however, allowed me to learn more about the field of video game development.`,
    secondCategoryExamplesTitles: [
      "TPS project created with Udemy",
      "FPS project also created with Udemy",
    ],
    secondCategoryExamplesDescriptions: [
      "",
      "Polonez Caro: Polish car that I added to my Unreal project to learn how vehicles work in the engine.",
    ],
    thirdCategoryName: `Blender / 3D Modeling: `,
    thirdCategoryDescription: `When I studied video game development, whether on Unreal or Source, I was able to approach certain aspects of 3D modeling. More specifically, I learned to use Blender (Free but powerful 3D modeling software)
    in order to meet certain needs, while learning an additional discipline. My main uses of Blender have mainly been modifying pre-existing models to adapt them to my needs. However, I was able to create a few simple models from scratch.
    for use other than video games: 3D printing, which I have been learning since the end of 2021.
    
    Below is a new gallery containing some examples of my work on Blender. I would like to point out that the models from other people that I have used are not intended to be redistributed.`,
    thirdCategoryExamplesTitles: [
      "My head in Half-Life²",
      "FPS project also made with Udemy",
      "Vending machine",
      "Locomotive and Passenger Cart",
    ],
    thirdCategoryExamplesDescription: [
      `Yes, this is my head added to a Half-Life² character model. I wanted to show the game to a friend by playing it in cooperation and I thought that the immersion would be even greater if our heads were ingame. (Scan of the heads made with AvatarSDK)`,
      `A FSO Polonez Caro: A well known car in Poland. I wanted to be able to use this car in an Unreal Engine project, so I adapted a model I found online so I could use it in the editor. I then made the textures using real images,`,
      `Probably one of my most complex models made from scratch: This vending machine was to be used as a prop when I was having fun recreating the first level of Half-Life² on Unreal Engine 4`,
      `I also created simple, non-optimized models of a train and a passenger wagon (the gray models in this image)`,
      `This gun is from SktechFab (3D model library), I adapted this model to Half-Life: Alyx so that it replaces the original gun in the game`,
      `A FSO Polonez Caro: A well known car in Poland. I wanted to be able to use this car in an Unreal Engine project, so I adapted a model I found online so I could use it in the editor. I then made the textures using real images,`,
    ],
  },
};

export default gamedevText;
