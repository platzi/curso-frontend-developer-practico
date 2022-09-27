/**
 * Variables for desktop menu
 */
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

/**
 * Variables for mobile menu
 */
const imgMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

/**
 * Varaibles for shopping cart
 */
const iconShoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

/**
 * Variable of cards container
 */
const cardsContainer = document.querySelector('.cards-container');

/**
 * Capture of events for each menu
 */
navEmail.addEventListener('click', () => toggleInactive(aside, desktopMenu));
imgMenu.addEventListener('click', () => toggleInactive(aside, mobileMenu));
iconShoppingCart.addEventListener('click', () => {
    if(!desktopMenu.classList.contains('inactive')) {
        toggleInactive(desktopMenu, aside);
    } else {
        toggleInactive(mobileMenu, aside)
    }
});

/**
 * Esta función permite ir alternando la activación de los diferentes menús en la app.
 * @param elementOpened Se indica el menú que se encuantra abierto para luego cerrarlo agregandole una clase 'inactive' a traves de un condicional
 * @param elementClosed Se indica el menú al que se le alterna la clase 'inactive' para mostrado o no en pantalla.
 */
function toggleInactive(elementOpened, elementClosed) {
    const isClosed = elementOpened.classList.contains('inactive');

    if(!isClosed) {
        elementOpened.classList.add('inactive');
    } 

    elementClosed.classList.toggle('inactive');
}

/**
 * Create product list
 */
let i = 1

const productsList = [];

productsList.push({
    id: i++,
    name: 'Bike',
    price: 120.00,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


productsList.push({
    id: i++,
    name: 'Computer',
    price: 980.00,
    img: 'https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_960_720.jpg'
});


productsList.push({
    id: i++,
    name: 'Monitor',
    price: 120.00,
    img: 'https://cdn.pixabay.com/photo/2014/09/28/11/25/imac-464737_960_720.jpg'
});

/**
 * list of products in the shopping cart
 */
let carrito = [];

/**
 * Insert HTML for create each product
 */
function createListProducts(list) {
    list.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productFigure = document.createElement('figure');
        productFigure.classList.add(`add${product.id}`);
    
        const imgCart = document.createElement('img');
        imgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(imgCart);
        
        productInfoDiv.append(productPrice, productName);
    
        productInfo.append(productInfoDiv, productFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    
        const boton = document.querySelector(`.add${product.id}`);
    
        boton.addEventListener('click', () => {
            addCart(product.id);
        })
    }); 
}

/**
 * Se encarga de agregar productos al carrito por medio del id;
 * @param id Necesario para poder capturar el producto por medio del id 
 */
function addCart(id) {
    const item = productsList.find(product => product.id === id);
    carrito.push(item);
    
    console.log(carrito);
}

createListProducts(productsList);