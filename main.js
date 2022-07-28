const navbarMail = document.querySelector('.navbar-email');
const burgerIcon = document.querySelector('.menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCarContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

navbarMail.addEventListener('click', toggleDesktopMenu);
burgerIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleShoppingCarContainer);

function toggleDesktopMenu() {
    shoppingCarContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    desktopMenu.classList.add('inactive');
    shoppingCarContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');

    const isActive = !mobileMenu.classList.contains('inactive');
    if(isActive){
        cardsContainer.style.marginTop = "582px";
    }
    else{
        cardsContainer.style.marginTop = "20px";
    }
}

function toggleShoppingCarContainer() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCarContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
});
productList.push({
    name: 'PC Gamer',
    price: 650,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
});

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        const productName = document.createElement('p');
    
        productPrice.innerText = `$${product.price}`;
        productName.innerText = `${product.name}`;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

