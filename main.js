const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
// Mobile menu
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

//Menu Carrito de compras
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
//Product Detail
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');


//Eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarrito);


//Funciones
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isshoppingCartContainerClosed = menuCarritoIcon.classList.contains('inactive');

    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
        mobileMenu.classList.toggle('inactive');
    
}
function toggleCarrito() { 
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

   if (!isMobileMenuClosed) {
       mobileMenu.classList.add('inactive');
   }

    shoppingCartContainer.classList.toggle('inactive');
}

// Declaramos una lista de productos
const productList = [];

// Agrergamos productos a la lista
productList.push({
    name: 'Bike',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
});

productList.push({
    name: 'Pantalla',
    price: 300,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
});

productList.push({
    name: 'Computadora',
    price: 600,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
});

productList.push({
    name: 'Bike',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
});

productList.push({
    name: 'Pantalla',
    price: 300,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
});

productList.push({
    name: 'Computadora',
    price: 600,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
});

//Reccorrer la lista de productos
function renderProduct(arr) {
for (product of arr) {
    const ProductCard = document.createElement('div');
    ProductCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.Image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = `$${product.price}`; //OJO AQUI

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

    ProductCard.appendChild(productImg);
    ProductCard.appendChild(productInfo);

    cardsContainer.appendChild(ProductCard);
}
}

//Llamamos a la funcion
renderProduct(productList);