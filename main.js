//selectores para el menu de usuario
const menuEmail = document.querySelector('.navbar-email')
const menusito = document.querySelector('.desktop-menu')

//selectores para el menu en mobile
const menuHamburger = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

//selectores para el carrito
const  menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const  menuCarrito = document.querySelector(".carrito")

//Selector details
const productDetails = document.querySelector('.product-detail')
const closeDetails =document.querySelector('.product-detail-close')
// event listeners 
menuEmail.addEventListener("click", toggleShowMenuDesktop)
menuHamburger.addEventListener("click",toggleShowMenuMobile)
menuCarritoIcon.addEventListener("click",toggleShowCarritoMenu)
closeDetails.addEventListener("click",closeProductDetails)

// funciones toggle

function toggleShowMenuDesktop(){
    menuCarrito.classList.add("inactive")
    menusito.classList.toggle("inactive") 
    productDetails.classList.add("inactive")
 }

 function toggleShowMenuMobile(){
    menuCarrito.classList.add("inactive")
    mobileMenu.classList.toggle("inactive")
    productDetails.classList.add("inactive")
 }

 function toggleShowCarritoMenu(){
    menusito.classList.add("inactive")
    mobileMenu.classList.add("inactive")
    menuCarrito.classList.toggle("inactive")
    productDetails.classList.add("inactive")
 }

 function openProductDetails(){

    menusito.classList.add("inactive")
    mobileMenu.classList.add("inactive")
    menuCarrito.classList.add("inactive")
    productDetails.classList.remove("inactive")

 }
 function closeProductDetails(){

    productDetails.classList.add("inactive")

 }

 function renderProducts(arr){

    for(product of arr){
        const cardContainer = document.querySelector(".cards-container")
        const productCard = document.createElement('div')
        productCard.classList.add("product-card")
    
        const img = document.createElement('img')
        img.setAttribute('src',product.image)
        productCard.appendChild(img)
        img.addEventListener("click",openProductDetails)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add("product-info")
    
        const info = document.createElement("div")
        const pPrice = document.createElement("p")
        pPrice.innerText = product.price
        const pName = document.createElement("p")
        pName.innerText = product.name
    
        info.append(pPrice)
        info.append(pName)
    
        productInfo.append(info)
        
        const figure = document.createElement("figure")
        const imgCarrito  = document.createElement("img")
        imgCarrito.setAttribute("src","./icons/bt_add_to_cart.svg")
    
        figure.append(imgCarrito)
        productInfo.append(figure)
        
        productCard.append(productInfo) 
    
        cardContainer.append(productCard)
    
    }

 }

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

})
productList.push({
    name: 'Apple iPhone 14 Pro',
    price: 1199,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

})
productList.push({
    name: 'Football',
    price: 100,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

})


renderProducts(productList)

