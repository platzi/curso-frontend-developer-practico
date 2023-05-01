const $ = (selector) => document.querySelector(selector); // Simplifica crear las constantes de los elementos html
const navbarEmail = $(".navbar-email");
const desktopMenu = $(".desktop-menu");
const hamMenu = $(".menu");
const mobileMenu = $(".mobile-menu");
const cart = $(".navbar-shopping-cart");
const productDetail = $(".product-detail");

navbarEmail.addEventListener('click', toggleDesktopMenu);
hamMenu.addEventListener('click', toggleMobileMenu);
cart.addEventListener('click', toggleProductDetail);

// Mostrar/ocultar menu de usuario en desktop y tablets grandes
function toggleDesktopMenu() {
    if (desktopMenu.classList.contains('inactive')) {
        desktopMenu.style.animation = "appear 600ms";
        if (productDetail.classList.contains('inactive')){
            desktopMenu.classList.toggle('inactive');
        } else {
            productDetail.classList.add('inactive');
            desktopMenu.classList.toggle('inactive');
        }
        
    } else {
        desktopMenu.style.animation = "disappear 600ms";
        setTimeout(function () {
            desktopMenu.classList.toggle('inactive');
        }, 590);
    }
}

// Mostrar/ocultar menu de usuario y de navegacion en mobile
function toggleMobileMenu() {
    if (mobileMenu.classList.contains('inactive')) {
        mobileMenu.style.animation = "slide-right 600ms";
        if (productDetail.classList.contains('inactive')) {
            mobileMenu.classList.toggle('inactive');
        } else {
            productDetail.style.animation = "unslide-left 600ms";
            setTimeout(function () {
                productDetail.classList.toggle('inactive');
            }, 590);
            mobileMenu.classList.toggle('inactive');
        }
    } else {
        mobileMenu.style.animation = "unslide-right 600ms";
        setTimeout(function () {
            mobileMenu.classList.toggle('inactive');
        }, 590);
    }
}

// Mostrar ocultar menu de carrito
function toggleProductDetail() {
    if (productDetail.classList.contains('inactive')) {
        productDetail.style.animation = "slide-left 600ms";
        if (mobileMenu.classList.contains('inactive')) {
            desktopMenu.classList.add('inactive');
            productDetail.classList.toggle('inactive');
        } else {
            mobileMenu.style.animation = "unslide-right 600ms";
            setTimeout(function () {
                mobileMenu.classList.toggle('inactive');
            }, 590);
            desktopMenu.classList.add('inactive');
            productDetail.classList.toggle('inactive');
        }
    } else {
        productDetail.style.animation = "unslide-left 600ms";
        setTimeout(function () {
            productDetail.classList.toggle('inactive');
        }, 590);
    }
}