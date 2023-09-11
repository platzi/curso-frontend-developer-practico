const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCartContainer = document.querySelector(".desktop-menu__shopping-cart")
const navbarEmail = document.querySelector(".navbar-email")

const burguerMenu = document.querySelector(".burguerMenu")
const navbarShoppingCart = document.querySelector(".shopping-cart")
const desployMarketBar = document.querySelector(".desktop-menu__market")

burguerMenu.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("inactive")
    navbarEmail.classList.add("inactive")
    navbarShoppingCart.classList.add("inactive")
    closeWindowItem()
})

shoppingCartContainer.addEventListener("click", ()=>{
    navbarEmail.classList.add("inactive")
    mobileMenu.classList.add("inactive")
    navbarShoppingCart.classList.toggle("inactive")
    closeWindowItem()
})
desployMarketBar.addEventListener("click",()=>{
    navbarShoppingCart.classList.add("inactive")
    mobileMenu.classList.add("inactive")
    navbarEmail.classList.toggle("inactive")
    closeWindowItem()
})
let a = ()=>{
    console.log("soy a")
}

const closeWindow = document.querySelector('.detail--item-info__close')
closeWindow.addEventListener("click", closeWindowItem)

function closeWindowItem(){
    const showSide = document.querySelector('.main-container')
    const detail = document.querySelector('.detail--item')
    showSide.style.gridTemplateColumns = "1fr"
    detail.classList.add('inactive')
}

function sumaPrice() {
    let total = 0
    const prices = document.querySelectorAll('.p-item__price')
    prices.forEach((element)=>{
        //element.innerHTML.split('').shift().join('')
        let a = element.innerHTML.split('')
        a.shift('')
        total+=Number(a.join(''))
    })
    const send = document.querySelector('.total-product-cost')
    send.innerText = '$'+total
    const buger = document.querySelector('.counter-product')
    buger.innerText = prices.length
}
let def = false
document.querySelector('.boton').addEventListener("click", ()=>{
    if(def==true){
        def = false
        document.querySelector('.shopping-cart').classList.add('inactive')
        const c = document.querySelector('.main-container')
        const back = document.createElement('div')
        back.style.position = "absolute"
        back.style.width = "100%"
        back.style.height = "100vh"
        back.style.display = "grid"
        back.style.placeItems = "center"
        back.style.backgroundColor = "hwb(209deg 5% 84% / 30%)";

        const a = document.createElement("div")
        a.style.position = "absolute"
        a.style.width = "350px"
        a.style.height = "150px"
        a.style.top = "40%"
        a.style.left = "40%"
        a.style.backgroundColor = "#538bd4"
        a.style.display = "grid"
        a.style.placeItems = "center"
        a.style.borderRadius = "25px"
        const b = document.createElement("p")
        b.style.fontSize = "24px"
        b.style.color = "white"
        b.style.fontWeight = "700"
        b.innerText = "Gracias por su compra"
        a.appendChild(b)
        back.appendChild(a)
        c.appendChild(back)  
    }
})