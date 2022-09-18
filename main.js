const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('#shoppingCart');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleAside);

function toggleDesktopMenu(){

    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        aside.classList.toggle('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){

    const isAsideClosed = shoppingCart.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCart.classList.toggle('inactive');
    }

    mobileMenu.classList.toggle('inactive');

}

function toggleAside(){
    
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.toggle('inactive');
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.toggle('inactive');
    }
    shoppingCart.classList.toggle('inactive');

}


const productList = [];
productList.push({
    name: 'Bicicleta',
    price: 120,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Televisor',
    price: 220,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Computador',
    price: 640,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bicicleta',
    price: 140,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


function renderProducts(arr){

    
    for (product of arr){
       
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.img);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerText = product.price;
        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.name;

        const productInfoFigure = document.createElement('figure');

        const figureImg = document.createElement('img');
        figureImg.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(figureImg);

        productInfoDiv.appendChild(productInfoPrice);
        productInfoDiv.appendChild(productInfoName);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);

    }

}

renderProducts(productList);

