const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.inactive');
const selectMenu = document.querySelector('.menu');
const hamburguerMenu = document.querySelector('.mobile-menu');
const carShop = document.querySelector('.navbar-shopping-cart');
const detailProduct = document.querySelector('.product-detail');
const mainContainer =document.querySelector('.main-container');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
selectMenu.addEventListener('click', toggleMenu);
carShop.addEventListener('click', toggleCar);



function toggleDesktopMenu(){
  
    // const ocultar =detailProduct.classList.contains('inactive');

    // if(!ocultar){
    //     detailProduct.classList.add('inactive');
    //     desktopMenu.classList.toggle('inactive');
    // }else{
    //     desktopMenu.classList.toggle('inactive');
    // }
    detailProduct.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');

   
}
function toggleMenu(){

    detailProduct.classList.add('inactive');
    hamburguerMenu.classList.toggle('inactive');
}
function toggleCar(){

    // const ocultar =desktopMenu.classList.contains('inactive');

    // if(!ocultar){
    //     desktopMenu.classList.add('inactive');
    //     detailProduct.classList.toggle('inactive');
    // }else{
    //     detailProduct.classList.toggle('inactive');
    // }
    desktopMenu.classList.add('inactive');
    detailProduct.classList.toggle('inactive');
    hamburguerMenu.classList.add('inactive');

    
}


/* <section class="main-container">
<div class="cards-container">

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
  </div>

</div>
</section> */


const productsAll =[];

productsAll.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productsAll.push({
    name:'Compu',
    price:220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productsAll.push({
    name:'Compu',
    price:220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productsAll.push({
    name:'Compu',
    price:220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productsAll.push({
    name:'Compu',
    price:220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


productsAll.push({
    name:'Compu',
    price:220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
for(product of productsAll){



    const productCard =document.createElement('div');
    const productCardImg = document.createElement('img');
    productCard.classList.add('product-card');
    productCardImg.setAttribute('src', product.image);
    productCard.appendChild(productCardImg);

    const productInfo=document.createElement('div');
    const productDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    const productName = document.createElement('p');
    productInfo.classList.add('product-info');
    productPrice.innerText = '$' + product.price;
    productName.innerText = product.name;
    productCard.appendChild(productCardImg);

    const figura = document.createElement('figure');
    const figuraImg = document.createElement('img');
    figuraImg.setAttribute('src', "./icons/bt_add_to_cart.svg");

    productCard.appendChild(productCardImg);
    productCard.appendChild(productInfo);
    productCard.appendChild(figura);

    productInfo.appendChild(productDiv);
    productInfo.appendChild(figura);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productName);

    figura.appendChild(figuraImg);


    cardsContainer.appendChild(productCard);
   


}