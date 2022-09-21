const desplegarMenuDesktop = document.querySelector('.navbar-email');
const desplegarMenuMobile = document.querySelector('.menu');
const desplegarCarritoComprasDetail = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container')
const productDetailCotainer = document.querySelector('#productDetail');
const btnCerrarProductContainer = document.querySelector('.product-detail-close')



const menuDesktop = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');



desplegarMenuDesktop.addEventListener('click', toogleMenuDesktop);
desplegarMenuMobile.addEventListener('click', toogleMenuMobile);
desplegarCarritoComprasDetail.addEventListener('click', toogleCarritoComprasDetail);

btnCerrarProductContainer.addEventListener('click', closedProductDetailAside)



function toogleMenuDesktop() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    const isproductDetailCotainerClosed = productDetailCotainer.classList.contains('inactive');
    if (!isproductDetailCotainerClosed) {
        productDetailCotainer.classList.add('inactive');
    }

    menuDesktop.classList.toggle('inactive');
}
function toogleMenuMobile() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    const isproductDetailCotainerClosed = productDetailCotainer.classList.contains('inactive');
    if(!isproductDetailCotainerClosed){
        productDetailCotainer.classList.add('inactive');
    }

    menuMobile.classList.toggle('inactive');
}
function toogleCarritoComprasDetail() {

    const isMobileMenuClosed = menuMobile.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        menuMobile.classList.add('inactive');
    }


    const isMenuDesktopClosed = menuDesktop.classList.contains('inactive');
    if (!isMenuDesktopClosed) {
        menuDesktop.classList.add('inactive');
    }

    const isproductDetailCotainerClosed = productDetailCotainer.classList.contains('inactive');
    if (!isproductDetailCotainerClosed) {
        productDetailCotainer.classList.add('inactive');
    }


    shoppingCartContainer.classList.toggle('inactive');


}

function openProductDetailAside() {
    menuDesktop.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailCotainer.classList.remove('inactive');
}

function closedProductDetailAside() {
    productDetailCotainer.classList.add('inactive');


}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});


productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Computador',
    price: 760,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});



function renderProducts(arr) {
    for (product of arr) {
        const productCart = document.createElement('div');
        productCart.classList.add('product-card');
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);





        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');



        const productInfoDiv = document.createElement('div');
        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerText = '$' + product.price;
        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.name;





        const productFigure = document.createElement('figure');
        const productFigureImage = document.createElement('img');
        productFigureImage.setAttribute('src', './icons/bt_add_to_cart.svg');

        productFigure.appendChild(productFigureImage);

        productInfoDiv.appendChild(productInfoPrice);
        productInfoDiv.appendChild(productInfoName);


        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);

        productCart.appendChild(productImg);
        productCart.appendChild(productInfo);

        cardsContainer.appendChild(productCart);
    }
}

renderProducts(productList);




// El método appendChild() inserta un nuevo nodo dentro
//  de la estructura DOM de un documento, y es la segunda
//   parte del proceso central uno-dos, crear-y-añadir para
//   construir páginas web a base de programación