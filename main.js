const menuEmail = document.querySelector(".navbar-email")
const burger = document.querySelector(".menu")
const carrito = document.querySelector
(".navbar-shopping-cart")
const desktopMenu = document.querySelector(".desktop-menu")
const movileMenu = document.querySelector(".mobile-menu")
const aside = document.querySelector(".product-detail")
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktopMenu)
burger.addEventListener("click", toggleMovileMenu)
carrito.addEventListener("click", toggleCarritoAside)

function toggleDesktopMenu() {

    const isAsideClosed = aside.classList.contains("inactive")

    if(!isAsideClosed) {

        aside.classList.add("inactive") 
    }


    desktopMenu.classList.toggle("inactive")


}
function toggleMovileMenu() {

    const isCarritoClosed = aside.classList.contains("inactive")

    if(!isCarritoClosed) {

        aside.classList.add("inactive") 
    }
    
    

    movileMenu.classList.toggle("inactive")
}
function toggleCarritoAside() {
    const isMovileMenuClosed = movileMenu.classList.contains("inactive")
    
    if(!isMovileMenuClosed) {

        movileMenu.classList.add("inactive") 
    }
    

    aside.classList.toggle("inactive")
    
}

const productList = [];
productList.push({

    name: "Headphones",
    price: 30000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});

productList.push({

    name: "Laptop",
    price: 850000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({

    name: "celphone",
    price: 700000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({

    name: "Laptop Apple",
    price: 2200000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({

    name: "Car",
    price: 24000000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({

    name: "tv",
    price: 300000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({

    name: "PC Makintoch",
    price: 60000000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({

    name: "House",
    price: 120000000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

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

for (product of productList) {
    const productCard = document.createElement("div")
    productCard.classList.add("product-card")

        // product= {name, price, image} -> product.image
    const productImg = document.createElement("img")
    productImg.setAttribute("src", product.image)

    const productInfo = document.createElement("div")
    productInfo.classList.add("product-info")

    const productInfoDiv = document.createElement("div")

    const productPrice = document.createElement("p")
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p")
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);


    const productInfoFigure = document.createElement("figure")

    const productImgCart = document.createElement("img")
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)

    cardsContainer.appendChild(productCard)
}

