const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu)

//ClassList.toggle quita o pone una clase
function toggleDesktopMenu(){
    console.log('hizo click')
    desktopMenu.classList.toggle('inactive')
}

console.log('JS funcionando')

