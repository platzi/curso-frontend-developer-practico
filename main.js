const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerIcon = document.querySelector('.burguer-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartAside = document.querySelector('.shopping-cart-aside');
const cardsContainer = document.querySelector('.cards-container');
let productList = [];

navBarEmail.addEventListener('click', deployDesktopMenu);
burguerIcon.addEventListener('click', deployMobileMenu); 
cartIcon.addEventListener('click', deployAside);


function deployDesktopMenu() {
    const isAsideOpen = !shoppingCartAside.classList.contains('inactive');

    if (isAsideOpen) {
        shoppingCartAside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}
function deployMobileMenu() {
    const isAsideOpen = !shoppingCartAside.classList.contains('inactive');

    if (isAsideOpen) {
        shoppingCartAside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}
function deployAside() {
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');

    if (isDesktopMenuOpen || isMobileMenuOpen) {
        desktopMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive');
    }

    shoppingCartAside.classList.toggle('inactive');
}
function product(image, price, name) {
    this.image = image;
    this.price = price;
    this.name = name;
    this.figure = "./icons/bt_add_to_cart.svg"
}
function addProduct(image, price, name) {
    productList.push(new product(image, price, name));
}

function renderProduct(array) {
    for (const product of array) {
        const card = document.createElement('div');
        card.classList.add('product-card');
    
        const imgProduct = document.createElement('img');  // imagen 
        imgProduct.setAttribute('src', product.image);
    
        const info = document.createElement('div');
        info.classList.add('product-info');
    
        const infoDiv = document.createElement('div');
        const figure = document.createElement('figure');
    
        const pPrice = document.createElement('p');        // parrafo con el precio
        pPrice.innerText = '$' + product.price;
        const pName = document.createElement('p');        // parrafo con el nombre
        pName.innerText = product.name;
    
        const icon = document.createElement('img');  // icono de la etiqueta figure
        icon.setAttribute('src', "./icons/bt_add_to_cart.svg");
    
        infoDiv.appendChild(pPrice);
        infoDiv.appendChild(pName);
        figure.appendChild(icon);
    
        info.appendChild(infoDiv)
        info.appendChild(figure);
    
        card.appendChild(imgProduct);
        card.appendChild(info);
    
        cardsContainer.appendChild(card);
    }
}

addProduct("https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 120, "Bike");
addProduct("https://www.sincable.mx/wp-content/uploads/2020/01/patrick-ward-z_dLXnQg0JY-unsplash-1024x664.jpg", 500, "Computadora");
addProduct("https://m.media-amazon.com/images/I/7163ck4COpL._AC_SX425_.jpg", 180, "Caja de Herramientas");
addProduct("https://i5.walmartimages.com.mx/mg/gm/3pp/asr/eceb0cef-d378-485f-bb51-29af7a550853_1.e3a4676c3ab68cf3eb29befa4276f2c0.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF", 350, "Pantalla");
addProduct("https://www.sincable.mx/wp-content/uploads/2020/01/patrick-ward-z_dLXnQg0JY-unsplash-1024x664.jpg", 500, "Computadora");
addProduct("https://m.media-amazon.com/images/I/7163ck4COpL._AC_SX425_.jpg", 180, "Caja de Herramientas");
addProduct("https://i5.walmartimages.com.mx/mg/gm/3pp/asr/eceb0cef-d378-485f-bb51-29af7a550853_1.e3a4676c3ab68cf3eb29befa4276f2c0.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF", 350, "Pantalla");
addProduct("https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 120, "Bike");

renderProduct(productList);