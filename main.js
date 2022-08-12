
/* Menu Desktop */
const navEmail = document.querySelector('.navbar-email');
const dektopMenu = document.querySelector('.desktop-menu')

navEmail.addEventListener('click', toggDesktopMenu);

function toggDesktopMenu(){
    const isCarroMenuClosed = carroMenu.classList.contains('inactive');

    if(!isCarroMenuClosed){
        carroMenu.classList.add('inactive');
    }
    dektopMenu.classList.toggle('inactive');    
}

/* Menu Mobile*/
const menuHam = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

menuHam.addEventListener('click', toggMobileMenu);

function toggMobileMenu(){
    const isCarroMenuClosed = carroMenu.classList.contains('inactive');
    if(!isCarroMenuClosed){
        carroMenu.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

/* Carrito de compras */

const menuCarroIcon = document.querySelector('.navbar-shopping-cart')
const carroMenu = document.querySelector('.product-detail')

menuCarroIcon.addEventListener('click', toggDesktopMenuCarro);

function toggDesktopMenuCarro(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 
    const isDektopMenuClosed = dektopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed || !isDektopMenuClosed){
        mobileMenu.classList.add('inactive');
        dektopMenu.classList.add('inactive'); 
    }

    carroMenu.classList.toggle('inactive');
}

/* Product List*/

cardsContainer = document.querySelector('.cards-container');


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'counterSkins',
    price: 1200000,
    image: 'http://gamehag.com/img/news/108378_counter-strike-global-offensive-las-skins.jpg',
});
productList.push({
    name: 'counterSkins2',
    price: 12030000,
    image: 'https://global-uploads.webflow.com/60f066754425cb9b4fc5881e/616c449bba4e0b4b178ac593_f8wjUZKsLcvvrDi116WG9SKlm7tXGX2zJ1UOwzWnLtEybvubxOkyqPAhd1Ps9TZqd9M92Qo41xBqN6DWH4w_kOwWRxF-cMQrSkavdFTeYAVIJwEWZgGfnHBOaJNrmYAU3Dcj7sla%3Ds0.jpeg',
});


function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = `$ ${product.price}`
        const productName = document.createElement('p');
        productName.innerText = `${product.name}`
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);