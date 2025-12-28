// Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const menuContainer = document.getElementById('menu-container');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuToggle = document.querySelector('.group.cursor-pointer'); // The menu toggle button in header
    const closeMenuText = document.getElementById('close-menu-text');
    const openMenuText = document.getElementById('open-menu-text');
    
    // Toggle menu open/close
    function toggleMenu() {
        document.body.classList.toggle('menu-open');
    }
    
    // Close menu
    function closeMenu() {
        document.body.classList.remove('menu-open');
    }
    
    // If we find the header menu toggle button
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            toggleMenu();
        });
    }
    
    // Add click event to overlay to close menu
    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }
    
    // Add click events to close menu buttons
    if (closeMenuText) {
        closeMenuText.addEventListener('click', closeMenu);
    }
    
    // Add keyboard support (ESC key to close menu)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
            closeMenu();
        }
    });
    
    // Add click event to menu links to close menu when clicked
    const menuLinks = document.querySelectorAll('#menu-container a');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});