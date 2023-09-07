//let  = document.querySelector('');
let menuEmail = document.querySelector('.navbar-email');
let desktopMenu = document.querySelector('.desktop-menu');
let menuHamIcon = document.querySelector('.menu');
let menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
let productDetailCloseIcon = document.querySelector('.product-detail-close');
let mobileMenu = document.querySelector('.mobile-menu');
let shoppingCartContainer = document.querySelector('#shoppingCartContainer');
let cardsContainer = document.querySelector('.cards-container');
let productDetailContainer = document.querySelector('#productDetail');

let infoDelProduct = document.querySelector('#info-product');

let imgProduct = document.querySelector('#image-description');
let priceProduct = document.querySelector('#price-description');
let nameProduct = document.querySelector('#name-description');

let productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image:' https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image:' https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Cumputador',
    price: 620,
    image:' https://images.pexels.com/photos/13564604/pexels-photo-13564604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Reloj',
    price: 90,
    image:' https://images.pexels.com/photos/1217573/pexels-photo-1217573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Guitarra',
    price: 190,
    image:' https://images.pexels.com/photos/164729/pexels-photo-164729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Gafas',
    price: 140,
    image:' https://images.pexels.com/photos/185769/pexels-photo-185769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});


//.addEventListener('click', );
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    shoppingCartContainer.classList.add('inactive');

    desktopMenu.classList.toggle('inactive');

    closeProductDetailAside()
}

function toggleMobileMenu() {
    let isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');

    closeProductDetailAside()
}

function toggleCarritoAside () {
    /*let isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (!isDesktopMenuClosed) {
        mobileMenu.classList.add('inactive');
    }*/

    // Aside carrito
    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } 

    // Aside productDetail
    let isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
    
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(event) {
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');

    //
    const productIndex = event.target.dataset.index;
    const product = productList[productIndex];
    console.log(productIndex); 
     
    mostrarDetalles();
    
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}


function mostrarDetalles() {

    imgProduct.innerHTML = productList.image;
   // imgProduct.setAttribute('src', event.target.src);
    priceProduct.textContent = '$' + productList.price;
    nameProduct.textContent = productList.name;
    
    console.log("funciona");  
   
}


function renderProducts(arr) {
    for (let i = 0; i < arr.length; i++) {
        const product = arr[i];
        let productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        // product = {name, price, image} -> product.image
        let productimg = document.createElement('img');
        productimg.setAttribute('src', product.image);
        productimg.setAttribute('data-index', i);
        productimg.addEventListener('click', openProductDetailAside);
     
        let productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        let productInfoDiv = document.createElement('div');
     
        let productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        let productName = document.createElement('p');
        productName.innerText = product.name;
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        let productInfoFigure = document.createElement('figure');
        let productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
     
        productInfoFigure.appendChild(productImgCart);
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
     
        productCard.appendChild(productimg);
        productCard.appendChild(productInfo);
     
        cardsContainer.appendChild(productCard);
     }
}

renderProducts(productList);