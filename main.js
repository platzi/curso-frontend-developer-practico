const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu'); 



function toggleDesktopMenu() {
    console.log('Click');
    desktopmenu.classList.toggle('inactive');
}

menuEmail.addEventListener('click',toggleDesktopMenu);
