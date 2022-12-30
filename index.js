// Botones
const menuEmal = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarrIcon = document.querySelector('.navbar-shopping-cart');
const productDeailIcon = document.querySelector('.product-detail-close');

// Componentes
const mobileMenu = document.querySelector('.mobile-menu');
const desktopMenu = document.querySelector('.desktop-menu');
const shopingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');

//Add Click Events
menuEmal.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarrIcon.addEventListener('click', toggleCarritoAside);
productDeailIcon.addEventListener('click', closeProductDeail);

//Funciones
function toggleDesktopMenu() {

    ifOpenedClose(shopingCartContainer);
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    ifOpenedClose(shopingCartContainer);
    closeProductDeail();
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {

    //if the menu mobile is open, we close it
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive');
    }
    ifOpenedClose(desktopMenu);
    ifOpenedClose(productDetailContainer);
    //open is 
    shopingCartContainer.classList.toggle('inactive');
}

function openProductDeail() {
    ifOpenedClose(shopingCartContainer);
    productDetailContainer.classList.remove('inactive');
}

function closeProductDeail(){
    productDetailContainer.classList.add('inactive');
}

//if opened
function ifOpenedClose(componente) {
    if (!componente.classList.contains('inactive')) {
        componente.classList.add('inactive');
    }
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 5342,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Pantalla',
    price: 120,
    image: 'https://cdn.pixabay.com/photo/2013/07/13/01/08/monitor-155159_960_720.png'
})
productList.push({
    name: 'Bicicleta',
    price: 644,
    image: 'https://cdn.pixabay.com/photo/2013/07/13/13/46/bicycle-161524_960_720.png'
})


function renderCard(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDeail)

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(img);
        productCard.appendChild(productInfo);

        cardsContainer.append(productCard);
    }
    /*<div class="product-card">
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
</div>*/
}

renderCard(productList);
