/*
    Metodo visto para agregar o quitar contenido html de forma dinamica:

    1. Agregarle estilos al componente
    2. Agregar la clase inactive al contenedor padre
    3. Colocarle display; none utuilizando la clase inactive
    4. Seleccionar en JS el elemento que disparará el evente
    5. Seleccionar en JS el elemento que se verá afectado
    6. Crear la función que acceda al elemento modificado:
       - ClassList: Propiedad que contiene los valores de una clase
       - toggle(): Metodo que agrega y quita el valor de una clase
    7. Disparar el evento

    Problema en toggleProductDetail()

*/

let navEmail = document.querySelector(".navbar-email");
let mobileIconMenu = document.querySelector(".menu");
let desktopMenu = document.querySelector(".desktop-menu");
let mobileMenu = document.querySelector(".mobile-menu");
let carritoIconMenu = document.querySelector(".icon-product-detail");
let productDetailAside = document.querySelector(".product-detail");
let cardsContainer = document.querySelector(".cards-container")
const productList = [];
productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "CPU",
    price: 1500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "car",
    price: 5000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

const showProducts = function (arr) { // Crear contenedor de los productos con contenido dinamico 
    for (let product of arr ) {
        const productCard = document.createElement( "div" );
        const imagen = document.createElement("img");
        const productInfo = document.createElement( "div" );
        const productInfoContainer = document.createElement( "div" );
        const productPrice = document.createElement( "p" );
        const productName = document.createElement( "p" );
        const iconContainer = document.createElement( "figure" );
        const icon = document.createElement( "img" );

        productCard.classList.add( "product-card" );
        imagen.setAttribute( "src", product.image );
        imagen.setAttribute( "alt", `Imagen de una ${product.name}` );
        productInfo.setAttribute( "class", "product-info" );
        icon.setAttribute( "src", "./icons/bt_add_to_cart.svg" );
        icon.setAttribute( "alt", "icono" );
        productPrice.innerText = "$" + product.price;
        productName.innerText = "$" + product.name;

        productCard.appendChild( imagen );
        productCard.appendChild( productInfo );
        productInfo.appendChild( productInfoContainer );
        productInfoContainer.appendChild( productPrice );
        productInfoContainer.appendChild( productName );
        productInfo.appendChild( iconContainer );
        iconContainer.appendChild( icon );
        cardsContainer.appendChild( productCard );
    }
}

const toogleDesktopMenu = function () { // agregar el menú de escritorio solo sí los otros están cerrados.
    const isProductDetailOpen = productDetailAside.classList.contains( "inactive" );
    const closedProductDetail = productDetailAside.classList.add( "inactive" );
    const openDesktopMenu = desktopMenu.classList.toggle( "inactive" );

    if ( isProductDetailOpen ) {
        closedProductDetail;
    }
    openDesktopMenu;
}

const toogleMobileMenu = function () { // agregar el menú de mobil solo sí los otros están cerrados.
    const isProductDetailOpen = productDetailAside.classList.contains( "inactive" );
    const closedProductDetail = productDetailAside.classList.add( "inactive" );
    const openMobileMenu = mobileMenu.classList.toggle( "inactive" );

    if ( isProductDetailOpen ) {
        closedProductDetail;
    }
    openMobileMenu;
}

const toogleProductDetail = function () { // agregar el menu de articulos solo sí los otros están cerrados.
    const isMobileMenuOpen = mobileMenu.classList.contains( "inactive" );
    const isDesktopMenuOpen = desktopMenu.classList.contains( "inactive" );
    const closedDesktopMenu = desktopMenu.classList.add( "inactive" );
    const closedMobileMenu = mobileMenu.classList.add( "inactive" );
    const openProductDetail = productDetailAside.classList.toggle( "inactive" );

    if ( isMobileMenuOpen ) {
        closedMobileMenu;
    }
    if ( isDesktopMenuOpen ) {
        closedDesktopMenu;
    }
    openProductDetail;
}

showProducts(productList);
navEmail.addEventListener("click", toogleDesktopMenu);
mobileIconMenu.addEventListener("click", toogleMobileMenu);
carritoIconMenu.addEventListener("click", toogleProductDetail);
