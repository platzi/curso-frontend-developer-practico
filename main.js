
const email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger =document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const ShoppingCartContainer= document.querySelector('#ShoppingCartContainer');
const ShoppingCar = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');


// events

menuBurger.addEventListener('click',toggleMobileMenu);
email.addEventListener('click',toggleMenu);
ShoppingCar.addEventListener('click',toggleShoppingCarDetail);

//functions

function toggleMobileMenu (){

    const isShoppingCarOpen=!ShoppingCartContainer.classList.contains('inactive');
    
    if(isShoppingCarOpen){
        ShoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle ('inactive');
}

function toggleMenu(){

    const isShoppingCarOpen=!ShoppingCartContainer.classList.contains('inactive');
    
    if(isShoppingCarOpen){
        ShoppingCartContainer.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive') ;


}

function toggleShoppingCarDetail(){

    const isMobileMenuOpen= !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen= !desktopMenu.classList.contains('inactive');


    if(isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    }
    if(isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }

     ShoppingCartContainer.classList.toggle('inactive') ;

}

const productList =[];

productList.push({
    name :'Bike',
    price:120,
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name :'Computer',
    price:5000,
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name :'Window',
    price:2000,
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name :'Bike',
    price:120,
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name :'Computer',
    price:5000,
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name :'Window',
    price:2000,
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


productList.push({
    name :'Bike',
    price:120,
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name :'Computer',
    price:5000,
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name :'Window',
    price:2000,
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

renderProducts(productList);

//ejemplo de como maquetar codigo html con javascript
// <!-- <div class="cards-container">

// <div class="product-card">
//   <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//   <div class="product-info">
//     <div>
//       <p>$120,00</p>
//       <p>Bike</p>
//     </div>
//     <figure>
//       <img src="./icons/bt_add_to_cart.svg" alt="">
//     </figure>
//   </div>
// </div> -->


function renderProducts(array){
    
for (product of array){

   const productCard= document.createElement('div');
   productCard.classList.add('product-card');
   const productImage =document.createElement('img');
   productImage.setAttribute('src',product.Image)
   const productInfo= document.createElement('div');
   productInfo.classList.add('product-info');
   const productInfoDiv= document.createElement('div');
   const price= document.createElement('p');
   price.innerText ='$'+ product.price;
   const name= document.createElement('p');
   name.innerText =product.name;
   const figure= document.createElement('figure');
   const productCardAdd= document.createElement('img');
   productCardAdd.setAttribute('src','./icons/bt_add_to_cart.svg');
   productInfoDiv.appendChild(price);
   productInfoDiv.appendChild(name);
   figure.appendChild(productCardAdd);
   productInfo.appendChild(productInfoDiv);
   productInfo.appendChild(figure);
   productCard.appendChild(productImage);
   productCard.appendChild(productInfo);
   cardsContainer.appendChild(productCard);
    }
}