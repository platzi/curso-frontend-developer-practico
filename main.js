const buttonCorreo = document.querySelector('#navbar_email');

buttonCorreo.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    const desktopMenu = document.querySelector('#desktop_menu');
    desktopMenu.classList.toggle('inactive');
}
