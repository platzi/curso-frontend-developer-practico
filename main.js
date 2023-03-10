const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const menuHamIcon = document.querySelector ('.menu')
const menuCarritoIcon = document.querySelector ('.navbar-shopping-cart');
const mobileMenu = document.querySelector ('.mobile-menu');
const aside = document.querySelector ('.product-detail');
const cardsContainer = document.querySelector ('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu ( ) {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {

    //Guardo en una constante el valor true o false de su clase inactive
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    // Si está abierto el menu mobile lo cierro
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    // Si está abierto el menu desktop lo cierro
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.toggle('inactive');
    }

    //abro el aside
    aside.classList.toggle('inactive');
 
}


// LISTA DE PRODUCTOS: Manipulación dinámica del DOM para poder mostrar los productos que estarían en una base de datos.

// Primero creamos una variable con un array que es el que nos devolvería los datos cuando hagamos la consulta a la base de datos.
const productList = [];
// Ahora creamos un objeto con las distintas propiedades que tenga nuestro producto, y por medio de un push vamos a agregar ese objeto a nuestra variable (como si lo trajeramos de la base de datos donde ya está establecido).
productList.push ({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push ({
    name: 'Monitor',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push ({
    name: 'Laptop',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push ({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push ({
    name: 'Monitor',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push ({
    name: 'Laptop',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

//Una vez terminado el array con nuestros productos, es necesario insertarlos en nuestro HTML, para ello vamos a recorrer nuestro array con un ciclo for. Existen dos tipos de ciclos for, el for of que nos devolverá la propiedad especificada o el for in, que nos devolverá el numero índice de nuestro array.


/*
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
*/


// Vamos a construir el html usando js, para ello tomamos como referencia el codigo de html 

function renderProducts (array) {
    for (product of array) {
        // Creamos en primera instacia un div
        const productCard = document.createElement('div');
        // Luego agregamos a ese div una clase
        productCard.classList.add('product-card');
    
        //siguiendo el orden del div de referencia, a continuacion creamos una imagen
        const productImage = document.createElement('img');
        //esa imagen debe tener una imgane propiamente dicho, pero no vamos a ocupar el https (url)  de la imagen, sino que vamos a ocupar el atributo image del objeto.
        productImage.setAttribute('src', product.image);
    
        // Volvemos a crear otro div, pero esta vez referenciado al product-info
        const productInfo = document.createElement('div');
        // Luego agregamos a ese div una clase
        productInfo.classList.add('product-info');
    
        //ahora creamos el div que no tiene clase (a este lo llamamos productInfoDiv)
        const productInfoDiv = document.createElement('div');
        // luego creamos 2 parrafos, los cuales van a tener la informacion que se encuentra dentro del div creado arriba. Vamos a utilizar los elementos del objeto.
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        //colocamos los dos parrafos dentro del div que corresponde, en este caso, dentro del productInfoDiv
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        //ahora seguimos por la etiqueta figure
        const productInfoFigure = document.createElement('figure');
        //como dentro del figure tenemos una img, procedemos a crearla
        const productImgCart = document.createElement('img');
        //y colocamos la imagen que va dentro de la etiqueta img creada
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        //una vez creada todas las etiquetas, ahora debemos ordenar las mismas donde corresponde, ya que las mismas en este momento se encuentran sueltas
        //Lo primero que hacemos (siguiendo el orden inverso de la referencia del html) el colocar nuestro figure dentro del div que corresponde
        productInfoFigure.appendChild(productImgCart);
    
    
        //Ahora colocamos tanto el productIngfoFigure como el productInfoDiv dentro del productInfo
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        //por ultomo tenemos que insertar nuestro productInfo y nuestro img dentro del product card
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);
    
        //una vez maquetado nuestro div de referencia, devemos colocar nuestro div product card en nuestro card-container
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);