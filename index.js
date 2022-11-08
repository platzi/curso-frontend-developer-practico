console.log('connected');

// get elements of the html.
mailButton = document.getElementById('email');
AccountMenu = document.getElementById('accountmenu');
hamMenu = document.getElementById('hamMenu');
mobileMenu = document.getElementById('mobileMenu');
shoppingCart = document.getElementById('shoppingCart')
asideMen = document.getElementById('carAside');

//create events listeners
mailButton.addEventListener('click', toggleMenu);
hamMenu.addEventListener('click', toggleMobile);
shoppingCart.addEventListener('click', toggleShoppingCart);

//create functions.
function toggleMenu() {
    AccountMenu.classList.toggle('inactive');
}

function toggleMobile() {
    let isShoppingCarClose = asideMen.classList.contains('inactive');
    
    if (!isShoppingCarClose) {
        asideMen.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    let isMobileMenuClose = mobileMenu.classList.contains('inactive')

    if (!isMobileMenuClose) {
        mobileMenu.classList.toggle('inactive');
    }
    asideMen.classList.toggle('inactive');
}