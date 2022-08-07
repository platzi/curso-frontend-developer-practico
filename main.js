const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleShoppingCartshoppingCartContainer);

function toggleDesktopMenu(){
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')   
    if(!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')    
}

function toggleMobileMenu(){
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')   
    if(!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleShoppingCartshoppingCartContainer(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')    
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')    
    if(!isMobileMenuClosed || !isDesktopMenuClosed){
        mobileMenu.classList.add('inactive')
        desktopMenu.classList.add('inactive')
    }
    shoppingCartContainer.classList.toggle('inactive')       
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Monitor',
    price: 220,
    image: 'https://cdn.mos.cms.futurecdn.net/BwSR4PFK3i5ZyhFEmZUBMS.jpg',
})

productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://www.digitaltrends.com/wp-content/uploads/2022/04/dell-xps-desktop-8950-review-04.jpg?fit=720%2C720&p=1',
})

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
    
        const productImg =document.createElement('img');
        productImg.setAttribute('src', product.image)
        // Product = {name, price, image} => product.image
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText='$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);