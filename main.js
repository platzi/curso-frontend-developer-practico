/* Definición de variables globales */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

/* Toggle sobre el click del e-mail */
menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu() {
    const isAsideMenuOpen = !aside.classList.contains('inactive');            

    if (isAsideMenuOpen) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
};

/* Toggle sobre el menú para mobile */
burgerIcon.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu() {
    const isAsideMenuOpen = !aside.classList.contains('inactive');                

    if (isAsideMenuOpen) {
        aside.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
};

/* Toggle sobre el menú del carrito de compras */
carritoIcon.addEventListener('click', toggleCarritoAside);
function toggleCarritoAside (){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');            

    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }

    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

/* Cargo los productos y los dibujo en el HTML */
const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Moto",
    price: 220,
    image: "https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg",
});
productList.push({
    name: "Auto",
    price: 540,
    image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const ProductImg = document.createElement('img');
    ProductImg.setAttribute('src', product.image);    

    const productInfo = document.createElement('div');    
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement('figure');
    const imgFigure = document.createElement('img');    

    imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');    
    productInfoFigure.appendChild(imgFigure);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(ProductImg, productInfo);

    cardsContainer.appendChild(productCard);
}