const menuEmail = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
const menuHamburguer = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carrito = document.querySelector(".navbar-shopping-cart");
const compra = document.querySelector(".product-detail");
const cardContainer = document.querySelector(".cards-container")

const productList = []

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburguer.addEventListener("click", toggleMobileMenu);
carrito.addEventListener("click", toggleCompraMenu);


function toggleDesktopMenu(){
    // if (menuDesktop.classList[1] == "inactive") {
    //     menuDesktop.classList.remove("inactive")
    // } else {
    //     menuDesktop.classList.add("inactive")
    // }
    menuDesktop.classList.toggle("inactive");
    compra.classList.add("inactive");
};

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
    compra.classList.add("inactive");
};

function toggleCompraMenu (){
    compra.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    menuDesktop.classList.toggle("inactive");
}

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Laptop",
    price: 2000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
})
productList.push({
    name: "Desktop Computer",
    price: 3000,
    image: "https://images.unsplash.com/photo-1619597455322-4fbbd820250a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
})

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
</div> */

function renderProducts(array) {
    for (product of array) {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const img = document.createElement("img")
        img.setAttribute("src",product.image)
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
    
        const productData = document.createElement("div")
    
        const productPrice = document.createElement("p")
        productPrice.innerText = product.price + "$"
    
        const productName = document.createElement("p")
        productName.innerText = product.name
    
        productData.appendChild(productPrice)
        productData.appendChild(productName)
    
        const productInfoFigure = document.createElement("figure")
        const productInfoLogo = document.createElement("img")
        productInfoLogo.setAttribute("src","./icons/bt_add_to_cart.svg")
    
        productInfoFigure.appendChild(productInfoLogo)
    
        productInfo.appendChild(productData)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(img)
        productCard.appendChild(productInfo)
    
        cardContainer.appendChild(productCard)
    }
}

renderProducts(productList)
