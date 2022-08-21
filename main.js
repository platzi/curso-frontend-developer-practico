const navEmail = document.querySelector(".navbar-email");
const hamBtn = document.querySelector(".menu");
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const menu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

navEmail.addEventListener('click', displayMenu);
hamBtn.addEventListener('click', displayMobileMenu);
menuCarrito.addEventListener('click', displayAside);

function displayMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    menu.classList.toggle('inactive');
}
function displayMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function displayAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isMenuClosed = menu.classList.contains('inactive');
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    else if(!isMenuClosed){
        menu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');

}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Car',
    price: 2120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'TV',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Car',
    price: 2120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'TV',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

for(product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerHTML = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerHTML = product.name;

    productDiv.appendChild(productPrice);
    productDiv.appendChild(productName);

    const figure = document.createElement('figure');

    const icon = document.createElement('img');
    icon.setAttribute('src', './icons/bt_add_to_cart.svg');

    figure.appendChild(icon);

    productInfo.appendChild(productDiv);
    productInfo.appendChild(figure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}