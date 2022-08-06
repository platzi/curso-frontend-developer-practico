const navright = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const burgermenu = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const shoppingCard = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

navright.addEventListener('click', toggleDesktopmenu);
burgermenu.addEventListener('click', toggleMobileMenu);
shoppingCard.addEventListener('click', toggleProductDetail);

function  toggleDesktopmenu (){
    aside.classList.add('inactive');
    mobilemenu.classList.add('inactive');

    desktopmenu.classList.toggle('inactive');
}   


function  toggleMobileMenu (){
    aside.classList.add('inactive');
    desktopmenu.classList.add('inactive');

    mobilemenu.classList.toggle('inactive');
}   

function  toggleProductDetail (){
    mobilemenu.classList.add('inactive');
    desktopmenu.classList.add('inactive');

    aside.classList.toggle('inactive');
}  