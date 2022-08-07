const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carButtonIcon = document.querySelector('.navbar-shopping-cart');
const asideProductDetail = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
    function toggleDesktopMenu(){
        desktopMenu.classList.toggle('inactive');
    }

burgerMenuIcon.addEventListener('click', toggleMobileMenu);
    function toggleMobileMenu(){
        const isProductDetail = asideProductDetail.classList.contains('inactive');

        if(!isProductDetail){
            asideProductDetail.classList.add('inactive');
        }
        mobileMenu.classList.toggle('inactive');
    }

carButtonIcon.addEventListener('click', toggleProductDetail);
    function toggleProductDetail(){
        const isMobileMenuOpen = mobileMenu.classList.contains('inactive');
        const isDesktopMenuOpen = desktopMenu.classList.contains('inactive');

        if(!isMobileMenuOpen){
            mobileMenu.classList.add('inactive');
        }else if(!isDesktopMenuOpen){
            desktopMenu.classList.add('inactive');
        }
        asideProductDetail.classList.toggle('inactive');
    }