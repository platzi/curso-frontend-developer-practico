const menuEmail =document.querySelector(".navbar-email");
const desktopMenu =document.querySelector(".desktop-menu");
const Mobilemenu =document.querySelector(".mobile-menu");
const menu =document.querySelector(".menu");
const Menucarritoicon =document.querySelector(".navbar-shopping-cart");
const Menuresumeshopping =document.querySelector(".product-detail");
const cardsContainer = document.querySelector('.cards-container');

function toggleDesktopMenu(){
    const isMenuresumeshoppingClosed =Menuresumeshopping.classList.contains("inactive"); 
    if(!isMenuresumeshoppingClosed){
        Menuresumeshopping.classList.add("inactive");
    }
    desktopMenu.classList.toggle('inactive'); 
}

function toggleMenumobile(){
    const isMenuresumeshoppingClosed = Menuresumeshopping.classList.contains("inactive");
    if(!isMenuresumeshoppingClosed){
        Menuresumeshopping.classList.add("inactive");
    }
    Mobilemenu.classList.toggle('inactive'); 
}

function togglemenushoppingcart(){
    const isMobilemenuClosed = Mobilemenu.classList.contains("inactive");
    if(!isMobilemenuClosed){
    Mobilemenu.classList.add("inactive");
    }
    Menuresumeshopping.classList.toggle('inactive');
}
    
Menucarritoicon.addEventListener("click", togglemenushoppingcart);
menu.addEventListener("click", toggleMenumobile);
menuEmail.addEventListener("click", toggleDesktopMenu);

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' ,

});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' ,

});

productList.push({
    name: 'Bike',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' ,

});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' ,

});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' ,

});

productList.push({
    name: 'Bike',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' ,

});
/*div class="product-card">
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
</div> -->
*/
for(product of productList){
   const productCard = document.createElement('div');
   productCard.classList.add('product-card');

   const Productimg = document.createElement('img');
   Productimg.setAttribute('src', product.image)

   const productInfo = document.createElement('div');
   productInfo.classList.add('product-info');

   const productInfoDiv = document.createElement('div');

   const productPrice = document.createElement('p');
   productPrice.innerText = '$' + product.price;

   const productName = document.createElement('p');
   productName.innerText = product.name;

   productInfoDiv.appendChild(productPrice);
   productInfoDiv.appendChild(productName);

   const productInfoFigure = document.createElement('figure')
   const productImgCart = document.createElement('img');
   productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg");
   
   productInfoFigure.appendChild(productImgCart);

   productInfo.appendChild(productInfoDiv);
   productInfo.appendChild(productInfoFigure);

   productCard.appendChild(Productimg);
   productCard.appendChild(productInfo);

   cardsContainer.appendChild(productCard);

}