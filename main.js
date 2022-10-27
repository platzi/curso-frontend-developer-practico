const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const hamburguerMenu = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
const menuCart = document.querySelector ('.navbar-shopping-cart');
const productDetail = document.querySelector ('.product-detail');
const cardContainer = document.querySelector ('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburguerMenu.addEventListener('click', toggleMobileMenu);
menuCart.addEventListener('click', toggleMenuCart);


function toggleDesktopMenu (){
    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu (){
    productDetail.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');

}

function toggleMenuCart (){
    mobileMenu.classList.add('inactive');
    productDetail.classList.toggle('inactive');

}


const productList =[];
productList.push(
    {
        name: 'bike',
        precio: 120,
        imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

    }

);

productList.push(
    {
        name: 'bike',
        precio: 120,
        imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

    }

);

productList.push(
    {
        name: 'bike',
        precio: 120,
        imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

    }

);

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
</div> */

for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement ('img');
    img.setAttribute('src',product.imagen);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    const productInfoPrice = document.createElement('p');
    const productInfoName = document.createElement('p');
    
    productInfoPrice.innerText ='$' + product.precio;
    productInfoName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild (productImgCart);
    productInfoDiv.append(productInfoPrice,productInfoName);
    productInfo.append(productInfoDiv,productInfoFigure);
    productCard.append(img,productInfo);
    

    cardContainer.appendChild (productCard)
}



