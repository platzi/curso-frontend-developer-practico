const barraEmail=document.querySelector('.navbar-email')
const DesktopMenu=document.querySelector('.desktop-menu')



barraEmail.addEventListener('click', mostrarBarraEmail);

function mostrarBarraEmail(){
    DesktopMenu.classList.toggle('inactive');
}
console.log('funca')
