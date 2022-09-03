let mail = document.getElementById('email');
let deskMenu = document.getElementById('menu-desktop');
let iconHamburguer = document.getElementById('hamburguer');
let mobileMenu = document.getElementById('menu-hamburguer');

mail.addEventListener('click', () =>{
    deskMenu.classList.toggle('inactive');
});

iconHamburguer.addEventListener('click', () => {
    iconHamburguer.classList.toggle('is-active');
    mobileMenu.classList.toggle('inactive');
});