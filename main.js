const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

navbar_email.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    
    // if (desktop_menu.classList.length > 1) {
    //     desktop_menu.classList.remove('inactive');
    // } else {
    //     desktop_menu.classList.add('inactive');
    // }

    desktop_menu.classList.toggle('inactive');

    console.log(desktop_menu.classList);
}