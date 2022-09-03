const navBarEmail = document.querySelector(".navbar-email")
const desktopMenu= document.querySelector(".desktop-menu")
const menuHamIcon=document.querySelector(".menu")
const mobileMenu=document.querySelector(".mobile-menu")
const iconShoping=document.querySelector(".navbar-shopping-cart")
const shoppingCartContainer = document.querySelector("#shopingCartContainer")
const productDetailContainer = document.querySelector("#product-detail")
const cardsContainer = document.querySelector('.cards-container')
const productDetailClose=document.querySelector('.product-detail-close')

navBarEmail.addEventListener("click",togleMenu)
menuHamIcon.addEventListener("click",togleMobileMenu)
iconShoping.addEventListener("click",toggleCarritoAside)
productDetailClose.addEventListener('click',closeProductDetailAside)

function togleMenu() {

    const isAsideClose=shoppingCartContainer.classList.contains("inactive")

    if (!isAsideClose) {
        shoppingCartContainer.classList.add("inactive")
    }
    
    desktopMenu.classList.toggle("inactive")
}

function togleMobileMenu() {
    const isAsideClose=shoppingCartContainer.classList.contains("inactive")

    if (!isAsideClose) {
        shoppingCartContainer.classList.add("inactive")
    }
    closeProductDetailAside()
    mobileMenu.classList.toggle("inactive")
}

function toggleCarritoAside() {
    const isMobileMenuClose=mobileMenu.classList.contains("inactive")
    const isTogleMenuClose=desktopMenu.classList.contains("inactive")
    const isProductDetailClose=productDetailContainer.classList.contains("inactive")
    
    if (!isMobileMenuClose) {
        mobileMenu.classList.add("inactive")
    }

    if (!isTogleMenuClose) {
        desktopMenu.classList.add("inactive")
    }

    if (!isProductDetailClose) {
        productDetailContainer.classList.add("inactive")
    }

     shoppingCartContainer.classList.toggle("inactive")


}
function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
    
}
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}
const productList=[]

productList.push({
    name:'Bike',
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push({
    name:'Pantalla',
    price:1300,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name:'Computador',
    price:14000,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

function renderProducts(arr) {
    for(const product of arr){
        const productCard= document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src',product.image)
        productImg.addEventListener('click',openProductDetailAside)
    
        const productInfo= document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv= document.createElement('div')
    
        const productPrice= document.createElement('p')
        productPrice.innerText='$ '+ product.price
        const productName= document.createElement('p')
        productName.innerText= product.name
    
        productInfoDiv.append(productPrice,productName)
    
        const productInfoFigure= document.createElement('figure')
        const productImgCart= document.createElement('img')
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.append(productInfoDiv,productInfoFigure)
    
        productCard.append(productImg,productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)