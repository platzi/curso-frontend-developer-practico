const navbarRmenu = document.getElementsByClassName("desktop-menu")
const navbarR = document.querySelector('.navbar-email')

const burguerContainer = document.querySelector('.burguerMenu')
const burguerIcon = document.querySelector('.menu');
const displayedBurguer = document.querySelector('.mobile-menu')

const cartMenu = document.querySelector(".product-detail")
const cartIcon = document.querySelector(".navbar-shopping-cart")

const cardsContainer = document.querySelector('.cards-container')

const productsAside =  document.querySelector('.product-detail-expanded')
const productAsideIcon = document.querySelector('.product-detail-close')

navbarR.addEventListener('click',toggleDesktopMenu)
function toggleDesktopMenu(){
    if(!cartMenu.classList.contains('inactive')){
        cartMenu.classList.toggle('inactive')
    }
    if(!productsAside.classList.contains('inactive')){
        productsAside.classList.add('inactive')
    }
    navbarRmenu[0].classList.toggle('inactive')
    
}
cartIcon.addEventListener('click', ()=> {
    if(!navbarRmenu[0].classList.contains('inactive')){
        navbarRmenu[0].classList.toggle('inactive')
    }
    
    if(!displayedBurguer.classList.contains('inactive')){
        displayedBurguer.classList.toggle('inactive')
    }
    if(!productsAside.classList.contains('inactive')){
        closeAsideProduct()
    }
    cartMenu.classList.toggle('inactive')
})

burguerIcon.addEventListener('click',()=>{
    if(!cartMenu.classList.contains('inactive')){
        cartMenu.classList.toggle('inactive')
    }
    if(!productsAside.classList.contains('inactive')){
        productsAside.classList.toggle('inactive')
    }
    displayedBurguer.classList.toggle('inactive')
})

productAsideIcon.addEventListener('click',closeAsideProduct)

const productList = []
productList.push({
    name:'Bike',
    price:120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name:'Car',
    price:2000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name:'monocycle',
    price:80,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

createProducts(productList)

function createProducts(array)  {
    for (product of array){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
        
        const productImage = document.createElement('img')
        productImage.setAttribute('src',product.image)
        productImage.addEventListener('click',openAsideProduct)

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
        const productPrice = document.createElement('p') 
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText =  product.name
        const productInfoFigure = document.createElement('figure')
        const productIconImg = document.createElement('img')
        productIconImg.setAttribute('src','./icons/bt_add_to_cart.svg')
        
        cardsContainer.appendChild(productCard)
        productCard.append(productImage,productInfo)
        productInfo.appendChild(productInfoDiv)
        productInfoDiv.append(productPrice,productName)
        productInfoFigure.appendChild(productIconImg)
        productInfo.append(productInfoDiv,productInfoFigure)
    }
}

function openAsideProduct(){
    if(!cartMenu.classList.contains('inactive')){
        cartMenu.classList.add('inactive')
    }
    if(!navbarRmenu[0].classList.contains('inactive')){
        navbarRmenu[0].classList.add('inactive')
    }
    productsAside.classList.remove('inactive')
}
function closeAsideProduct(){
    productsAside.classList.add('inactive')
}