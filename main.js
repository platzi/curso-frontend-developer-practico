const menuEmail = document.querySelector(".navbar-email");
const destokpMenu =document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu")
/*const menuCarrito = document.querySelector(".product-detail")*/
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const cardsContainer = document.querySelector(".cards-container")


const shoppingCartContainer = document.querySelector("#shoppingCartContainer")

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleCarritoAside)

function toggleDesktopMenu(){
   const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

   if(!isAsideClosed){
      shoppingCartContainer.classList.add("inactive");
   }
   destokpMenu.classList.toggle("inactive");

}

function toggleMobileMenu(){
   const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

   if(!isAsideClosed){
      shoppingCartContainer.classList.add("inactive");
   }
   mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside(){
   const isDesktopMenuClosed = destokpMenu.classList.contains("inactive")
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

   if(!isMobileMenuClosed){
      mobileMenu.classList.add("inactive");
   }
   if(!isDesktopMenuClosed){
      destokpMenu.classList.add("inactive");
   }

   shoppingCartContainer.classList.toggle("inactive")
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