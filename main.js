const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menuIcon');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

const productList = [];

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed){
        aside.classList.toggle('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed){
        aside.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.toggle('inactive');
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.toggle('inactive');
    }
    aside.classList.toggle('inactive');
}

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Monitor',
    price: 210,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Computer',
    price: 660,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Monitor',
    price: 210,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Computer',
    price: 660,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProducts(productList){
    for(product of productList){
        const containerCards = document.querySelector('.cards-container');
    
        const productCard = document.createElement('div');
        productCard.classList.add("product-card");
    
        const image = document.createElement('img')
        image.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productoInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p')
        productPrice.innerHTML = "$"+product.price;
    
        const productName = document.createElement('p')
        productName.innerHTML = product.name;
    
        const productInfoFigure = document.createElement('figure')
    
        const iconAddToCart = document.createElement('img')
        iconAddToCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(iconAddToCart);
    
        productoInfoDiv.appendChild(productPrice);
        productoInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productoInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(image);
        productCard.appendChild(productInfo);
    
        containerCards.appendChild(productCard);
    }
}

renderProducts(productList);