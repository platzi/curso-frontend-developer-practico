const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcom = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarroIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcom.addEventListener('click', toggleMobileMenu);
menuCarroIcon.addEventListener('click', toogleCarAside);

function toggleDesktopMenu (){
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        aside.classList.add('inactive')
    };

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu (){
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        aside.classList.add('inactive')
    };

    mobileMenu.classList.toggle('inactive');
};

function toogleCarAside (){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

    if (!isMobileMenuClosed && !isDesktopMenuClosed){
        mobileMenu.classList.add('inactive')
        desktopMenu.classList.add('inactive')
    } else if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    } else if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    };

    aside.classList.toggle('inactive')
    
};

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: "Pantalla",
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: "Computador",
    price: 580,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts (arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productinfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText=  product.name;
    
        productinfoDiv.appendChild(productPrice);
        productinfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productinfoDiv);
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    };
};

renderProducts(productList)