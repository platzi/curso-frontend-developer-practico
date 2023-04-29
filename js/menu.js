const menuEmail                 = document.querySelector('.navbar-email');
const desktopMenu               = document.querySelector('.desktop-menu');
const MobileMenuTriger          = document.querySelector('.mobile-menu-trigger ');
const MobileMenu                = document.querySelector('.mobile-menu');
const navbarShoppingCart        = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer     = document.querySelector('#shoppingCartContainer');
const productDetailContainer    = document.querySelector('#productDetail');
const productInfoImage          = document.querySelector('#productInfoImage');
const productInfoPrice          = document.querySelector('#productInfoPrice');
const productInfoName           = document.querySelector('#productInfoName');
const productInfoDetail         = document.querySelector('#productInfoDetail');
const myOrderContent            = document.querySelector('.my-order-content');
const cartItems                 = document.querySelector('#cartItems');
const cardsContainer            = document.querySelector('.cards-container');
const productDetailClose        = document.querySelector('.product-detail-close');

const productList = [];
let selectedProduct = null;
const shoppingCartList = [];

productList.push({
    name: "Bike",
    price: 120,
    detail: "BIKE!!! With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Screen",
    price: 500,
    detail: "SCREEN!!! With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Laptop",
    price: 1200,
    detail: "LAPTOP!!! With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Wireless Headset",
    price: 90,
    detail: "Wireless Headset!!! With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "New buds",
    price: 85,
    detail: "New buds!!! With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "TV",
    price: 200,
    detail: "TV!!! With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Keyboard",
    price: 20,
    detail: "Keyboard!!! With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Mousepad",
    price: 10,
    detail: "Mousepad!!! With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Laptop PRO",
    price: 2500,
    detail: "LAPTOP PRO!!! With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

menuEmail.addEventListener('click', toggleDesktopMenu);
MobileMenuTriger.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleShoppingCart);
productDetailClose.addEventListener('click', function() { togleProductDetail(null) },false);

renderProducts(productList);
renderShoppingCart(shoppingCartList);

function toggleDesktopMenu() {
    const isShoppingCartOpen    = !shoppingCartContainer.classList.contains('inactive');
    const isProductDetailOpen   = !productDetailContainer.classList.contains('inactive');
    
    if (isShoppingCartOpen) {
        shoppingCartContainer.classList.add('inactive');
    }
    if (isProductDetailOpen) {
        productDetailContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShoppingCartOpen    = !shoppingCartContainer.classList.contains('inactive');
    const isProductDetailOpen   = !productDetailContainer.classList.contains('inactive');

    if (isShoppingCartOpen) {
        shoppingCartContainer.classList.add('inactive');
    }
    if (isProductDetailOpen) {
        productDetailContainer.classList.add('inactive');
    }
    MobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    const isMobileMenuOpen      = !MobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen     = !desktopMenu.classList.contains('inactive');
    const isProductDetailOpen   = !productDetailContainer.classList.contains('inactive');
    
    if (isMobileMenuOpen) {
        MobileMenu.classList.add('inactive');
    }
    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }
    if (isProductDetailOpen) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
    
}

function closeAllMenus() {
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    MobileMenu.classList.add('inactive');
}

function togleProductDetail(productId) {
    if(productId == null) {
        closeProductDetail();
        productDetailContainer.classList.add('inactive');
        return true;
    }
    let isProductDetailOpen  = !productDetailContainer.classList.contains('inactive');

    if (isProductDetailOpen) {
        closeAllMenus();
        if(productId == selectedProduct) {
            productDetailContainer.classList.toggle('inactive');
        } else {
            openProductDetail(productId);
        }
    } else {
        openProductDetail(productId);
        productDetailContainer.classList.toggle('inactive');
        isProductDetailOpen  = !productDetailContainer.classList.contains('inactive');
        if(isProductDetailOpen) {
            closeAllMenus();
        }
    }

}

function openProductDetail(productId) {    
    var product = productList[productId];
    selectedProduct = productId;
    productInfoImage.setAttribute('src', product.image);
    productInfoPrice.innerText  = '$' + product.price;
    productInfoName.innerText   = product.name;
    productInfoDetail.innerText = product.detail;
    
}

function closeProductDetail() {

    selectedProduct = null;
    productInfoImage.setAttribute('src', "");
    productInfoPrice.innerText  = "";
    productInfoName.innerText   = "";
    productInfoDetail.innerText = "";

}


function addToCart(productId) {
    var product = productList[productId];
    if(shoppingCartList[productId]) {
        product.quantity = shoppingCartList[productId].quantity + 1;
    } else {
        product.quantity = 1;
    }
    shoppingCartList[productId] = product;
    renderShoppingCart(shoppingCartList);
}

function removeCartItem(productId) {
    
    shoppingCartList[productId] = null;

    renderShoppingCart(shoppingCartList);
}

function renderProducts(productList) {
    
    productList.forEach(function (product, id) {
        
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productInfoImage = document.createElement('img');
        productInfoImage.setAttribute('src', product.image);
        // productInfoImage.addEventListener("click", function() { openProductDetail(id) },false);
        productInfoImage.addEventListener("click", function() { togleProductDetail(id) },false);
    
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
        productImageCart.classList.add("pointer");
        productImageCart.addEventListener("click", function() { addToCart(id) },false);
    
        productInfoFigure.appendChild(productImageCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productInfoImage);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    });
}

function renderShoppingCart(shoppingCartList) {
    while (myOrderContent.firstChild) {
        myOrderContent.removeChild(myOrderContent.lastChild);
    }
    var total = 0;
    var tatalItems = 0;
    shoppingCartList.forEach(function (product, id) {
        if(product) {
            tatalItems++;
            totalProduct = (product.price * product.quantity);
            total += totalProduct;

            const shoppingCart = document.createElement('div');
            shoppingCart.classList.add('shopping-cart');

            const productInfoPrice = document.createElement('p');
            productInfoPrice.innerText = '$' + totalProduct ;

            const productInfoName = document.createElement('p');
            productInfoName.innerHTML = product.name + "<br>$" + product.price + " x " + product.quantity;

            const productImageClose = document.createElement("img");
            productImageClose.setAttribute('src', './icons/icon_close.png');
            productImageClose.classList.add("pointer");
            productImageClose.addEventListener("click", function() { removeCartItem(id) },false);

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

    });
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
    cartItems.innerText = tatalItems;

    cartLabel.appendChild(cartLabelSpan);
    cartDivOrder.appendChild(cartLabel);
    cartDivOrder.appendChild(cartTotal);
    cartDivOrder.appendChild(cartTotal);
    myOrderContent.appendChild(cartDivOrder);
    myOrderContent.appendChild(cartCheckoutButton);

}


