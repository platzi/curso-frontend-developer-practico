const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHaIcon = document.querySelector('.menu');

menuEmail.addEventListener('click',toggleDestopMenu);
menuHaIcon.addEventListener('click',toggleMobileMenu);

function toggleDestopMenu(){
    console.log('Click Email');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    console.log('Click Menu Mobile');
    mobileMenu.classList.toggle('inactive');
}

/* // Detect MediaQuery and place display none in menu mobile and menu hamburge

const mql = window.matchMedia('(max-width: 640px)');
const mql1 = window.matchMedia('(min-width: 641px)');

mql1.onchange = (e) => {
    if (e.matches) {
        console.log('This is a wide screen — more than 640px wide.');
        mobileMenu.style.display="none";
        mobileMenu.setAttribute('display:','none');
        console.log('display none at mobile menu');        
    }
}

mql.onchange = (e) => {
    if (e.matches) {
        console.log('This is a wide screen — less than 640px wide.');
        desktopMenu.style.display="none";
        console.log('display none at desktop menu');        
    }
}*/
