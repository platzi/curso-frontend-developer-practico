const MenuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu'); 
const MenuCarritoIcon = document.querySelector('.navbar-shopping-cart'); 
const aside = document.querySelector('.product-detail'); 



MenuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobilrMenu);
MenuCarritoIcon.addEventListener('click', toggleMenuCarritoIcon);


function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');


    if (!isAsideClosed) {
        aside.classList.add('inactive');  
    }


    desktopMenu.classList.toggle('inactive');
}

function toggleMobilrMenu() {
    const isAsideClosed = aside.classList.contains('inactive');


    if (!isAsideClosed) {
        aside.classList.add('inactive');  
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleMenuCarritoIcon() {
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');


    if (!ismobileMenuClosed) {
     mobileMenu.classList.add('inactive');  
    }

    aside.classList.toggle('inactive');
}