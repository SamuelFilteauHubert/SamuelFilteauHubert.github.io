const themeSelect = document.getElementById("theme-select");
const languageSelect = document.getElementById("language-select");

const translations = {
  en: {
    "site.name": "Samuel Filteau-Hubert",

    "nav.home": "Home",
    "nav.about": "About",
    "nav.goals": "Goals",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    "theme.basic": "Basic",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.blue": "Blue",
    "theme.beige": "Beige",

    "home.title": "Who am I?",
    "home.intro": "I am a computer science student passionate about technology, programming, and problem solving. I created this portfolio to present my projects, skills, interests, and professional growth.",
    "home.viewWork": "View my work",
    "home.aboutMe": "About me",
    "home.profileImage": "Profile image",
    "home.goalsTitle": "Goals",
    "home.goalsText": "My goal is to keep improving as a developer by building practical projects, learning new technologies, and strengthening my technical problem-solving skills.",
    "home.learnMore": "Learn more",
    "home.whatIDoTitle": "What I do",
    "home.webDevTitle": "Web Development",
    "home.webDevText": "HTML, CSS, JavaScript, React, Node.js, Express, and responsive layouts.",
    "home.databaseTitle": "Databases",
    "home.databaseText": "SQL, database design, data management, and problem-solving with structured information.",
    "home.interactiveTitle": "Interactive Projects",
    "home.interactiveText": "Unity, WebGL, Canvas, hardware, networking, and interactive technical projects.",
    "home.featuredProjects": "Featured Projects",
    "home.projectImage": "Image",
    "home.projectOneTitle": "Thesaurus 3D Maze Game",
    "home.projectOneText": "A 3D maze game with levels, teleporters, doors, UI, and scoring.",
    "home.projectTwoTitle": "Online CV Website",
    "home.projectTwoText": "A personal portfolio website with themes and language settings.",
    "home.viewProject": "View project →",
    "home.viewAllProjects": "View all projects",

    "about.title": "About Me",
    "about.subtitle": "Computer science student. Technology enthusiast. Problem solver.",
    "about.profilePhoto": "Profile photo",
    "about.photo": "Photo",
    "about.introTitle": "Hi, I’m Samuel.",
    "about.introText": "I am a computer science student at Collège Gérald-Godin with a strong interest in programming, web development, networking, and technology. I enjoy learning by building projects and finding practical solutions to technical problems.",
    "about.factOne": "Based in Quebec, Canada",
    "about.factTwo": "Computer Science Technology student at Collège Gérald-Godin",
    "about.factThree": "Open to new opportunities and collaborations",
    "about.backgroundTitle": "Background / Education",
    "about.timelineOneDate": "Present",
    "about.timelineOneTitle": "Computer Science Technology",
    "about.timelineOneText": "Studying programming, web development, databases, networking, and software development at Collège Gérald-Godin.",
    "about.timelineTwoDate": "Projects",
    "about.timelineTwoTitle": "Personal and Academic Projects",
    "about.timelineTwoText": "Building websites, database applications, games, and interactive visual projects to develop my technical skills.",
    "about.interestsTitle": "Interests",
    "about.interestsText": "Technology, video games, 3D printing, cinema, animation, chess, and soccer.",
    "about.valuesTitle": "Values",
    "about.valuesText": "Curiosity, reliability, teamwork, collaboration, and innovation.",
    "about.quickFactsTitle": "Quick Facts",
    "about.quickFactsText": "I enjoy solving problems, learning new technologies, and working on projects that combine creativity and logic.",
    "about.downloadCv": "Download CV",
    "about.seeProjects": "See my projects",

    "goals.title": "My Goals",
    "goals.image": "Goals image",
    "goals.intro": "My main goal is to continue growing as a developer by improving my programming, troubleshooting, teamwork, and technical communication skills.",
    "goals.shortTitle": "Short-Term Goals",
    "goals.shortOne": "Finish and publish my personal portfolio website.",
    "goals.shortTwo": "Add real project images, GitHub links, and detailed project descriptions.",
    "goals.shortThree": "Improve my skills in JavaScript, React, Node.js, SQL, and C#.",
    "goals.longTitle": "Long-Term Goals",
    "goals.longOne": "Become a stronger and more versatile developer.",
    "goals.longTwo": "Build complete projects that combine frontend, backend, databases, and user experience.",
    "goals.longThree": "Continue developing clean code habits, technical communication, and problem-solving skills.",
    "goals.currentTitle": "What I’m Working On Now",
    "goals.currentOne": "Improving my online portfolio and GitHub profile.",
    "goals.currentTwo": "Organizing my academic and personal projects.",
    "goals.currentThree": "Continuing to build projects that help me learn and improve.",
    "goals.roadmapTitle": "Goals Roadmap",
    "goals.stepOneTitle": "Foundation",
    "goals.stepOneText": "Build the basic pages, navigation, structure, and layout.",
    "goals.stepTwoTitle": "Content",
    "goals.stepTwoText": "Add personal information, project descriptions, skills, and goals.",
    "goals.stepThreeTitle": "Design",
    "goals.stepThreeText": "Improve the visual style, spacing, colors, and responsiveness.",
    "goals.stepFourTitle": "Publish",
    "goals.stepFourText": "Host the website using GitHub Pages and keep improving it.",
    "goals.whyTitle": "Why these goals matter",
    "goals.whyText": "These goals matter because they help me turn my technical knowledge into practical experience. By building projects and improving my portfolio, I can better show my skills, curiosity, reliability, and ability to contribute to a team.",
    "goals.viewProjects": "View my projects",

    "projects.title": "Projects",
    "projects.intro": "Here are some of the projects I have worked on, including web development, databases, games, and interactive programming.",
    "projects.featuredTitle": "Featured Project",
    "projects.projectImage": "Project image",
    "projects.image": "Image",
    "projects.viewProject": "View project",
    "projects.thesaurusTitle": "Thesaurus 3D Maze Game",
    "projects.thesaurusText": "A 3D maze game where the player explores levels, uses teleporters, opens doors, avoids obstacles, and progresses through multiple stages.",
    "projects.tagGameDesign": "Game Design",
    "projects.portfolioTitle": "Online Profile Website",
    "projects.portfolioText": "A personal portfolio website that acts as an online CV. It includes multiple pages, theme settings, language settings, and project sections.",
    "projects.movieTitle": "ASP.NET Movie Rental Project",
    "projects.movieText": "A web application based on a movie rental system, using models, controllers, database relationships, authentication, and user features.",
    "projects.flagsTitle": "JavaScript Canvas Flags",
    "projects.flagsText": "A collection of country flags drawn using JavaScript Canvas, focusing on shapes, coordinates, colors, and visual precision.",
    "projects.tagGraphics": "2D Graphics",
    "projects.discordTitle": "Discord Music Bot",
    "projects.discordText": "A Discord bot project made to play music and manage a queue using commands and external music sources.",

    "skills.title": "Skills",
    "skills.intro": "Here are the main technologies, tools, and concepts I have worked with through school projects, personal projects, and practice.",
    "skills.image": "Skills image",
    "skills.mySkillsTitle": "My Skills",
    "skills.languagesTitle": "Programming Languages",
    "skills.languagesOne": "Java",
    "skills.languagesTwo": "C#",
    "skills.languagesThree": "PHP",
    "skills.languagesFour": "SQL",
    "skills.languagesFive": "JavaScript",
    "skills.webTitle": "Web Development",
    "skills.webOne": "HTML and CSS",
    "skills.webTwo": "React, Node.js, and Express",
    "skills.webThree": "JSON, jQuery, forms, navigation, and responsive layouts",
    "skills.databaseTitle": "Databases",
    "skills.databaseOne": "Database design",
    "skills.databaseTwo": "Stored procedures",
    "skills.databaseThree": "Triggers and SQL queries",
    "skills.toolsTitle": "Tools & Technologies",
    "skills.toolsOne": "Git and GitHub",
    "skills.toolsTwo": "Office 365: Word, Excel, PowerPoint, Access, Project, Visio, OneNote, and Publisher",
    "skills.toolsThree": "Adobe Photoshop and Adobe Premiere Elements",
    "skills.toolsFour": "Computer assembly and maintenance",
    "skills.toolsFive": "Network configuration and management",
    "skills.experienceTitle": "Experience & Education",
    "skills.timelineOneDate": "School Projects",
    "skills.timelineOneTitle": "Programming and Web Development",
    "skills.timelineOneText": "Built projects using Java, C#, PHP, SQL, JavaScript, HTML, CSS, React, Node.js, Express, ASP.NET, Unity, Canvas, and WebGL.",
    "skills.timelineTwoTitle": "Version Control",
    "skills.timelineTwoText": "Using Git and GitHub to organize projects, track changes, and prepare work for publishing online.",
    "skills.timelineThreeDate": "Personal Work",
    "skills.timelineThreeTitle": "Independent Projects",
    "skills.timelineThreeText": "Creating projects outside of class to improve my skills and build a stronger portfolio.",
    "skills.strengthsTitle": "Key Strengths",
    "skills.strengthOneTitle": "Problem Solving",
    "skills.strengthOneText": "I like breaking problems into smaller steps and finding practical solutions.",
    "skills.strengthTwoTitle": "Learning by Building",
    "skills.strengthTwoText": "I improve by creating real projects and refining them over time.",
    "skills.strengthThreeTitle": "Attention to Detail",
    "skills.strengthThreeText": "I care about structure, organization, and making projects work properly.",
    "skills.ctaTitle": "Want to see these skills in action?",
    "skills.ctaText": "My projects page shows examples of how I use these technologies in real projects.",
    "skills.viewProjects": "View my projects",

    "contact.title": "Contact Me",
    "contact.intro": "Feel free to contact me if you want to discuss a project, ask a question, or connect professionally.",
    "contact.image": "Contact image",
    "contact.formTitle": "Send me a message",
    "contact.nameLabel": "Name",
    "contact.namePlaceholder": "Your name",
    "contact.emailLabel": "Email",
    "contact.emailPlaceholder": "your.email@example.com",
    "contact.subjectLabel": "Subject",
    "contact.subjectPlaceholder": "Message subject",
    "contact.messageLabel": "Message",
    "contact.messagePlaceholder": "Write your message here",
    "contact.sendButton": "Send message",
    "contact.getInTouchTitle": "Get in touch",
    "contact.emailTitle": "Email",
    "contact.githubText": "View my GitHub profile and repositories.",
    "contact.viewGithub": "View GitHub →",
    "contact.linkedinText": "Connect with me on LinkedIn.",
    "contact.viewLinkedin": "View LinkedIn →",
    "contact.cvTitle": "CV",
    "contact.cvText": "Download a PDF version of my CV.",
    "contact.downloadCv": "Download CV →",
    "contact.availabilityTitle": "Availability",
    "contact.availabilityText": "I am open to discussing projects, collaboration opportunities, and professional connections.",
    "contact.viewProjects": "View my projects",

    "cvModal.title": "Choose a CV version",
    "cvModal.text": "Which version of my CV would you like to download?",
    "cvModal.english": "English CV",
    "cvModal.french": "French CV",
    "cvModal.bilingual": "French & English CV",

    "emailModal.title": "Choose how to send your message",
    "emailModal.text": "Your message is ready. Choose the email service you want to use.",
    "emailModal.default": "Default email app",
    "emailModal.copy": "Copy message",
    "emailModal.copySuccess": "Message copied. You can paste it into your email service.",
    "emailModal.copyError": "Could not copy automatically. Please copy the message manually.",

    "footer.connect": "Let’s connect!",
    "footer.copyright": "© 2026 Samuel Filteau-Hubert"
  },

  fr: {
    "site.name": "Samuel Filteau-Hubert",

    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.goals": "Objectifs",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.contact": "Contact",

    "theme.basic": "Basique",
    "theme.light": "Clair",
    "theme.dark": "Sombre",
    "theme.blue": "Bleu",
    "theme.beige": "Beige",

    "home.title": "Qui suis-je?",
    "home.intro": "Je suis un étudiant en informatique passionné par la technologie, la programmation et la résolution de problèmes. J’ai créé ce portfolio pour présenter mes projets, mes compétences, mes intérêts et mon évolution professionnelle.",
    "home.viewWork": "Voir mes projets",
    "home.aboutMe": "À propos de moi",
    "home.profileImage": "Image de profil",
    "home.goalsTitle": "Objectifs",
    "home.goalsText": "Mon objectif est de continuer à m’améliorer comme développeur en créant des projets pratiques, en apprenant de nouvelles technologies et en renforçant mes compétences en résolution de problèmes techniques.",
    "home.learnMore": "En savoir plus",
    "home.whatIDoTitle": "Ce que je fais",
    "home.webDevTitle": "Développement web",
    "home.webDevText": "HTML, CSS, JavaScript, React, Node.js, Express et mises en page adaptatives.",
    "home.databaseTitle": "Bases de données",
    "home.databaseText": "SQL, conception de bases de données, gestion des données et résolution de problèmes avec des informations structurées.",
    "home.interactiveTitle": "Projets interactifs",
    "home.interactiveText": "Unity, WebGL, Canvas, matériel informatique, réseaux et projets techniques interactifs.",
    "home.featuredProjects": "Projets en vedette",
    "home.projectImage": "Image",
    "home.projectOneTitle": "Jeu de labyrinthe 3D Thesaurus",
    "home.projectOneText": "Un jeu de labyrinthe 3D avec des niveaux, des téléporteurs, des portes, une interface et un système de pointage.",
    "home.projectTwoTitle": "Site web de CV en ligne",
    "home.projectTwoText": "Un site portfolio personnel avec des thèmes et des paramètres de langue.",
    "home.viewProject": "Voir le projet →",
    "home.viewAllProjects": "Voir tous les projets",
    "about.title": "À propos de moi",

    "about.subtitle": "Étudiant en informatique. Passionné de technologie. Résolution de problèmes.",
    "about.profilePhoto": "Photo de profil",
    "about.photo": "Photo",
    "about.introTitle": "Salut, je suis Samuel.",
    "about.introText": "Je suis un étudiant en informatique au Collège Gérald-Godin avec un intérêt marqué pour la programmation, le développement web, les réseaux et la technologie. J’aime apprendre en créant des projets et en trouvant des solutions pratiques à des problèmes techniques.",
    "about.factOne": "Basé au Québec, Canada",
    "about.factTwo": "Étudiant en Techniques de l’informatique au Collège Gérald-Godin",
    "about.factThree": "Ouvert aux nouvelles opportunités et collaborations",
    "about.backgroundTitle": "Parcours / Formation",
    "about.timelineOneDate": "Présent",
    "about.timelineOneTitle": "Techniques de l’informatique",
    "about.timelineOneText": "Formation en programmation, développement web, bases de données, réseaux et développement logiciel au Collège Gérald-Godin.",
    "about.timelineTwoDate": "Projets",
    "about.timelineTwoTitle": "Projets personnels et scolaires",
    "about.timelineTwoText": "Création de sites web, d’applications avec bases de données, de jeux et de projets visuels interactifs pour développer mes compétences techniques.",
    "about.interestsTitle": "Intérêts",
    "about.interestsText": "Technologie, jeux vidéo, impression 3D, cinéma, animation, échecs et soccer.",
    "about.valuesTitle": "Valeurs",
    "about.valuesText": "Curiosité, fiabilité, travail d’équipe, collaboration et innovation.",
    "about.quickFactsTitle": "Faits rapides",
    "about.quickFactsText": "J’aime résoudre des problèmes, apprendre de nouvelles technologies et travailler sur des projets qui combinent créativité et logique.",
    "about.downloadCv": "Télécharger le CV",
    "about.seeProjects": "Voir mes projets",

    "goals.title": "Mes objectifs",
    "goals.image": "Image des objectifs",
    "goals.intro": "Mon objectif principal est de continuer à évoluer comme développeur en améliorant mes compétences en programmation, en dépannage, en travail d’équipe et en communication technique.",
    "goals.shortTitle": "Objectifs à court terme",
    "goals.shortOne": "Terminer et publier mon site portfolio personnel.",
    "goals.shortTwo": "Ajouter de vraies images de projets, des liens GitHub et des descriptions détaillées.",
    "goals.shortThree": "Améliorer mes compétences en JavaScript, React, Node.js, SQL et C#.",
    "goals.longTitle": "Objectifs à long terme",
    "goals.longOne": "Devenir un développeur plus solide et plus polyvalent.",
    "goals.longTwo": "Créer des projets complets qui combinent frontend, backend, bases de données et expérience utilisateur.",
    "goals.longThree": "Continuer à développer de bonnes habitudes de code, ma communication technique et ma résolution de problèmes.",
    "goals.currentTitle": "Ce sur quoi je travaille maintenant",
    "goals.currentOne": "Améliorer mon portfolio en ligne et mon profil GitHub.",
    "goals.currentTwo": "Organiser mes projets scolaires et personnels.",
    "goals.currentThree": "Continuer à créer des projets qui me permettent d’apprendre et de progresser.",
    "goals.roadmapTitle": "Feuille de route des objectifs",
    "goals.stepOneTitle": "Fondation",
    "goals.stepOneText": "Créer les pages de base, la navigation, la structure et la mise en page.",
    "goals.stepTwoTitle": "Contenu",
    "goals.stepTwoText": "Ajouter les informations personnelles, les descriptions de projets, les compétences et les objectifs.",
    "goals.stepThreeTitle": "Design",
    "goals.stepThreeText": "Améliorer le style visuel, l’espacement, les couleurs et l’adaptabilité.",
    "goals.stepFourTitle": "Publication",
    "goals.stepFourText": "Héberger le site avec GitHub Pages et continuer à l’améliorer.",
    "goals.whyTitle": "Pourquoi ces objectifs sont importants",
    "goals.whyText": "Ces objectifs sont importants parce qu’ils m’aident à transformer mes connaissances techniques en expérience concrète. En créant des projets et en améliorant mon portfolio, je peux mieux démontrer mes compétences, ma curiosité, ma fiabilité et ma capacité à contribuer à une équipe.",
    "goals.viewProjects": "Voir mes projets",

    "projects.title": "Projets",
    "projects.intro": "Voici quelques projets sur lesquels j’ai travaillé, incluant le développement web, les bases de données, les jeux et la programmation interactive.",
    "projects.featuredTitle": "Projet en vedette",
    "projects.projectImage": "Image du projet",
    "projects.image": "Image",
    "projects.viewProject": "Voir le projet",
    "projects.thesaurusTitle": "Jeu de labyrinthe 3D Thesaurus",
    "projects.thesaurusText": "Un jeu de labyrinthe 3D où le joueur explore des niveaux, utilise des téléporteurs, ouvre des portes, évite des obstacles et progresse à travers plusieurs étapes.",
    "projects.tagGameDesign": "Conception de jeu",
    "projects.portfolioTitle": "Site web de profil en ligne",
    "projects.portfolioText": "Un site portfolio personnel qui agit comme un CV en ligne. Il inclut plusieurs pages, des paramètres de thème, des paramètres de langue et des sections de projets.",
    "projects.movieTitle": "Projet de location de films ASP.NET",
    "projects.movieText": "Une application web basée sur un système de location de films, utilisant des modèles, des contrôleurs, des relations de base de données, l’authentification et des fonctionnalités utilisateur.",
    "projects.flagsTitle": "Drapeaux en JavaScript Canvas",
    "projects.flagsText": "Une collection de drapeaux de pays dessinés avec JavaScript Canvas, avec un accent sur les formes, les coordonnées, les couleurs et la précision visuelle.",
    "projects.tagGraphics": "Graphismes 2D",
    "projects.discordTitle": "Bot de musique Discord",
    "projects.discordText": "Un projet de bot Discord conçu pour jouer de la musique et gérer une file d’attente avec des commandes et des sources musicales externes.",

    "skills.title": "Compétences",
    "skills.intro": "Voici les principales technologies, outils et notions avec lesquels j’ai travaillé dans mes projets scolaires, mes projets personnels et ma pratique.",
    "skills.image": "Image des compétences",
    "skills.mySkillsTitle": "Mes compétences",
    "skills.languagesTitle": "Langages de programmation",
    "skills.languagesOne": "Java",
    "skills.languagesTwo": "C#",
    "skills.languagesThree": "PHP",
    "skills.languagesFour": "SQL",
    "skills.languagesFive": "JavaScript",
    "skills.webTitle": "Développement web",
    "skills.webOne": "HTML et CSS",
    "skills.webTwo": "React, Node.js et Express",
    "skills.webThree": "JSON, jQuery, formulaires, navigation et mises en page adaptatives",
    "skills.databaseTitle": "Bases de données",
    "skills.databaseOne": "Conception de bases de données",
    "skills.databaseTwo": "Procédures stockées",
    "skills.databaseThree": "Déclencheurs et requêtes SQL",
    "skills.toolsTitle": "Outils et technologies",
    "skills.toolsOne": "Git et GitHub",
    "skills.toolsTwo": "Office 365 : Word, Excel, PowerPoint, Access, Project, Visio, OneNote et Publisher",
    "skills.toolsThree": "Adobe Photoshop et Adobe Premiere Elements",
    "skills.toolsFour": "Assemblage et maintenance d’ordinateurs",
    "skills.toolsFive": "Configuration et gestion de réseaux informatiques",
    "skills.experienceTitle": "Expérience et formation",
    "skills.timelineOneDate": "Projets scolaires",
    "skills.timelineOneTitle": "Programmation et développement web",
    "skills.timelineOneText": "Création de projets avec Java, C#, PHP, SQL, JavaScript, HTML, CSS, React, Node.js, Express, ASP.NET, Unity, Canvas et WebGL.",
    "skills.timelineTwoTitle": "Contrôle de version",
    "skills.timelineTwoText": "Utilisation de Git et GitHub pour organiser mes projets, suivre les changements et préparer leur publication en ligne.",
    "skills.timelineThreeDate": "Travail personnel",
    "skills.timelineThreeTitle": "Projets indépendants",
    "skills.timelineThreeText": "Création de projets en dehors des cours pour améliorer mes compétences et bâtir un portfolio plus solide.",
    "skills.strengthsTitle": "Forces principales",
    "skills.strengthOneTitle": "Résolution de problèmes",
    "skills.strengthOneText": "J’aime diviser les problèmes en plus petites étapes et trouver des solutions pratiques.",
    "skills.strengthTwoTitle": "Apprentissage par la pratique",
    "skills.strengthTwoText": "Je m’améliore en créant de vrais projets et en les perfectionnant avec le temps.",
    "skills.strengthThreeTitle": "Souci du détail",
    "skills.strengthThreeText": "J’accorde de l’importance à la structure, à l’organisation et au bon fonctionnement de mes projets.",
    "skills.ctaTitle": "Vous voulez voir ces compétences en action?",
    "skills.ctaText": "Ma page de projets montre des exemples de la façon dont j’utilise ces technologies dans des projets concrets.",
    "skills.viewProjects": "Voir mes projets",

    "contact.title": "Me contacter",
    "contact.intro": "N’hésite pas à me contacter pour discuter d’un projet, poser une question ou établir un contact professionnel.",
    "contact.image": "Image de contact",
    "contact.formTitle": "Envoyez-moi un message",
    "contact.nameLabel": "Nom",
    "contact.namePlaceholder": "Votre nom",
    "contact.emailLabel": "Courriel",
    "contact.emailPlaceholder": "votre.courriel@exemple.com",
    "contact.subjectLabel": "Sujet",
    "contact.subjectPlaceholder": "Sujet du message",
    "contact.messageLabel": "Message",
    "contact.messagePlaceholder": "Écrivez votre message ici",
    "contact.sendButton": "Envoyer le message",
    "contact.getInTouchTitle": "Me joindre",
    "contact.emailTitle": "Courriel",
    "contact.githubText": "Consultez mon profil GitHub et mes dépôts.",
    "contact.viewGithub": "Voir GitHub →",
    "contact.linkedinText": "Connectez-vous avec moi sur LinkedIn.",
    "contact.viewLinkedin": "Voir LinkedIn →",
    "contact.cvTitle": "CV",
    "contact.cvText": "Télécharger une version PDF de mon CV.",
    "contact.downloadCv": "Télécharger le CV →",
    "contact.availabilityTitle": "Disponibilité",
    "contact.availabilityText": "Je suis ouvert à discuter de projets, d’occasions de collaboration et de contacts professionnels.",
    "contact.viewProjects": "Voir mes projets",

    "cvModal.title": "Choisir une version du CV",
    "cvModal.text": "Quelle version de mon CV souhaitez-vous télécharger?",
    "cvModal.english": "CV anglais",
    "cvModal.french": "CV français",
    "cvModal.bilingual": "CV français et anglais",

    "emailModal.title": "Choisir comment envoyer votre message",
    "emailModal.text": "Votre message est prêt. Choisissez le service de courriel que vous voulez utiliser.",
    "emailModal.default": "Application de courriel par défaut",
    "emailModal.copy": "Copier le message",
    "emailModal.copySuccess": "Message copié. Vous pouvez le coller dans votre service de courriel.",
    "emailModal.copyError": "Impossible de copier automatiquement. Veuillez copier le message manuellement.",

    "footer.connect": "Restons en contact!",
    "footer.copyright": "© 2026 Samuel Filteau-Hubert"
  }
};

