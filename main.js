//btn claire/sombre 
const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click', () =>{
    toggleIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
});



// Dictionnaire des traductions
const translations = {
    en: {
        "logo": "Portfolio.",
        "nav-home": "Home",
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-portfolio": "Portfolio",
        "nav-contact": "Contact",
        "home-intro": "Hello, I am",
        "home-description": "I'm 20 years old and currently a second-year student pursuing a Bachelor of Technology (BUT) in Computer Science in Annecy, specializing in Data Administration, Management, and Exploitation (Track C). I have a strong interest in databases and business intelligence tools.",
        "btn-download-cv": "Download CV",
        "profession-1": "Web Developer",
        "profession-2": "Data Exploitation",
        "profession-3": "Business Analyst",
        "profession-4": "Data Analyst", 
        "portfolio-heading": "Latest Projects",
        "education-title": "My Education",
        "university": "University",
        "education-but": "BUT INFO",
        "education-spe": "Technical Bachelor's Degree in computer science",
        "education-where": "University of Savoy / IUT Annecy, France",
        "high-school-title": "High School",
        "education-but-2": "French Baccalaureate",
        "education-spe-2": "High School diploma specialized in science technlogy of laboratory",
        "education-where-2": "Jean Monnet High School / Annemasse, France",
        "languages-title": "Languages I Speak",
        "L-French": "French",
        "L-Turkish": "Turkish",
        "L-English": "English",
        "L-Korean": "Korean",
        "L-Spanish": "Spanish",
        "my-skills": "My Skills",
        "about-hi" : "Hi, I'm Here To Help Your Next Project !",
        "about-p" : "I am a passionate Computer Science student with a strong interest in web development, data management, and system analysis. I am eager to apply my skills and knowledge to solve real-world challenges and contribute to exciting projects.",
        "about-btn" : "Read More",
        "technical-skills" :"Technical skills",
        "soft-skills" :"Soft skills",
        "soft-1": "Creativity",
        "soft-2": "Commuication",
        "soft-3": "Productivity",
        "soft-4": "Teamwork",
        "my-services" : "My Services",
        "services-1" : "Web Development",
        "services-2" : "Data Management and Analysis",
        "services-3" : "Virtual Machine Setup",
        "services-p1" : "I can design and develop responsive websites using HTML, CSS, JavaScripts. I also work with backend technologies like Node.js or PHP and databases such as MySQL or MongoDB.",
        "services-p2" : "I help organize and analyze large datasets using tools like SQL, Python, and Excel. I can create databases, perform data extraction, and generate reports to support business decision-making.",
        "services-p3" : "I can set up and manage virtual machines (VMs) to optimize IT resources. Using tools like VMware or VirtualBox, I can create isolated environments for testing, development, or server management.",  
        "latest-projet" :"Latest Projects",
        "project-1" : "Group project: develop a website using Laravel, working as a team of five.",
        "project-2" : "UGUR: A Unity game focused on completing challenges and objectives within a set time.",
        "project-3" : "Slice Fruit: A game where players slice fruits within a time limit to score points.",
        "project-4" : "Phaser TD: A class project using Phaser to create a simple game, applying concepts like animations, interactions, and game logic.",
        "project-5" : "Botanic: Group project to develop a desktop application using WPF and C#, focusing on creating an interactive and user-friendly interface.",
        "project-6" : "RaspberryPi-3: Create a guide for setting up the Raspberry Pi 3, covering SD card preparation, OS installation, and network setup.",
        "project-btn" : "See Project",
        "my-interest" : "My Interests",
        "interest-1" : "Sport",
        "interest-2" : "Draw",
        "interest-3" : "Watch series",
        "interest-4" : "To Drive",
        "contact" :"Contact Me!",
        "contact-info" : "Contact Information",
        "contact-info-1" : "Phone : +33(0) 7 67 36 63 01" ,
        "contact-info-2" : "Email : Feyza.Tinastepe@etu.univ-smb.fr",
        "contact-info-3" : "Address : 74100 Vile-La-Grand, France",
        "text-1" : "Full Name can't be blank",
        "text-2" : "Email Address can't be blank",
        "text-3" : "Phone Number can't be blank",
        "text-4" : "Subject can't be blank",
        "text-5" : "Message can't be blank",
        "text-6" : "Send Message",
        "field-1" : "Full Name",
        "field-2" :"Email Address",
        "field-3" : "Phone Number",
        "field-4" :"Subject",
        "copy" : "Copyright &copy by Feyza Tinastepe | All Rights Reserved"
    },
    fr: {
        "logo": "Portfolio.",
        "nav-home": "Accueil",
        "nav-about": "À Propos",
        "nav-skills": "Compétences",
        "nav-portfolio": "Portfolio",
        "nav-contact": "Contact",
        "home-intro": "Bonjour, je suis",
        "home-description": "J'ai 19 ans et je suis actuellement étudiante en deuxième année d'une Bachelore de Technologie (BUT) en Informatique à Annecy, spécialité Administration, Gestion et Exploitation des Données (Parcours C). J'ai un fort intérêt pour les bases de données et les outils de business intelligence.",
        "btn-download-cv": "Télécharger le CV",
        "profession-1": "Développeur Web",
        "profession-2": "Exploitation De Données",
        "profession-3": "Web Developer",
        "profession-4": "Analyse De Données",
        "portfolio-heading": "Derniers Projets",
        "education-title": "Mes Educations",
        "university": "Université",
        "education-but": "BUT INFO",
        "education-spe": "Bachelor technique en informatique",
        "education-where": "Univertsité Savoie Mont-Blanc / IUT d'Annecy, France",
        "high-school-title": "High School", 
        "education-but-2": "Baccaleauréat Français",
        "education-spe-2": "Baccaleauréat Technologique spécialisées en sciences techniques de laboratoire",
        "education-where-2": "Lycée Jean Monnet / Annemasse, France",
        "languages-title": "Les Langues que je parle",
        "L-French": "Français",
        "L-Turkish": "Turc",
        "L-English": "Anglais",
        "L-Korean": "Coréen",
        "L-Spanish": "Espagnol",
        "my-skills": "Mes Skills",
        "about-hi" : "Bonjour, je suis là pour vous aider dans votre prochain projet !",
        "about-p" : "Je suis un étudiant passionné en informatique avec un fort intérêt pour le développement Web, la gestion de données et l'analyse de systèmes. Je suis impatient d'appliquer mes compétences et mes connaissances pour résoudre des défis du monde réel et contribuer à des projets passionnants.",
        "about-btn" : "En savoir plus",
        "technical-skills" :"Compétences techniques",
        "soft-skills" :"Compétences générales",
        "soft-1": "Créativité",
        "soft-2": "Commuication",
        "soft-3": "Productivité",
        "soft-4": "Travail d'équipe",
        "my-services" : "Mes Sercvices",
        "services-1" : "Développement Web",
        "services-2" : "Gestion et analyse des données",
        "services-3" : "Configuration de la machine virtuelle",
        "services-p1" : "Je peux concevoir et développer des sites Web réactifs en utilisant HTML, CSS et JavaScript. Je travaille également avec des technologies backend comme Node.js ou PHP et des bases de données comme MySQL ou MongoDB.",
        "services-p2" :"J'aide à organiser et analyser de grands ensembles de données à l'aide d'outils tels que SQL, Python et Excel. Je peux créer des bases de données, effectuer des extractions de données et générer des rapports pour soutenir la prise de décision commerciale.",
        "services-p3" : "Je peux configurer et gérer des machines virtuelles (VM) pour optimiser les ressources informatiques. À l'aide d'outils comme VMware ou VirtualBox, je peux créer des environnements isolés pour les tests, le développement ou la gestion des serveurs.",
        "latest-projet" :"Derniers projets",
        "project-1" : "Projet de groupe : développer un site internet sous Laravel, en équipe de cinq personnes.",
        "project-2" : "UGUR : un jeu Unity axé sur la réalisation de défis et d'objectifs dans un délai déterminé.",
        "project-3" : "Slice Fruit : Un jeu dans lequel les joueurs coupent des fruits dans un délai imparti pour marquer des points.",
        "projetc-4" : "Phaser TD : un projet de classe utilisant Phaser pour créer un jeu simple, appliquant des concepts tels que les animations, les interactions et la logique du jeu.",
        "project-5" : "Botanic : Projet de groupe visant à développer une application bureautique utilisant WPF et C#, axé sur la création d'une interface interactive et conviviale.",
        "project-6" : "RaspberryPi-3 : créez un guide pour la configuration du Raspberry Pi 3, couvrant la préparation de la carte SD, l'installation du système d'exploitation et la configuration du réseau.",
        "project-btn" : "Voir le projet",
        "my-interest" : "Mes centres d'intérêt",
        "interest-1" : "Sport",
        "interest-2" : "Dessiner",
        "interest-3" : "Regarder des séries",
        "interest-4" : "Conduire",
        "contact" :"Me Contacter!",
        "contact-info" : "Coordonnées",
        "contact-info-1" : "Téléphone : +33(0) 7 67 36 63 01" ,
        "contact-info-2" : "Adresse Mail  : Feyza.Tinastepe@etu.univ-smb.fr",
        "contact-info-3" : "Adresse : 74100 Vile-La-Grand, France",
        "text-1" : "Le nom complet ne peut pas être vide",
        "text-2" : "L'adresse e-mail ne peut pas être vide",
        "text-3" : "Le numéro de téléphone ne peut pas être vide",
        "text-4" : "Le sujet ne peut pas être vide",
        "text-5" : "Le message ne peut pas être vide",
        "text-6" : "Envoyer un message",
        "field-1" : "Nom et Prénom",
        "field-2" :"Mail",
        "field-3" : "Numéro de téléphone",
        "field-4" :"Sujet",
        "copy" : "Copyright &copie par Feyza Tinastepe | Tous droits réservés"
    },
 
};

