/*primeras dos variables para la accion de mostrar el elemento de la clase "desktop-menu"*/
const navbarEmail = document.querySelector('.navbar-email'); /*se crea variable para el elemento que se desea realizar la interaccion,
                    document.querySelector('.navbar-email') para seleccionar la clase "navbar-email" y asignarla a la variable*/
const desktopMenu = document.querySelector('.desktop-menu');

/*segundas dos variables para la accion de mostrar el elemento de la clase "mobile-menu"*/
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

/*terceras dos variables para la accion de mostrar el elemento del id: shoppingCartContainer*/
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

/*variable para la estructura HTML que se esta creando desde JS*/
const cardsContainer = document.querySelector('.cards-container');

/*variable para la accion de mostrar el elemento del id: product-detail*/
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close'); /*var. para cerrar la imagen del detalle del producto*/


navbarEmail.addEventListener('click', toggleDesktopMenu); /*metodo ".addEventListener" el cual ejecuta la accion que se le indique,
                                en este caso, cuando se de "click" al elemento de la clase "navbar-email", ejecute la funcion "toggleDesktopMenu"*/

menuHamIcon.addEventListener('click', toggleMobileMenu);

shoppingCartIcon.addEventListener('click', toggleProductDetail);

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() { /*ejecuta la clase que inactiva el elemento "desktop-menu"*/

    /*variable para definir si el menu del carrito (product-detail) esta cerrado*/
    const isProductDetailClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isProductDetailClosed) { /*si el elemento "product-detail" no esta cerrado (!isProductDetailClosed (! para negacion))*/
    shoppingCartContainer.classList.add('inactive'); /*entonces se usa el metodo "add", para llamar el elemento "inactive", para cerrarlo*/
    }

    closeProductDetailAside(); /*se llama la funcion para que cierre el detalle del producto cuando se abra el desktop-menu*/

    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu() {

    /*variable para definir si el menu del carrito (product-detail) esta cerrado*/
    const isProductDetailClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isProductDetailClosed) { /*si el elemento "product-detail" no esta cerrado (!isProductDetailClosed (! para negacion))*/
    shoppingCartContainer.classList.add('inactive'); /*entonces se usa el metodo "add", para llamar el elemento "inactive", para cerrarlo*/
    }

    closeProductDetailAside(); /*se llama la funcion para que cierre el detalle del producto cuando se abra el menu mobile*/

    mobileMenu.classList.toggle('inactive');

}

/*funcion para definir que cuando se abra el menu del elemento "product-detail (carrito)" pero el elemento "menu-mobile" esta abierto tambien,
entonces se debe cerrar el menu del elemento "menu-mobile"*/
function toggleProductDetail() {

    /*variable para definir si el menu de la version mobile esta cerrado*/
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed || !isDesktopMenuClosed) { /*si el elemento "mobile-menu" no esta cerrado (!isMobileMenuClosed (! para negacion))*/
        mobileMenu.classList.add('inactive'); /*entonces se usa el metodo "add", para llamar el elemento "inactive", para cerrarlo*/
        desktopMenu.classList.add('inactive'); /*entonces se usa el metodo "add", para llamar el elemento "inactive", para cerrarlo*/
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) { /*si el elemento "product-detail" no esta cerrado (!isisProductDetailClosed (! para negacion))*/
        productDetailContainer.classList.add('inactive'); /*entonces se usa el metodo "add", para llamar el elemento "inactive", para cerrarlo*/
    }

    shoppingCartContainer.classList.toggle('inactive');

}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive'); /*se indica que desactive el carrito cuando se esta abriendo el detalle del producto*/
  desktopMenu.classList.add('inactive'); /*se indica que desactive el menu de escritorio cuando se esta abriendo el detalle del producto*/
  productDetailContainer.classList.remove('inactive'); /*funcion que desactiva la clase inactive para que se permita mostrar los detalles del producto cuando se de click en la imagen*/
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive'); /*funcion que activa la clase inactive para que se cierren los detalles del producto cuando se de click en la "X"*/
}

const productList = [];