function applyTheme(theme) {
  document.body.classList.remove(
    "theme-basic",
    "theme-light",
    "theme-dark",
    "theme-blue",
    "theme-beige"
  );

  document.body.classList.add(`theme-${theme}`);
}

function applyLanguage(language) {
  const textElements = document.querySelectorAll("[data-i18n]");

  textElements.forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (translations[language] && translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");

  placeholderElements.forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");

    if (translations[language] && translations[language][key]) {
      element.placeholder = translations[language][key];
    }
  });

  document.documentElement.lang = language;
}

const savedTheme = localStorage.getItem("theme") || "basic";
const savedLanguage = localStorage.getItem("language") || "en";

applyTheme(savedTheme);
applyLanguage(savedLanguage);

if (themeSelect) {
  themeSelect.value = savedTheme;

  themeSelect.addEventListener("change", () => {
    const selectedTheme = themeSelect.value;

    applyTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  });
}

if (languageSelect) {
  languageSelect.value = savedLanguage;

  languageSelect.addEventListener("change", () => {
    const selectedLanguage = languageSelect.value;
    const currentTheme = localStorage.getItem("theme") || "basic";

    applyLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);

    if (themeSelect) {
      themeSelect.value = currentTheme;
    }
  });
}

const cvModal = document.getElementById("cv-modal");
const openCvModalButton = document.getElementById("open-cv-modal");
const closeCvModalButton = document.getElementById("close-cv-modal");

