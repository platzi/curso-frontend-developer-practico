const navEmail = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");
const menuHamMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const DetailsContainerClosedIcon = document.querySelector(".product-detail2-close");
const asideMenuCarrito = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const productDetailsContainer = document.querySelector(".product-detail2");



navEmail.addEventListener('click', toggleDesktopMenu);
menuHamMenu.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarritoAside);
DetailsContainerClosedIcon.addEventListener('click', closeProductDetailsAside);

function toggleDesktopMenu () {
    let isAsideCarrito = asideMenuCarrito.classList.contains("inactive");

    if(!isAsideCarrito) {
        asideMenuCarrito.classList.add("inactive");
    }

    DesktopMenu.classList.toggle("inactive");
    productDetailsContainer.classList.add("inactive");
}

function toggleMobileMenu() {
    let isAsideCarrito = asideMenuCarrito.classList.contains("inactive");

    if(!isAsideCarrito) {
        asideMenuCarrito.classList.add("inactive");
    }

    menuHamMenu.classList.toggle("transform");
    mobileMenu.classList.toggle("inactive");
    productDetailsContainer.classList.add("inactive");
}

function toggleCarritoAside() {
    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    let isDesktopmenuClosed = DesktopMenu.classList.contains('inactive')

    if(!isDesktopmenuClosed) {
        DesktopMenu.classList.add("inactive");
    }

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
        menuHamMenu.classList.remove("transform");
    }

    asideMenuCarrito.classList.toggle("inactive");
    productDetailsContainer.classList.add("inactive");
}

function openProductDetailAside() {
    let isAsideCarritoClose = asideMenuCarrito.classList.contains("inactive");
    let isDesktopmenuClosed = DesktopMenu.classList.contains('inactive')
    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isAsideCarritoClose) {
        asideMenuCarrito.classList.add("inactive");
    }

    if(!isDesktopmenuClosed) {
        DesktopMenu.classList.add("inactive");
    }

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
        menuHamMenu.classList.remove("transform");
    }

    productDetailsContainer.classList.remove("inactive");
}

function closeProductDetailsAside() {
    productDetailsContainer.classList.add("inactive");
}

const productList = [];

productList.push({
    name: 'Bike',
    price: '120',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name: 'Zapatos',
    price: '100',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});

productList.push({
    name: 'Perro',
    price: '50',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});

productList.push({
    name: 'Televisor',
    price: '3000',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});

productList.push({
    name: 'Iphone 13',
    price: '9000',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});

productList.push({
    name: 'Caramelos',
    price: '10',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});

productList.push({
    name: 'Carro',
    price: '50000',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});

productList.push({
    name: 'Avion',
    price: '1500000',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});

productList.push({
    name: 'Mesa',
    price: '20',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});

productList.push({
    name: 'Pantalones',
    price: '30',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
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


function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', product.img);
        img.addEventListener('click', openProductDetailAside);
    
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
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
