const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarritoICon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu );
menuCarritoICon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu () {
    const isAsideClosed = aside.classList.contains("inactive");

    if(!isAsideClosed){
        aside.classList.toggle("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu () {
    const isAsideClosed = aside.classList.contains("inactive");
    
    if(!isAsideClosed){
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }

    aside.classList.toggle("inactive");
}

const productList = [];
    productList.push({
        name:"bike",
        price: 120,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    });

    productList.push({
        name:"bike",
        price: 120,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    });

    productList.push({
        name:"bike",
        price: 120,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    });


function renderProducts(arr){

    for (product of arr) {
        /*
        div class="product-card">
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
      const productCard =  document.createElement("div"); /*para crear un div con la clase product-card */
      productCard.classList.add("product-card"); /*esta liena es para agregarle la class="product-card creada en la anterior linea" */

      const productImg = document.createElement("img");
      productImg.setAttribute("src", product.image);

      const productInfo=  document.createElement("div"); /*para crear un div con la clase productinfo */
      productInfo.classList.add("product-info"); /*esta liena es para agregarle la class="product-info creada en la anterior linea" */

      const productInfoDiv =  document.createElement("div"); /*para crear un div con la clase product-info-div */

      const productPrice = document.createElement("p");
      productPrice.innerText = "$"+ product.price;
      const productName = document.createElement("p");
      productName.innerText = product.name;

      productInfoDiv.appendChild(productPrice);/*Esto es para decirle al algoritmo que meta  productPrice dentro de productInfoDiv */
      productInfoDiv.appendChild(productName);/*Esto es para decirle al algoritmo que meta  productName dentro de productInfoDiv */

      const productInfoFigure = document.createElement("figure");
      const productImgCart = document.createElement("figure");
      productImgCart.setAttribute("src", "./icons/bt_add_to_card.svg");
      
      productInfoFigure.appendChild(productImgCart); /* esto es para decirle al algoritmo que meta productImgCart dentro de productInfoFigure*/

      productInfo.appendChild(productInfoDiv); /*Esto es para decirle al algoritmo que meta  productInfoDiv dentro de productInfo */
      productInfo.appendChild(productInfoFigure);/*Esto es para decirle al algoritmo que meta  productInfoFigure dentro de productInfo */

      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);

      cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
