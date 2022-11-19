const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartCont = document.querySelector('#shoppingCartCont')
const asidePDetail = document.querySelector('.detail-aside')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu(){

    // const dmClasses = desktopMenu.getAttribute('class')
    // const inactive = 'inactive'
    // const dMClass = 'desktop-menu'

    // if(!dmClasses.includes('inactive')) {
    //     desktopMenu.setAttribute('class', inactive )
    // }   else {
    //     desktopMenu.setAttribute('class', dMClass)
    // }
    
    const isShoppingCartContClosed = shoppingCartCont.classList.contains('inactive')
    
    if(!isShoppingCartContClosed){
        shoppingCartCont.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')

}
function toggleMobileMenu(){
    const isShoppingCartContClosed = shoppingCartCont.classList.contains('inactive')
    
    if(!isShoppingCartContClosed){
        shoppingCartCont.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')

}
function toggleCarritoAside() {
    console.log("click")
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    shoppingCartCont.classList.toggle('inactive')

}

function renderProducts(arr){

    for(product of arr){

        const productCard = document.createElement('div')
        const productInfo = document.createElement('div')
        const imgProduct = document.createElement('img')
        const imgCarrito = document.createElement('img')
        const productInfodiv = document.createElement('div')
        const pPrice = document.createElement('p')
        const pName = document.createElement('p')
        const productInfofigure = document.createElement('figure')
    
        productCard.classList.add('product-card')
        productInfo.classList.add('product-info')
        imgProduct.setAttribute('src', product.image )
        imgCarrito.setAttribute('src', './icons/bt_add_to_cart.svg' )
        
        pPrice.innerText = '$' + product.price
        pName.innerText = product.name
    
        productInfofigure.appendChild(imgCarrito)
        productInfodiv.append(pPrice,pName) 
    
        productInfo.append(productInfodiv,productInfofigure)
    
        productCard.append(imgProduct,productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

const productList = []

productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'PC Gamer',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'PC Gamer',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'PC Gamer',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'PC Gamer',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

renderProducts(productList)


