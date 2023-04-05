const desktopMenu =  document.querySelector('.desktop-menu');
const menuEmail = document.querySelector('.navbar-email');
const mobileMenu = document.querySelector('.mobile-menu');
const hamMenu = document.querySelector('.menu');
const carritoCompras = document.querySelector('.carritoCompras');
const detalleCompra = document.querySelector('.shopping-cart-container');
const cardsContainer = document.querySelector('.cards-container')
const mainCardsContainer = document.querySelector('.main-container')
//ingresar productos
//variables de los objetos
const productList = []; 
productList.push({
    nameProduct: 'Bike',
    price: 120, 
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}); 
productList.push({
    nameProduct: 'CellPhone',
    price: 60, 
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}); 
productList.push({
    nameProduct: 'Table',
    price: 100, 
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}); 
productList.push({
    nameProduct: 'cube',
    price: 76, 
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}); 
productList.push({
    nameProduct: 'cube',
    price: 76, 
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}); 
productList.push({
    nameProduct: 'cube',
    price: 76, 
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}); 
productList.push({
    nameProduct: 'cube',
    price: 76, 
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}); 
generarProductos(productList)//generar los productos al empezar el js 

menuEmail.addEventListener('click', toggleDesktopMenu); 
hamMenu.addEventListener('click', toggleMobileMenu);
carritoCompras.addEventListener('click', toggleDetailShop);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    detalleCompra.classList.add('inactive');
    //desktopMenu.style.display = 'none' //alternativa para mostrar o ocultar menu 
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    detalleCompra.classList.add('inactive');
    mainCardsContainer.classList.toggle('inactive');
}

function toggleDetailShop(){
    detalleCompra.classList.toggle('inactive'); 
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}


//ciclo para recorrer los productos
function generarProductos(arr){
    for(product of arr){
        //se crea una variable por cada etiqueta HTML
        const productCard = document.createElement('div'); 
        productCard.classList.add('product-card'); 

        const img = document.createElement('img')
        img.setAttribute('src', product.image);

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$' + product.price;

        const productName = document.createElement('p')
        productName.innerHTML = product.nameProduct;

        const productFigure = document.createElement('figure'); 
        const imgCart = document.createElement('img'); 
        imgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productFigure.appendChild(imgCart); 
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName); 
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure); 

        productCard.appendChild(img);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard); 
    }
}

