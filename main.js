 const menuEmail = document.querySelector(".navbar-email");
 const menudesktopMenu = document.querySelector(".desktop-menu");
 menuEmail.addEventListener('click', toogleDesktoMenu);

 function toogleDesktoMenu() {
    console.log ("Hola");
    menudesktopMenu.classList.toggle('inactive');
 }
