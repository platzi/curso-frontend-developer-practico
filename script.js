let desktopMenu = document.querySelector(".desktop-menu");
let navBarEmail = document.querySelector(".navbar-email");
let mobileMenuIcon = document.querySelector(".mobile-menu-icon");
let mobileMenu = document.querySelector(".mobile-menu");
let shoppingCart = document.querySelector(".navbar-shopping-cart");
let cartProductsDetail = document.querySelector(".cart-products-detail");
let productDetail = document.querySelector(".product-detail");
let productDetailClose = document.querySelector(".product-detail-close");

navBarEmail.addEventListener('click',toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);
productDetailClose.addEventListener('click',closeProductDetails);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    cartProductsDetail.classList.add('inactive');
    productDetail.classList.add('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    cartProductsDetail.classList.add('inactive');
    productDetail.classList.add('inactive');
}

function toggleShoppingCart(){
    cartProductsDetail.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
}

function openProductDetails(){
    productDetail.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    cartProductsDetail.classList.add('inactive');
}

function closeProductDetails(){
    productDetail.classList.add('inactive');
}

let products = [];

products.push({
    img : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price : 120,
    name : 'Bike'
});

products.push({
    img : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price : 150,
    name : 'Bike'
})

function generateProductCards(arr){
    
    let cardsContainer = document.querySelector('.cards-container');

    for(let product of arr){
        let productCard = document.createElement('div');
        productCard.classList.add('product-card');

        let productImage = document.createElement('img');
        productImage.setAttribute('src', product.img);
        productImage.addEventListener('click', openProductDetails);

        let productInfo = document.createElement('div');
        productInfo.classList.add("product-info");

        let productDetails = document.createElement('div');
        let productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        let productName = document.createElement('p');
        productName.innerText = product.name;

        let productCartFigure = document.createElement('figure');
        let productCartSVG = document.createElement('img');
        productCartSVG.setAttribute('src', "./icons/bt_add_to_cart.svg");

        productCartFigure.append(productCartSVG);
        productDetails.append(productName, productPrice);
        productInfo.append(productDetails, productCartFigure);

        productCard.append(productImage, productInfo);
        cardsContainer.append(productCard);
    }
}

generateProductCards(products);

