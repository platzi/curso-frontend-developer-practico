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

// Elementos del produc detail
const imageDetail = document.querySelector('.product-detail-aside>img:nth-child(2)');
const price = document.querySelector('.product-info-aside p:nth-child(1)');
const productName = document.querySelector('.product-info-aside p:nth-child(2)');



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
    img: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'PC Gamer',
    price: 520,
    img: 'https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


//Funcio de click
function toggleDesktopMenu() {

    const isCarMenuClose = carMenu.classList.contains('inactive');

    if (!isCarMenuClose) {
        carMenu.classList.add("inactive");
    }

    const isProductDetailClose = productDetail.classList.contains('inactive');

    if (!isProductDetailClose) {
        productDetail.classList.add("inactive");
    }

    menu.classList.toggle("inactive");

}

function toggleMobileMenu() {
    const isCarMenuClose = carMenu.classList.contains('inactive');

    if (!isCarMenuClose) {
        carMenu.classList.add("inactive");
    }

    const isProductDetailClose = productDetail.classList.contains('inactive');

    if (!isProductDetailClose) {
        productDetail.classList.add("inactive");
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

    const isProductDetailClose = productDetail.classList.contains('inactive');

    if (!isProductDetailClose) {
        productDetail.classList.add("inactive");
    }

    carMenu.classList.toggle("inactive");

}

//Funcion de insertar productos
function insertarProductos(arrayProductos) {
    for (product of arrayProductos) {

        // Container producto
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Imagen procuto
        const image = document.createElement('img');
        image.setAttribute('src', product.img);
        // Evento para abrir el product detail
        image.addEventListener('click', mostrarDetail);

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

        // Agrega product card a cards-container
        cardsContainer.appendChild(productCard);

    }

}

// for (detail of productList) {
//     showProductDetail(detail.img, detail.price, detail.name);
// }

// Funcion de product detail
function mostrarDetail() {
    carMenu.classList.add("inactive");
    // mobileMenu.classList.add("inactive");
    menu.classList.add("inactive");

    productDetail.classList.remove("inactive");
    console.log("click");
}

function quitarDetail() {
    productDetail.classList.add('inactive');
}

function showProductDetail(image, priceDetail, nameDetail) {
    imageDetail.setAttribute('src', image);
    price.innerHTML = '$' + priceDetail;
    productName.innerHTML = nameDetail;
}

//insertar productos
insertarProductos(productList);



// Llamado de funcion
navEmail.addEventListener("click", toggleDesktopMenu);

navMobile.addEventListener("click", toggleMobileMenu);

carIcon.addEventListener("click", toggleCarMenu);

botonCerrar.addEventListener('click', quitarDetail);

