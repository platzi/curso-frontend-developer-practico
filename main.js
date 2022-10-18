const navEmail = document.getElementsByClassName('navbar-email')[0];
const desktopMenu = document.getElementsByClassName('desktop-menu')[0];
const navMobileMenu = document.getElementsByClassName('menu')[0];
const mobileMenu = document.getElementsByClassName('mobile-menu')[0];
const navShopping = document.getElementsByClassName('nav-shopping-cart')[1];
const productDetailsClose = document.querySelector('.close-icon');
const shoppingCart = document.getElementsByClassName('shopping')[0];
const cardsContainer = document.querySelector('.cards-container');
const productDetails = document.querySelector('.product-details');

const productList = [];
productList.push({
    name: 'Tablet',
    price: 200,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

});
productList.push({
    name: 'Laptop',
    price: 600,
    image: 'https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

});
productList.push({
    name: 'Lentes de sol',
    price: 15,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Mochila',
    price: 75,
    image: 'https://images.pexels.com/photos/10005247/pexels-photo-10005247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Lámpara de escritorio',
    price: 38,
    image: 'https://images.pexels.com/photos/8092420/pexels-photo-8092420.jpeg?auto=compress&cs=tinysrgb&w=600'
});
productList.push({
    name: 'Carpa 4 estaciones',
    price: 234,
    image: 'https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Audífonos inalámbricos',
    price: 83,
    image: 'https://images.pexels.com/photos/3780680/pexels-photo-3780680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Lentes para natación',
    price: 47,
    image: 'https://cdn.shopify.com/s/files/1/0109/5012/products/R1_Cobalt_500x.jpg?v=1554330484'
});

agregarProductos(productList);
navEmail.addEventListener('click', toggleDesktopMenu);
navMobileMenu.addEventListener('click', toggleMobileMenu);
navShopping.addEventListener('click', toggleShopping);


function toggleDesktopMenu() {
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if (!isShoppingCartClosed) {
        shoppingCart.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if (!isShoppingCartClosed) {
        shoppingCart.classList.add('inactive')
    }
    
    closeProductDetails();
    mobileMenu.classList.toggle('inactive');
}

function toggleShopping() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailsClosed = productDetails.classList.contains('inactive');

    if (!isProductDetailsClosed) {
        productDetails.classList.add('inactive');
    }

    shoppingCart.classList.toggle('inactive');
}

function openProductDetails() {
    shoppingCart.classList.add('inactive');
    productDetails.classList.remove('inactive');
}

productDetailsClose.addEventListener('click', closeProductDetails);

function closeProductDetails() {
    productDetails.classList.add('inactive');
}



function agregarProductos(arreglo) {
    for (product of arreglo){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');


        
        // El producto es igual a un nombre, imagen y precio, la imagen es igual a product.image y se asigna atraves de la funcion setAttribute
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetails)
        
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productNombre = document.createElement('p');
        productNombre.innerText = product.name;
    
        productInfoDiv.append(productPrice, productNombre);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
     
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

