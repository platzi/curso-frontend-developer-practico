const email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
email.addEventListener('click', toogleDesktopMenu);



function toogleDesktopMenu(){
    console.log("ve el click")
    desktopMenu.classList.toggle('inactive');
}
console.log("java funciona")