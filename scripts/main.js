const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuShoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const asideShoppingCart = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const productDetailedView = document.querySelector(".product-detailed-view");
const productDetailedViewCloseBtn = document.querySelector('.product-detailed-view-close');
const mainContainer = document.querySelector('.main-container');

navEmail.addEventListener("click", toggleDesktopMenu);
hamMenuIcon.addEventListener("click", toggleMobileMenu);
menuShoppingCartIcon.addEventListener("click", toggleShoppingCart);
productDetailedViewCloseBtn.addEventListener("click", closeProductDetailedView)

function toggleMobileMenu(event) {
    mobileMenu.classList.toggle("inactive");

    if (!asideShoppingCart.classList.contains("inactive")) {
        asideShoppingCart.classList.add("inactive");
    }

    if (!productDetailedView.classList.contains("inactive")) {
        closeProductDetailedView(event);
    }
}

function toggleDesktopMenu(event) {
    desktopMenu.classList.toggle("inactive");

    if (!productDetailedView.classList.contains("inactive")) {
        closeProductDetailedView(event);
    }
}

function toggleShoppingCart(event) {
    asideShoppingCart.classList.toggle("inactive");

    if (!mobileMenu.classList.contains("inactive")) {
        mobileMenu.classList.add("inactive");
    }

    if (!productDetailedView.classList.contains("inactive")) {
        closeProductDetailedView(event);
    }
}

function closeProductDetailedView(event) {
    productDetailedView.classList.add("inactive");

    if (mainContainer.classList.contains("inactive")) {
        mainContainer.classList.remove("inactive");
    }
}

function openProductDetailedView(event) {
    productDetailedView.classList.remove("inactive");

    if (!mobileMenu.classList.contains("inactive")) {
        mobileMenu.classList.add("inactive");
    }

    if (!asideShoppingCart.classList.contains("inactive")) {
        asideShoppingCart.classList.add("inactive");
    }

    if (!desktopMenu.classList.contains("inactive")) {
        desktopMenu.classList.add("inactive");
    }

    if (!mainContainer.classList.contains("inactive") && window.matchMedia('(max-width: 640px)').matches) {
        mainContainer.classList.add("inactive");
    }
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    image_alt: 'Una bicicleta'
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=650&h=940&dpr=2',
    image_alt: 'Una pantalla'
});

productList.push({
    name: 'Computadora',
    price: 620,
    image: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=650&h=940&dpr=2',
    image_alt: 'Una imagen de una computadora'
});

/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
    </div>
</div>
*/

function renderProducts(products) {
    /*
    renderProducts(ARRAY products) => NONE

        renderiza los productos en el div con propiedad .cards-container.
     */

    for (product of products) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.setAttribute('alt', product.image_alt);

        productImg.addEventListener("click", openProductDetailedView)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);