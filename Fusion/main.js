const emailNav = document.querySelector('.navbar-email');
const deskNav = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const carroIcon = document.querySelector('.navbar-shopping-cart');
const menuMobile = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardProduct = document.querySelector('.cards-container');

emailNav.addEventListener('click', togglesDesktopMenu);
menuIcon.addEventListener('click', togglesMobileMenu);
carroIcon.addEventListener('click', togglesCarritoAside);

function togglesDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }

    deskNav.classList.toggle('inactive');
}

function togglesMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }

    menuMobile.classList.toggle('inactive');
}

function togglesCarritoAside() {
    //esta cerrado = inactive esta en la clase
    const ismenuMobileClosed = menuMobile.classList.contains('inactive')
    const isDeskmenuClosed = deskNav.classList.contains('inactive')
    
    //si menu mobile no esta cerrado (esta abierto) lo cierra agregando la clase inactive
    if(!ismenuMobileClosed) {
        menuMobile.classList.add('inactive');
    } else if(!isDeskmenuClosed) {
        deskNav.classList.add('inactive')
    }

    aside.classList.toggle('inactive');
}

//recorre el for y product guarda los diferentes arreglos
// for(product of productList){
//     console.log(product.name);
// }
// //Bike
// //Xbox
// //Computador gamer

const productList = [];
productList.push({
    name: 'Bike',
    precio: 120,
    imag: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Xbox',
    precio: 350,
    imag: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Computador gamer',
    precio: 1200,
    imag: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.imag);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.precio;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFig = document.createElement('figure');
    const productIcon = document.createElement('img');
    productIcon.setAttribute('src', "/icons/bt_add_to_cart.svg");

    productInfoFig.appendChild(productIcon);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFig);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardProduct.appendChild(productCard);
}