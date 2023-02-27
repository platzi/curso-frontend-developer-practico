const $ = (select) => document.querySelector(select);

// Selectors
const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const hamburgerIcon = $('.menu');
const menuCarritoIcon = $('.navbar-shopping-cart');
const productDetailCloseIcon = $('.product-detail-secondary-close');
const mobileMenu = $('.mobile-menu');
const shoppingCartContainer = $('.product-detail');
const productDetailContainer = $('.product-detail-secondary');
const cardsContainer = $('.cards-container');
const fadeDiv = $('.fade-element');
const shoppingCartListContainer = $('.my-order-content');
// const addProductImg = $('.add-product-img');


// AddEventListener

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

// List of products
const windowsList = [];
windowsList.push(shoppingCartContainer);
windowsList.push(desktopMenu);
windowsList.push(mobileMenu);
windowsList.push(productDetailContainer);

const productList = [
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Bike',
        price: 12700,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Bicycle helmet',
        price: 1200,
        image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
    },
    {
        name: 'Bicycle helmet',
        price: 1600,
        image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
    },
    {
        name: 'Seat',
        price: 300,
        image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
    },
    {
        name: 'Tennis Montain Bike',
        price: 2200,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
    },
    {
        name: 'Sunglasses',
        price: 800,
        image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
    },
    {
        name: 'Sunglasses',
        price: 800,
        image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
    },
    {
        name: 'Bicycle seat bag',
        price: 876,
        image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
    }

];

const shoppingList = [];



// Functions 

function toggleDesktopMenu(){
    
    closeSuperImposeWindow(desktopMenu, windowsList);
    desktopMenu.classList.toggle('inactive');
    toggleFadein(windowsList);
}
function toggleMobileMenu() {
    
    closeSuperImposeWindow(mobileMenu, windowsList);
    mobileMenu.classList.toggle('inactive');
    toggleFadein(windowsList);
}
function toggleCarritoAside() {
    
    closeSuperImposeWindow(shoppingCartContainer, windowsList);
    shoppingCartContainer.classList.toggle('inactive');
    toggleFadein(windowsList);
}
function openProductDetailAside(event) {
    const product = event.target.dataset;
    
    closeSuperImposeWindow(productDetailContainer, windowsList);
    chargeProductsDetails(product, productList);
    productDetailContainer.classList.remove('inactive');
    toggleFadein(windowsList);
}
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
    toggleFadein(windowsList);
}
function closeSuperImposeWindow(element, array) {
    // Aqui verificamos cual de los que hay en la lista genero la llamada
    for (item of array) {
        item == element ? true
            // con el ternario cuando no es el que genero la llamada verifico si esta cerrado sino le inserto la clase inactive
            : item.classList.contains('inactive') ? true : item.classList.add('inactive');
    }
}
function toggleFadein(array) {

    fadeDiv.classList.add('inactive')
    for (item of array) {
        !item.classList.contains('inactive') ? fadeDiv.classList.remove('inactive') : true ;
    }
    

    // fadeDiv.classList.toggle('inactive');
}
function chargeProductsDetails(element, array) {

    const item = array[element.id];
    console.log(array[element.id]);

    const imgProduct = $('#close-img_product');
    const imgPrice = $('#close-price_product');
    const imgName = $('#close-name_product');

    imgProduct.setAttribute('src', item.image);
    imgName.innerText = item.name;
    imgPrice.innerText = item.price;
}
function addProductShoppingCart(product) {
    
    console.log('product',product);
    
}


// Render Functions

function renderProducts(arr) {
    
    for (item in arr) {
        
        const product = arr[item];

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        
        productImg.dataset.imgProduct = product.image;
        productImg.dataset.nameProduct = product.name;
        productImg.dataset.priceProduct = product.price;
        productImg.dataset.id = item;
        productImg.addEventListener('click',openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productImgCart.classList.add('add-product-img');
        productImgCart.addEventListener('click', () => addProductShoppingCart(item));
        // quede en verificar el id, aqui estoy recibiendo los datos del elemento.
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfoDiv.append(productPrice, productName);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard)
    }
}

function renderShoppingCartList() {

    const shoppingCartContainer = document.createElement('div');
    shoppingCartContainer.classList.add('shopping-cart');

    const figureCart = document.createElement('figure');
    const imgFigure = document.createElement('img');
    imgFigure.setAttribute('src', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
    imgFigure.setAttribute('alt','Bike')

    const nameCart = document.createElement('p');
    nameCart.innerText = 'Bike';

    const priceCart = document.createElement('p');
    priceCart.innerText = '$30,00';

    const closeCartImg = document.createElement('img');
    closeCartImg.setAttribute('src', './icons/icon_close.png');
    closeCartImg.setAttribute('alt', 'close');
    
    figureCart.appendChild(imgFigure);
    shoppingCartContainer.append(figureCart, nameCart, priceCart, closeCartImg);

    shoppingCartListContainer.appendChild(shoppingCartContainer);
}

// Functions Calls

renderProducts(productList);
renderShoppingCartList();
// render2Products(productList)