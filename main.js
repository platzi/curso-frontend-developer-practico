var navbarEmail = document.querySelector('.navbar-email');

function toggleDesktopMenu(event){
    var desktopMenu = document.querySelector('.desktop-menu');

    desktopMenu.classList.toggle('inactive')
}

navbarEmail.addEventListener('click', toggleDesktopMenu);