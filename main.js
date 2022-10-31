const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    console.log('si sirvo')
    if (desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.remove('inactive')
    }else{
        desktopMenu.classList.add('inactive')
    }
    
}


