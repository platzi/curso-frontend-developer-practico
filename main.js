document.addEventListener('DOMContentLoaded', () => {
    function toggleDesktopMenu() {
        desktopMenu.classList.toggle('inactive');
    }
    
    const desktopMenu = document.querySelector(".desktop-menu");
    const navEmail = document.querySelector(".navbar-email");
    navEmail.addEventListener('click', toggleDesktopMenu);
    desktopMenu.addEventListener('mouseleave', toggleDesktopMenu);
});

