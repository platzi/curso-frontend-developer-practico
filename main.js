const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector(".mobile-menu");

const carritoIcon = document.querySelector('.navbar-shopping-cart');
const asideCarritoPodructDetail = document.querySelector(".product-detail")

function toggleDesktopMenu() {

    let ismobileMenuOpen = !mobileMenu.classList.contains('inactive');
    
    
    if (ismobileMenuOpen){
            
        mobileMenu.classList.add('inactive');

    }

    
    
    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu() {

    let isasideOpen = !asideCarritoPodructDetail.classList.contains('inactive');

    if (isasideOpen){
            
        asideCarritoPodructDetail.classList.add('inactive');

    }
    
    mobileMenu.classList.toggle('inactive');

}

function toggleCarritoAside() {

    let ismobileMenuOpen = !mobileMenu.classList.contains('inactive');

    let isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    
    
    if (ismobileMenuOpen){
            
        mobileMenu.classList.add('inactive');

    }

    if (isDesktopMenuOpen){
            
        desktopMenu.classList.add('inactive');

    }
    
    asideCarritoPodructDetail.classList.toggle('inactive');

}

/* function inactiveisactive() {

    if(mobileMenu.classList.contains('inactive')){

        menuEmail.addEventListener('click', toggleDesktopMenu);

    }else{

        desktopMenu.classList.add('inactive')

    }


} */

//window.addEventListener('click', inactiveisactive);

menuEmail.addEventListener('click', toggleDesktopMenu);

menuHamIcon.addEventListener('click', toggleMobileMenu);

carritoIcon.addEventListener('click', toggleCarritoAside);

//console.log(desktopMenu.classList);