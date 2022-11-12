const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector("#productDetail");
const productDetailClose = document.querySelector(".product-detail2-close");


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

productDetailClose.addEventListener("click", closeProductDetailAside)

function toggleMobileMenu(){

      //cerrar el Aside al abrir el Mobile Menu

   const isAsideClosed = aside.classList.contains("inactive");
   if(!isAsideClosed){
      aside.classList.add("inactive");
   }

      //cerrar el ProductDetail al abrir el Mobile Menu
   const isproductDetailClose = productDetail.classList.contains("inactive");
   if(!isproductDetailClose){
      productDetail.classList.add("inactive");
   }


   mobileMenu.classList.toggle("inactive");     
};

function toggleDesktopMenu(){

      //cerrar el Aside al abrir el Desktop Menu

   const isAsideClosed = aside.classList.contains("inactive");
   if(!isAsideClosed){
      aside.classList.add("inactive");
   }

      //cerrar el ProductDetail al abrir el Desktop Menu
   const isproductDetailClose = productDetail.classList.contains("inactive");
   if(!isproductDetailClose){
      productDetail.classList.add("inactive");
   }


   desktopMenu.classList.toggle("inactive");     
};

function toggleCarritoAside(){
   
      //cerrar el Mobile menu al abrir el Aside

   const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
   if(!isMobileMenuClosed){
      mobileMenu.classList.add("inactive");
   }

      //cerrar el Menu desktop al abrir el Aside

   const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
   if(!isDesktopMenuClosed){
      desktopMenu.classList.add("inactive");
   }

      //cerrar el ProductDetail
   const isproductDetailClose = productDetail.classList.contains("inactive");
   if(!isproductDetailClose){
      productDetail.classList.add("inactive");
   }

   aside.classList.toggle("inactive");
};

function openProductDetail(){
   productDetail.classList.remove("inactive");

      //cerrar el Aside al abrir el ProductDetail

   const isAsideClosed = aside.classList.contains("inactive");
   if(!isAsideClosed){
      aside.classList.add("inactive");
   }
}

function closeProductDetailAside(){
   productDetail.classList.add("inactive");
}


const productList = [];
productList.push({
   name: "Bike",
   price: 120,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
   name: "Car",
   price: 10000,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
   name: "Laptop",
   price: 4000,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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

function renderProducts(arr){
   for(product of arr){

      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
   
   //------
   
      /*product= {name,price,image} -> product.image*/
      const productImg = document.createElement("img");
      productImg.setAttribute("src", product.image);
      productImg.addEventListener("click", openProductDetail)
   
   
      const productInfo = document.createElement("div");
      productInfo.classList.add("product-info");
   
   //------
   
      //primer div dentro del ProductInfo
      const productInfoDiv = document.createElement("div");
      const productPrice = document.createElement("p");
      productPrice.innerText = "$" + product.price;
      const productName = document.createElement("p");
      productName.innerText = product.name;
      productInfoDiv.append(productPrice,productName);
      /*
      <div>
         <p>$120,00</p>
         <p>Bike</p>
      </div>
      */
   
   
      //figure
      const productInfoFigure = document.createElement("figure");
      const productImageCart = document.createElement("img");
      productImageCart.setAttribute("src","./icons/bt_add_to_cart.svg")
      productInfoFigure.appendChild(productImageCart);
      /*
      <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
       </figure>
      */
   
   
      //Agregamos productInfoDiv y ProductInfoFigure a productInfo
      productInfo.append(productInfoDiv,productInfoFigure);
   
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
   
      cardsContainer.appendChild(productCard);
   
   }
}

renderProducts(productList)