const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLine = document.querySelector('mobile-menu ul:nth-child(1)');
const menuShopppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuShopppingCartIcon.addEventListener('click', toggleShoppingCartMenu);

function toggleDesktopMenu() {
    const isShoppingCartMenuClosed = shoppingCartMenu.classList.contains('inactive');
    const isMenuEmailClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuOpen = mobileMenu.classList.contains('active');

    if (!isShoppingCartMenuClosed) {
        shoppingCartMenu.classList.add('inactive')
    }

    if (isMobileMenuOpen) {
        mobileMenu.classList.remove('active');
        mobileMenuLine.classList.remove('active');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShoppingCartMenuClosed = shoppingCartMenu.classList.contains('inactive');
    const isMenuEmailClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuOpen = mobileMenu.classList.contains('active');

    if (!isShoppingCartMenuClosed) {
        shoppingCartMenu.classList.add('inactive');
    }

    if (!isMenuEmailClosed) {
        desktopMenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('active');
    mobileMenuLine.classList.toggle('active');
}

function toggleShoppingCartMenu() {
    const isShoppingCartMenuClosed = shoppingCartMenu.classList.contains('inactive');
    const isMenuEmailClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuOpen = mobileMenu.classList.contains('active');

    if (isMobileMenuOpen) {
        mobileMenu.classList.remove('active');
        mobileMenuLine.classList.remove('active');
    }

    if (!isMenuEmailClosed) {
        desktopMenu.classList.add('inactive')
    }
    
    if (shoppingCartMenu.classList.contains('inactive')) {
        shoppingCartMenu.classList.replace('inactive', 'active')
    } else if (shoppingCartMenu.classList.contains('active')) {
        shoppingCartMenu.classList.replace('active', 'inactive')
    }
}