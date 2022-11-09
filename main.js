import productList from "./products.js";
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const burguerMenu = document.querySelector(".burguerMenu");
const mobile_menu = document.querySelector(".mobile-menu");
const ShoppingCart = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")
const cards_container = document.querySelector(".cards-container")
const productDetailOrder = document.querySelector(".product-detail__order")
const productDetailProduct = document.querySelector(".product_detail__product")
const productOrderContent = document.querySelector(".my-order-content")
const mainContainer = document.querySelector(".main-container")

let cart = []
let totalCuenta = []
let contador = 0
let numProduct = document.querySelector("#numProduct")
numProduct.textContent = contador
let productPriceTotal = document.querySelector("#productPriceTotal")
productPriceTotal.textContent = "$0"
let productCard
let closeProduct
let imgClose 
let imgProduct 
let productInfo 
let productName 
let productPrice 
let buttonAddCart 
let imgaddcart
let cardOrder 
let figureOrder
let imgOrder 
let removeProduct
let total 

// COMENTARIO DE MEJOR CODIGO -- NOTAS EN EXTENCION LINENOTE
menuEmail.addEventListener("click",toggleInactive.bind(this,desktopMenu))
burguerMenu.addEventListener("click", toggleInactive.bind(this, mobile_menu))
ShoppingCart.addEventListener("click",toggleCart)



// TOGGLE INACTIVE
function toggleInactive(e){
    aside.classList.add("inactive")
    e.classList.toggle("inactive")
    
    if(aside.classList.contains("inactive")){
        mainContainer.style.zIndex = "0"
        productDetailProduct.removeChild(imgProduct)
        productDetailProduct.removeChild(productInfo)
        
    }
      
}

function toggleCart(){
    aside.classList.toggle("inactive")
    productDetailOrder.classList.remove("inactive")
    mobile_menu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    productDetailProduct.classList.add("inactive")
    
    if(aside.classList.contains("inactive")){
        mainContainer.style.zIndex = "0"
        productDetailProduct.removeChild(imgProduct)
        productDetailProduct.removeChild(productInfo)
        
    }else{
        mainContainer.style.zIndex = "-1"

    }

}

// MAIN CONTENTE PRODUCT
function renderProduct(arr){
    arr.forEach((product)=>{
        productCard = document.createElement("div");
        productCard.classList.add("product-card")
    
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
        productImg.setAttribute("id",product.id)
        productImg.addEventListener("click",openProductDetail)
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div");
        const productPrice = document.createElement("p");
        total = product.price.toLocaleString("en")
        productPrice.innerText = `$${total}`
        const productName = document.createElement("p");
        productName.innerText = product.name;
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
        productInfoFigure.appendChild(productImgCart)
        productInfoDiv.append(productPrice,productName)
        productInfo.append(productInfoDiv,productInfoFigure)
        productCard.append(productImg,productInfo)
        cards_container.append(productCard)
    
    })
    
}

// CLICK IN PRODUCT
function openProductDetail(e){
    aside.classList.remove("inactive")
    productDetailProduct.classList.remove("inactive")
    productDetailOrder.classList.add("inactive")
    productList.forEach((product)=>{
        if(product.id === parseInt(e.target.id)){
            renderProductDetail(product)
        } 
    })
}


// ASIDE DETAIL PRODUCT
function renderProductDetail(product){
    closeProduct = document.createElement("div")
    closeProduct.classList.add("product-detail-close")
    closeProduct.addEventListener("click",toggleInactive.bind(this,closeProduct))
    imgClose = document.createElement("img")
    imgClose.setAttribute("src","./icons/icon_close.png")
    closeProduct.appendChild(imgClose)
    imgProduct = document.createElement("img")
    imgProduct.setAttribute("src" , product.image)
    imgProduct.classList.add("imgProduct")
    productInfo = document.createElement("div")
    productInfo.classList.add("product-info")
    productName = document.createElement("p")
    productPrice = document.createElement("p")
    total = product.price.toLocaleString("en")
    productPrice.innerText = `$${total}`
    productName.textContent = product.name
    buttonAddCart = document.createElement("button")
    buttonAddCart.textContent = "Add to cart"
    buttonAddCart.classList.add("primary-button" ,"add-to-cart-button")
    imgaddcart = document.createElement("img")
    imgaddcart.setAttribute("src","./icons/bt_add_to_cart.svg" )
    buttonAddCart.appendChild(imgaddcart)
    buttonAddCart.addEventListener("click",addCart.bind(this,product),false)
    productInfo.append(productPrice,productName,buttonAddCart)
    productDetailProduct.append(closeProduct,imgProduct,productInfo)
    mainContainer.style.zIndex = "-1"
    
}

// ASIDE DETAIL ORDER CART INFORMATION MAPPING
function addCart(product){
    productPriceTotal.textContent = 0
    contador += 1
    numProduct.textContent = contador
    cart.push(product)
    totalCuenta.push(product.price)
    renderOrder()
}

// RENDER ASIDE DETAIL ORDER CART
function renderOrder(){
    varciarCarrito()
    cart.forEach((product)=>{
        cardOrder = document.createElement("div")
        cardOrder.classList.add("shopping-cart",`${product.id}`)
        figureOrder = document.createElement("figure")
        imgOrder = document.createElement("img")
        imgOrder.setAttribute("src",product.image)
        figureOrder.appendChild(imgOrder)
        productName = document.createElement("p")
        productName.textContent = product.name
        productPrice = document.createElement("p")
        total = product.price.toLocaleString("en")
        productPrice.innerText = `$${total}`
        removeProduct = document.createElement("img")
        removeProduct.classList.add("remove")
        removeProduct.setAttribute("src","./icons/icon_close.png")
        removeProduct.addEventListener("click", removeProductList.bind(this,product),false)
        cardOrder.append(figureOrder,productName,productPrice,removeProduct)
        
        
        
        total = totalCuenta.reduce((a,b)=> a + b).toLocaleString("en")
        productPriceTotal.textContent = `$${total}`

        productOrderContent.appendChild(cardOrder)
    })
}

// DELETE FIRST CHILD CART
function varciarCarrito(){
    while(productOrderContent.firstChild){
        productOrderContent.removeChild(productOrderContent.firstChild)
    }
}


// DELETE ITEM CART
function removeProductList(product){
    contador -= 1
    numProduct.textContent = contador
    cart = cart.filter(p => p.id != product.id)
    renderOrder()
    try{
        totalCuenta = totalCuenta.filter(p => p != product.price)
        total = totalCuenta.reduce((a,b)=> a + b).toLocaleString("en")
        productPriceTotal.textContent = `$${total}`
        
        
    }catch{
        productPriceTotal.textContent = `$0`
    }
    
}

renderProduct(productList)


