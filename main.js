const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const asideProduct = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuIcon.addEventListener('click', toggleMobileMenu);

shoppingCart.addEventListener('click', toggleProducts);

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    asideProduct.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    asideProduct.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleProducts(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    asideProduct.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Car',
    price: 2000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Screen',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProducts (arr){
    for (product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productInfoFigure = document.createElement('figure');
    
        const figureImg = document.createElement('img');
        figureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        const pPrice = document.createElement('p');
        pPrice.innerText = '$' + product.price;
    
        const pName = document.createElement('p');
        pName.innerText = product.name;
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        // Appends
    
        productInfo.append(productInfoFigure, productInfoDiv);
        productCard.append(img, productInfo);
        productInfo.appendChild(productInfoFigure);
        productInfoDiv.append(pPrice, pName);
        productInfoFigure.appendChild(figureImg);
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);