function openCvModal() {
  if (!cvModal) return;

  cvModal.classList.add("open");
  cvModal.setAttribute("aria-hidden", "false");
}

function closeCvModal() {
  if (!cvModal) return;

  cvModal.classList.remove("open");
  cvModal.setAttribute("aria-hidden", "true");
}

if (openCvModalButton) {
  openCvModalButton.addEventListener("click", openCvModal);
}

if (closeCvModalButton) {
  closeCvModalButton.addEventListener("click", closeCvModal);
}

if (cvModal) {
  cvModal.addEventListener("click", (event) => {
    if (event.target === cvModal) {
      closeCvModal();
    }
  });
}

const contactForm = document.getElementById("contact-form");

const emailModal = document.getElementById("email-modal");
const closeEmailModalButton = document.getElementById("close-email-modal");

const sendDefaultEmailButton = document.getElementById("send-default-email");
const sendGmailButton = document.getElementById("send-gmail");
const sendOutlookButton = document.getElementById("send-outlook");
const copyEmailMessageButton = document.getElementById("copy-email-message");
const copyStatus = document.getElementById("copy-status");

let preparedEmailSubject = "";
let preparedEmailBody = "";
const myEmailAddress = "samuelfilteauhubert@gmail.com";

function openEmailModal() {
  if (!emailModal) return;

  emailModal.classList.add("open");
  emailModal.setAttribute("aria-hidden", "false");
}

