//menu-var se añade a navbar

const menu = document.querySelector(".desktop-menu");
const navEmail = document.querySelector(".navbar-email");

//menu-var-mobile se añade a navbar
const mobileMenu = document.querySelector(".mobile-menu");
const navMobile = document.querySelector(".menu");

//menu-carrito se añade al documento

const carMenu = document.querySelector(".product-detail");
const carIcon = document.querySelector(".navbar-shopping-cart");

// Se añade contenedor de productos al documento
const cardsContainer = document.querySelector('.cards-container');

// Se añade el product detail para mostrar los detalles
const productDetail = document.querySelector(".product-detail-aside");
const botonCerrar = document.querySelector('.product-detail-aside-close');

navEmail.addEventListener("click", toggleDesktopMenu);

navMobile.addEventListener("click", toggleMobileMenu);

carIcon.addEventListener("click", toggleCarMenu);


//Funcio de click
function toggleDesktopMenu() {

    const isCarMenuClose = carMenu.classList.contains('inactive');

    if (!isCarMenuClose) {
        carMenu.classList.add("inactive");
    }

    menu.classList.toggle("inactive");

}

function toggleMobileMenu() {
    const isCarMenuClose = carMenu.classList.contains('inactive');

    if (!isCarMenuClose) {
        carMenu.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");

}

function toggleCarMenu() {
    // Se crean constantes para almacenar si los elementos tiene la clase inactive

    const isMobileMenuClose = mobileMenu.classList.contains('inactive');

    const isDesktopMenuClose = menu.classList.contains('inactive');

    // Se niegan para abrirlas, ya que al hacer clic se las añade

    if (!isMobileMenuClose) {
        mobileMenu.classList.add("inactive");
    }

    if (!isDesktopMenuClose) {
        menu.classList.add("inactive");
    }

    carMenu.classList.toggle("inactive");

}

// Product list

const productList = [];

productList.push({
    name: 'bike',
    price: 520,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'car',
    price: 1200,
    img: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg'
});

productList.push({
    name: 'PC Gamer',
    price: 520,
    img: 'https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

//Funcion de insertar productos
function insertarProductos(arrayProductos) {
    for (product of arrayProductos) {
        // Container producto
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Imagen procuto
        const image = document.createElement('img');
        image.setAttribute('src', product.img);

        // Info del producto
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        // Div del precio y nombre
        const divProductInfo = document.createElement('div');

        // Precio
        const precio = document.createElement('p');
        precio.innerText = "$" + product.price;

        // Nombre
        const info = document.createElement('p');
        info.innerText = product.name;

        // Agrega precio y nombre al div
        divProductInfo.append(precio, info);

        // Icono carrito
        const figure = document.createElement('figure');

        // Carrito
        const imageIcon = document.createElement('img');
        imageIcon.setAttribute('src', './icons/bt_add_to_cart.svg');

        // Agrega imageIcon dentro de figure
        figure.appendChild(imageIcon);

        // Agrefa figure y div a product info
        productInfo.append(divProductInfo, figure);

        // Agrega img y product info a product card
        productCard.append(image, productInfo);

        // Agrega procuct card a cards-container
        cardsContainer.appendChild(productCard);
    }
}
insertarProductos(productList);


function mostrarDetail() {

}