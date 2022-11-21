let menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobilMenu= document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', function(e) {
    e.preventDefault();
    //con toogle lo que hacemos es quitar o poner la clase inactive
    menuDesktop.classList.toggle('inactive')
});


menuHamIcon.addEventListener('click', function(e) {
    e.preventDefault();
    mobilMenu.classList.toggle('inactive')
});



