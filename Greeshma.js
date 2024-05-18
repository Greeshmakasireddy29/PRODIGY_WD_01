// JavaScript for adding interactivity to the navigation menu
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Adding hover effect for menu items
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff0';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = '';
    });
});
