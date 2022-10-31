const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toogleDesktopMenu);

function toogleDesktopMenu(){
    console.log('click');
if (desktopMenu.classList.contains){
    desktopMenu.classList.remove('.inactive')
} else {
    desktopMenu.classList.add('.inactive');
}
};