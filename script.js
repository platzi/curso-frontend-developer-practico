const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('body');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.order-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail');


//Desktop menu
menuEmail.addEventListener('click', ()=>{
    //esta linea lo que hace es borrar esta clase o ponerla
    //dentro de la clase desktop-menu para eso sirve el "toggle"
    desktopMenu.classList.toggle('inactive');

    //este condicional hace que, los detalles del producto 
    //se cierren al dar click al destokmenu
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
});

//desktopMenu.contains(event.target): Verifica si el elemento clicado (event.target) es un descendiente del desktopMenu.
//menuEmail.contains(event.target): Verifica si el elemento clicado (event.target) es un descendiente de menuEmail.
//event.target: Referencia al elemento que originalmente disparó el evento. 
body.addEventListener('click', (event) => {
    if (!desktopMenu.contains(event.target) && !menuEmail.contains(event.target)) {
        desktopMenu.classList.add('inactive');
    }
});

/* Esta línea llama al método stopPropagation del objeto event. 
El propósito de stopPropagation es evitar que el evento se propague hacia arriba en la cadena del DOM.
En el contexto de los eventos del DOM, la "propagación" significa que el evento, después de ser manejado 
por el elemento donde ocurrió, se "propaga" o se mueve hacia arriba en la jerarquía del DOM, 
disparando los event listeners de los elementos padres. Si no se detiene, el evento podría llegar hasta el elemento body.*/
desktopMenu.addEventListener('click', (event) => {
    // Prevenimos que el evento se propague al body y desactive el menu
    event.stopPropagation();
});

// Mobile Menu
menuBurger.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('inactive');

    //este condicional hace que, los detalles del producto 
    //se cierren al dar click al menu hamburguesa
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
});

body.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !menuBurger.contains(event.target)) {
        mobileMenu.classList.add('inactive');
    }
});

mobileMenu.addEventListener('click', (event) => {
    // Prevenimos que el evento se propague al body y desactive el menu
    event.stopPropagation();
});

//Carrito icon Navbar
menuCarritoIcon.addEventListener('click', ()=>{
    aside.classList.toggle('inactive');

    //este condicional hace que, los detalles del producto 
    //se cierren al dar click al carrito
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
});

body.addEventListener('click', (event) => {
    if (!aside.contains(event.target) && !menuCarritoIcon.contains(event.target)) {
        aside.classList.add('inactive');
    }
});

aside.addEventListener('click', (event) => {
    // Prevenimos que el evento se propague al body y desactive el menu
    event.stopPropagation();
});

//produc List

const productList = [];
productList.push({
    id: 1,
    name: 'Bike',
    price: 120.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
});

productList.push({
    id: 2,
    name: 'Computadora',
    price: 200.00,
    image: 'https://cdn.pixabay.com/photo/2023/11/16/09/45/quantum-8392053_1280.jpg',
    description: 'This is a quantum computer, the best on the market.',
});

productList.push({
    id: 3,
    name: 'Television',
    price: 150.00,
    image: 'https://cdn.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg',
    description: 'A television with fill 4k.',
});

productList.push({
    id: 4,
    name: 'Xbox Controller deluxe',
    price: 35.00,
    image: 'https://cdn.pixabay.com/photo/2023/08/30/14/51/xbox-8223478_960_720.jpg',
    description: 'The best controller in the world.',
});

productList.push({
    id: 5,
    name: 'xbox control',
    price: 22.00,
    image: 'https://cdn.pixabay.com/photo/2024/05/24/16/40/ai-generated-8785420_1280.jpg',
    description: 'A of the best controller in the world.',
});

productList.push({
    id: 6,
    name: 'Sony control',
    price: 20.00,
    image: 'https://cdn.pixabay.com/photo/2024/05/24/16/40/ai-generated-8785422_1280.jpg',
    description: 'A of the best controller in the world.',
});

function renderProducts(arr){

    for(product of arr) {
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.setAttribute("data-id", product.id);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
         
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
           
        const productInfoFigure = document.createElement('figure');
        //add shopping cart
        productInfoFigure.classList.add('btn-add-to-cart');
        productInfoFigure.id = product.name.replaceAll(" ", "-");
        productInfoFigure.addEventListener('click', addProductToShoppingCart);

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productCard.append(productImg, productInfo);
        productInfo.append(productInfoDiv, productInfoFigure);
        productInfoDiv.append(productPrice, productName);
        productInfoFigure.append(productImgCart);
    
        cardsContainer.appendChild(productCard);
    };
};

renderProducts(productList);

//producDetailAside (descrpcion de los productos)

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
};

