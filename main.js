const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const menuHamIcon = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
    const isasideClosed = aside.classList.contains('inactive');
    
    if (!isasideClosed) {
        aside.classList.add('inactive');
    }
    mobilemenu.classList.toggle('inactive');

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isasideClosed = aside.classList.contains('inactive');

    if (!isasideClosed) {
        aside.classList.add('inactive');
    }
    mobilemenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const ismobilMenuClosed = mobilemenu.classList.contains('inactive');

    if (!ismobilMenuClosed) {
        mobilemenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}