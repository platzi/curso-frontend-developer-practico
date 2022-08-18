const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuShoppingIcon = document.querySelector('.navbar-shopping-cart');
const shoppingMenu = document.querySelector('.product-detail')

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuShoppingIcon.addEventListener('click', toggleShoppingCar);


function toggleDesktopMenu(){
    const isShoppingCarClosed = shoppingMenu.classList.contains('inactive');

    desktopMenu.classList.toggle('inactive');

    if (!isShoppingCarClosed){
        shoppingMenu.classList.add('inactive');
    }

    
}

function toggleMobileMenu(){
    const isShoppingCarClosed = shoppingMenu.classList.contains('inactive');

    mobileMenu.classList.toggle('inactive');


    if (!isShoppingCarClosed){
        shoppingMenu.classList.add('inactive');
    }
}

function toggleShoppingCar(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    shoppingMenu.classList.toggle('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    

    
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
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

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
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});



function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', product.image);
    
      
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerText = '$ ' + product.price;
        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.name;
    
        productInfoDiv.append(productInfoPrice, productInfoName);
        
    
        const productInfoFigure = document.createElement('figure');
        const productFigureImage = document.createElement('img');
        productFigureImage.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productFigureImage);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImgCart, productInfo);
        
        cardsContainer.append(productCard);
    }
}

renderProducts(productList);





