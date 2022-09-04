const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
//const aside = document.querySelector('.product-detail');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container'); 

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleMiCarritoAside);

/* Ocultar menu al dar clic en el correo PC */
function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

/* Ocultar menu al dar clic en el icono hamburguesa*/
function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

/* Oculatmos carrito de compras aside */
function toggleMiCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

/* Creamos nuestra lista de productos */
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computadora',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});





// Segunda opcion para obtener los elementos del arreglo
// con el in podemos obtener el indice de cada objeto del array
/*for (product in productList) {
    console.log(product);
}*/

function renderProducts(array) {
    /* Insertamos los productos en el html */
    //agarramos el array con productList y a cada elemento lo llamamos product
    for (product of productList) {

        // creamos el contenedor padre general product-card
        const productCard =  document.createElement('div');
        // añadimos la clase product-card a la etiqueta div
        productCard.classList.add('product-card');

        // asignamos la url de la imagen del producto de productList
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        // creamos el div hijo/padre product-info que contendrá precio, nombre e icono/figure de carrito
        const productInfo =  document.createElement('div');
        // asignamos la clase product-info al hijo de product-card y padre de los elementos de nombre, precio y carrito
        productInfo.classList.add('product-info');

        // creamos el div padre que contendrá precio y nombre
        const productInfoDiv = document.createElement('div');

        // creamos el P que contiene el precio del producto
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        // creamos el P que contendrá el nombre del producto obtenido desde productList
        const productName = document.createElement('p');
        productName.innerText = product.name;

        // asignamos los valores de precio y nombre dentro del div de InfoDiv creado lineas arriba
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        // creamos el elemento de figura que contendrá el icono de carrito
        const productInfoFigure = document.createElement('figure');
        // creamos el elemento de imagen que tendrá el elemento img del carrito 
        const productImgCart = document.createElement('img');
        // asignamos la url del carrito de compras
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        // dentro de las etiquetas de figure del carrito de compras le añadimos el icono del carrito ya con la url del icono carrito
        productInfoFigure.appendChild(productImgCart);

        // dentro de la etiqueta de product-info le añadimos las etiquetas de precio, nombre y el icono del carrito de compras
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        // asignamos las etiquetas de la imagen principal
        // asignamos las etiquetas de product-info (tiene nombre, precio y carrito)
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        // esta es la etiqueta padre de los productos
        // añadimos las dos lineas anteriores que contienen ya todos los elemnentos de imagen principal asi como nombre, precio y carrito
        cardsContainer.appendChild(productCard);
        
    }
}

renderProducts(productList);


/* OPCION PARA AÑADIR OBJETOS AL HTML */
/*
for (product of productList) {
    const htmlCards = `<div class="product-card">
            <img src="${product.image}" alt="">
            <div class="product-info">
                <div>
                    <p>$${product.price}</p>
                    <p>${product.name}</p>
                </div>
                <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="">
                </figure>
            </div>
        </div>`
    const cardsContainer = document.querySelector('.cards-container'); 
    cardsContainer.innerHTML += htmlCards;
}
*/
