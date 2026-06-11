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
    "home.intro": "I am a student interested in web development, programming, databases, and interactive projects.",
    "home.viewWork": "View my work",
    "home.aboutMe": "About me",
    "home.goalsTitle": "Goals",
    "home.goalsText": "My goal is to continue improving my skills by building practical projects and learning new technologies.",
    "home.learnMore": "Learn more",
    "home.whatIDoTitle": "What I do",
    "home.webDevTitle": "Web Development",
    "home.webDevText": "HTML, CSS, JavaScript, ASP.NET, and responsive layouts.",
    "home.databaseTitle": "Databases",
    "home.databaseText": "SQL, database design, stored procedures, and data management.",
    "home.interactiveTitle": "Interactive Projects",
    "home.interactiveText": "Unity, WebGL, game systems, and interactive visual projects.",
    "home.featuredProjects": "Featured Projects",
    "home.viewAllProjects": "View all projects",
    

    "about.title": "About Me",
    "about.subtitle": "Curious mind. Problem solver. Always learning.",
    "about.profilePhoto": "Profile photo",
    "about.introTitle": "Hi, I’m Samuel.",
    "about.introText": "I am interested in programming, web development, databases, and interactive projects. I enjoy building projects that combine logic, design, and problem solving.",
    "about.factOne": "Based in Canada",
    "about.factTwo": "Interested in web and software development",
    "about.factThree": "Always learning new technologies",
    "about.photo": "Photo",
    "about.backgroundTitle": "Background / Education",
    "about.timelineOneDate": "2024 - Now",
    "about.timelineOneTitle": "Computer Science / Programming",
    "about.timelineOneText": "Learning web development, databases, software development, and interactive programming.",
    "about.timelineTwoDate": "Projects",
    "about.timelineTwoTitle": "Personal and School Projects",
    "about.timelineTwoText": "Building websites, database applications, games, and interactive visual projects.",
    "about.interestsTitle": "Interests",
    "about.interestsText": "Web development, games, technology, and creative projects.",
    "about.valuesTitle": "Values",
    "about.valuesText": "Curiosity, improvement, creativity, and problem solving.",
    "about.quickFactsTitle": "Quick Facts",
    "about.quickFactsText": "I like learning by building real projects and improving them over time.",
    "about.downloadCv": "Download CV",
    "about.seeProjects": "See my projects",

    "goals.title": "My Goals",
    "goals.intro": "I want to keep improving as a developer by building practical projects, learning new technologies, and developing stronger problem-solving skills.",
    "goals.image": "Goals image",
    "goals.shortTitle": "Short-Term Goals",
    "goals.shortOne": "Finish the first version of this portfolio website.",
    "goals.shortTwo": "Add real project images and GitHub links.",
    "goals.shortThree": "Improve my HTML, CSS, and JavaScript skills.",
    "goals.longTitle": "Long-Term Goals",
    "goals.longOne": "Become more confident with full-stack development.",
    "goals.longTwo": "Build larger and more complete projects.",
    "goals.longThree": "Improve my ability to write clean and maintainable code.",
    "goals.currentTitle": "What I’m Working On Now",
    "goals.currentOne": "Creating my online profile website.",
    "goals.currentTwo": "Organizing my projects for GitHub.",
    "goals.currentThree": "Learning how to make a better user experience.",
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
    "goals.whyText": "These goals help me stay focused and give me a clear path for improving my technical skills. By building real projects, I can learn more effectively and show what I am capable of creating.",
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

    "skills.title": "Skills & Experience",
    "skills.intro": "Here are the main technologies, tools, and concepts I have worked with through school projects, personal projects, and practice.",
    "skills.image": "Skills image",
    "skills.mySkillsTitle": "My Skills",
    "skills.languagesTitle": "Programming Languages",
    "skills.webTitle": "Web Development",
    "skills.webOne": "Responsive layouts",
    "skills.webTwo": "Multi-page websites",
    "skills.webThree": "Forms and navigation",
    "skills.databaseTitle": "Databases",
    "skills.databaseOne": "Database design",
    "skills.databaseTwo": "Stored procedures",
    "skills.databaseThree": "Triggers",
    "skills.toolsTitle": "Tools & Technologies",
    "skills.experienceTitle": "Experience & Education",
    "skills.timelineOneDate": "School Projects",
    "skills.timelineOneTitle": "Programming and Web Development",
    "skills.timelineOneText": "Built projects using HTML, CSS, JavaScript, C#, SQL, ASP.NET, Unity, Canvas, and WebGL.",
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
    "skills.ctaText": "My projects page shows examples of how I use these technologies in real work.",
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
    "home.intro": "Je suis un étudiant intéressé par le développement web, la programmation, les bases de données et les projets interactifs.",
    "home.viewWork": "Voir mes projets",
    "home.aboutMe": "À propos de moi",
    "home.goalsTitle": "Objectifs",
    "home.goalsText": "Mon objectif est de continuer à améliorer mes compétences en créant des projets pratiques et en apprenant de nouvelles technologies.",
    "home.learnMore": "En savoir plus",
    "home.whatIDoTitle": "Ce que je fais",
    "home.webDevTitle": "Développement web",
    "home.webDevText": "HTML, CSS, JavaScript, ASP.NET et mises en page adaptatives.",
    "home.databaseTitle": "Bases de données",
    "home.databaseText": "SQL, conception de bases de données, procédures stockées et gestion des données.",
    "home.interactiveTitle": "Projets interactifs",
    "home.interactiveText": "Unity, WebGL, systèmes de jeu et projets visuels interactifs.",
    "home.featuredProjects": "Projets en vedette",
    "home.viewAllProjects": "Voir tous les projets",

    "about.title": "À propos de moi",
    "about.subtitle": "Esprit curieux. Résolution de problèmes. Toujours en apprentissage.",
    "about.profilePhoto": "Photo de profil",
    "about.introTitle": "Salut, moi c’est Samuel.",
    "about.introText": "Je m’intéresse à la programmation, au développement web, aux bases de données et aux projets interactifs. J’aime créer des projets qui combinent logique, design et résolution de problèmes.",
    "about.factOne": "Basé au Canada",
    "about.factTwo": "Intéressé par le développement web et logiciel",
    "about.factThree": "Toujours en train d’apprendre de nouvelles technologies",
    "about.photo": "Photo",
    "about.backgroundTitle": "Parcours / Éducation",
    "about.timelineOneDate": "2024 - Maintenant",
    "about.timelineOneTitle": "Informatique / Programmation",
    "about.timelineOneText": "Apprentissage du développement web, des bases de données, du développement logiciel et de la programmation interactive.",
    "about.timelineTwoDate": "Projets",
    "about.timelineTwoTitle": "Projets personnels et scolaires",
    "about.timelineTwoText": "Création de sites web, d’applications avec bases de données, de jeux et de projets visuels interactifs.",
    "about.interestsTitle": "Intérêts",
    "about.interestsText": "Développement web, jeux, technologie et projets créatifs.",
    "about.valuesTitle": "Valeurs",
    "about.valuesText": "Curiosité, amélioration, créativité et résolution de problèmes.",
    "about.quickFactsTitle": "Faits rapides",
    "about.quickFactsText": "J’aime apprendre en créant de vrais projets et en les améliorant au fil du temps.",
    "about.downloadCv": "Télécharger le CV",
    "about.seeProjects": "Voir mes projets",

    "goals.title": "Mes objectifs",
    "goals.intro": "Je veux continuer à m’améliorer comme développeur en créant des projets pratiques, en apprenant de nouvelles technologies et en développant de meilleures compétences en résolution de problèmes.",
    "goals.image": "Image des objectifs",
    "goals.shortTitle": "Objectifs à court terme",
    "goals.shortOne": "Terminer la première version de ce site portfolio.",
    "goals.shortTwo": "Ajouter de vraies images de projets et des liens GitHub.",
    "goals.shortThree": "Améliorer mes compétences en HTML, CSS et JavaScript.",
    "goals.longTitle": "Objectifs à long terme",
    "goals.longOne": "Devenir plus à l’aise avec le développement full-stack.",
    "goals.longTwo": "Créer des projets plus grands et plus complets.",
    "goals.longThree": "Améliorer ma capacité à écrire du code propre et facile à maintenir.",
    "goals.currentTitle": "Ce sur quoi je travaille maintenant",
    "goals.currentOne": "Créer mon site web de profil en ligne.",
    "goals.currentTwo": "Organiser mes projets sur GitHub.",
    "goals.currentThree": "Apprendre à créer une meilleure expérience utilisateur.",
    "goals.roadmapTitle": "Feuille de route des objectifs",
    "goals.stepOneTitle": "Fondation",
    "goals.stepOneText": "Créer les pages de base, la navigation, la structure et la mise en page.",
    "goals.stepTwoTitle": "Contenu",
    "goals.stepTwoText": "Ajouter les informations personnelles, les descriptions de projets, les compétences et les objectifs.",
    "goals.stepThreeTitle": "Design",
    "goals.stepThreeText": "Améliorer le style visuel, l’espacement, les couleurs et l’adaptation aux écrans.",
    "goals.stepFourTitle": "Publication",
    "goals.stepFourText": "Héberger le site avec GitHub Pages et continuer à l’améliorer.",
    "goals.whyTitle": "Pourquoi ces objectifs sont importants",
    "goals.whyText": "Ces objectifs m’aident à rester concentré et me donnent une direction claire pour améliorer mes compétences techniques. En créant de vrais projets, je peux apprendre plus efficacement et montrer ce que je suis capable de créer.",
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

    "skills.title": "Compétences et expérience",
    "skills.intro": "Voici les principales technologies, outils et notions avec lesquels j’ai travaillé dans mes projets scolaires, mes projets personnels et ma pratique.",
    "skills.image": "Image des compétences",
    "skills.mySkillsTitle": "Mes compétences",

    "skills.languagesTitle": "Langages de programmation",
    "skills.webTitle": "Développement web",
    "skills.webOne": "Mises en page adaptatives",
    "skills.webTwo": "Sites web multipages",
    "skills.webThree": "Formulaires et navigation",
    "skills.databaseTitle": "Bases de données",
    "skills.databaseOne": "Conception de bases de données",
    "skills.databaseTwo": "Procédures stockées",
    "skills.databaseThree": "Déclencheurs",
    "skills.toolsTitle": "Outils et technologies",
    "skills.experienceTitle": "Expérience et éducation",
    "skills.timelineOneDate": "Projets scolaires",
    "skills.timelineOneTitle": "Programmation et développement web",
    "skills.timelineOneText": "Création de projets avec HTML, CSS, JavaScript, C#, SQL, ASP.NET, Unity, Canvas et WebGL.",
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
    "skills.strengthThreeText": "J’accorde de l’importance à la structure, à l’organisation et au bon fonctionnement des projets.",
    "skills.ctaTitle": "Vous voulez voir ces compétences en action?",
    "skills.ctaText": "Ma page de projets montre des exemples de l’utilisation de ces technologies dans des réalisations concrètes.",
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

    "footer.connect": "Restons en contact!"
  }
};

function applyTheme(theme) {
  document.body.classList.remove("theme-basic", "theme-light", "theme-dark", "theme-blue", "theme-beige");
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

    applyLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
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
  }
});