const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() { 

    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');

}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');


    if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive');

}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: '/icons/photo-1532298229144-0ec0c57515c7.webp'
});
productList.push({
    name: 'Tablet',
    price: 600,
    image: '/icons/photo-1532298229144-0ec0c57515c7.webp'
});
productList.push({
    name: 'Laptop',
    price: 12000,
    image: '/icons/photo-1532298229144-0ec0c57515c7.webp'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: '/icons/photo-1532298229144-0ec0c57515c7.webp'
});
productList.push({
    name: 'Tablet',
    price: 600,
    image: '/icons/photo-1532298229144-0ec0c57515c7.webp'
});
productList.push({
    name: 'Laptop',
    price: 12000,
    image: '/icons/photo-1532298229144-0ec0c57515c7.webp'
});





function renderProducts(arr) {

    for( product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', '/icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
    
        cardsContainer.appendChild(productCard);
    
    
    }
}

renderProducts(productList);

