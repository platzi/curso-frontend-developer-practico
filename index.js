const menuEmail= document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const HamMenuIcon= document.querySelector(".menu")
const carMenuIcon= document.querySelector(".navbar-shopping-cart")
const productDetailCloseIcon= document.querySelector(".product-detail-close")
const mobileMenu= document.querySelector(".mobile-menu")
const shoppingCartContainer= document.querySelector("#shoppingCartContainer")
const productDetailContainer= document.querySelector("#productDetail")
const cardsContainer= document.querySelector(".cards-container")
const shoppingCounter= document.querySelector("#shopping-counter")
let counter=1
let codeId


menuEmail.addEventListener("pointerdown", toggleDesktopMenu)
HamMenuIcon.addEventListener("pointerdown", toggleMobileMenu)
carMenuIcon.addEventListener("pointerdown", toggleAside)
productDetailCloseIcon.addEventListener("pointerdown", closeProductDetail)

function toggleDesktopMenu(){
    const isAsideClosed= shoppingCartContainer.classList.contains("inactive")  

     if(!isAsideClosed){
        shoppingCartContainer.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
     const isAsideClosed= shoppingCartContainer.classList.contains("inactive")  

     if(!isAsideClosed){
        shoppingCartContainer.classList.add("inactive")
    }

    closeProductDetail()
    mobileMenu.classList.toggle("inactive")
}

function toggleAside(){
    const isMobileMenuClosed= mobileMenu.classList.contains("inactive")  

     if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive")
    }

    const isProductDetailClosed= productDetailContainer.classList.contains("inactive")  

     if(!isProductDetailClosed){
        productDetailContainer.classList.add("inactive")
    }

    shoppingCartContainer.classList.toggle("inactive")
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add("inactive")

    productDetailContainer.classList.remove("inactive")
}

function closeProductDetail(){
    productDetailContainer.classList.add("inactive")
}

const productList = []
productList.push({
    id:1,
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    id:2,
    name: "Screen",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    id:3,
    name: "Laptop",
    price: 420,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXmFprTdqvnUj82ll4yuBU2JFBeWLqCI07A&usqp=CAU"
})

function renderProducts(arr){
    for (product of arr){
        const productCard= document.createElement("div")
        productCard.classList.add("product-card")

        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
        productImg.addEventListener("pointerdown", openProductDetailAside)

        const productInfo= document.createElement("div")
        productInfo.classList.add("product-info")

        const productInfoDiv= document.createElement("div")

        const productPrice= document.createElement("p")
        productPrice.innerText= `$${product.price}`

        const productName= document.createElement("p")
        productName.innerText= product.name

        productInfoDiv.append(productPrice, productName)

        const productInfoFigure= document.createElement("figure")
         productInfoFigure.classList.add(`${product.id}`)

        const productInfoCart= document.createElement("img")
        productInfoCart.setAttribute("src", "./icons/bt_add_to_cart.svg")

        productInfoFigure.appendChild(productInfoCart)
        productInfo.append(productInfoDiv, productInfoFigure)

        productCard.append(productImg, productInfo)
        cardsContainer.appendChild(productCard)

        productInfoFigure.addEventListener("pointerdown", ()=>{
             let codeProduct=productInfoFigure.classList.item(productList.id)
                codeId=codeProduct
                addingProduct(codeId)
                addingCounter()
        })
    }
}

function addingProduct(id){
    console.log(id)
}


function addingCounter(){
        shoppingCounter.innerText= counter++
}

renderProducts(productList)