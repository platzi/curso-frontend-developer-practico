const desplegarMenuDesktop = document.querySelector('.navbar-email');
const desplegarMenuMobile = document.querySelector('.menu');
const desplegarCarritoComprasDetail = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container')



const menuDesktop = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const carritoComprasDetail = document.querySelector('.product-detail');



desplegarMenuDesktop.addEventListener('click', desplegarMenuDesktop1);
desplegarMenuMobile.addEventListener('click', desplegarMenuMobile2);
desplegarCarritoComprasDetail.addEventListener('click', desplegarCarritoComprasDetail3);


function desplegarMenuDesktop1() {
    const carritoComprasDetailClosed = carritoComprasDetail.classList.contains('inactive');
    if (!carritoComprasDetailClosed) {
        carritoComprasDetail.classList.add('inactive');
    }


    menuDesktop.classList.toggle('inactive');

}
function desplegarMenuMobile2() {
    const carritoComprasDetailClosed = carritoComprasDetail.classList.contains('inactive');

    if (!carritoComprasDetailClosed) {
        carritoComprasDetail.classList.add('inactive');
    }
    menuMobile.classList.toggle('inactive');

}
function desplegarCarritoComprasDetail3() {

    const isMobileClosed = menuMobile.classList.contains('inactive');
    const menuDesktopClosed = menuDesktop.classList.contains('inactive');

    if (!isMobileClosed) {

        menuMobile.classList.add('inactive');
    }


    if (!menuDesktopClosed) {
        menuDesktop.classList.add('inactive');
    }

    carritoComprasDetail.classList.toggle('inactive');




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



/* <div class="product-card">
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
      </div>  */



for (product of productList) {
    const productCart = document.createElement('div');
    productCart.classList.add('product-card');
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);





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


// El método appendChild() inserta un nuevo nodo dentro
//  de la estructura DOM de un documento, y es la segunda
//   parte del proceso central uno-dos, crear-y-añadir para
//   construir páginas web a base de programación