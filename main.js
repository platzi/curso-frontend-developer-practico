const menuEmail = document.querySelector(".navbar-email");
const destokpMenu =document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu");
const productDetailCloseIcon=document.querySelector(".product-detail-close")
const mobileMenu = document.querySelector(".mobile-menu")
/*const menuCarrito = document.querySelector(".product-detail")*/
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const cardsContainer = document.querySelector(".cards-container")
const productDetailContainer = document.querySelector("#productDetail")

const shoppingCartContainer = document.querySelector("#shoppingCartContainer")

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu(){
   const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
   closeProductDetailAside();

   if(!isAsideClosed){
      shoppingCartContainer.classList.add("inactive");
   }
   destokpMenu.classList.toggle("inactive");

}

function toggleMobileMenu(){
   const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
   closeProductDetailAside();

   if(!isAsideClosed){
      shoppingCartContainer.classList.add("inactive");
   }
   mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside(){
   const isDesktopMenuClosed = destokpMenu.classList.contains("inactive")
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
   const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

   if(!isProductDetailClosed){
      productDetailContainer.classList.add("inactive");
   }
   if(!isMobileMenuClosed){
      mobileMenu.classList.add("inactive");
   }
   if(!isDesktopMenuClosed){
      destokpMenu.classList.add("inactive");
   }

   shoppingCartContainer.classList.toggle("inactive")
}

function openProductDetailAside(){
   destokpMenu.classList.add("inactive");
   productDetailContainer.classList.remove('inactive');
   shoppingCartContainer.classList.add("inactive");
}

function closeProductDetailAside(){
   

   productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
   name:"Bike",
   precio:"120",
   imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
})

productList.push({
   name:"Pantalla",
   precio:220,
   imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
})

productList.push({
   name:"Laptop",
   precio:150,
   imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
})

function renderProducts(arr){
   for(product of arr){
      const productCard = document.createElement("div");
      productCard.classList.add("product-card")
   
      const productimg = document.createElement("img");
      //Product ={name, price, image}
      productimg.setAttribute('src', product.imagen)
      productimg.addEventListener("click", openProductDetailAside)
   
      const productInfo= document.createElement("div");
      productInfo.classList.add("product-info")
   
      const productInfoDiv = document.createElement('div');
   
      const productPrice = document.createElement('p');
      productPrice.innerText= "$" + product.precio;
   
      const productName = document.createElement('p');
      productName.innerText = product.name;
   
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
   
      const productInfoFigure = document.createElement("figure");
      const productImgCart = document.createElement("img");
      productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg")
   
      productInfoFigure.appendChild(productImgCart);
   
      productInfo.appendChild(productInfoFigure);
      productInfo.appendChild(productInfoDiv);
      productCard.appendChild(productimg);
      productCard.appendChild(productInfo);
   
      cardsContainer.appendChild(productCard);
   }
}

renderProducts(productList);