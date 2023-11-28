    const menuEmail = document.querySelector('.navbar-email');
    const desktopMenu = document.querySelector('.desktop-menu');
    const menuIcon = document.querySelector('.menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuEmail.addEventListener('click', ToggleDesktopMenu);
    menuIcon.addEventListener('click', ToggleMobileMenu);

    function ToggleDesktopMenu() {
        desktopMenu.classList.toggle('inactive');
    }

    function ToggleMobileMenu(){
        mobileMenu.classList.toggle('inactive');
    }