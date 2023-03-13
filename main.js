const menuEmail = document.querySelector('.navbar-email');
const desktop = document.querySelector('.desktop-menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#product-detail");
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');

//toggleDesktopMenu
menuEmail.addEventListener('click',()=>{
  desktop.classList.toggle('inactive');
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
   
});


//toggleMenuMobile
burguerMenu.addEventListener('click',()=>{
    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    
});


//togleAside-carrito-shoppingcart
menuCarritoIcon.addEventListener("click",()=>{
  shoppingCartContainer.classList.toggle('inactive');
  mobileMenu.classList.add('inactive') ;
  desktop.classList.add('inactive');
  productDetailContainer.classList.add('inactive');

    
    
});

//abrir product-detail
function openProductDetail(){
  productDetailContainer.classList.remove('inactive');
  shoppingCartContainer.classList.add('inactive');
  desktop.classList.add('inactive');
}
//cerrar product-detail
productDetailCloseIcon.addEventListener('click',()=>{
  productDetailContainer.classList.add('inactive');
})



const productList = [];
// metodo push, agrega al array
productList.push({
  name: "Bike",
  price: 120,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Monitor",
  price: 200,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Placa de video",
  price: 500,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}); 
productList.push({
  name: "Bike",
  price: 120,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Monitor",
  price: 200,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Placa de video",
  price: 500,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}); 

function renderProducts(arr){
    for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.img);
    productImg.addEventListener('click',openProductDetail)
    

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    const productName = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    productName.innerText = product.name;
    productInfoDiv.append(productPrice, productName);
    

    const productInfoFigure = document.createElement('figure');
    const productFigureImg = document.createElement('img');
    productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    productInfoFigure.appendChild(productFigureImg);

    
    
    
    productInfo.append(productInfoDiv,productInfoFigure);

    
    productCard.append(productImg,productInfo);

    cardsContainer.appendChild(productCard);
  };
}
  
renderProducts(productList);