const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHambIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const toggleShoping = document.querySelector('.navbar-shopping-cart')
const shoppingCart = document.querySelector('.product-detail');
const productDetail = document.querySelector('.product-detail-component');
const productDetailClose = document.querySelector('.product-detail-close');

const productContainer = document.querySelector('.cards-container');
navEmail.addEventListener('click', toggleMenuDesktop);
menuHambIcon.addEventListener('click', toggleMenuMobile);
toggleShoping.addEventListener('click', toggleShoppingCar);
productDetailClose.addEventListener('click', closeProductDetail);

function toggleMenuDesktop(event) {
    const isAsideClosed = shoppingCart.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppingCart.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive')
    
}

function toggleMenuMobile(event) {
    const isAsideClosed = shoppingCart.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppingCart.classList.add('inactive');
    }
    closeProductDetail();
    mobileMenu.classList.toggle('inactive')
    
}
function toggleShoppingCar(event) {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive');
    }
    shoppingCart.classList.toggle('inactive')
    setTimeout(() => {
        loadCart();
    }, 10);
}

function closeProductDetail(event) {
    productDetail.classList.add('inactive')
}

function openProductDetailAsaid(event) {
    let target;
    if (event && event.target) {
        target = event.target
    }
    shoppingCart.classList.add('inactive');
    productDetail.classList.remove('inactive');
    if (target){
        setDataDetail(target.data);
    }
}

function setDataDetail(data) {
    const image = productDetail.querySelectorAll("img")[1];
    const price = productDetail.querySelector(".price-detail");
    const name = productDetail.querySelector(".name-detail");

    image.setAttribute('src', data.image);
    price.innerText = '$ ' + data.precio;
    name.innerText =  data.nombre;
}

const productList = [];
const cart = [];
productList.push({
    nombre: 'Bike',
    precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    nombre: 'Pantalla',
    precio: 1900,
    image: 'https://cdn1.coppel.com/images/catalog/pm/2989683-1.jpg'
})

productList.push({
    nombre: 'Monitor',
    precio: 500,
    image: 'https://m.media-amazon.com/images/I/91Fg-Dbk-eL._AC_SX679_.jpg'
})
function loadCart() {
    
    const order = document.querySelector('.my-order-content div');
    const totalText = document.querySelector('#total')
    let total = 0;
    order.innerHTML = '';
    let index = 0;
    for (const iterator of cart) {
        const  newitem = createCartItem(iterator, index);
        order.appendChild(newitem);  
        total+= iterator.precio;  
        index++;
    }
    totalText.innerText = "$ " + total;
    
    
}
function addItem(event) {
    let target;
    if (event && event.target) {
        target = event.target
    }
    cart.push(target.data);
    changeCartCount();
}

function createCartItem(item, index) {
    const divItem = document.createElement('div');
    const figure = document.createElement('figure');
    const figureImg = document.createElement('img');
    const price = document.createElement('p')
    const name = document.createElement('p');
    const close =  document.createElement('img');

    divItem.classList.add('shopping-cart');
    figureImg.setAttribute('src', item.image);
    price.innerText = '$ ' + item.precio;
    name.innerText = item.nombre;
    close.setAttribute('src','./icons/icon_close.png');
    close.setAttribute('alt','close');
    close.data = index;
    close.addEventListener('click', onDeletItem);
    divItem.appendChild(figure);
    divItem.appendChild(price);
    divItem.appendChild(name);
    divItem.appendChild(close);
    return divItem;
}

function onDeletItem(event) {
    let target;
    if (event && event.target) {
        target = event.target
    }
    console.log("[indx]", target.data);
    cart.splice(target.data,1);
    setTimeout(() => {
        console.log("[array]: ", cart);
        loadCart();
        changeCartCount();    
    }, 10);
    
}
/* <div class="shopping-cart">
    <figure>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
    </figure>
    <p>Bike</p>
    <p>$30,00</p>
    <img src="./icons/icon_close.png" alt="close">
    </div>
    */

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.data = product

        productImg.addEventListener('click', openProductDetailAsaid);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.precio;
        const productName = document.createElement('p');
        productName.innerText = product.nombre;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productImgCart.data = product;
        productImgCart.addEventListener('click', addItem);    
        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        productContainer.appendChild(productCard);
    }
}

function changeCartCount() {
    const counter = document.querySelector('#cart-count');
    if (counter) {  
        counter.innerText = cart.length; 
    }
    
}

renderProducts(productList);