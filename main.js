const menuMail = document.getElementById('menuMail');
const menuDesktop = document.querySelector('.desktop-menu');



menuMail.addEventListener('click',toggleMenu)


function toggleMenu() {
    menuDesktop.classList.toggle("inactive")
}