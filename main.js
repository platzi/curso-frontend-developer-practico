const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const menu = document.querySelector(".menu")
const shoppingCart = document.querySelector("#carrito")
const asideOrders = document.querySelector(".product-detail")
const cardsContainer = document.querySelector(".cards-container")
menuEmail.addEventListener("click", toggleDesktopMenu)

function toggleDesktopMenu(){
    const isAsideClose = asideOrders.classList.contains("inactive")

    if (!isAsideClose){
      asideOrders.classList.add("inactive")
      }
    desktopMenu.classList.toggle("inactive")
    
}

menu.addEventListener("click", toggleMobileMenu)

function toggleMobileMenu(){
    const isAsideClose = asideOrders.classList.contains("inactive")
    
    if (!isAsideClose){
      asideOrders.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive")
}

shoppingCart.addEventListener("click", toggleAsideOrders)

function toggleAsideOrders(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive")
    }

    asideOrders.classList.toggle("inactive")
    

}

const productList = [];
productList.push({
  name: "Bike",
  price: "$120",
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Carrie",
  price: "$0",
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "ElfriGo",
  price: "$9999",
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: "$120",
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Carrie",
  price: "$0",
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "ElfriGo",
  price: "$9999",
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});



function renderProducts(arr){
  for (product of arr){
    const productCard = document.createElement("div")
    productCard.classList.add("product-card")
    
    const productImg = document.createElement("img")
    productImg.setAttribute("src", product.image)
    
    const productInfo = document.createElement("div")
    productInfo.classList.add("product-info")
    
    const productInfoDiv = document.createElement("div")
  
    const productPrice = document.createElement("p",)
    productPrice.innerText = product.price
    const productName = document.createElement("p")
    productName.innerText = product.name
  
    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)
  
    const productInfoFigure = document.createElement("figure")
    const productImgCard = document.createElement("img")
    productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg")
  
    productInfoFigure.appendChild(productImgCard)
  
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard)
  }
}

renderProducts(productList)

//  <div class="product-card">
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
// <div class="product-info">
//   <div>
//     <p>$120,00</p>
//     <p>Bike</p>
//   </div>
//   <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="">
//   </figure>
// </div>
// </div>


