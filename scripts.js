document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Cambiar el botón de scroll según la posición de scroll
        const scrollDownBtn = document.getElementById('scrollDownBtn');
        if (window.scrollY > 100) {
            scrollDownBtn.classList.add('up');
            scrollDownBtn.querySelector('span').textContent = '↑';
        } else {
            scrollDownBtn.classList.remove('up');
            scrollDownBtn.querySelector('span').textContent = 'Scroll Down';
        }
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const closeBtn = document.querySelector('.close-btn');

    menuToggle.addEventListener('click', function() {
        const nav = document.querySelector('nav');
        
        if (!nav.classList.contains('menu-open')) {
            navLinks.style.display = 'block'; // Aseguramos que el display sea block antes de la animación
            setTimeout(() => {
                nav.classList.add('menu-open');
            }, 10); // Un pequeño retraso para asegurar que el cambio de display ocurra antes de la animación
        } else {
            nav.classList.remove('menu-open');
            navLinks.addEventListener('transitionend', function() {
                navLinks.style.display = 'none';
            }, { once: true }); // Cambiar a none después de la animación
        }
    });

    closeBtn.addEventListener('click', function() {
        const nav = document.querySelector('nav');
        
        nav.classList.remove('menu-open');
        navLinks.addEventListener('transitionend', function() {
            navLinks.style.display = 'none';
        }, { once: true }); // Cambiar a none después de la animación
    });

    // Actualizar el año en el pie de página
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();

    // Manejar el botón Scroll Down
    const scrollDownBtn = document.getElementById('scrollDownBtn');

    scrollDownBtn.addEventListener('click', function() {
        if (!scrollDownBtn.classList.contains('up')) {
            const aboutContent = document.getElementById('aboutContent');
            const offset = 100; // Ajusta este valor según sea necesario
            const yPosition = aboutContent.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
            scrollDownBtn.classList.add('up');
            scrollDownBtn.querySelector('span').textContent = '↑';
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            scrollDownBtn.classList.remove('up');
            scrollDownBtn.querySelector('span').textContent = 'Scroll Down';
        }
    });
});


const videoSources = [
    "photos/kicklouder/fb36be80-9916-48c9-8aeb-8d1d257ebd97.JPG",
    "/photos/inicio/IMG_5797.mp4",
    "/photos/inicio/MacBook Ventiladores.mp4",
    "/photos/inicio/Ben&Jerry2.mp4",
    "/photos/inicio/copy_1D45F435-81F8-4411-910B-BCD78D82F3F4.mp4"
    // Puedes añadir más rutas de video aquí
];

let currentVideoIndex = 0;
const videoElement = document.getElementById('background-video');

videoElement.src = videoSources[currentVideoIndex];
videoElement.addEventListener('ended', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    videoElement.src = videoSources[currentVideoIndex];
    videoElement.play();
});
