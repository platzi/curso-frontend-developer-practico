const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const burguerIcon = document.querySelector(".menu")
const shoppinCartIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktopMenu)
burguerIcon.addEventListener("click", toggleMobileMenu)
shoppinCartIcon.addEventListener("click", toggleAside)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("ver")
    aside.classList.add("ver")
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("ver")
    aside.classList.add("ver")
}
function toggleAside(){
    aside.classList.toggle("ver")
    mobileMenu.classList.add("ver")
    desktopMenu.classList.add("ver")
}

const productList = []
productList.push({
    name: "Audifonos", 
    price: "269.00", 
    image: "https://images.pexels.com/photos/8000587/pexels-photo-8000587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: "Monitor", 
    price: "329.00", 
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: "Pc", 
    price: "730.00", 
    image: "https://images.pexels.com/photos/968631/pexels-photo-968631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: "Tablet", 
    price: "250.00", 
    image: "https://images.pexels.com/photos/430546/pexels-photo-430546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})

function renderProducts(arr) {
    for(product of productList){
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div")
    
        const productInfoPrice = document.createElement("p")
        productInfoPrice.innerText = "$" + product.price
        const productInfoName = document.createElement("p")
        productInfoName.innerText = product.name
    
        const productInfoFigure = document.createElement("figure")
        const productImgCart = document.createElement("img")
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productCard.appendChild(productImg)
        productInfoFigure.appendChild(productImgCart)
        productInfo.append(productInfoDiv, productInfoFigure)
        productInfoDiv.append(productInfoPrice, productInfoName)
        productCard.append(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)

// <div class="product-card">
        //   <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">

        //   <div class="product-info">
        //     <div>
        //       <p>$120,00</p>
        //       <p>Bike</p>
        //     </div>

        //     <figure>
        //       <img src="./icons/bt_add_to_cart.svg" alt="">
        //     </figure>
        //   </div>
        // </div>