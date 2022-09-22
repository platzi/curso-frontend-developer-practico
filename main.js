const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');

const burgerMenuIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');

const shoppingCartIcon=document.querySelector('.navbar-shopping-cart');
const productDetailContainer=document.querySelector('#productDetail');
const shopingCartContainer=document.querySelector('#shoppingCartContainer');
const productDetailClose=document.querySelector('.product-detail-close');

const cardsContainer=document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
burgerMenuIcon.addEventListener('click',toggleMobileMenu);
shoppingCartIcon.addEventListener('click',toggleShoppingCart);
productDetailClose.addEventListener('click',CloseProductDetail);

function toggleDesktopMenu(){
/*
   statusMenu= desktopMenu.getAttribute('class');
   console.log(statusMenu);
   if(statusMenu==statusDesktop){
    desktopMenu.setAttribute('class', 'desktop-menu');
   }else{
    desktopMenu.classList.add("inactive");
   }
*/
    desktopMenu.classList.toggle("inactive");//hahaha esta linea reemplaza toda mi logica anterior que igual funciona :p
    //nos aseguramos que los demas esten cerrados
    mobileMenu.classList.add("inactive");
    shopingCartContainer.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
     //nos aseguramos que los demas esten cerrados
     desktopMenu.classList.add("inactive");
     shopingCartContainer.classList.add("inactive");
     productDetailContainer.classList.add("inactive");
}

function toggleShoppingCart() {
    
    shopingCartContainer.classList.toggle("inactive");
    //nos aseguramos que los demas esten cerrados
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetailContainer.classList.add("inactive");

}

function openProductDetail(){
  productDetailContainer.classList.remove('inactive');
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  shopingCartContainer.classList.add("inactive");
}

function CloseProductDetail(){
  productDetailContainer.classList.add("inactive");
}

const productList=[];

function fillProducts(){


productList.push({
  name: "Bike",
  price:120,
  image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Bike2",
    price:130,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  });

 productList.push({
    name: "Watch",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }); 

  productList.push({
    name: "Slim",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }); 
  productList.push({
    name: "Sunglasses",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }); 

}


//crera elemento segun el array
function renderProducts(arr){
    for (element of arr) {
        const productCard=document.createElement("div");
        productCard.classList.add("product-card");

        const productImage=document.createElement("img");
        productImage.setAttribute("src", element.image);
        productImage.addEventListener("click",openProductDetail)

        const productInfoContainer=document.createElement("div");
        const productPrice=document.createElement("p");
        const productName=document.createElement("p");

        productPrice.innerText='$'+element.price;
        productName.innerText=element.name;

        productInfoContainer.append(productPrice,productName)

        const productInfo=document.createElement("div");
        productInfo.classList.add("product-info");

        const productFigure=document.createElement("figure");
        const productImageAdd=document.createElement("img");
        productImageAdd.setAttribute("src","./icons/bt_add_to_cart.svg");
        productFigure.appendChild(productImageAdd);

        productInfo.append(productInfoContainer,productFigure);

        productCard.append(productImage,productInfo);

        cardsContainer.appendChild(productCard);
    }
}



fillProducts();
renderProducts(productList);