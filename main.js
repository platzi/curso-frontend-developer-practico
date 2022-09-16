//se declaran las clases que vamos a utilizar del html.

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const cartDetail = document.querySelector('.cart-detail');
const cardsContainer = document.querySelector('.cards-container'); // esta variable es para conectar el html que creamos desde JS hacia el mismo html.
const productDetailContainer = document.querySelector('.product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

//se activa un escuchador de eventos, con el cual decimos que al hacer click se inicialice una función(en este caso 'toggleDesktopMenu'). 

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', togglecartDetail);
productDetailCloseIcon.addEventListener('click', closeProductDetail);

//declaramos la función en la cual usamos un classList.toggle que sirve para saca o pone la clase dependiendo el estado que falte. 
//Y tambien con el classList.contains que devuelve lo contrario de lo que hay para que se cierre cuando abrimos otro y con 
//classList.add agregamos la clase que le sacamos recien para que vuelva a aparecer.

function toggleDesktopMenu() {
    const iscartDetailClosed = cartDetail.classList.contains('inactive');
    if (!iscartDetailClosed) {
        cartDetail.classList.add('inactive');
    }

    const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailContainerClosed) {
        productDetailContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const iscartDetailClosed = cartDetail.classList.contains('inactive');
    if (!iscartDetailClosed) {
        cartDetail.classList.add('inactive');
    }

    const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailContainerClosed) {
        productDetailContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function togglecartDetail() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isDektopMenuClosed = desktopMenu.classList.contains('inactive');
    if (!isDektopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailContainerClosed) {
        productDetailContainer.classList.add('inactive');
    }

    cartDetail.classList.toggle('inactive');
}

function openProductDetail() {
//aca no es necesario hacer toda la logica del if ya que es solo para cuando abrimos el productDitail entonces solo cuando lo abrimos hacemos que se cierre todo el resto.
//Basicamente es la diferencia que se puede hacer al separar en open y close, que no se puede hacer al usar un toggle.
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    cartDetail.classList.add('inactive');


    productDetailContainer.classList.remove('inactive');
}
function closeProductDetail(){
    productDetailContainer.classList.add('inactive');
}


//Aca se va a hacer la card con todos sus elementos desde JS para emular como si fuera traida de una base de datos. Para copiar todos los datos y hacer parte por parte de la 
//card se usa como modelo la card que ya teniamos creada en el html ya que tenemos que ir haciendo parte por parte dentro del for.
/* 
<div class="product-card">
    <img
          src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="">
    <div class="product-price-name">
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

const productList = [];

productList.push({
    name: 'Bike',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Rueda',
    price: 50,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Cuadro',
    price: 100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Bike',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Rueda',
    price: 50,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Cuadro',
    price: 100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Rueda',
    price: 50,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Cuadro',
    price: 100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Rueda',
    price: 50,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Cuadro',
    price: 100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Rueda',
    price: 50,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Cuadro',
    price: 100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

//Se utiliza un for of para crear todas las partes de la card utilizando el document.createElement.
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetail);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-price-name');

        const productInfoDiv = document.createElement('div');

        const productName = document.createElement('p');
        productName.innerText = product.name;
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);


        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(img);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard); // para terminar aca conectamos el código de html desde js hacia el html.
    }
}

renderProducts(productList);
