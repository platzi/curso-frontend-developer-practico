const navEmail = document.querySelector('.navbar-email');
const hamMenu = document.querySelector('.hamMenu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const productDetailClosed = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.getElementById('shoppingCartContainer');
const productDetailContainer = document.getElementById('productDetail');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
hamMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);
productDetailClosed.addEventListener('click', closedProductDetailAside)



//ESTA ES LA FORMA DE SOLUCIONAR LA CONVIVENCIA DE TODOS LOS COMPONENETES DEL PROFE JUAN DC PLATZI

function toggleDesktopMenu() {
    const isshoppingCartContainerClosed = productDetail.classList.contains('inactive');

    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');

    //ASI RESOLVÍ YO EL EJERCICIO
    /*if (desktopMenu.style.display === 'none') {
        desktopMenu.style.display = 'block';
    }
    else {
            desktopMenu.style.display = 'none';
        }*/

}

function toggleMobileMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closedProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    const isMenuDesktop = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isMenuDesktop) {
        desktopMenu.classList.add('inactive');
    }

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');

}


function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closedProductDetailAside() {
    productDetailContainer.classList.add('inactive');
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
    image: 'https://images.pexels.com/photos/5721801/pexels-photo-5721801.jpeg?auto=compress&cs=tinysrgb&w=1600'
});

productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1600'
});

/*
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
alt="">
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

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
        //product = {name, price, image} -> product.image

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerHTML = product.name

        productInfoDiv.append(productPrice, productName);

        const productInfoFifure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFifure.appendChild(productImgCart);
        productInfo.append(productInfoDiv, productInfoFifure);
        productCard.append(productImg, productInfo);
        cardsContainer.appendChild(productCard);


    }
}

renderProducts(productList);