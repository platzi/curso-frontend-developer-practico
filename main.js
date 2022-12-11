const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cart = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector(".shopping-cart");
const closeBtn = document.querySelector('.product-detail-close');
const productDetail = document.querySelector('.product-detail');

closeBtn.addEventListener('click', toggleProductDetail);
menu.addEventListener("click", toggleMobileMenu);
menuEmail.addEventListener("click",  toggleDesktopMenu);
cart.addEventListener("click", toggleShoppingCart);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    shoppingCart.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
}

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    shoppingCart.classList.add('inactive');
    productDetail.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

function toggleShoppingCart() {
    shoppingCart.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
}

function toggleProductDetail() {
    productDetail.classList.toggle('inactive');
}

const productList = [];

while(productList.length < 10){
    productList.push({
        name: 'Bike',
        price: 120.00,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
    })
}

const renderProducts = (productList) => {
    for(let product of productList) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
    
        const productImg = document.createElement('img');
        productImg.src = product.image;
    
        const productInfo = document.createElement('div');
        productInfo.className = 'product-info';
    
        productCard.append(productImg, productInfo);
    
        const div = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        div.append(productPrice, productName);
    
        const figure = document.createElement('figure');
        const icon = document.createElement('img');
        icon.src =  './icons/bt_add_to_cart.svg';
    
        figure.appendChild(icon);
        productInfo.append(div, figure);
    
        const cardsContainer = document.querySelector('.cards-container');
    
        cardsContainer.appendChild(productCard);
        productCard.addEventListener('click', (product) => renderProductDetail(product))
    }
}

renderProducts(productList);

function renderProductDetail(product) {
    productDetail.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCart.classList.add('inactive');
}
