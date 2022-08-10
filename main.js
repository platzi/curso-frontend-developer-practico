const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerMenu = document.querySelector('.menu');
const carritoMenuIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click',toggleDesktopMenu);
burgerMenu.addEventListener('click',toggleMobileMenu);
carritoMenuIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
   
        let emailNavbar='desktopMenu';
        closeWindows(emailNavbar);
}

function toggleMobileMenu(){
        let mobileMenu='mobileMenu';
        closeWindows(mobileMenu);
}

function toggleCarritoAside(){
        let carritoIcon='carritoDeCompras';
        closeWindows(carritoIcon);

}

function closeWindows(etiqueta){
    console.log(etiqueta);
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isAsideOpen = !aside.classList.contains('inactive');
    const isdesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    switch (etiqueta) {
        case 'desktopMenu':
            if (isAsideOpen) {
                aside.classList.add('inactive');
            }
            desktopMenu.classList.toggle('inactive');
            break;
        case 'carritoDeCompras':
            if (isdesktopMenuOpen) {
                desktopMenu.classList.add('inactive');
            }else if (isMobileMenuOpen) {
                mobileMenu.classList.add('inactive');
            }
            aside.classList.toggle('inactive');
            break;
        case 'mobileMenu':
            if (isAsideOpen) {
                aside.classList.add('inactive');
            }
            mobileMenu.classList.toggle('inactive');
            break
    }

}