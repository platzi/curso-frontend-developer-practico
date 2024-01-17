const nav_bar = document.querySelector(".navbar-email")
const nav_email = document.querySelector(".desktop-menu")
const menu = document.querySelector(".menu")
const mobileMenu= document.querySelector(".mobile-menu")
const productDetail = document.querySelector(".product-detail")
const shoppingCart = document.querySelector(".shopping-cart-image")
const cardContainer = document.querySelector(".cards-container")
const productDetail2 = document.querySelector(".product-detail_2")
const close = document.getElementById("close")


nav_bar.addEventListener("click", quitarInactive)
menu.addEventListener("click", quitarInactive2)
shoppingCart.addEventListener ("click", quitarInactive3)
close.addEventListener("click", quitarInactive4)

const productList = []

function quitarInactive(){
nav_email.classList.toggle ("inactive")
productDetail.classList.add("inactive")
productDetail2.classList.add("inactive")
}

function quitarInactive2(){
    mobileMenu.classList.toggle ("inactive")
    productDetail.classList.add ("inactive")
    productDetail2.classList.add("inactive")
    nav_email.classList.add("inactive")
}

function quitarInactive3(){
    productDetail.classList.toggle("inactive")
    nav_email.classList.add("inactive")
    mobileMenu.classList.add("inactive")
    productDetail2.classList.add("inactive")
}

function quitarInactive4(){
    productDetail2.classList.toggle("inactive")
}

function borrarInactive(){
    productDetail2.classList.remove("inactive")
    nav_email.classList.add("inactive")
    productDetail.classList.add("inactive")
    mobileMenu.classList.add("inactive")
}

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    image2: "./icons/bt_add_to_cart.svg"
})

productList.push({
    name: "MacBook",
    price: 2220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    image2: "./icons/bt_add_to_cart.svg"
})

productList.push({
    name: "Screen",
    price: 300,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    image2: "./icons/bt_add_to_cart.svg"
})





for (product of productList){

    const productCard= document.createElement("div")
    productCard.classList.add("product-card")

   
   

    const img= document.createElement("img")
    img.setAttribute("src", product.image)
    img.classList.add ("product-image")
    img.addEventListener("click", borrarInactive)

    const productInfo = document.createElement("div")
    productInfo.classList.add("product-info")

  

    const productInfoDiv = document.createElement("div")


    const parrafPrice= document.createElement("p")
    parrafPrice.innerText= "$" + product.price

    const parrafProduct= document.createElement("p")
    parrafProduct.innerText= product.name

    const figure = document.createElement("figure")

    const img2= document.createElement("img")
    img2.setAttribute("src", product.image2)

  

    productCard.appendChild(img)
    productCard.appendChild(productInfo)
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(figure)
    productInfoDiv.appendChild(parrafPrice)
    productInfoDiv.appendChild(parrafProduct)
    figure.appendChild(img2)
    cardContainer.appendChild(productCard)

}

