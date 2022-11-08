
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCarrito = document.querySelector('.navbar-shopping-cart');
const orderCarrito = document.querySelector('#shopping-cart-container');
const cardsContainer = document.querySelector('.cards-container');
const detailProduct = document.querySelector('#product-detail');
const iconProductDetailClosed = document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenuMobile.addEventListener('click', toggleMobileMenu);
iconCarrito.addEventListener('click', toggleIconCarrito);
iconProductDetailClosed.addEventListener('click', closedDetailProduct);

class interactionElement{
    constructor({
        principalSelector,
        selectores = []
    }) {
        this.principalSelector = principalSelector
        this.selectores = selectores
    }

    toogleSelectores(principalSelector){
        for (element of selectores){
            let isClosed = element.classList.contains('inactive');

            if (!isClosed){
                element.classList.add('inactive')
            };   
        };
        principalSelector.classList.toggle('inactive')
    }
}

const toggleDesktopMenu = new interactionElement({
    principalSelector : desktopMenu,
    selectores : ["orderCarrito","detailProduct"]
})




