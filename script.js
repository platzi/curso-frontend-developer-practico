const mailMenu = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")

const menuHamb = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

const menuCarrito = document.querySelector(".navbar-shopping-cart")
const ordenCarrito = document.querySelector("#shopCarContainer")

const cardsContainer = document.querySelector(".cards-container")

mailMenu.addEventListener("click",toggleDesktopMenu)
menuHamb.addEventListener("click",toggleMobileMenu)
menuCarrito.addEventListener("click",toggleCarrito)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
    ordenCarrito.classList.add("inactive")
}

function toggleMobileMenu(){
    ordenCarrito.classList.add('inactive')
    mobileMenu.classList.toggle("inactive")
}

function toggleCarrito(){
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    ordenCarrito.classList.toggle("inactive")
}

function hidenMenuD(x) {
    if (x.matches) { // If media query matches
      desktopMenu.classList.add("inactive")
  } else {
      mobileMenu.classList.add("inactive")
  }
} 
  let wmob = window.matchMedia("(max-width: 640px)")
  hidenMenuD(wmob) // Call listener function at run time
  wmob.addEventListener('change',hidenMenuD)


const productList = []
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "MotorBike",
    price: 420,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "ElectricBike",
    price: 320,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "MotorBike",
    price: 420,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "ElectricBike",
    price: 320,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "MotorBike",
    price: 420,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "ElectricBike",
    price: 320,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

/*<div class="product-card">
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

function renderProducts(array){
    for(let product of array){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
    
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src',product.image)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
    
    
        const containerInfo = document.createElement('div')
        const productPrice = document.createElement('p')
        productPrice.innerText =`$${product.price}`
        const productName = document.createElement('p')
        productName.innerText = product.name
    
     
    
        const containerFig = document.createElement('figure')
        const imgCar = document.createElement('img')
        imgCar.setAttribute('src','./icons/bt_add_to_cart.svg')    
    
        containerFig.appendChild(imgCar)
    
        containerInfo.append(productPrice,productName)
    
        productInfo.append(containerInfo,containerFig)
    
        productCard.append(productImg,productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)