function renderProductsDetailAside(event){
    const productId = event.target.getAttribute('data-id');
    const product = productList.find(prod => prod.id == productId);

    if(product){
        productDetailContainer.innerHTML = ''; // Limpiar el contenedor de detalles

        const productDetailClose = document.createElement('div');
        productDetailClose.classList.add('product-detail-close');
        const producDetailCloseImg = document.createElement('img');
        producDetailCloseImg.setAttribute('src', './icons/icon_close.png');

        const productDetailImg = document.createElement("img");
        productDetailImg.setAttribute("src", product.image);
        productDetailImg.setAttribute("data-id", product.id);

        const productDetailDiv = document.createElement('div');
        productDetailDiv.classList.add('product-detail-info');

        const productDetailPrice = document.createElement('p');
        productDetailPrice.innerText = '$' + product.price;

        const productDetailName = document.createElement('p');
        productDetailName.innerText = product.name;

        const productDetailDescription = document.createElement('p');
        productDetailDescription.innerText = product.description;

        const productDetailButton = document.createElement('button');
        productDetailButton.innerText = 'Add to cart';
        productDetailButton.classList.add('primary-button', 'add-to-cart-button');

        const productDetailButtonImg = document.createElement('img');
        productDetailButtonImg.setAttribute('src', './icons/bt_add_to_cart.svg');
        productDetailButtonImg.setAttribute('alt', 'add to cart');



        productDetailButton.append(productDetailButtonImg);
        productDetailContainer.append(productDetailClose, productDetailImg, productDetailDiv);
        productDetailClose.append(producDetailCloseImg);
        productDetailDiv.append(productDetailPrice, productDetailName, productDetailDescription, productDetailButton);
    };

    const productDetailCloseIcon = document.querySelector('.product-detail-close');

    productDetailCloseIcon.addEventListener('click', ()=>{
    productDetailContainer.classList.add('inactive');
})
};

// Escuchar eventos de clic en las imágenes de productos
function addProductDetailAside(event) {
    renderProductsDetailAside(event);
}

// Asignar el evento a cada imagen de producto
const productImages = document.querySelectorAll('.product-card img[data-id]');
productImages.forEach(img => {
    img.addEventListener('click', addProductDetailAside);
});


//change add shopping cart (agregar produtos al carrito y quitarlos)

const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const contentText = document.querySelector("#my-order-content-text");
const shoppingCartContainers = document.querySelector("#shopping-cart-containers");
const totalPrice = document.querySelector("#TotalPrice");
const shoppingCartProducts = document.querySelector("#shopping-cart-products");

const listProductsAddedShoppingCart = [];

function returnPriceTotalShoppingCart() {
    const prices = [];
    const listPrices = document.querySelectorAll('.productCartInfoPrice');
    let total = 0;
    if(listPrices.length >= 1) {
        listPrices.forEach(
        price => prices.push( +price.textContent.replace('$','') ) );
        total = prices.reduce( (acumulador, actual) => acumulador + actual )
    }
    return `$${total}.00`;
}

function addProductToShoppingCart(el) {

    if(listProductsAddedShoppingCart.includes(el.currentTarget.id)) {
        alert('El producto ya fué agregado al carrito');
    }

    if(!listProductsAddedShoppingCart.includes(el.currentTarget.id)) {
        listProductsAddedShoppingCart.push(el.currentTarget.id);
        renderProductproductCartShoppingCart(el.composedPath()[3]);
        shoppingCartProducts.textContent = +shoppingCartProducts.textContent + 1;
        totalPrice.textContent = returnPriceTotalShoppingCart();
    }  
}

function closeContentText() {
    const contentTextClosed = contentText.classList.contains("inactive");
  
    if(!contentTextClosed){
        contentText.classList.add('inactive');
    }
}

function removeProductFromShoppingCart(e) {
    const product = e.currentTarget.parentNode;
    const pruductId = e.target.classList.value;
  
    listProductsAddedShoppingCart.splice(listProductsAddedShoppingCart.indexOf(pruductId), 1);
  
    shoppingCartContainers.removeChild(product);
  
    shoppingCartProducts.textContent = +shoppingCartProducts.textContent - 1;
    totalPrice.textContent = returnPriceTotalShoppingCart();
  
    if (listProductsAddedShoppingCart.length === 0) {
        contentText.classList.remove('inactive');
    }
}

function renderProductproductCartShoppingCart(productCart) {
    const productCartInfo = productCart.childNodes[1].childNodes[0].childNodes;
  
    // imagen, nombre y precio.
    const shoppingCart = document.createElement('div');
    shoppingCart.classList.add('shopping-cart');
  
    const figure = document.createElement('figure');
  
    const shoppingCartImg = document.createElement('img');
    shoppingCartImg.setAttribute('src', productCart.childNodes[0].src);
    shoppingCartImg.setAttribute('alt', productCartInfo[1].textContent);
    figure.appendChild(shoppingCartImg);
    
    const shoppingCartName = document.createElement('p');
    shoppingCartName.textContent = productCartInfo[1].textContent;
  
    const shoppingCartPrice = document.createElement('p');
    shoppingCartPrice.classList.add('productCartInfoPrice')
    shoppingCartPrice.textContent = productCartInfo[0].textContent;
  
    const shoppingCartCloseImg = document.createElement('img');
    shoppingCartCloseImg.setAttribute('src', './icons/icon_close.png');
    shoppingCartCloseImg.setAttribute('alt', 'close');
    shoppingCartCloseImg.classList.add(productCartInfo[1].textContent.replaceAll(" ", "-"));
    shoppingCartCloseImg.addEventListener('click', removeProductFromShoppingCart)
  
    shoppingCart.appendChild(figure);
    shoppingCart.appendChild(shoppingCartName);
    shoppingCart.appendChild(shoppingCartPrice);
    shoppingCart.appendChild(shoppingCartCloseImg);
      
    closeContentText();
  
    shoppingCartContainers.appendChild(shoppingCart);
}