const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');//seleccionamos al padre li
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() {

    const isAsideClosed = aside.classList.contains('inactive');

    //si aside está open, hay que cerrarlo
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');//toggle activa o desactiva una clase

}

function toggleMobileMenu() {
    
    const isAsideClosed = aside.classList.contains('inactive');

    //si aside está open, hay que cerrarlo
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    //si destkopMenu está open, hay que cerrarlo
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    
    //si mobileMenu está open, hay que cerrarlo
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

//Creamos un array
const productList = [];

//Creamos nuestros productos como objetos y los insertamos en el array
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'TV',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

//Podemos encerrar nuestro bucle for dentro de una función que nos permita organizar mejor nuestro código. Esto ayuda a que el proyecto sea más flexible. Por ejemplo, podemos escoger que array pasar a la función para renderizar
function renderProducts(arr) {
    //Iremos creando los elementos a través de un for que recorra el array
for (product of productList) {

    //Creamos los elementos
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    //Añadimos los productos a sus respectivos padres
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    //Añadimos los productos a sus respectivos padres
    productFigure.appendChild(productImgCard);

    //Le insertamos sus hijos  a productInfo
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);

    //Le insertamos sus hijos a productCard
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);

}
}

renderProducts(productList);