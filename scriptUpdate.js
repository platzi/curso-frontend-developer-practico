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