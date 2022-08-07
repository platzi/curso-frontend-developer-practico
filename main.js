const navmenu = document.querySelector(".navbar-email");
const burguerMenu  = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardContainer = document.querySelector(".cards-container");


navmenu.addEventListener("click", toggleMenuDesktop);
burguerMenu.addEventListener("click", toggleMenuMobile);
menuCarritoIcon.addEventListener("click", toggleCarrito);

function toggleMenuDesktop(){
    desktopMenu.classList.toggle("inactive");
    aside.classList.add("inactive");

}

function toggleMenuMobile(){
    menuMobile.classList.toggle("inactive");
    aside.classList.add("inactive");

}

function toggleCarrito(){
    aside.classList.toggle("inactive");
    menuMobile.classList.add("inactive");
    desktopMenu.classList.add("inactive");
}

const productList = [];
productList.push({
    name: "Maxam 90",
    price: 120,
    image: "./product-img/maxam-90.png",
})
productList.push({
    name: "Maxam 190",
    price: 150,
    image: "./product-img/maxam-190.png",
})
productList.push({
    name: "Maxam 490",
    price: 290,
    image: "./product-img/maxam-490.png",
})
productList.push({
    name: "Maxam 475",
    price: 280,
    image: "./product-img/maxam-475.png",
})
productList.push({
    name: "Maxam 95",
    price: 125,
    image: "./product-img/maxam-95.png",
})
productList.push({
    name: "Maxam 195",
    price: 155,
    image: "./product-img/maxam-195.png",
})
productList.push({
    name: "Maxam 375",
    price: 270,
    image: "./product-img/maxam-375.png",
})





for (product of productList){
    const productCard = document.createElement("div");
    productCard.classList.add("product-card")

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

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

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);

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