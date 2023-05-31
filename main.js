const menuEmail = document.querySelector('.navbar-email');
const menuHanIco = document.querySelector('.menu');
const menuCarIco = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const movileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHanIco.addEventListener('click', toggleMovileMenu);
menuCarIco.addEventListener('click', toggleCarMenu);

function toggleDesktopMenu(){
    const isCarMenu = aside.classList.contains('inactive');

    if(!isCarMenu){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMovileMenu(){
    const isCarMenu = aside.classList.contains('inactive');

    if(!isCarMenu){
        aside.classList.add('inactive');
    }

    movileMenu.classList.toggle('inactive');
}

function toggleCarMenu(){
    const isMovileMenuClose = movileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

    if(!isMovileMenuClose){
        movileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClose){
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}