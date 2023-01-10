const listItems = []
listItems.push(
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'TV',
        price: 1200,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'PC',
        price: 1220,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });

// SELECION DE LOS ELEMENTOS MEDIANTE UN QUERYSELECTOR 
const desktopMenu = document.querySelector(".desktop-menu");
const navbarEmail = document.querySelector(".navbar-email");
const burgerIconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const mainCarIcon = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector('.cards-container')
const asideCartConatiner = document.querySelector(".product-detail-cart-container");
const asideProductContainer = document.querySelector(".product-detail-container");
const iconCloseProductContainer = document.querySelector(".product-detail-close-container");

// ASIGNACION DE LOS EVENT LISTENERS 
navbarEmail.addEventListener("click", togggleShowDesktopMenu);
burgerIconMenu.addEventListener('click', togggleMobileMenu)
mainCarIcon.addEventListener('click', togggleCarAside)
iconCloseProductContainer.addEventListener('click', closeContainer)


// FUNCIONES DE ASIGNACION Y SELECION DE LAS CLASES

// CARRITO DE COMPRAS 
function togggleCarAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = asideProductContainer.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        // si mobilemenu esta open, hay que cerrarlo
        mobileMenu.classList.add('inactive')
    }
    if (!isDDesktopMenuClosed) {
        // si mobilemenu esta open, hay que cerrarlo
        desktopMenu.classList.add('inactive')
    }
    if (!isProductDetailClosed) {
        // si mobilemenu esta open, hay que cerrarlo
        asideProductContainer.classList.add('inactive')
    }

    asideCartConatiner.classList.toggle('inactive')
}

// EMAIL DEL NAVBAR
function togggleShowDesktopMenu() {
    const isAsideClosed = asideCartConatiner.classList.contains('inactive')

    if (!isAsideClosed) {
        asideCartConatiner.classList.add('inactive')
    }

    desktopMenu.classList.toggle("inactive");
}

// MENU HAMBURGUESA MOBILE
function togggleMobileMenu() {
    const isAsideClosed = asideCartConatiner.classList.contains('inactive');
    const isAsideProductDetailClosed = asideProductContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        // si mobilemenu esta open, hay que cerrarlo
        asideCartConatiner.classList.add('inactive')
    }
    if (!isAsideProductDetailClosed) {
        closeContainer();
    }

    mobileMenu.classList.toggle("inactive");
}

// DETALLE DE LOS PRODUCTOS
function togggleProductContainer() {

    const isCartMobileClosed = asideCartConatiner.classList.contains('inactive')

    if (!isCartMobileClosed) {
        asideCartConatiner.classList.add('inactive')
    }

    asideProductContainer.classList.remove('inactive')
}

// CERRAR DETALLE PRODUCTOS
function closeContainer() {
    asideProductContainer.classList.add('inactive')
}


function renderProducts(arr) {
    for (items of arr) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', items.image);
        img.setAttribute('alt', 'img card');

        img.addEventListener('click', togggleProductContainer)

        // -------

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        // ------

        const productInfoDiv = document.createElement('div');


        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + items.price + ',00';

        const productName = document.createElement('p');
        productName.innerText = items.name;

        // -------

        const productInfoFigure = document.createElement('figure');
        const productImg = document.createElement('img');
        productImg.setAttribute('src', './icons/bt_add_to_cart.svg');


        productInfoDiv.appendChild(productName)
        productInfoDiv.appendChild(productPrice)
        productInfoFigure.appendChild(productImg)
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
        productCard.appendChild(img)
        productCard.appendChild(productInfo)

        cardsContainer.appendChild(productCard)
    }


}

renderProducts(listItems)
