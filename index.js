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
const MyOrderList= document.querySelector(".shopping-cart")
const totalOrder= document.querySelector("#total-order")

let counter=0
let codeId
let productAdded
const order= []

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

// function openProductDetailAside(){
  
// }

function closeProductDetail(){
    productDetailContainer.classList.add("inactive")
}

const productList = []
productList.push({
    id:1,
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    detail:"With its practical position, this bike also fulfills a decorative function, add your hall or workspace."
})

productList.push({
    id:2,
    name: "Screen",
    price: 220,
    image: "https://m.media-amazon.com/images/I/71nlwoCfzkL._AC_SX466_.jpg",
    detail:"With its practical position, this bike also fulfills a decorative function, add your hall or workspace."
})

productList.push({
    id:3,
    name: "Laptop",
    price: 420,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXmFprTdqvnUj82ll4yuBU2JFBeWLqCI07A&usqp=CAU",
    detail:"With its practical position, this bike also fulfills a decorative function, add your hall or workspace."
})

productList.push({
    id:4,
    name: "Toy Trucks",
    price: 70,
    image:"https://cf.shopee.com.co/file/6ac43d4287536cb09b980e8b40d1a717",
    detail:"With its practical position, this bike also fulfills a decorative function, add your hall or workspace." 
})

productList.push({
    id:5,
    name: "Plushies",
    price: 100,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTO1ywopxJLkW0bLgD03VsytWyqhcDn8OVA&usqp=CAU",
    detail:"With its practical position, this bike also fulfills a decorative function, add your hall or workspace."
})

function renderProducts(arr){
    for (product of arr){
        const productCard= document.createElement("div")
        productCard.classList.add("product-card")

        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
        productImg.addEventListener("pointerdown", ()=>{
            shoppingCartContainer.classList.add("inactive")

            productDetailContainer.classList.remove("inactive")
            console.log(productImg)
        })

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

            addingProduct(codeId, productList)
            addingCounter()
        })
    }
}


function addingProduct(id,arr){
    productAdded= arr.filter(product => product.id == id)
    
    const figureInShoppingCart= document.createElement("figure")

    const imgInShoppingCart= document.createElement("img")
    imgInShoppingCart.setAttribute("src", productAdded[0].image)

    const productName= document.createElement("p")
    productName.classList.add("name-tag")
    productName.innerText= productAdded[0].name

    const productPrice= document.createElement("p")
    productPrice.classList.add("price-tag")
    productPrice.innerText= `${productAdded[0].price}`

    const removeProductInCart= document.createElement("img")
    removeProductInCart.setAttribute("src", "./icons/close-small.png")
    removeProductInCart.setAttribute("alt", "close")
    removeProductInCart.classList.add("cancel-button")
    removeProductInCart.addEventListener("pointerdown",()=>{
            MyOrderList.removeChild(figureInShoppingCart)
            MyOrderList.removeChild(productName)
            MyOrderList.removeChild(productPrice)
            MyOrderList.removeChild(removeProductInCart)
            removeFromTotalOrder(-productPrice.innerText)
        })

    figureInShoppingCart.appendChild(imgInShoppingCart)
    MyOrderList.append(figureInShoppingCart, productName, productPrice, removeProductInCart)

    addTotalOrder(productAdded[0].price)
}
 
function addingCounter(){
        shoppingCounter.innerText= ++counter
}

function addTotalOrder(productPrice){
    order.push( productPrice)

    totalPurchase()
}

function removeFromTotalOrder(productPrice){
    order.push(productPrice)
    shoppingCounter.innerText= --counter
    totalPurchase()
}

function totalPurchase(){
    let initialValue=0;

    let totalProducts= order.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
    totalOrder.innerText= totalProducts
}

renderProducts(productList)