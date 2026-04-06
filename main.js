/* =========================================
   1. DARK/LIGHT MODE
   ========================================= */
const toggleIcon = document.querySelector('.toggle-icon');
function updateIcon(isDark) {
    if (isDark) {
        toggleIcon.classList.remove('bx-moon');
        toggleIcon.classList.add('bx-sun'); // Show sun when in dark mode
    } else {
        toggleIcon.classList.remove('bx-sun');
        toggleIcon.classList.add('bx-moon'); // Show moon when in light mode
    }
}


// Gestion du click
if (toggleIcon) {
    toggleIcon.addEventListener('click', () => {
        // Bascule l'icône (Soleil <-> Lune)
        toggleIcon.classList.toggle('bx-sun');
        // Bascule la classe sur le body
        document.body.classList.toggle('dark-mode');
        
        // Sauvegarder la préférence
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// Appliquer le thème sauvegardé au chargement
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (toggleIcon) toggleIcon.classList.add('bx-sun');
}


/* =========================================
   2. DICTIONNAIRE DE TRADUCTION
   ========================================= */
const translations = {
    en: {
        "logo": "Portfolio.",
        "nav-home": "Home",
        "nav-about": "About",
        "nav-education": "Education",
        "nav-skills": "Skills",
        "nav-portfolio": "Portfolio",
        "nav-dashboard": "Dashboard",
        "nav-contact": "Contact",
        
        // HOME
        "home-intro": "Hello, I am",
        "home-description": "I'm 20 years old and currently a second-year student pursuing a Bachelor of Technology (BUT) in Computer Science in Annecy...",
        
        // ABOUT
        "about-greeting": "HI THERE!",
        "about-name": "I'M <span>FEYZA</span>",
        "badge-data": "DATA STUDENT",
        "badge-design": "DESIGN ENTHUSIAST",
        "about-desc": "I am a 21-year-old student currently pursuing a <strong>Bachelor's degree in Computer Science (AGED)</strong>. My journey began with a scientific background (2020-2023), where I developed a rigorous analytical mindset that I now apply to data analysis and software development. I am also passionate about sports (Basketball, Volleyball) and graphic design.",
        "btn-contact-me": "CONTACT ME",
        "btn-download-cv": "DOWNLOAD CV",
        
        // EDUCATION
        "edu-hs-date": "2020 - 2023",
        "edu-hs-title": "High School Diploma (STL)",
        "edu-hs-place": "Jean Monnet High School, Annemasse",
        "edu-hs-desc": "Science and Laboratory Technologies. Graduated with Honors (Mention Bien).",
        "edu-but1-date": "2023 - 2025",
        "edu-but1-title": "Bachelor of Technology in CS",
        "edu-but1-place": "IUT Annecy, France",
        "edu-but1-desc": "<strong>Initial Training</strong>. Acquisition of fundamentals in software development, web technologies, and databases.",
        "edu-pixel-date": "March - June 2025",
        "edu-pixel-title": "Data Internship",
        "edu-pixel-place": "PixelRaise, Fillinges",
        "edu-pixel-desc": "Development of web solutions and data processing automation.",
        "edu-but2-date": "2025 - Present",
        "edu-but2-title": "Bachelor of Technology in CS",
        "edu-but2-place": "Tetras Training Center, Annecy",
        "edu-but2-desc": "Specialization in <strong>AGED</strong> (Data Administration, Management, and Exploitation) via work-study program.",
        "edu-work-date": "2025 - Present",
        "edu-work-title": "Data Apprentice",
        "edu-work-place": "Annemasse Agglo, Ville-La-Grand",
        "edu-work-desc": "Applying data management and governance within a local government authority.",

        // DASHBOARD
        "dash-title": "Data <span>Analytics</span>",
        "dash-subtitle": "Statistical analysis of my technical profile and achievements.",
        "kpi-bigdata": "Big Data Projects",
        "kpi-ai": "AI Models",
        "kpi-total": "Total Projects",
        "kpi-lang": "Languages",
        "chart-radar-title": "<i class='bx bx-radar'></i> Data Spectrum",
        "chart-polar-title": "<i class='bx bx-atom'></i> Tech Ecosystem",
        "chart-bar-title": "<i class='bx bx-bar-chart-alt-2'></i> Technical Mastery Level",

        // SKILLS
        "skills-title": "Technical <span>Dashboard</span>",
        "filter-all": "All",
        "filter-data": "Data & Analytics",
        "filter-dev": "Development",
        "filter-design": "Creative & CMS",
        "filter-tools": "Management",
        "lang-title": "<i class='bx bx-globe'></i> Languages",
        "lang-fr": "French",
        "lang-tr": "Turkish",
        "lang-en": "English",
        "lang-kr": "Korean",
        "lang-es": "Spanish",
        "lvl-native": "Native/Fluent",
        "lvl-b2": "B2 Upper Intermediate",
        "lvl-b1b2": "B1/B2 Intermediate",
        "lvl-b1": "B1 Lower Intermediate",
        "soft-title": "<i class='bx bx-star'></i> Soft Skills",
        "soft-creativity": "🎨 Creativity",
        "soft-comm": "📢 Communication",
        "soft-prod": "📈 Productivity",
        "soft-team": "🤝 Teamwork",

        // PROJECTS
        "proj-title": "My <span>Projects</span>",
        "proj-subtitle": "A selection of my work in Data, Web Development, and Software Engineering.",
        "btn-code": "Code",
        "btn-progress": "In Progress",
        "cat-bigdata": "Big Data & AI",
        "proj-imdb-title": "IMDb Sentiment Analysis",
        "proj-imdb-desc": "End-to-end decision-making architecture: Optimized SQL Server base (OLTP), Data Warehouse (OLAP), and AI models (NLP) for review sentiment analysis.",
        "cat-mining": "Data Mining",
        "proj-mba-title": "Market Basket Analysis",
        "proj-mba-desc": "E-commerce transaction analysis: data cleaning, descriptive statistics, and association rule extraction (Apriori algorithm).",
        "cat-graph": "Graph Database",
        "proj-neo-title": "Social Network Analysis",
        "proj-neo-desc": "Modeling and analysis of user interactions. Community detection and centrality calculations using Cypher queries.",
        "cat-de-bi": "Data Engineering & BI",
        "proj-off-title": "Open Food Facts Analytics",
        "proj-off-desc": "Full BI architecture (OLTP/OLAP). ETL pipeline via Knime, Power BI dashboards, and AI models for predictive analytics.",
        "cat-db": "Database & Analytics",
        "proj-sco-title": "Scodoc Management",
        "proj-sco-desc": "Academic data management: Full modeling (UML), SQL implementation on PostgreSQL, and Power BI reporting.",
        "cat-cyber": "Cybersecurity",
        "proj-sec-title": "Secure File Transfer",
        "proj-sec-desc": "Secure Python client-server system. Key exchange via RSA, file encryption using AES, and SHA-3 hashing.",
        "cat-web": "Web Development",
        "proj-hack-title": "Hackathon Annecy",
        "proj-hack-desc": "Group project: Development of the IAF website based on client requirements within a 48-hour deadline.",
        "cat-webapp": "Web App",
        "proj-uber-title": "Uber Project",
        "proj-uber-desc": "Development of an Uber clone website in a team of five, utilizing MVC architecture.",
        "cat-game": "Game Dev",
        "proj-ugur-title": "UGUR",
        "proj-ugur-desc": "A Unity-based game focused on completing challenges and objectives within a strict time limit.",
        "proj-slice-title": "Slice Fruit",
        "proj-slice-desc": "Arcade-style game where players slice falling fruit within a time limit to score points.",
        "cat-2d": "2D Game",
        "proj-phaser-title": "Phaser TD",
        "proj-phaser-desc": "Class project using the Phaser framework: implementing animations, interactions, and game logic.",
        "cat-desktop": "Desktop App",
        "proj-bot-title": "Botanic Management",
        "proj-bot-desc": "Desktop management application featuring an interactive and user-friendly interface.",
        "cat-hard": "Hardware & Guide",
        "proj-rpi-title": "Raspberry Pi 3 Guide",
        "proj-rpi-desc": "Detailed configuration guide: SD card preparation, OS installation, and network setup.",

        // CONTACT
        "contact-title": "Contact <span>Me!</span>",
        "contact-info-title": "Contact Information",
        "contact-info-sub": "Feel free to reach out to me for any opportunities or collaborations.",
        "contact-phone": "Phone:",
        "contact-email": "Email:",
        "contact-addr": "Address:",
        "contact-follow": "Follow me:",
        "form-title": "Send a Message",
        "ph-name": "Full Name",
        "ph-email": "Email Address",
        "ph-phone": "Phone Number",
        "ph-subject": "Subject",
        "ph-message": "Your message...",
        "btn-send": "Send",
        "copy": "Copyright &copy by Feyza Tinastepe | All Rights Reserved"
    },
    fr: {
        "logo": "Portfolio.",
        "nav-home": "Accueil",
        "nav-about": "À Propos",
        "nav-education": "Formation",
        "nav-skills": "Compétences",
        "nav-portfolio": "Portfolio",
        "nav-dashboard": "Tableau de Bord",
        "nav-contact": "Contact",

        // HOME
        "home-intro": "Bonjour, je suis",
        "home-description": "J'ai 20 ans et je suis actuellement étudiante en deuxième année d'une Bachelore de Technologie (BUT) en Informatique à Annecy...",
        
        // ABOUT
        "about-greeting": "SALUT !",
        "about-name": "JE SUIS <span>FEYZA</span>",
        "badge-data": "ÉTUDIANTE DATA",
        "badge-design": "PASSIONNÉE DE DESIGN",
        "about-desc": "J'ai 21 ans et je prépare actuellement un <strong>BUT Informatique (parcours AGED)</strong>. Mon parcours a débuté par une formation scientifique (2020-2023), où j'ai développé un esprit analytique rigoureux que j'applique aujourd'hui à l'analyse de données et au développement logiciel. Je suis également passionnée de sport (Basket, Volley) et de design graphique.",
        "btn-contact-me": "ME CONTACTER",
        "btn-download-cv": "TÉLÉCHARGER CV",

        // EDUCATION
        "edu-hs-date": "2020 - 2023",
        "edu-hs-title": "Baccalauréat STL",
        "edu-hs-place": "Lycée Jean Monnet, Annemasse",
        "edu-hs-desc": "Sciences et Technologies de Laboratoire. Obtention avec Mention Bien.",
        "edu-but1-date": "2023 - 2025",
        "edu-but1-title": "BUT Informatique",
        "edu-but1-place": "IUT Annecy, France",
        "edu-but1-desc": "<strong>Formation Initiale</strong>. Acquisition des fondamentaux en développement logiciel, technologies web et bases de données.",
        "edu-pixel-date": "Mars - Juin 2025",
        "edu-pixel-title": "Stage Data",
        "edu-pixel-place": "PixelRaise, Fillinges",
        "edu-pixel-desc": "Développement de solutions web et automatisation du traitement de données.",
        "edu-but2-date": "2025 - Présent",
        "edu-but2-title": "BUT Informatique (AGED)",
        "edu-but2-place": "Centre de formation Tetras, Annecy",
        "edu-but2-desc": "Spécialisation <strong>AGED</strong> (Administration, Gestion et Exploitation des Données) en alternance.",
        "edu-work-date": "2025 - Présent",
        "edu-work-title": "Apprentie Data",
        "edu-work-place": "Annemasse Agglo, Ville-La-Grand",
        "edu-work-desc": "Application de la gouvernance et de la gestion des données au sein d'une collectivité territoriale.",

        // DASHBOARD
        "dash-title": "Analyse <span>De Données</span>",
        "dash-subtitle": "Analyse statistique de mon profil technique et de mes réalisations.",
        "kpi-bigdata": "Projets Big Data",
        "kpi-ai": "Modèles IA",
        "kpi-total": "Total Projets",
        "kpi-lang": "Langues Parlées",
        "chart-radar-title": "<i class='bx bx-radar'></i> Spectre Data",
        "chart-polar-title": "<i class='bx bx-atom'></i> Écosystème Tech",
        "chart-bar-title": "<i class='bx bx-bar-chart-alt-2'></i> Niveau de Maîtrise Technique",

        // SKILLS
        "skills-title": "Tableau de Bord <span>Technique</span>",
        "filter-all": "Tous",
        "filter-data": "Data & Analytics",
        "filter-dev": "Développement",
        "filter-design": "Créatif & CMS",
        "filter-tools": "Gestion de Projet",
        "lang-title": "<i class='bx bx-globe'></i> Langues",
        "lang-fr": "Français",
        "lang-tr": "Turc",
        "lang-en": "Anglais",
        "lang-kr": "Coréen",
        "lang-es": "Espagnol",
        "lvl-native": "Langue Maternelle",
        "lvl-b2": "B2 Intermédiaire Sup.",
        "lvl-b1b2": "B1/B2 Intermédiaire",
        "lvl-b1": "B1 Intermédiaire Inf.",
        "soft-title": "<i class='bx bx-star'></i> Savoir-Être",
        "soft-creativity": "🎨 Créativité",
        "soft-comm": "📢 Communication",
        "soft-prod": "📈 Productivité",
        "soft-team": "🤝 Travail d'équipe",

        // PROJECTS
        "proj-title": "Mes <span>Projets</span>",
        "proj-subtitle": "Une sélection de mes travaux en Data, Développement Web et Logiciel.",
        "btn-code": "Code",
        "btn-progress": "En Cours",
        "cat-bigdata": "Big Data & IA",
        "proj-imdb-title": "Analyse de Sentiments IMDb",
        "proj-imdb-desc": "Architecture décisionnelle complète : Base SQL Server optimisée (OLTP), Entrepôt de données (OLAP) et modèles IA (NLP) pour l'analyse des avis.",
        "cat-mining": "Data Mining",
        "proj-mba-title": "Analyse du Panier",
        "proj-mba-desc": "Analyse de transactions E-commerce : nettoyage, statistiques descriptives et extraction de règles d'association (algorithme Apriori).",
        "cat-graph": "Base de Données Graphe",
        "proj-neo-title": "Analyse de Réseau Social",
        "proj-neo-desc": "Modélisation et analyse d'interactions utilisateurs. Détection de communautés et calculs de centralité via requêtes Cypher.",
        "cat-de-bi": "Data Engineering & BI",
        "proj-off-title": "Analytics Open Food Facts",
        "proj-off-desc": "Architecture BI complète (OLTP/OLAP). Pipeline ETL via Knime, tableaux de bord Power BI et modèles prédictifs.",
        "cat-db": "Base de Données & Analytics",
        "proj-sco-title": "Gestion Scodoc",
        "proj-sco-desc": "Gestion de données académiques : Modélisation complète (UML), implémentation SQL sur PostgreSQL et reporting Power BI.",
        "cat-cyber": "Cybersécurité",
        "proj-sec-title": "Transfert de Fichiers Sécurisé",
        "proj-sec-desc": "Système client-serveur Python sécurisé. Échange de clés RSA, chiffrement de fichiers AES et hachage SHA-3.",
        "cat-web": "Développement Web",
        "proj-hack-title": "Hackathon Annecy",
        "proj-hack-desc": "Projet de groupe : Développement du site web de l'IAF selon les besoins client dans un délai de 48 heures.",
        "cat-webapp": "App Web",
        "proj-uber-title": "Projet Uber",
        "proj-uber-desc": "Développement d'un clone du site Uber en équipe de cinq, utilisant l'architecture MVC.",
        "cat-game": "Dév Jeu Vidéo",
        "proj-ugur-title": "UGUR",
        "proj-ugur-desc": "Jeu sous Unity centré sur la réalisation de défis et d'objectifs dans un temps limité.",
        "proj-slice-title": "Slice Fruit",
        "proj-slice-desc": "Jeu d'arcade où les joueurs tranchent des fruits tombants dans un temps imparti pour marquer des points.",
        "cat-2d": "Jeu 2D",
        "proj-phaser-title": "Phaser TD",
        "proj-phaser-desc": "Projet de classe utilisant le framework Phaser : implémentation d'animations, d'interactions et de logique de jeu.",
        "cat-desktop": "App Bureau",
        "proj-bot-title": "Gestion Botanic",
        "proj-bot-desc": "Application de gestion de bureau dotée d'une interface interactive et conviviale.",
        "cat-hard": "Hardware & Guide",
        "proj-rpi-title": "Guide Raspberry Pi 3",
        "proj-rpi-desc": "Guide de configuration détaillé : préparation de la carte SD, installation de l'OS et configuration réseau.",

        // CONTACT
        "contact-title": "Contactez-<span>Moi !</span>",
        "contact-info-title": "Informations de Contact",
        "contact-info-sub": "N'hésitez pas à me contacter pour toute opportunité ou collaboration.",
        "contact-phone": "Téléphone :",
        "contact-email": "Email :",
        "contact-addr": "Adresse :",
        "contact-follow": "Suivez-moi :",
        "form-title": "Envoyer un Message",
        "ph-name": "Nom Complet",
        "ph-email": "Adresse Email",
        "ph-phone": "Numéro de Téléphone",
        "ph-subject": "Sujet",
        "ph-message": "Votre message...",
        "btn-send": "Envoyer",
        "copy": "Copyright &copy par Feyza Tinastepe | Tous droits réservés"
    }
};

/* =========================================
   3. LOGIQUE DE TRADUCTION
   ========================================= */
function changeLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.getAttribute("data-key");
        if (translations[lang] && translations[lang][key]) {
            // Si c'est un input ou textarea, on change le placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key]; 
            }
        }
    });
    // Sauvegarder la langue
    localStorage.setItem('lang', lang);
}

