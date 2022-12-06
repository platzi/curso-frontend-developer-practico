const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carMenu = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

navEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
carMenu.addEventListener("click", toggleAsideCar)

function toggleDesktopMenu () {
    aside.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu () {
    aside.classList.add("inactive")
    mobileMenu.classList.toggle("inactive");
}

function toggleAsideCar () {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    aside.classList.toggle("inactive");
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts (arr) {

    for (const product of arr) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
    
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
    
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price
    
        const productName = document.createElement('p');
        productName.innerText = product.name
    
        
    
        const productInfoFigure = document.createElement('figure');
        const productImgFigure = document.createElement('img');
        productImgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoDiv.append(productPrice, productName);
        productInfoFigure.append(productImgFigure);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
    
        cardsContainer.append(productCard);
    }
}

renderProducts(productList);