// fonction pour changer la langue
function changeLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.getAttribute("data-key");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

document.querySelectorAll(".language-section a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const lang = link.getAttribute("data-lang");
        changeLanguage(lang);
    });
});

//menu navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*scroll section active link*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
/*navbar*/ 
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

//enlever le menu 
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};
/*contact*/ 
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail(){
    const bodyMesssage = 'Full Name : ' + fullName.value + '<br>Email : ' + email.value + '<br>Phone Number : ' + phone.value + '<br>Message : ' + mess.value;
   
    Email.send({
    SecureToken :"d5f6666d-19e1-4fdb-b1d5-f14ea964d974",
    To : 'tinastepefeyza@gmail.com',
    From : "tinastepefeyza@gmail.com",
    Subject : subject.value,
    Body : bodyMesssage
}).then(
  message => {
    if (message == "OK"){
        Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success"
        });
    }
  }
);
}

function checkInputs(){
    const items = document.querySelectorAll(".item");

    for (const item of items){
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != ""){
            checkEmail();
        }
        items[1].addEventListener("keyup", () => {
            checkEmail();
        })
        item.addEventListener("keyup", () =>{
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
   const errorTxtEmail = document.querySelector(".error-txt.email");
   
    if(!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != ""){
            errorTxtEmail.innerText = "Enter a valid email address";
        }
        else {
            errorTxtEmail.innerText = "Email Address can't be blank"
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();   
    
    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")){
        sendEmail();

        form.reset();
        return false;
    }
});
//scroll reveal
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});
ScrollReveal().reveal(' .heading', { origin: 'top' });
ScrollReveal().reveal('.services-container, .projects-box, .contact form, .container1, .interests-container, .contact-container, .timeline',{ origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img, .Technical-bars',{ origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content, .radial-bars, .language-list ,.home, .profession-box .profession-container .overlay',{ origin: 'right' });
