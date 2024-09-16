const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const burgerMenuIcon = document.querySelector ('.menu');
const menuCarritoIcon = document.querySelector ('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector ('.product-detail-close')
const mobileMenu = document.querySelector ('.mobile-menu');
const aside = document.querySelector ('#shoppingCartContainer');
const productDetailContainer = document.querySelector ('#productDetail')
const cardsProductContainer = document.querySelector ('.cards-container')

menuEmail.addEventListener ('click', toggleDesktopMenu);
burgerMenuIcon.addEventListener ('click', toggleMobileMenu);
menuCarritoIcon.addEventListener ('click', toggleCarritoMenu);
productDetailCloseIcon.addEventListener ('click', closeProductDetailAside);


function toggleDesktopMenu () {
    const asideMenuClose = shoppingCartContainer.classList.contains ('inactive');

    if (!asideMenuClose) {
        aside.classList.add ('inactive'); 
    }

    console.log ('click desktop menu');
    desktopMenu.classList.toggle ('inactive');
}

function toggleMobileMenu () {
    const asideMenuClose = shoppingCartContainer.classList.contains ('inactive');
    const productDetailClose = productDetailContainer.classList.contains ('inactive'); 

    if (!asideMenuClose) {
        shoppingCartContainer.classList.add ('inactive'); 
    }

    if (!productDetailClose) {
        productDetailContainer.classList.add ('inactive');
    }

    console.log ('click mobile menu');
    mobileMenu.classList.toggle ('inactive');
}

function toggleCarritoMenu () {
    const mobileMenuClose = mobileMenu.classList.contains ('inactive');
    const descktopMenuClose = desktopMenu.classList.contains ('inactive');
    const productDetailClose = productDetailContainer.classList.contains ('inactive'); 

    if (!descktopMenuClose) {
        desktopMenu.classList.add ('inactive');
    }

    if (!mobileMenuClose) {
        mobileMenu.classList.add ('inactive'); 
    }

    if (!productDetailClose) {
        productDetailContainer.classList.add ('inactive'); 
    }

    console.log ('click carrito');
    shoppingCartContainer.classList.toggle ('inactive');
}

function openProductDetailAside () {
    productDetailContainer.classList.remove ('inactive')
}

function closeProductDetailAside () {
    const toggleCarritoMenuClose = aside.classList.contains ('inactive');

    if (!toggleCarritoMenuClose) {
        aside.classList.add ('inactive'); 
    }

    productDetailContainer.classList.add ('inactive')
}

const productList = [];
productList.push ({
    name: 'Bike',
    price: 120, 
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
})
productList.push ({
    name: 'Car',
    price: 1220, 
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
})
productList.push ({
    name: 'TV',
    price: 80, 
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
})
productList.push ({
    name: 'Bike',
    price: 120, 
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
})
productList.push ({
    name: 'Car',
    price: 1220, 
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
})
productList.push ({
    name: 'TV',
    price: 80, 
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
})

function renderProducts (arr) {
    for (let product of arr) {
        const productCard = document.createElement ('div');
        productCard.classList.add ('product-card');
        
        const productImg = document.createElement ('img');
        productImg.setAttribute ('src', product.image);
        productImg.addEventListener ('click', openProductDetailAside)
        
        const productInfo = document.createElement ('div');
        productInfo.classList.add ('product-info');
    
        const productInfoDiv = document.createElement ('div');
        
        
        const productPrice = document.createElement ('p');
        productPrice.innerText = '$' + product.price;
        productInfoDiv.appendChild (productPrice);
        
        const productName = document.createElement ('p');
        productName.innerText = product.name;
        productInfoDiv.appendChild (productName);
    
        const productInfoFigure = document.createElement ('figure');
    
        const productImgCart= document.createElement ('img');
        productImgCart.setAttribute ('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild (productImgCart);
    
        productInfo.appendChild (productInfoDiv);
        productInfo.appendChild (productInfoFigure);
    
        productCard.appendChild (productImg);
        productCard.appendChild (productInfo);
        
        cardsProductContainer.appendChild (productCard);
    }
}

renderProducts (productList);