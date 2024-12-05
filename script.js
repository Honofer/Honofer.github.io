// Fonction pour basculer le menu réactif
function myMenuFunction() {
    const menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.toggle("responsive");
}

// Gestion du mode sombre
const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

// Effet de saisie pour les textes animés
var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Coder", "Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
});

// Initialisation de ScrollReveal
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

// Révélations des éléments
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social-icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

// Révélations pour les sections de gauche
const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

// Révélations pour les sections de droite
const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });

// Gestion des liens actifs lors du défilement
const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);