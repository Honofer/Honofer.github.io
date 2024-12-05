// Toggle dark mode
const toggleSwitch = document.getElementById('toggle-switch');
const body = document.body;

toggleSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Toggle responsive menu
function myMenuFunction() {
    const navMenu = document.getElementById('myNavMenu');
    navMenu.classList.toggle('active');
}

// Close the menu when clicking outside
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('myNavMenu');
    if (!navMenu.contains(event.target) && !event.target.matches('.nav-menu-btn *')) {
        navMenu.classList.remove('active');
    }
});