productList.push({
    name: 'Camera',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'LargeCamera',
    price: 240,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'SmallCamera',
    price: 60,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/*
<section class="main-container">
    <div class="cards-container">

      <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
    </div>
  </section>
*/

/*Se creara la estructura HTML de arriba pero desde JS*/

/*"product of productList" es el "atajo" para la sintaxis del ciclo "for", del array "productList" va a iterar cada elementos (product)*/
for (product of productList) {

    const productCard = document.createElement('div'); /*"document.createElement('div')" para introducir el elemento "div" al index*/
    productCard.classList.add('product-card'); /*dentro del "productCard" (div) se creara la clase (classList) "product-card"*/

    const img = document.createElement('img');
    img.setAttribute('src', product.image); /*al elemento "image" del objeto "productList" (en este "for" designado como "product")
                    se le agregara la imagen designada en el objeto*/
    img.addEventListener('click', openProductDetailAside); /*evento para cuando se de click en la imagen del prod. muestre su detalle*/

    const productInfo = document.createElement('div'); /*"document.createElement('div')" para introducir el elemento "div" al index*/
    productInfo.classList.add('product-info'); /*dentro del "productInfo" (div) se creara la clase (classList) "product-info"*/

    /*Parte del "div" que contiene el nombre y el precio*/
    const divVacio = document.createElement('div'); /*"document.createElement('div')" para introducir el elemento "div" al index*/

    const productPrice = document.createElement('p'); /*"document.createElement('p')" para introducir el elemento "p" al index*/
    productPrice.innerText = '$' + product.price; /*se le asigna el vlr. del elemento "price" del objeto "productList" (designado en este for como "product")*/

    const productName = document.createElement('p'); /*"document.createElement('p')" para introducir el elemento "p" al index*/
    productName.innerText = product.name; /*se le asigna el vlr. del elemento "name" del objeto "productList" (designado en este for como "product")*/
    
    divVacio.appendChild(productPrice); /*se asigna el elemento "productPrice" al "divVacio" con la propiedad ".appendChild()"*/
    divVacio.appendChild(productName); /*se asigna el elemento "productName" al "divVacio" con la propiedad ".appendChild()"*/

    /*Parte del "figure" que contiene una imagen por defecto*/
    const figureVacio = document.createElement('figure'); /*"document.createElement('figure')" para introducir el elemento "figure" al index*/
    const figureImg = document.createElement('img');
    figureImg.setAttribute('src', './icons/bt_add_to_cart.svg'); /*al elemento "image" del objeto "productList" (en este "for" designado como "product")
                    se le agregara la imagen designada por defecto*/    
    figureVacio.appendChild(figureImg); /*se asigna el elemento "figureImg" al "figureVacio" con la propiedad ".appendChild()"*/

    /*Se asignan los elementos que estan dentro de las etiquetas "div" (que contiene el nombre y el precio) y "figure" (que contiene la imagen por defecto)
    a la clase "product-info", de acuerdo a la estructura de HTML arriba*/
    productInfo.appendChild(divVacio); /*se asigna el elemento "divVacio" al "productInfo" con la propiedad ".appendChild()"*/
    productInfo.appendChild(figureVacio); /*se asigna el elemento "figureVacio" al "productInfo" con la propiedad ".appendChild()"*/

    /*Se asignan los elementos que estan dentro de las clases "productInfo" y "img" (que contienen las imagenes dentro de cada propiedad "image" del objeto)
    a la clase "product-card", de acuerdo a la estructura de HTML arriba*/
    productCard.appendChild(img); /*se asigna el elemento "img" al "productCard" con la propiedad ".appendChild()"*/
    productCard.appendChild(productInfo); /*se asigna el elemento "productInfo" al "productCard" con la propiedad ".appendChild()"*/

    /*ultimas anexiones de la etiqueta "product-card" que contiene todos los elementos de la estructura HTML a la clase 2da clase ppal. "cards-container"*/
    cardsContainer.appendChild(productCard); /*se asigna el elemento "productCard" al "cardContainer" con la propiedad ".appendChild()"*/

}