// Ahora con JS voy armar el codigo para que aparezca el desktop menú al apretar en el navbar email.

/* Solución propia: 

const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const vacio = document.getElementById('vacio');

navEmail.addEventListener('click', mostrarMenu)
vacio.addEventListener('click', noMostrarMenu)

function mostrarMenu() {
    desktopMenu.style.display = 'block';
}

function noMostrarMenu() {
    desktopMenu.style.display = 'none'
}

*/

const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const navMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

/* Resuelto con dos funciones: 

navEmail.addEventListener('click', toggleDesktopMenu);
navMenu.addEventListener('click', toggleMobileMenu);

*/

/* Resuelto con 1 función */

navEmail.addEventListener('click', toggleMenu);
navMenu.addEventListener('click', toggleMenu);
shoppingCart.addEventListener('click', toggleMenu);

/* classList.toggle se usa para hacer aparecer o desaparecer la clase que
 está entre parentesis en función de si esta existe o no al momento de 
 escucharse el evento. Entonces esto hace que cuando está desaparezca y
  al desaparecer el display none se borra del menu y viceversa. 
*/

/* Resuelto con dos funciones: 

function toggleDesktopMenu(event) {
    console.log(event);
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(event) {
    console.log(event);
    mobileMenu.classList.toggle('inactive');
}
*/

/* Resuelto con 1 función */

function toggleMenu(event) {
    /* console.log(event); */
    if (event.srcElement.className === 'menu') {
        const isshoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive');

        if (!isshoppingCartContainerClose) {
            shoppingCartContainer.classList.add('inactive');
        }

        mobileMenu.classList.toggle('inactive');
    } else if (event.srcElement.className === 'navbar-email') {
        const isshoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive');

        if (!isshoppingCartContainerClose) {
            shoppingCartContainer.classList.add('inactive');
        }

        desktopMenu.classList.toggle('inactive');

    } else if (event.srcElement.className === 'navbar-shopping-cart') {
        const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); /* True si el mobileMenu está inactive */
        const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');


        if (!isMobileMenuClosed) {
            mobileMenu.classList.add('inactive');
        } else if (!isDesktopMenuClosed) {
            desktopMenu.classList.add('inactive');
        }
        
        /* Si el menú mobile o el menú desktop no están cerrados entonces los cierro. */

        shoppingCartContainer.classList.toggle('inactive'); /* Y luego hago toggle de inactive para el aside de product detail */
    }
}

/* 
Ahora vamos a hardcodear nuestras cards desde JavaScript en lugar del 
hardcodeo que teniamos hecho en nuestras maquetas desde HTML. 
Posteriormente este hardcodeo debemos reemplazarlo por la información que
nos traiga la consulta a nuestra API Rest.
*/

function product(name, price, image) {  
    this.name = name;
    this.price = price;
    this.image = image;
}

let productList = [];

productList.push(
    new product('Bike', 120, 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
); 

productList.push(
    new product('Monitor', 220, 'https://images.pexels.com/photos/1999463/pexels-photo-1999463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
); 

productList.push(
    new product('Computador', 550, 'https://images.pexels.com/photos/13260079/pexels-photo-13260079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
); 

productList.push(
    new product('Nintendo Switch', 300, 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
); 

productList.push(
    new product('Motocicleta Vintage', 1000, 'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
); 

productList.push(
    new product('Motocicleta Economic', 490, 'https://images.pexels.com/photos/159192/vespa-roller-motor-scooter-cult-159192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
); 

productList.push(
    new product('Motocicleta de carrera', 1250, 'https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
); 

productList.push(
    new product('Headset', 80, 'https://images.pexels.com/photos/846357/pexels-photo-846357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
); 

productList.push(
    new product('Auriculares inalambricos', 49, 'https://images.pexels.com/photos/8360626/pexels-photo-8360626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
); 

productList.push(
    new product('Gafas de sol', 120, 'https://images.pexels.com/photos/13800992/pexels-photo-13800992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
); 

productList.push(
    new product('Juego de camping', 230, 'https://images.pexels.com/photos/6271625/pexels-photo-6271625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
); 

productList.push(
    new product('Juego de playa', 380, 'https://images.pexels.com/photos/3355732/pexels-photo-3355732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
);

/*
HTML de mis viejas tardetas harcodeadas:

Todo esto pertenece a <div class="cards-container"> que aún está en mi HTML y debo declarar todo el codigo como sus hijos. 

<!-- 
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
-->

Ahora voy a crear el HTML de las tarjetas desde el JS por cada producto que tengo para publicar:
*/

function renderProducts (arr) {
    for (const producto of productList) {  
        const productCard = document.createElement('div'); /* Armo mi div product-card */
        productCard.classList.add('product-card'); // Le agrego la clase que tenía.

        const img = document.createElement('img'); // Creo una imagen
        img.setAttribute('src', producto.image); // Inserto la imagen de mi objeto producto como src de mi elemento img HTML

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        productCard.append(img, productInfo);

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + producto.price;

        const productName = document.createElement('p');
        productName.innerText = producto.name;

        productInfoDiv.append(productPrice, productName); // Con Element.append() podemos agregar varios nodos y texto mientras que con Element.appendChild() solo podemos agregar un nodo.

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg'); // Siempre el mismo icono para cada card. El de agregar al carrito. 

        productInfo.append(productInfoDiv, productInfoFigure);

        productInfoFigure.appendChild(productImgCart); // Declaro que img cart es hijo de info

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

