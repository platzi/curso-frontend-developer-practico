//ACTIVAR EL MENU DEL EMAIL
const activarEmail = document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');

//ACTIVAR EL MENU BURGERICON
const burgerIcon= document.querySelector('.menu');
const movilMenu= document.querySelector('.mobile-menu');

//ACTIVAR MY ORDER
const shoppingCart= document.querySelector('.navbar-shopping-cart');
const myOrder= document.querySelector('.productList-detail');

//LISTA DE PRODUCTOS


activarEmail.addEventListener('click', toggleMenuEmail);
burgerIcon.addEventListener('click', toggleMenuMobil);
shoppingCart.addEventListener('click', togglemyOrder);

function toggleMenuEmail(){
   const ismyOrderClosed= myOrder.classList.contains('inactive'); 

   if (!ismyOrderClosed){
      myOrder.classList.add('inactive');
   } 
   desktopMenu.classList.toggle('inactive');
}

function toggleMenuMobil(){
   const ismyOrderClosed= myOrder.classList.contains('inactive'); 

   if (!ismyOrderClosed){
      myOrder.classList.add('inactive');
   } 
   movilMenu.classList.toggle('inactive');
}

function togglemyOrder(){
   const ismovilMenuClosed= movilMenu.classList.contains('inactive'); 

   if (!ismovilMenuClosed){
      movilMenu.classList.add('inactive');
   } 
   myOrder.classList.toggle('inactive');
}

const productList = [];
productList.push({
   name: 'Bike',
   price: 150,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
   name: 'Computadora',
   price: 350,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
   name: 'Televisor',
   price: 250,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
   name: 'Sonido',
   price: 250,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
   name: 'Impresora',
   price: 100,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
   name: 'Tablet',
   price: 400,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

function products(arr){
   for (product of arr){
      const htmlCards = `<div class="product-card">
      <img src= ${product.image} class="product-img">
      <div class="product-info">
        <div>
          <p>$${product.price}</p>
          <p>${product.name}</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
      </div>`

      const cardsContainer = document.querySelector('.cards-container');
      cardsContainer.innerHTML += htmlCards;
   }
}
products(productList);
