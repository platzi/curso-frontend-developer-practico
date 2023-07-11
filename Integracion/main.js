const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBars = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const menuCart = document.querySelector("#shoppingCartContainer");
const cardContainer = document.querySelector(".card-container");


menuEmail.addEventListener('click', toggleDesktopMenu);
menuBars.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCartMenu);

function toggleDesktopMenu() {
    const isAsideClosed = menuCart.classList.contains('inactive');

    if(!isAsideClosed){
        menuCart.classList.add('inactive');
    };

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu() {
    const isAsideClosed = menuCart.classList.contains('inactive');

    //si esta abierto el carrito, lo cierra
    if(!isAsideClosed){
        menuCart.classList.add('inactive');
    };
    menuMobile.classList.toggle('inactive');
};

function toggleCartMenu() {
    const isMobileMenuClosed = menuMobile.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    //si esta abierto el menu mobile o desktop, lo cierra
    if(!isMobileMenuClosed){
        menuMobile.classList.add('inactive');
    } else if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    menuCart.classList.toggle('inactive');
};


const productList = []; //Esto es lo que traeria al hacer una consulta API Rest a la BD

//Llenamos el array manual mientras
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/13738406/pexels-photo-13738406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Pantalla',
    price: 625,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Camara',
    price: 1200,
    image: 'https://images.pexels.com/photos/17436320/pexels-photo-17436320/free-photo-of-camara-fotografia-tecnologia-dispositivo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Iphone',
    price: 1900,
    image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


function renderProducts(arr){
//Este ciclo recorre el array de productos y crea el HTML para cada uno
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        //Cada iteración: product = {name, price, image}
        productImg.setAttribute('src',product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', '/icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);


        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardContainer.appendChild(productCard);

    };
}

//de esta forma no se carga automatico sino cuando yo quiera llamar la función: un click, hover...
renderProducts(productList);



