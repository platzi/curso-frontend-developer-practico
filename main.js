const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerMenu = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardContainer = document.querySelector('.cards-container')

const productList = [];


menuEmail.addEventListener('click', toggleMailMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoShoppingCartContainer)

// Vamos a crear nuestras funciones a partir de:
// * si uno de nuestros elementos contiene la clase "inactive" (está cerrado),
// el otro va a poder abrirse, pero en el caso de que no la contenga (está abierto),
// la apertura de un elemento va a quitarle la clase a otro.
// Con esto evitamos que los menues se pisen.

function toggleMailMenu(){
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu(){
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isShoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoShoppingCartContainer(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');   

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}

// Para evitar hardcodear nuestros productos en nuestro html, vamos a crearlos con js
// eso lo vamos a hacer pusheando los objetos de nuestros productos dentro de un array, para luego
// recorrer ese array con un bucle y renderizarlo en nuestro html
productList.push({
    name : 'bike',
    price : 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name : 'computadora',
    price : 1000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name : 'Pantalla',
    price : 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});


function renderProducts(arr){
// ingresando como condición de nuestro for (product of productList), lo que estamos diciendo es:
// acompañado de un console.log nos mostrará cada elemento de nuestro array, pero si usamos la variación
// for (product in producList), vamos a obtener el indice de cada producto.

// Observemos como dentro de nuestro bucle, vamos a ir conectado cada componente "hijo" con su componente "padre"
// los componentes "hijos" representan la logica del mismo, mientras que los componentes "padres" son los contenedores.
// Observamos como comenzamos creando productCard que será el contenedor "padre" y para luego "meter" en él toda la logica
// de sus contenedores "hijos".
// Concluyendo con: cardContainer.appendChild(productCard), que será la variable que representa el punte con el html (en realidad DOM)

for (product of arr){

    // Con esto generamos el contenedor
    const productCard = document.createElement('div');
    // y le asignamos la clase 'product-card'
    productCard.classList.add('product-card');

    // Con esto generamos la imagen
    const productImg = document.createElement('img');
    // y les asignamos los atributoa
    productImg.setAttribute('src', product.image);

    // Con esto generamos el contenedor para la infor del producto
    const productInfo = document.createElement('div');
    // y le asignamos la clase 'product-info'
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    // Con esto generamos el contenedor dentro del contenedor de info
    // Con el precio del producto y su nombre
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImageCart = document.createElement('img');
    productImageCart.setAttribute('src', './icons/bt_add_to_cart.svg');


    productInfoFigure.appendChild(productImageCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo); // <-- productInfo se compone de productInfoDiv y productInfoFigure

    // productCard va a ser nuestro producto ya maquetado y se compone de productImg y productInfo
    cardContainer.appendChild(productCard)

    }
}

renderProducts(productList)