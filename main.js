const menuEmail             = document.querySelector('.navbar-email');
const desktoMenu            = document.querySelector('.desktop-menu');
const mobileMenu            = document.querySelector('.mobile-menu');
const burguerMenuIcon       = document.querySelector('.menu');
const menuCarritoIcon       = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const producDetailContainer = document.querySelector("#productDetail");
const produDetailCloseIcon  = document.querySelector(".product-detail-close");
const cardContainer         = document.querySelector('.cards-container'); 

menuEmail.addEventListener            ('click', toggleDesktopMenu );
burguerMenuIcon.addEventListener      ('click', toggleMobileMenu  );
menuCarritoIcon.addEventListener      ('click', toggleCarritoAside);
produDetailCloseIcon.addEventListener ('click', closeProductDetailsAside);

function toggleDesktopMenu() { 
    shoppingCartContainer.classList.add('inactive');
    desktoMenu.classList.toggle('inactive'); 
    producDetailContainer.classList.add('inactive');
}

function toggleMobileMenu() {
    producDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() { 
    mobileMenu.classList.add('inactive');
    desktoMenu.classList.add('inactive');
    producDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailsAside() {
    desktoMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    producDetailContainer.classList.remove('inactive');
}

function closeProductDetailsAside() {
    producDetailContainer.classList.add('inactive');
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
    name: 'Computadora',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetailsAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName  = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCartIcon = document.createElement('img');
        productImgCartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCartIcon);
    
        productInfo.append(productInfoDiv,productInfoFigure);
    
        productCard.append(img, productInfo);
    
        cardContainer.appendChild(productCard);
    }
}

renderProducts(productList);