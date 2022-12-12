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
const productDetailContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');

const imgDetalle = document.querySelector('.img-detalle');
const pPrecio = document.querySelector('.precio-detalle');
const pNombre = document.querySelector('.nombre-detalle');
const pDescription = document.querySelector('.descripcion-detalle');

const emailLogin = document.getElementById('email');
const passwordLogin = document.getElementById('password');
const buttonLogin = document.querySelector('.login-button');

const principalPage = document.querySelector('.principal-page');
const sectionCards = document.querySelector('.main-container');
const login = document.querySelector('.login');

/* Resuelto con dos funciones: 

navEmail.addEventListener('click', toggleDesktopMenu);
navMenu.addEventListener('click', toggleMobileMenu);

*/

/* Resuelto con 1 función */

navEmail.addEventListener('click', toggleMenu);
navMenu.addEventListener('click', toggleMenu);
shoppingCart.addEventListener('click', toggleMenu);
productDetailClose.addEventListener('click', toggleMenu);
buttonLogin.addEventListener('click',toggleMenu);

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
    console.log(event);
    event.preventDefault();
    if (event.srcElement.className === 'menu') {
        const isshoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive');
        const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');

        if (!isshoppingCartContainerClose) {
            shoppingCartContainer.classList.add('inactive');
        } else if (!isProductDetailContainerClosed) {
            productDetailContainer.classList.add('inactive');
        }

        mobileMenu.classList.toggle('inactive');
    } else if (event.srcElement.className === 'navbar-email') {
        const isshoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive');
        const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');

        if (!isshoppingCartContainerClose) {
            shoppingCartContainer.classList.add('inactive');
        } else if (!isProductDetailContainerClosed) {
            productDetailContainer.classList.add('inactive');
        }

        desktopMenu.classList.toggle('inactive');

    } else if (event.srcElement.className === 'navbar-shopping-cart') {
        const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); /* True si el mobileMenu está inactive */
        const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
        const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');


        if (!isMobileMenuClosed) {
            mobileMenu.classList.add('inactive');
        } else if (!isDesktopMenuClosed) {
            desktopMenu.classList.add('inactive');
        } else if (!isProductDetailContainerClosed) {
            productDetailContainer.classList.add('inactive');
        }
        
        /* Si el menú mobile o el menú desktop no están cerrados entonces los cierro. */

        shoppingCartContainer.classList.toggle('inactive'); /* Y luego hago toggle de inactive para el aside de product detail */
    } else if (event.srcElement.className === 'product-img') {

        const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 
        const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
        const isshoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive');

        if (!isMobileMenuClosed) {
            mobileMenu.classList.add('inactive');
        } 
        if (!isDesktopMenuClosed) {
            desktopMenu.classList.add('inactive');
        } 
        if (!isshoppingCartContainerClose) {
            shoppingCartContainer.classList.add('inactive');
        }

        // console.log(event);  Entra bien al seleccionar la imagen


        // Vamos a armar el contenido del detalle en función del producto que elegimos.  (TAREA POST CURSO)

        /*
        <!-- 
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
        <div class="product-info">
            <p>$35,00</p>
            <p>Bike</p>
            <p>Una hermosa bicicleta para paseos durante los fines de semana.</p>
            <button class="primary-button add-to-cart-button">
                <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
                Add to cart
            </button>
        </div>
        -->
        */
        
        const valorBuscado = event.srcElement.currentSrc;
        console.log(valorBuscado);
        console.log(event.srcElement.currentSrc);

        for (const producto of productList) {
            console.log("producto.image " + producto.image)
            console.log("valorBuscado " + valorBuscado)
            if (producto.image == valorBuscado) {
                console.log("llegue")
                imgDetalle.src = producto.image;
                pNombre.innerText = producto.name;
                pPrecio.innerText = producto.price;
                pDescription.innerText = producto.description;
            }   
        }

        productDetailContainer.classList.remove('inactive');

    } else if (event.srcElement.className === 'product-detail-close') {
        // console.log(event);
        productDetailContainer.classList.add('inactive');
    } else if (event.srcElement.className === 'primary-button login-button') {
        console.log("Hola. Aca estoy");
        if (emailLogin.value !== "" && passwordLogin.value !== "") {
            console.log("Hola. Llegué");
            principalPage.classList.remove('inactive'); 
            sectionCards.classList.remove('inactive');
            login.classList.remove('login');
            login.classList.add('inactive');
        } else {
            window.alert("Debe completar email y password para avanzar")
        }
    }
}


/* 
Ahora vamos a hardcodear nuestras cards desde JavaScript en lugar del 
hardcodeo que teniamos hecho en nuestras maquetas desde HTML. 
Posteriormente este hardcodeo debemos reemplazarlo por la información que
nos traiga la consulta a nuestra API Rest.
*/

function product(name, price, image, description = "N/A") {  
    this.name = name;
    this.price = price;
    this.image = image;
    this.description = description;
}

let productList = [];

productList.push(
    new product('Bike', 120, 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'Una hermosa bicicleta para paseos durante los fines de semana.')
); 

productList.push(
    new product('Monitor', 220, 'https://images.pexels.com/photos/1999463/pexels-photo-1999463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'El mejor monitor del mercado. Optima resolución para juegos de última generación.')
); 

productList.push(
    new product('Computador', 550, 'https://images.pexels.com/photos/13260079/pexels-photo-13260079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'La computadora ideal para gamers que a su vez usan la PC para trabajar o estudiar.')
); 

productList.push(
    new product('Nintendo Switch', 300, 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Que decir de esta joya, ¿no?. Nintendo Switch: por lejos la mejor consola de su generación en cuanto a jugabilidad y performance')
); 

productList.push(
    new product('Motocicleta Vintage', 1000, 'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'La motocicleta con la que soñaba tu abuelo ahora puede ser tuya al mejor precio del mercado.')
); 

productList.push(
    new product('Motocicleta Economic', 490, 'https://images.pexels.com/photos/159192/vespa-roller-motor-scooter-cult-159192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Si estás buscando un vehiculo que te lleve y te traiga del trabajo a muy bajo costo pero muuuuuuy rapido, entonces esta moto es para vos.')
); 

productList.push(
    new product('Motocicleta de carrera', 1250, 'https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Para los amantes de la velocidad y el vertigo también tenemos opciones.')
); 

productList.push(
    new product('Headset', 80, 'https://images.pexels.com/photos/846357/pexels-photo-846357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Auriculares para el trabajo, los estudios o reunirse con tus amigos antes de iniciar una partida multijugador.')
); 

productList.push(
    new product('Auriculares inalambricos', 49, 'https://images.pexels.com/photos/8360626/pexels-photo-8360626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Ideales para oficinas pero también muy aptos para salir a hacer running por la ciudad y escuchar tus canciones.')
); 

productList.push(
    new product('Gafas de sol', 120, 'https://images.pexels.com/photos/13800992/pexels-photo-13800992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Las mejores gafas de sol. Tan buenas que hasta los girasoles las usan!!!')
); 

productList.push(
    new product('Juego de camping', 230, 'https://images.pexels.com/photos/6271625/pexels-photo-6271625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Con este juego de camping tenés un 50% de día de campo resuelto. ')
); 

productList.push(
    new product('Juego de playa', 380, 'https://images.pexels.com/photos/3355732/pexels-photo-3355732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Un juego de playa de alto nivel y que las mejores prestaciones del mercado a un precio increible. No te lo pierdas. ')
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
        img.classList.add('product-img')
        img.setAttribute('src', producto.image); // Inserto la imagen de mi objeto producto como src de mi elemento img HTML
        img.addEventListener('click', toggleMenu)

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

