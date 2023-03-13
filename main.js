const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const menuCarIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleCarMenu);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains("inactive")

    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains("inactive")

    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }


    mobileMenu.classList.toggle("inactive")
}

function toggleCarMenu() {
    const isMobileMenuCloused = mobileMenu.classList.contains("inactive");
    
    if (!isMobileMenuCloused) {
        mobileMenu.classList.add("inactive");
    }
    
    aside.classList.toggle("inactive")


}

const productList = [];
productList.push({
    name: "Bike",
    price: 220,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Pantalla",
    price: 320,
    imagen: "https://images.pexels.com/photos/3779032/pexels-photo-3779032.jpeg?auto=compress&cs=tinysrgb&w=400",
})
productList.push({
    name: "Portatil",
    price: 520,
    imagen: "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
productList.push({
    name: "Mando",
    price: 150,
    imagen: "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=600",
})
productList.push({
    name: "Consola",
    price: 450,
    imagen: "https://images.pexels.com/photos/5626726/pexels-photo-5626726.jpeg?auto=compress&cs=tinysrgb&w=600",
})
productList.push({
    name: "cámara",
    price: 220,
    imagen: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=600",
})

function renderProducts(arr) {
    for (const product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card")
     
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.imagen)
     
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info")
     
        
        const productInfoDiv = document.createElement("div");
     
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price
        const productName = document.createElement("p");
        productName.innerText = product.name
     
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
     
        const productInfoFigure = document.createElement("figure");
        const productImgCar = document.createElement("img");
        productImgCar.setAttribute("src", "./icons/bt_add_to_cart.svg")
     
         productInfoFigure.appendChild(productImgCar);
     
         productInfo.appendChild(productInfoDiv)
         productInfo.appendChild(productInfoFigure)
     
         productCard.appendChild(productImg)
         productCard.appendChild(productInfo)
     
         cardsContainer.appendChild(productCard)
     }
}

renderProducts(productList)