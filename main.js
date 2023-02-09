const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');


menuEmail.addEventListener('click', toggleDesktop)

function toggleDesktop (){
    console.log('click')
    desktopMenu.classList.toggle('inactive');
}

const burger = document.querySelector('.menu')
const movileMenu = document.querySelector('.mobile-menu')

burger.addEventListener('click', toggleMovileMenu)

function toggleMovileMenu(){
    console.log('burger click')
    movileMenu.classList.toggle('inactive')

}

