const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');

const burgerMenuIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');

const shoppingCartIcon=document.querySelector('.navbar-shopping-cart');
const productDetails=document.querySelector('.product-detail');

const cardsContainer=document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
burgerMenuIcon.addEventListener('click',toggleMobileMenu);
shoppingCartIcon.addEventListener('click',toggleShoppingCart);

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

const isMenuCartClosed=productDetails.classList.contains("inactive");
    if(!isMenuCartClosed){
        productDetails.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");//hahaha esta linea reemplaza toda mi logica anterior que igual funciona :p
}

function toggleMobileMenu() {
    const isMenuCartClosed=productDetails.classList.contains("inactive");
    if(!isMenuCartClosed){
        productDetails.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCart() {
    const isMobileMenuClosed=mobileMenu.classList.contains("inactive");
    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }
    productDetails.classList.toggle("inactive");
}

const productList=[];

productList.push({
  name: "Bike",
  price:120,
  image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Bike",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  });

 productList.push({
    name: "Bike",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }); 

  productList.push({
    name: "Bike",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }); 
  productList.push({
    name: "Bike",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }); 

  /*
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
  */

//crera elemento segun el array
function renderProducts(arr){
    for (element of arr) {
        const productCard=document.createElement("div");
        productCard.classList.add("product-card");

        const productImage=document.createElement("img");
        productImage.setAttribute("src", element.image);

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

renderProducts(productList);