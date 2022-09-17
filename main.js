const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarriroIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click",toggleDesktopMenu);
menuHamIcon.addEventListener("click",togglemobileMenu);
menuCarriroIcon.addEventListener("click",toggleCarritoAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}

function togglemobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if(!isAsideClosed){
        shoppingCartContainer.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive");
}
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

const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "COmputadora",
    price: 620,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

for(product of productList){
   const productcard = document.createElement("div");
   productcard.classList.add("product-card");

   const productImg = document.createElement("img");
   productImg.setAttribute('src',product.image);

   const productinfo = document.createElement("div");
   productinfo.classList.add("product-info");

   const productInfoDiv = document.createElement("div");

   const productprice = document.createElement("p");
   productprice.innerHTML = "$" + product.price;

   const productname = document.createElement("p");
   productname.innerHTML = product.name;

   productInfoDiv.appendChild(productprice);
   productInfoDiv.appendChild(productname);

   const productInfoFigure = document.createElement("figure");
   const productImgCart = document.createElement("img");
   productImgCart.setAttribute("src","./icons/bt_add_to_cart.svg");

   productInfoFigure.appendChild(productImgCart);

   productinfo.appendChild(productInfoDiv);
   productinfo.appendChild(productInfoFigure);

   productcard.appendChild(productImg);
   productcard.appendChild(productinfo);

   cardsContainer.appendChild(productcard);

};