function closeEmailModal() {
  if (!emailModal) return;

  emailModal.classList.remove("open");
  emailModal.setAttribute("aria-hidden", "true");

  if (copyStatus) {
    copyStatus.textContent = "";
  }
}

function buildMailtoLink() {
  return (
    `mailto:${myEmailAddress}` +
    `?subject=${encodeURIComponent(preparedEmailSubject)}` +
    `&body=${encodeURIComponent(preparedEmailBody)}`
  );
}

function buildGmailLink() {
  return (
    "https://mail.google.com/mail/?view=cm&fs=1" +
    `&to=${encodeURIComponent(myEmailAddress)}` +
    `&su=${encodeURIComponent(preparedEmailSubject)}` +
    `&body=${encodeURIComponent(preparedEmailBody)}`
  );
}

function buildOutlookLink() {
  return (
    "https://outlook.live.com/mail/0/deeplink/compose" +
    `?to=${encodeURIComponent(myEmailAddress)}` +
    `&subject=${encodeURIComponent(preparedEmailSubject)}` +
    `&body=${encodeURIComponent(preparedEmailBody)}`
  );
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    preparedEmailSubject = subject || "Message from portfolio website";

    preparedEmailBody = `
Name: ${name}
Email: ${email}

Message:
${message}
    `.trim();

    openEmailModal();
  });
}

