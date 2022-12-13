// se seleccionan las etiquetas a manipular, tanto las que se les da click y las que muestran
const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cards_container = document.querySelector('.cards-container');

// se agregan los eventos a las etiquetas y se le coloca la funcion que debe ejecutar al dar click
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClose = aside.classList.contains('inactive');

    // si el carrito esta abierto se cierra para poder abir el DesktopMenu
    if (!isAsideClose) {
        aside.classList.add('inactive');
    }
    menuDesktop.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClose = aside.classList.contains('inactive');


    if (!isAsideClose) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const iSmobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = menuDesktop.classList.contains('inactive');

    if (!iSmobileMenuClose) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClose) {
        menuDesktop.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    price: 340,
    image: 'https://media.istockphoto.com/id/638043774/es/foto/moderno-televisor-curvo-4k-ultrahd.jpg?s=1024x1024&w=is&k=20&c=pO5S6GWnmXioqejBVTUFWkPjfe8aL_MUVbmdRtIIFs8=',
});

productList.push({
    name: 'Portatil',
    price: 3800,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_767550-MCO32635588800_102019-F.webp',
});


/*<div className="product-card">
    <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="">
        <div className="product-info">
            <div>
                <p>$120,00</p>
                <p>Bike</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
</div>*/
function renderProductList(array) {
    for (product of array) {

        // se crea el div que contendra la informacion del producto
        const productCard = document.createElement('div');
        // se le añade al div la clase
        productCard.classList.add('product-card');

        // se crea una etiqueta img para mostrar la imagen del producto
        const img = document.createElement('img');
        img.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfodiv = document.createElement('div');

        const productPrice = document.createElement('p'); //se crear los parrafos
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

        // se inserta una etiqueta HTML dentro de otra
        productInfodiv.appendChild(productPrice);
        productInfodiv.appendChild(productName);
        productFigure.appendChild(productImgCard);

        productInfo.appendChild(productInfodiv);
        productInfo.appendChild(productFigure);

        productCard.appendChild(img);
        productCard.appendChild(productInfo);

        cards_container.appendChild(productCard);
    }
}

renderProductList(productList);