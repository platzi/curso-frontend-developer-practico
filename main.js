 const menuEmail = document.querySelector(".navbar-email");
 const desktopMenu = document.querySelector(".desktop-menu");
 const menuHamIcon = document.querySelector(".menu");
 const mobileMenu = document.querySelector(".mobile-menu");
 const menuCarIcon = document.querySelector(".navbar-shopping-cart");
 const aside = document.querySelector(".product-detail");
 const cardsContainer = document.querySelector(".cards-container");
 const productsDetailContainer = document.querySelector(".products-detail");
 const buttonClose = document.querySelector(".products-detail-close")

 menuEmail.addEventListener("click", toggleDesktopMenu);
 menuHamIcon.addEventListener("click", toggleMobileMenu);
 menuCarIcon.addEventListener("click", toggleAside);
 buttonClose.addEventListener("click", toggleClose);
 
 function toggleClose () {
   desktopMenu.classList.add("inactive");
   aside.classList.add("inactive");
   mobileMenu.classList.add("inactive");
   productsDetailContainer.classList.toggle("inactive");
}

function openProductsDetail () {
   desktopMenu.classList.add("inactive");
   aside.classList.add("inactive");
   mobileMenu.classList.add("inactive");
   productsDetailContainer.classList.toggle("inactive");
}
 
 function toggleDesktopMenu() {
   mobileMenu.classList.add("inactive");
   aside.classList.add("inactive");
   productsDetailContainer.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");              
 }

 function toggleMobileMenu() {
   desktopMenu.classList.add("inactive");
   aside.classList.add("inactive");
   productsDetailContainer.classList.add("inactive");
   mobileMenu.classList.toggle("inactive");             
}

function toggleAside() {
   mobileMenu.classList.add("inactive");
   desktopMenu.classList.add("inactive");
   productsDetailContainer.classList.add("inactive");
   aside.classList.toggle("inactive");
}

const productList = [];
productList.push({
   name: "bike",
   price: 120,
   img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
   name: "car",
   price: 1500,
   img: "https://images.pexels.com/photos/381228/pexels-photo-381228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
   name: "bala",
   price: 10,
   img: "https://images.pexels.com/photos/8247029/pexels-photo-8247029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});




function renderProduct(arr) {
   for (product of arr) {
      
      const productCart = document.createElement("div");
      productCart.classList.add("product-card");
   
      const productImg = document.createElement("img");
      productImg.setAttribute("src", product.img);
   productImg.addEventListener("click", openProductsDetail);


      const productInfo = document.createElement("div");
      productInfo.classList.add("product-info");
   
      const productInfoDiv = document.createElement("div");
   
      const productPrice = document.createElement("p");
      productPrice.innerText = "$" + product.price;
      
      const productName = document.createElement("p");
      productName.innerText = product.name;
   
   productInfoDiv.appendChild(productPrice);
   productInfoDiv.appendChild(productName);
   
      const productInfoFigure = document.createElement("figure");
       const productImgCart = document.createElement("img");
       productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
   
      productInfoFigure.appendChild(productImgCart);
   
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
   
      productCart.appendChild(productImg);
      productCart.appendChild(productInfo);
   
      cardsContainer.appendChild(productCart);
   }
}
renderProduct(productList);