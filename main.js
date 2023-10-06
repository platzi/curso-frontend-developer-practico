const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu= document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer=document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toogleDesktopMenu);//toogle es mostrar una funcion
menuHamIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);


function toogleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobilMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobilMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Car',
    price: 1200000,
    image: 'https://www.deceroacien.com.mx/u/fotografias/m/2022/12/18/f960x540-14032_88107_17.jpg',
});
productList.push({
    name:'Pantalla',
    price: 7000,
    image: 'https://www.elfinanciero.com.mx/resizer/w3qI22oFQIJORP-_sKazL06D8b4=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/5JKJDQ66ONEVFPTZY6G3PZ4HEY.jpg',
});
productList.push({
    name:'Celular',
    price: 24000,
    image: 'https://assets-prd.ignimgs.com/2022/10/13/iphone-14-pro-7-1665638231796.jpg',
});
productList.push({
    name:'Computadora',
    price: 1200,
    image: 'https://m.media-amazon.com/images/I/71npRQtT9TL._AC_UF894,1000_QL80_.jpg',
});

/*<div class="product-card">
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
    </div>*/

for (product of productList){
    const productCard=document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName=document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart=document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')


    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);


}
