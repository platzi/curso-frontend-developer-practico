const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.inactive');
const selectMenu = document.querySelector('.menu');
const hamburguerMenu = document.querySelector('.mobile-menu');
const carShop = document.querySelector('.navbar-shopping-cart');
const detailProduct = document.querySelector('.product-detail');
const mainContainer =document.querySelector('.main-container');

const cardsContainer = document.querySelector('.cards-container');

const asideDescriptionProduct =document.querySelector('.product-detaill');
const closeBoton=document.querySelector('.product-detaill-close');


menuEmail.addEventListener('click', toggleDesktopMenu);
selectMenu.addEventListener('click', toggleMenu);
carShop.addEventListener('click', toggleCar);
cardsContainer.addEventListener('click', openDescription);
closeBoton.addEventListener('click', closeDescription);



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
    asideDescriptionProduct.classList.add('inactive');

   
}
function toggleMenu(){

    detailProduct.classList.add('inactive');
    hamburguerMenu.classList.toggle('inactive');
    asideDescriptionProduct.classList.add('inactive');
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
    asideDescriptionProduct.classList.add('inactive');
    
}
function openDescription(){
  asideDescriptionProduct.classList.remove('inactive');
  hamburguerMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
}
function closeDescription(){
  asideDescriptionProduct.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
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
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'as a bicycle to the means of transport that has two wheels, with pedals that allow movement to be transmitted to the rear wheel through a chain, a sprocket and a plate. It is a vehicle that moves by the propulsion of the user himself, who must pedal.'
});
productsAll.push({
    name:'Compu',
    price:220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'as a bicycle to the means of transport that has two wheels, with pedals that allow movement to be transmitted to the rear wheel through a chain, a sprocket and a plate. It is a vehicle that moves by the propulsion of the user himself, who must pedal.'
});

productsAll.push({
    name:'Compu',
    price:220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'as a bicycle to the means of transport that has two wheels, with pedals that allow movement to be transmitted to the rear wheel through a chain, a sprocket and a plate. It is a vehicle that moves by the propulsion of the user himself, who must pedal.'

});

productsAll.push({
    name:'Compu',
    price:220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'as a bicycle to the means of transport that has two wheels, with pedals that allow movement to be transmitted to the rear wheel through a chain, a sprocket and a plate. It is a vehicle that moves by the propulsion of the user himself, who must pedal.'
});
productsAll.push({
    name:'Compu',
    price:220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'as a bicycle to the means of transport that has two wheels, with pedals that allow movement to be transmitted to the rear wheel through a chain, a sprocket and a plate. It is a vehicle that moves by the propulsion of the user himself, who must pedal.'
});


productsAll.push({
    name:'Compu',
    price:220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'as a bicycle to the means of transport that has two wheels, with pedals that allow movement to be transmitted to the rear wheel through a chain, a sprocket and a plate. It is a vehicle that moves by the propulsion of the user himself, who must pedal.'
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



// function prueba(){

//   // <aside class="product-detaill inactive">
//   //   <div class="product-detaill-close">
//   //     <img src="./icons/icon_close.png" alt="close">
//   //   </div>
//   //   <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
//   //   <div class="product-infoo">
//   //     <p>$35,00</p>
//   //     <p>Bike</p>
//   //     <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
//   //     <button class="primary-buttonn add-to-cart-buttonn">
//   //       <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
//   //       Add to cart
//   //     </button>
//   //   </div>
//   // </aside>

//   const cardDescription = document.createElement('div');
//   const iconClose = document.createElement('img');
//   cardDescription.classList.add('product-detaill-close');
//   iconClose.setAttribute('src','./icons/icon_close.png');

//   cardDescription.appendChild


//   const imgProductDescription =document.createElement('img');
//   imgProductDescription.setAttribute('src',productsAll.image);


//   const infoProduct= document.createElement('div');
//   const priceDescription = document.createElement('p');
//   const nameDescription =document.createElement('p');
//   const detallado = document.createElement('p');
//   infoProduct.classList.add('product-infoo');
//   priceDescription.innerText=productsAll.price;
//   nameDescription.innerText=productsAll.name;
//   detallado.innerText=productsAll.description;



//   const boton = document.createElement('button');
//   const imgboton = document.createElement('img');
//   boton.classList.add('primary-buttonn add-to-cart-buttonn');
//   imgboton.setAttribute('src','./icons/bt_add_to_cart.svg" alt="add to cart')
//   boton.innerText('Add to cart');


// }
// prueba()
// function togglePrueba(){

//   asideDescriptionProduct.classList.toggle('inactive');
 
// }