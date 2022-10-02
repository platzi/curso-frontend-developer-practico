const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCardContainer = document.querySelector("#shoppingCardContainer");
const productDetailContainer = document.querySelector("#product-detail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

const cardContainer = document.querySelector(".cards-container");


menuEmail.addEventListener("click",toggleDesktopMenu);
menuHamIcon.addEventListener("click",toggleMobileMenu);
menuCarritoIcon.addEventListener("click",toggleCarritoAside);
productDetailCloseIcon.addEventListener("click",closeProductDetail);

function toggleDesktopMenu(event) {
    const isAsideMenuClosed = shoppingCardContainer.classList.contains("inactive");
    if (!isAsideMenuClosed) {
        shoppingCardContainer.classList.add("inactive");
    }    
    const isProductDetailContainerClosed = productDetailContainer.classList.contains("inactive");
    if (!isProductDetailContainerClosed) {
        
        productDetailContainer.classList.add("inactive");
    } 
    desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu(event) {
    const isAsideMenuClosed = shoppingCardContainer.classList.contains("inactive");
    if (!isAsideMenuClosed) {
        shoppingCardContainer.classList.add("inactive");
    }

    const isProductDetailContainerClosed = productDetailContainer.classList.contains("inactive");
    if (!isProductDetailContainerClosed) {
        
        productDetailContainer.classList.add("inactive");
    }  
    mobileMenu.classList.toggle("inactive");
}

function closeProductDetail(){
    productDetailContainer.classList.add("inactive");
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
    shoppingCardContainer.classList.toggle("inactive");
    
    const isProductDetailContainerClosed = productDetailContainer.classList.contains("inactive");
    if (!isProductDetailContainerClosed) {
        
        productDetailContainer.classList.add("inactive");
    }   
    
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



function renderProductos (arr) {
for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src",product.image);
    productImg.addEventListener("click",openProductDetail);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");
    const productName = document.createElement("p");
    productName.innerText = product.name;

    const productPrice = document.createElement("p");
    productPrice.innerText = "S/." + product.price;

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

function openProductDetail(event) {
    productDetailContainer.classList.remove("inactive");
    const isshoppingCardContainerClosed= shoppingCardContainer.classList.contains("inactive");
    if (!isshoppingCardContainerClosed) {
        shoppingCardContainer.classList.add("inactive");
    }   
    
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }
  

}

renderProductos(productList);
