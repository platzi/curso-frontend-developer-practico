const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const navMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carrito = document.querySelector(".navbar-carrito");
const shoppingCart = document.querySelector(".content-container");
const cardsContainer = document.querySelector(".cards-container");
const mainContainer = document.querySelector(".main-container");
const productDetail = document.querySelector(".product-detail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");


menuEmail.addEventListener("click", toggleDesktopMenu);
navMenu.addEventListener("click", toggleMobileMenu);
carrito.addEventListener("click", toggleCarrito);
productDetailCloseIcon.addEventListener("click", closeProduct);



function toggleDesktopMenu(){
      if(shoppingCart != shoppingCart.classList.contains("inactive")){
            shoppingCart.classList.add("inactive");
      } 
      closeProduct();
      desktopMenu.classList.toggle("inactive");
}


function toggleMobileMenu(){
      const isAsideClosed = shoppingCart.classList.contains("inactive");

      if(!isAsideClosed){
            shoppingCart.classList.add("inactive");
      }
      
      closeProduct();
      mobileMenu.classList.toggle("inactive");
}

function toggleCarrito(){

      if (mobileMenu != mobileMenu.classList.contains("inactive")) {
         mobileMenu.classList.add("inactive");
      }

      if(desktopMenu != desktopMenu.classList.contains("inactive") || 
         productDetail != productDetail.classList.contains("inactive")){
          desktopMenu.classList.add("inactive");
          productDetail.classList.add("inactive");
      }
      
      

      shoppingCart.classList.toggle("inactive");

}
/*<div class="product-card">
            <img src="https://images.pexels.com/photos/13619967/pexels-photo-13619967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="product">
            <div class="product-info">
                <div>
                    <p>$120,00</p>
                   <p>Bike</p>
                </div>
                <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="carrito">                  
                </figure>
            </div>
        </div>
*/

const productList = [];

productList.push({
      name : "street",
      price : 420,
      image : "https://i.pinimg.com/236x/a2/97/d3/a297d3637d4c60194e67bb859b6d0edb.jpg",
   });

productList.push({
      name : "sirena",
      price : 1000,
      image : "https://i.pinimg.com/236x/c2/65/08/c26508f76723d838cde1876df76b963d.jpg",
});

productList.push({
   name: "Bad trip",
   price: 882,
   image: "https://i.pinimg.com/236x/be/86/80/be86801fa024d6719def3d291352d6bd.jpg",

});

productList.push({
      name: "The truth",
      price: 521,
      image: "https://i.pinimg.com/236x/4e/09/af/4e09af736b2ffe73cc06616cbe259eb0.jpg",

});

function openProductDetail(){
   if(desktopMenu != desktopMenu.classList.contains("inactive") || 
      shoppingCart != shoppingCart.classList.contains("inactive") || 
      mobileMenu != mobileMenu.classList.contains("inactive")){
      desktopMenu.classList.add("inactive");
      shoppingCart.classList.add("inactive");
      mobileMenu.classList.add("ianctive");
   }

   productDetail.classList.remove("inactive");
}

function closeProduct(){
      productDetail.classList.add("inactive");
}




for (product of productList){
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");


  const productImage = document.createElement("img");
  productImage.setAttribute("src", product.image);
  productImage.addEventListener("click", openProductDetail);

 

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");
  

  const productInfoDiv = document.createElement("div");
  productInfoDiv.classList.add("product-info-div");
  

  const productName = document.createElement("p");
  productName.innerText = product.name;


  const productPrice = document.createElement("p");
  productPrice.innerText = "$" + product.price;
  
  productInfoDiv.appendChild(productName);
  productInfoDiv.appendChild(productPrice);

  const productIntoFigure = document.createElement("figure");
  productInfo.appendChild(productIntoFigure);
  
  const productImgCard = document.createElement("img");
  productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
  

  productCard.appendChild(productImage);
  productCard.appendChild(productInfo);
  
  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productIntoFigure);
 
  productIntoFigure.appendChild(productImgCard);//


  cardsContainer.appendChild(productCard);
  mainContainer.appendChild(cardsContainer);
}