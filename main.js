const menuEmail =document.querySelector(".navbar-email");
const desktopMenu =document.querySelector(".desktop-menu");
const Mobilemenu =document.querySelector(".mobile-menu");
const menu =document.querySelector(".menu");
const Menucarritoicon =document.querySelector(".navbar-shopping-cart");
const Menuresumeshopping =document.querySelector(".product-detail");
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail-purchasespecific');
const buttonclose = document.querySelector('.close');
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
    closeProductDetailAside();
    Mobilemenu.classList.toggle('inactive'); 
}

function togglemenushoppingcart(){
    const isMobilemenuClosed = Mobilemenu.classList.contains("inactive");
    if(!isMobilemenuClosed){
    Mobilemenu.classList.add("inactive");
    }
    const isproductDetailContainerClosed = productDetailContainer.classList.contains("inactive");
    if(!isproductDetailContainerClosed){
    productDetailContainer.classList.add("inactive");
    }
    
    
    Menuresumeshopping.classList.toggle('inactive');
}

function openProductDetailAside(){
    const isMenuresumeshoppingClosed = Menuresumeshopping.classList.contains("inactive");
    const isdesktopMenuclosed = desktopMenu.classList.contains('inactive');
    if(!isMenuresumeshoppingClosed){
        Menuresumeshopping.classList.add("inactive");
    }
    if(!isdesktopMenuclosed){
        desktopMenu.classList.add("inactive");
    }
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');

}

buttonclose.addEventListener('click', closeProductDetailAside);
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

function renderProducts(arr){
   for(product of productList){
   const productCard = document.createElement('div');
   productCard.classList.add('product-card');

   const Productimg = document.createElement('img');
   Productimg.setAttribute('src', product.image);
   Productimg.addEventListener('click' ,openProductDetailAside);

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
}

renderProducts(productList);