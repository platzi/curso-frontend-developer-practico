const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


// const menuMobileButton = document.querySelector('.email');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritAside);


// menuMobileButton.addEventListener('click', toggleDesktopMenu);


function toggleDesktopMenu(){
    console.log('func toggle Menu');
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleMobileMenu(){
    console.log('func toggle Menu Mobile');
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleCarritAside(){
    console.log('func toggle Aside');
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}
