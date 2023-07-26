const desktopMenu = document.querySelector ('.desktop-menu')
const menuEmail = document.querySelector ('.navbar-email')

const hambIconMenu = document.querySelector ('.menu')
const mobileMenu = document.querySelector ('.mobile-menu')

const menuCarrito = document.querySelector ('#shoppingCartContainer')
const carritobtn = document.querySelector ('.navbar-shopping-cart')

const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleMenuEmail)
hambIconMenu.addEventListener('click', toggleMobileMenu)
carritobtn.addEventListener('click', toggleCarritomenu)

function toggleMenuEmail() {

    const isCarritoMenuClosed = menuCarrito.classList.contains('inactive')

    if (!isCarritoMenuClosed) {
        menuCarrito.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive') 
}
function toggleMobileMenu() {

    const isCarritoMenuClosed = menuCarrito.classList.contains('inactive')

    if (!isCarritoMenuClosed) {
        menuCarrito.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive') 
}
function toggleCarritomenu() {
    const isMenuMailClosed = desktopMenu.classList.contains('inactive')

    if (!isMenuMailClosed) {
        desktopMenu.classList.add('inactive')
    }

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    menuCarrito.classList.toggle('inactive') 

}

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'TV',
    price: 340,
    image: 'https://www.lg.com/ar/images/televisores/md06198536/gallery/D-02.jpg'
})
productList.push({
    name: 'celular',
    price: 230,
    image: 'https://www.cetrogar.com.ar/media/catalog/product/t/e/te2880_a.png?width=500&height=500&canvas=500,500&quality=80&bg-color=255,255,255&fit=bounds'
})

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        // product = {name, price, image} -> product.image 
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('div')
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        
        const productInfoFigure = document.createElement('figure')
        const productBtAdd = document.createElement('img')
        productBtAdd.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productBtAdd)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
    
}

renderProducts(productList)


