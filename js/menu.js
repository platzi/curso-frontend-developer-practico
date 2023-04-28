const menuEmail             = document.querySelector('.navbar-email');
const desktopMenu           = document.querySelector('.desktop-menu');
const MobileMenuTriger      = document.querySelector('.mobile-menu-trigger ');
const MobileMenu            = document.querySelector('.mobile-menu');
const navbarShoppingCart    = document.querySelector('.navbar-shopping-cart');
const productDetail         = document.querySelector('.product-detail');
const myOrderContent        = document.querySelector('.my-order-content');
const cardsContainer        = document.querySelector('.cards-container');

const productList = [];
const shoppingCartList = [];
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

shoppingCartList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
shoppingCartList.push({
    name: "Laptop",
    price: 1200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});


menuEmail.addEventListener('click', toggleDesktopMenu);
MobileMenuTriger.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleProductDetail);

renderProducts(productList);
shoppingCart(shoppingCartList);

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

function shoppingCart(shoppingCartList) {
    var total = 0;
    for(product of shoppingCartList) {
        total += (product.price * 1);

        const shoppingCart = document.createElement('div');
        shoppingCart.classList.add('shopping-cart');

        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerText = '$' + product.price;

        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.name;

        const productImageClose = document.createElement("img");
        productImageClose.setAttribute('src', './icons/icon_close.png');

        const productImageIcon = document.createElement("img");
        productImageIcon.setAttribute('src', product.image);

        const productInfoFigure = document.createElement('figure');

        productInfoFigure.appendChild(productImageIcon);

        shoppingCart.appendChild(productInfoFigure);
        shoppingCart.appendChild(productInfoName);
        shoppingCart.appendChild(productInfoPrice);
        shoppingCart.appendChild(productImageClose);

        myOrderContent.appendChild(shoppingCart);


    }
    const cartDivOrder          = document.createElement('div');    
    const cartLabelSpan         = document.createElement('span');
    const cartLabel             = document.createElement('p');
    const cartTotal             = document.createElement('p');
    const cartCheckoutButton    = document.createElement('button');

    cartDivOrder.classList.add("order");
    cartCheckoutButton.classList.add("primary-button");
    cartCheckoutButton.innerText = "Checkout";
    cartLabelSpan.innerText = "Total";
    cartTotal.innerText = "$" + total;

    cartLabel.appendChild(cartLabelSpan);
    cartDivOrder.appendChild(cartLabel);
    cartDivOrder.appendChild(cartTotal);
    cartDivOrder.appendChild(cartTotal);
    myOrderContent.appendChild(cartDivOrder);
    myOrderContent.appendChild(cartCheckoutButton);

}


