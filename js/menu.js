const menuEmail             = document.querySelector('.navbar-email');
const desktopMenu           = document.querySelector('.desktop-menu');
const MobileMenuTriger      = document.querySelector('.mobile-menu-trigger ');
const MobileMenu            = document.querySelector('.mobile-menu');
const navbarShoppingCart    = document.querySelector('.navbar-shopping-cart');
const productDetail         = document.querySelector('.product-detail');
const cardsContainer        = document.querySelector('.cards-container');

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Screen",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Laptop",
    price: 1200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Screen",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Laptop",
    price: 1200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

menuEmail.addEventListener('click', toggleDesktopMenu);
MobileMenuTriger.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleProductDetail);

renderProducts(productList);

function toggleDesktopMenu() {
    const isAsideOpen = !productDetail.classList.contains('inactive');
    
    if (isAsideOpen) {
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideOpen = !productDetail.classList.contains('inactive');

    if (isAsideOpen) {
        productDetail.classList.add('inactive');
    }

    MobileMenu.classList.toggle('inactive');
}

function toggleProductDetail() {
    const isMobileMenuOpen = !MobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    
    if (isMobileMenuOpen) {
        MobileMenu.classList.add('inactive');
    }
    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }

    productDetail.classList.toggle('inactive');
    
}

function renderProducts(productList) {
    for(product of productList) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productInfoImage = document.createElement('img');
        productInfoImage.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
    
        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerText = '$' + product.price;
    
        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.name;
    
        productInfoDiv.appendChild(productInfoPrice);
        productInfoDiv.appendChild(productInfoName);
    
        const productInfoFigure = document.createElement('figure');
    
        const productImageCart = document.createElement("img");
        productImageCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImageCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productInfoImage);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}



