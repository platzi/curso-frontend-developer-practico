const menuEmail = document.querySelector(".email-nav");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurger = document.querySelector(".menu-burger");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCart = document.querySelector(".navbar-shopping-cart");
const asideCartMenu = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurger.addEventListener("click", toggleMobileMenu);
menuCart.addEventListener("click", toggleAsideCartMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    asideCartMenu.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    asideCartMenu.classList.add('inactive');
}

function toggleAsideCartMenu() {
    asideCartMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'car',
    price: '14000',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'motorcycle',
    price: '6000',
    image: 'https://images.pexels.com/photos/819805/pexels-photo-819805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'book',
    price: '15',
    image: 'https://images.pexels.com/photos/6373289/pexels-photo-6373289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'phone',
    price: '1100',
    image: 'https://images.pexels.com/photos/5077063/pexels-photo-5077063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'camara',
    price: '3700',
    image: 'https://images.pexels.com/photos/11264343/pexels-photo-11264343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

function iterateProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productSubinfo = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productFigure = document.createElement('figure');
        const productFigureImage = document.createElement('img');
        productFigureImage.setAttribute('src', '../images/Icons/Platzi_YardSale_Icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(productFigureImage);
        productInfo.append(productSubinfo, productFigure);
        productSubinfo.append(productPrice, productName);
        productCard.append(productImage, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

iterateProducts(productList);

