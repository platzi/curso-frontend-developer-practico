const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamb = document.querySelector('.menuHamb');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamb.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleMenuCarrito);

//cuando le damos click al correo, aparece el desktop-menu

function toggleDesktopMenu(){

const isassaidClosed = shoppingCartContainer.classList.contains('inactive');

 if(!isassaidClosed){
   shoppingCartContainer.classList.add('inactive'); 
 }

 desktopMenu.classList.toggle('inactive');         
};  
       
function toggleMobileMenu(){
  
 const isassaidClosed = shoppingCartContainer.classList.contains('inactive');

 if(!isassaidClosed){
   shoppingCartContainer.classList.add('inactive'); 
 }

 mobileMenu.classList.toggle('inactive'); 
  
    };


function toggleMenuCarrito(){

    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
   
    if(!ismobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    
    shoppingCartContainer.classList.toggle('inactive');

};

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
price: 1200,
image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
name: 'Bafle',
price: 300,
image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

/*
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    alt="">
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
 */

function AddProducts(arr){

for (product of arr){
 const productCard = document.createElement('div');
 productCard.classList.add('product-card');

 // product= {name, price, image} -> product.image
 const InfoImg = document.createElement('img');
 InfoImg.setAttribute('src' , product.image);

 const producInfo = document.createElement('div');
 producInfo.classList.add('product-info');

const divInfoProduct = document.createElement('div');

const productPrice = document.createElement('p');
productPrice.innerText = '$' + product.price;

const productName = document.createElement('p');
productName.innerText = product.name;

divInfoProduct.appendChild(productPrice);
divInfoProduct.appendChild(productName);


const figure = document.createElement('figure');
const ImgCart = document.createElement('img');
ImgCart.setAttribute('src', './icons/bt_add_to_cart.svg' );

figure.appendChild(ImgCart);

producInfo.appendChild(divInfoProduct);
producInfo.appendChild(figure);

productCard.appendChild(InfoImg);
productCard.appendChild(producInfo);

cardsContainer.appendChild(productCard);

}
}

AddProducts(productList);