// Gestionnaire d'événement pour le select
const langSelect = document.querySelector(".language-select");
if (langSelect) {
    // 1. Charger la langue sauvegardée au démarrage
    const storedLang = localStorage.getItem('lang') || 'en';
    langSelect.value = storedLang;
    changeLanguage(storedLang);

    // 2. Changer la langue au click
    langSelect.addEventListener("change", (e) => {
        changeLanguage(e.target.value);
    });
}


/* =========================================
   4. MENU NAVBAR (MOBILE)
   ========================================= */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}


/* =========================================
   5. SCROLL SECTIONS & STICKY HEADER
   ========================================= */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('.header');

window.onscroll = () => {
    // Sticky Header
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }

    // Active Links
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                const targetLink = document.querySelector('header nav a[href*=' + id + ']');
                if (targetLink) targetLink.classList.add('active');
            });
        }
    });

    // Fermer le menu mobile au scroll
    if (menuIcon && navbar) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};


/* =========================================
   6. FORMULAIRE DE CONTACT (SMTP.js)
   ========================================= */
const form = document.querySelector(".contact-form");
if (form) {
    // Note: Assure-toi d'avoir ajouté id="name", id="email", etc. dans ton HTML
    const fullName = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const subject = document.getElementById("subject");
    const mess = document.getElementById("message");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Vérification simple
        if(fullName.value == "" || email.value == "" || mess.value == "") {
             Swal.fire({
                title: "Erreur!",
                text: "Veuillez remplir les champs obligatoires!",
                icon: "error"
            });
            return;
        }

        // Configuration du corps de l'email
        const bodyMessage = `Nom: ${fullName.value} <br> Email: ${email.value} <br> Tel: ${phone.value} <br> Sujet: ${subject.value} <br> Message: ${mess.value}`;

        // Envoi via SMTP.js
        // IMPORTANT : Remplace "TON_SECURE_TOKEN" par celui généré sur smtpjs.com
        Email.send({
            SecureToken : "TON_SECURE_TOKEN_ICI", 
            To : 'Feyza.Tinastepe@etu.univ-smb.fr', // Ton email
            From : "ton_email_smtp@gmail.com", // L'email configuré sur SMTPJS
            Subject : subject.value,
            Body : bodyMessage
        }).then(
          message => {
             if(message == "OK") {
                 Swal.fire({
                    title: "Succès!",
                    text: "Message envoyé avec succès!",
                    icon: "success"
                });
                form.reset();
             } else {
                 Swal.fire({
                    title: "Erreur!",
                    text: "Erreur lors de l'envoi: " + message,
                    icon: "error"
                });
             }
          }
        );
    });
}


/* =========================================
   7. SCROLL REVEAL (ANIMATIONS)
   ========================================= */
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    // Haut
    sr.reveal('.heading', { origin: 'top' });

    // Bas (J'ai ajouté .projects-grid et .contact-info-panel ici)
    sr.reveal('.services-container, .projects-box, .contact form, .kpi-grid, .charts-grid, .h-item, .skills-grid, .bottom-flex, .projects-grid, .contact-info-panel', { origin: 'bottom' });

    // Gauche
    sr.reveal('.home-content h1, .about-img img', { origin: 'left' });

    // Droite
    sr.reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
}