const menuDesktop = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".mobile-menu");
const menuEmail = document.querySelector(".navbar-email");
const menuMobileIcon = document.querySelector(".menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const asideCart = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

function toggleDesktopMenu(){

    const isAsideCartOpen = !asideCart.classList.contains('inactive');

    if(isAsideCartOpen){
        asideCart.classList.add('inactive') 
    }

    menuDesktop.classList.toggle('inactive');
}

function toggleMobileMenu(){

    const isAsideCartOpen = !asideCart.classList.contains('inactive');

    if(isAsideCartOpen){
        asideCart.classList.add('inactive') 
    }

    menuMobile.classList.toggle('inactive');
}

function toggleAsideCart(){

    const isMobileMenuOpen = !menuMobile.classList.contains('inactive');
    const isDesktopMenuOpen = !menuDesktop.classList.contains('inactive');

    if(isMobileMenuOpen){
        menuMobile.classList.add('inactive') 
    }
    if(isDesktopMenuOpen){
        menuDesktop.classList.add('inactive') 
    }

    asideCart.classList.toggle('inactive');
    
}

function renderProducts(arrProductList){
    for(product of arrProductList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = `$ ${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const cartIcon = document.createElement('img');
        cartIcon.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(cartIcon);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    }
}


menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobileIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleAsideCart);

const productList = [];
productList.push({
    name: 'Bike',
    price :120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Headphones',
    price :100,
    image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Camera',
    price :250,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

renderProducts(productList);

