const menuEmail = document.querySelector (".navbar-email")
const desktopMenu = document.querySelector (".desktop-menu")
const menuHamIcon = document.querySelector (".menu")
const menuCarIcon = document.querySelector (".navbar-shopping-cart")
const productDetailCloseIcon = document.querySelector (".product-detail-close")
const mobileMenu = document.querySelector (".mobile-menu")
const shoppingCartContainer = document.querySelector (".shopping-cart-container")
const productDetailContainer = document.querySelector(".product-detail-menu")
const cardsContainer = document.querySelector (".cards-container")



menuEmail.addEventListener ("click", toggleDesktopMenu)
menuHamIcon.addEventListener ("click", toggleMobileMenu)
menuCarIcon.addEventListener ("click", toggleCarAside)
productDetailCloseIcon.addEventListener ("click", closeProductDetail)


function toggleDesktopMenu () {
    const isCarClosed = shoppingCartContainer.classList.contains ("inactive")
    const isproductDetailContainerClosed = productDetailContainer.classList.contains ("inactive")

    if  (!isCarClosed || !isproductDetailContainerClosed) {
        shoppingCartContainer.classList.add ("inactive")
    } 
    desktopMenu.classList.toggle("inactive")
    productDetailContainer.classList.add ("inactive")
}

function toggleMobileMenu () {
    
    const isCarClosed = shoppingCartContainer.classList.contains ("inactive")
    

    if  (!isCarClosed) {
        shoppingCartContainer.classList.add ("inactive")
    } 

    closeProductDetail ()
   
    mobileMenu.classList.toggle("inactive")
}

function toggleCarAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains ("inactive")
    const isDesktopMenuClosed = desktopMenu.classList.contains ("inactive")
    const isproductDetailContainerClosed = productDetailContainer.classList.contains ("inactive")
    

    if  (!isMobileMenuClosed || !isDesktopMenuClosed || !isproductDetailContainerClosed) {
        mobileMenu.classList.add ("inactive")
        desktopMenu.classList.add ("inactive")
        productDetailContainer.classList.add ("inactive")
    }
    
    
    shoppingCartContainer.classList.toggle("inactive")
}

function openProductDetail () {
    desktopMenu.classList.add ("inactive")
    shoppingCartContainer.classList.add ("inactive")
    mobileMenu.classList.add ("inactive")

    productDetailContainer.classList.remove ("inactive") 
}

function closeProductDetail () {
    productDetailContainer.classList.add ("inactive") 
}
const productList = [];

productList.push ( {
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push ( {
    name: "Pantalla",
    price: 250,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push ( {
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push ( {
    name: "Pantalla",
    price: 250,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push ( {
    name: "Computador",
    price: 520,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push ( {
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push ( {
    name: "Pantalla",
    price: 250,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push ( {
    name: "Computador",
    price: 520,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement ("div")
        productCard.classList.add ("product-card")
    
        const productImg = document.createElement ("img")
        productImg.setAttribute("src", product.image)
        productImg.addEventListener("click", openProductDetail)
    
        const productInfo = document.createElement ("div")
        productInfo.classList.add ("product-info")
        
        const productInfoDiv = document.createElement ("div")
    
        const productPrice = document.createElement ("p")
        productPrice.innerText = "$" + product.price
        const productName = document.createElement ("p")
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement ("figure")
        const productImgCart = document.createElement ("img")
        productImgCart.setAttribute ("src", "./icons/bt_add_to_cart.svg")
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild (productImg)
        productCard.appendChild (productInfo)
        
        cardsContainer.appendChild (productCard)
        
    }
}

renderProducts(productList)
