// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para los enlaces de navegación interna
    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Ajustar por la altura del header
                behavior: 'smooth'
            });
        }
    }

    // Funcionalidad básica para el formulario de contacto (solo alerta, necesitará backend real)
    const contactForm = document.querySelector('.formulario-contacto');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensaje enviado (funcionalidad de backend necesaria para enviar realmente el correo)');
            this.reset(); // Limpiar el formulario
        });
    }

    // Posible funcionalidad para resaltar el enlace activo en la navegación al hacer scroll
    const sections = document.querySelectorAll('section');
    const navLinksHeader = document.querySelectorAll('header nav a');

    function highlightNavLink() {
        let scrollY = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - document.querySelector('header').offsetHeight;
            const sectionHeight = section.offsetHeight;
            const navLink = navLinksHeader[index];

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinksHeader.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    // Opcional: Ejecutar la función al cargar y al hacer scroll
    // highlightNavLink(); // Descomentar si quieres esta funcionalidad
    // window.addEventListener('scroll', highlightNavLink); // Descomentar si quieres esta funcionalidad
});