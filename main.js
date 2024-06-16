const menuMail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const aside = document.querySelector(".product-detail")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const inactiveClass = "inactive"
const documentDiv = document.querySelector(".cards-container")
const productDetailCloseBtn = document.querySelector(".product-detail-close")
const productDetailAside = document.querySelector("#specifitProductDetail")

function hide(element){
    element.classList.add(inactiveClass)
}
function showProductDetail(){
    hide(desktopMenu)
    hide(mobileMenu)
    hide(aside)
    productDetailAside.classList.remove(inactiveClass)
}

function showMenus(){
    desktopMenu.classList.toggle(inactiveClass)
    mobileMenu.classList.toggle(inactiveClass)
    hide(aside)
    hide(productDetailAside)
}

menuMail.addEventListener("click",e=>{
    showMenus()
})

menuHamIcon.addEventListener("click",e=>{
    showMenus()
})

menuCarritoIcon.addEventListener("click",e=>{
    aside.classList.toggle(inactiveClass)
    hide(desktopMenu)
    hide(mobileMenu)
    hide(productDetailAside)
})
productDetailCloseBtn.addEventListener("click",e=>{
    hide(productDetailAside)
})

// insertar productos al DOM
let promise = []
promise.push(
    {
        name:"bike",
        price:120,
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    }
)
promise.push(
    {
        name:"Computer",
        price:420,
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    }
)
promise.push(
    {
        name:"Television",
        price:200,
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    }
)

promise.forEach(product => {
    let p1 = document.createElement("p")
    p1.innerText = `$${product.price}`

    let p2 = document.createElement("p")
    p2.innerText = product.name

    let div2 = document.createElement("div")
    div2.appendChild(p1)
    div2.appendChild(p2)

    let figure = document.createElement("figure")
    let img = document.createElement("img")
    img.setAttribute("src","./icons/bt_add_to_cart.svg")

    figure.appendChild(img)

    let div1 = document.createElement("div")
    div1.classList.add("product-info")
    div1.appendChild(div2)
    div1.appendChild(figure)

    let productImage = document.createElement("img")
    productImage.setAttribute("src",product.image)
    productImage.addEventListener("click",showProductDetail)

    let divContainer = document.createElement("div")

    divContainer.classList.add("product-card")
    divContainer.appendChild(productImage)
    divContainer.appendChild(div1)
    documentDiv.appendChild(divContainer)
});