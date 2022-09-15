const menuEmails = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail')

menuEmails.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
productDetailContainer.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    closeProductDetailAside()
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    //contains da un valor boleano, en este caso se lee si el id/class de la variable tiene SI o NO la clase 'inactive', es decir, que si la tiene activada (clase 'inactive') es porque esa seccion esta abierta,y si, si esta abierto debemos cerrar la anterior seccion desde antes, sino, esta cerrada
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    //si no esta cerrado = si esta bierto
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive')
    }
    shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

//array de productos vacio, el cual recibira la info con el .push
const productList = [];
//info que ira al array vacio de la variable productList
productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'compu',
    price: 1120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'pantalla',
    price: 500,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

//funcion la cual maqueta y renderiza la info que viene del array 'product detail', y puede ser reciclada para rederizar otros arrays

function renderProducts(arr) {
    for (product of arr) {

        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
        
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name
        
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.append(productInfoDiv,productInfoFigure)
        // productInfo.appendChild(productInfoFigure)
    
        productCard.append(productImg, productInfo)
        // productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)
renderProducts(productList)
renderProducts(productList)