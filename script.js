const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu  = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer =  document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCart.addEventListener('click',toggleCartAside);

function toggleCartAside() {
    let isMobileMenuClose = mobileMenu.classList.contains('inactive');
    let isDesktopMenuClose = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClose){
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
    
}

function toggleDesktopMenu() {
    let isAsideClose = aside.classList.contains('inactive')
    if (!isAsideClose) {
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    let isAsideClose = aside.classList.contains('inactive')
    if (!isAsideClose) {
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}

const producList = [];
producList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
producList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
producList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});producList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});producList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});producList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});producList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});producList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});producList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
function renderProducts(objetc) {
    for (const product of objetc) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image);
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure =  document.createElement('figure');
        const productImgCart =  document.createElement('img');
        productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(producList);