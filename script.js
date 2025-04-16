document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNavClose = document.querySelector('.mobile-nav-close');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const navLinks = document.querySelectorAll('.mobile-nav a'); // Select links inside mobile nav

    const openMobileNav = () => {
        mobileNav.classList.add('active');
        mobileNavOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling background
    };

    const closeMobileNav = () => {
        mobileNav.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    };

    if (mobileNavToggle && mobileNav && mobileNavOverlay && mobileNavClose) {
        mobileNavToggle.addEventListener('click', openMobileNav);
        mobileNavClose.addEventListener('click', closeMobileNav);
        mobileNavOverlay.addEventListener('click', closeMobileNav); // Close on overlay click

        // Close nav when a link is clicked (useful for single-page navigation)
        navLinks.forEach(link => {
            link.addEventListener('click', closeMobileNav);
        });
    }

    // Set current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

     // Optional: Add active class to nav links on scroll (more complex)
     // You might use Intersection Observer API for better performance
     const sections = document.querySelectorAll('main section[id]');
     const desktopNavLinks = document.querySelectorAll('.main-nav .nav-links a');

     window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Adjust threshold as needed (e.g., half the viewport height)
            const threshold = section.clientHeight / 2;
            const headerHeight = document.querySelector('header')?.offsetHeight || 0; // Get header height dynamically
            if (pageYOffset >= sectionTop - headerHeight - threshold) {
                current = section.getAttribute('id');
            }
        });

        desktopNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
     });

});