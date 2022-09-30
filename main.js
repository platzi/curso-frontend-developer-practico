const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click",toggleDesktopMenu);
menuHamIcon.addEventListener("click",toggleMobileMenu);
menuCarritoIcon.addEventListener("click",toggleCarritoAside);

function toggleDesktopMenu(event) {
    const isAsideMenuClosed = aside.classList.contains("inactive");
    if (!isAsideMenuClosed) {
        aside.classList.add("inactive");
    }    
    desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu(event) {
    const isAsideMenuClosed = aside.classList.contains("inactive");
    if (!isAsideMenuClosed) {
        aside.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}
function toggleCarritoAside(event) {
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }

    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }   
    aside.classList.toggle("inactive");
}



const productList = [];
productList.push ({
    name: "Bike",
    price: 120 ,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push ({
    name: "Ball",
    price: 80 ,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push ({
    name: "Sneakers",
    price: 100 ,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push ({
    name: "T-Shirt",
    price: 65 ,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})



/*       <div class="product-card">
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

const cardContainer = document.querySelector(".cards-container");

function renderProductos (arr) {
for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src",product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");
    const productName = document.createElement("p");
    productName.innerText = product.name;

    const productPrice = document.createElement("p");
    productPrice.innerText = product.price;

    const productInfoFigure = document.createElement("figure");
   
    const productFigureImg = document.createElement("img");
    productFigureImg.setAttribute("src","./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productFigureImg);

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);


    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);

}
}

renderProductos(productList);