if (sendDefaultEmailButton) {
  sendDefaultEmailButton.addEventListener("click", () => {
    window.location.href = buildMailtoLink();
  });
}

if (sendGmailButton) {
  sendGmailButton.addEventListener("click", () => {
    window.open(buildGmailLink(), "_blank", "noopener,noreferrer");
  });
}

if (sendOutlookButton) {
  sendOutlookButton.addEventListener("click", () => {
    window.open(buildOutlookLink(), "_blank", "noopener,noreferrer");
  });
}

if (copyEmailMessageButton) {
  copyEmailMessageButton.addEventListener("click", async () => {
    const fullMessage = `
To: ${myEmailAddress}
Subject: ${preparedEmailSubject}

${preparedEmailBody}
    `.trim();

    try {
      await navigator.clipboard.writeText(fullMessage);

      if (copyStatus) {
        const language = localStorage.getItem("language") || "en";
        copyStatus.textContent = translations[language]["emailModal.copySuccess"];
      }
    } catch {
      if (copyStatus) {
        const language = localStorage.getItem("language") || "en";
        copyStatus.textContent = translations[language]["emailModal.copyError"];
      }
    }
  });
}

if (closeEmailModalButton) {
  closeEmailModalButton.addEventListener("click", closeEmailModal);
}

if (emailModal) {
  emailModal.addEventListener("click", (event) => {
    if (event.target === emailModal) {
      closeEmailModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCvModal();
    closeEmailModal();

    if (typeof closeImageModal === "function") {
      closeImageModal();
    }
  }
});

const expandableImages = document.querySelectorAll(".expandable-image");

const imageModal = document.createElement("div");
imageModal.classList.add("image-modal");
imageModal.setAttribute("aria-hidden", "true");

imageModal.innerHTML = `
  <button type="button" class="image-modal-close" aria-label="Close">×</button>
  <img src="" alt="" class="image-modal-img" />
`;

document.body.appendChild(imageModal);

const imageModalImg = imageModal.querySelector(".image-modal-img");
const imageModalClose = imageModal.querySelector(".image-modal-close");

expandableImages.forEach((image) => {
  image.addEventListener("click", () => {
    imageModalImg.src = image.src;
    imageModalImg.alt = image.alt;

    imageModal.classList.add("open");
    imageModal.setAttribute("aria-hidden", "false");
  });
});

function closeImageModal() {
  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");
  imageModalImg.src = "";
  imageModalImg.alt = "";
}

imageModalClose.addEventListener("click", closeImageModal);

imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) {
    closeImageModal();
  }
});