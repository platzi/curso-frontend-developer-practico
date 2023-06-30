const nodoEmail = document.querySelector('li.navbar-email');
nodoEmail.addEventListener('click', toggleDesktopMenu );

function toggleDesktopMenu(){
    const nodoMenu = document.querySelector('div.desktop-menu');
    nodoMenu.classList.toggle('inactive');
}