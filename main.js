/* Se crean las variables para seleccionar elementos por ID o clase desde el index.html. */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetailContainer');
const productDetailCloseIcon = document.querySelector('.product-detail-close')


/* Se crea un arreglo vacio, donde despues se le agregara el listado de productos, como si fuera una API. */
const productList = [];


/* Se utiliza un evento para escuchar el metodo click que al presionar un icono o texto, aparesca y desaparesca alguno de los menus. */
/* toogle significa intercambiar */
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


/* Se utiliza el metodo push() para agregar los productos al array. */
productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Una bicicleta muy rapida',
});
productList.push({
    name: 'Monitor',
    price: 220,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Un monitor con muy buena resolución',
});
productList.push({
    name: 'Smartphone',
    price: 520,
    image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Un telefono inteligente con una muy buena camara',
});
productList.push({
    name: 'Reloj',
    price: 50,
    image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Un reloj muy comodo y practico',
});

/* Se crea una nueva funcion que se encargara de renderizar todo el contenido del arreglo dentro del archivo index.html */
/* La funcion recibira como parametro un arreglo. */
function renderProducts(array) {

    for (producto of array) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', producto.image);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + producto.price;
        const productName = document.createElement('p');
        productName.innerText = producto.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }

}

/* Se Inicializz la funcion de renderizado y se le pasa como parametro, el arreglo de los productos. */
renderProducts(productList);


/* Se reescriben las funciones principales, utilizando solamente clases, toggle para intercambiar la clase de la variable principal y add para agregar la clase inactiva cuando este levantado otro menu. */

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
    aside.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
    aside.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function toggleCarritoAside() {
    aside.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.toggle('inactive');
    aside.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}