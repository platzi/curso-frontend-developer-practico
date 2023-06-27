const menuEmail= document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon=document.querySelector('.product-detail-close');
const menuHamIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer=document.querySelector('#productDetail');
const cardsContainer= document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailContainer);





function toggleDesktopMenu (){
  desktopMenu.classList.toggle('inactive');
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
}




function toggleMobileMenu (){

  mobileMenu.classList.toggle('inactive');
  desktopMenu.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
}

function toggleCarritoMenu (){
  shoppingCartContainer.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
}

function openProductDetailContainer(){
  productDetailContainer.classList.remove('inactive');

}

function closeProductDetailContainer(){
  productDetailContainer.classList.add('inactive');
}

//OPCION DE FUNCIONES PROPUESTAS POR EL PROFE

/*function toggleDesktopMenu (){

    const isAsideClose =  shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClose){
        shoppingCartContainer.classList.add('inactive');
    }  
    desktopMenu.classList.toggle ('inactive');
 
} */


/*function toggleMobileMenu (){

    const isAsideClose =  shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClose){
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle ('inactive');
} */

/*function toggleCarritoMenu(){
    
    const isMobileMenuClose = mobileMenu.classList.contains ('inactive')
   
    if (!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');

} */

const productList = [];

productList.push({
name: 'Bike',
price: 120,
image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
        name: 'Computadora',
        price: 620,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(array){

    for (const product of array){

        const productCard =  document.createElement('div');
        productCard.classList.add ('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailContainer);

        const productInfo =  document.createElement('div');
        productInfo.classList.add ('product-info');

        const productInfoDiv =  document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText= '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText= product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute ('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);

    }

}

renderProducts(productList);








/*
  //CLASE DE LISTA DE PRODUCTOS//


<div class="product-card">
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
