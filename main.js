const mainInactive = document.querySelector('.navbar-email');
const menusito = document.querySelector('.desktop-menu');
mainInactive.addEventListener('click',toggleDesktopMenu);

function toggleDesktopMenu(){
    console.log('click')
    menusito.classList.toggle('inactive');
}

console.log('click');