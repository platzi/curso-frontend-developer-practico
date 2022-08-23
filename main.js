//Menu email 
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
//menu mobile left 
const iconMenuMobile = document.querySelector("#iconMenuMobile");
const menuMobile = document.querySelector(".mobile-menu");
//litle car 
const iconCar = document.querySelector("#carIcon");
const carContainer =document.querySelector("#carContainer");
/*Card -container */
const cardsContainer =document.querySelector(".cards-container");

//Listener

menuEmail.addEventListener("click", toggleDesktopMenu);

iconMenuMobile.addEventListener("click",toggleMenuMobile);
iconCar.addEventListener("click",toggleMenuCar);

//Function 
function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
    carContainer.classList.add("inactive");
}
function toggleMenuMobile(){
    menuMobile.classList.toggle("inactive");
    carContainer.classList.add("inactive");
}
function toggleMenuCar(){
    carContainer.classList.toggle("inactive");
    menuMobile.classList.add("inactive");
    desktopMenu.classList.add("inactive");
}
const productList = [];
productList.push({
    name: "bike",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "TV",
    price: 800,
    img: "https://www.aki.com.ec/wp-content/uploads/2022/05/httpsstorage.googleapis.comcf-maxitemsicd6971408155286-0.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Laptop",
    price: 600,
    img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07973337.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
/* <div class="product-card">
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
</div>*/
for(product of productList){
    /*Primer div*/
    const productCard =document.createElement("div");
    productCard.classList.add("product-card");
    /*Elemento imagen*/
    const img = document.createElement("img");
    img.setAttribute("src",product.img);
    /*product-info */
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    /*Product-infodiv */
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

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}