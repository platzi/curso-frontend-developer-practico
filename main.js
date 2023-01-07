const email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobilMenu = document.querySelector('.mobile-menu');
const burgerImg = document.querySelector('.menu');
const cartContents = document.querySelector('.product-detail')
const carrito = document.querySelector('.navbar-shopping-cart')

email.addEventListener('click', toogleDesktopMenu);
burgerImg.addEventListener('click',toogleMobilMenu)
carrito.addEventListener('click',toogleCartContens);


function toogleDesktopMenu(){   
    cartContents.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}
function toogleMobilMenu(){
    cartContents.classList.add('inactive');
    mobilMenu.classList.toggle('inactive');
}

function toogleCartContens(){
    desktopMenu.classList.add('inactive');
    mobilMenu.classList.add('inactive');
    cartContents.classList.toggle('inactive');
}