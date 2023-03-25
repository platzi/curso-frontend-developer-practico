//cards container
const cardsContainer = document.querySelector('.cards-container')

// menu Email
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener("click", toggleShowDesktopMenu)

function toggleShowDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
    // lo que haremos ahora es que cando el carrito de compras este abierto, al momentode abrir el carrito de comprar, este se cierre
    const isAsideClosed = shoppingCardContainer.classList.contains('inactive')
    if(!isAsideClosed) shoppingCardContainer.classList.add('inactive')
}

// mobile menu
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

menuHamIcon.addEventListener("click", toggleMobileMenu)

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
    // lo que haremos aqui ahora es poner una condicion para cuando el menu esta abierto al momento de abirir el carrito de
    //compras este se cierre
    const isAsideClosed = shoppingCardContainer.classList.contains('inactive')
    if(!isAsideClosed) shoppingCardContainer.classList.add('inactive')
}

// carrito de compras
const menuCarritoDeCompras = document.querySelector('.navbar-shopping-cart')
const shoppingCardContainer = document.querySelector('#shoppingCardContainer')

menuCarritoDeCompras.addEventListener("click", toggleCarritoAside)

function toggleCarritoAside() {
    shoppingCardContainer.classList.toggle('inactive')
    // lo que haremos ahora es una condicion que nos permita que si el carrto de compras esta abierto, al momento de abrir
    //el menu princima mobileMenu, el carrito de compras se cierre
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    if(!isMobileMenuClosed) mobileMenu.classList.add('inactive')

    // lo otro que haremos que poner otra condicion que evalue que si el desktopMenu esta abierto, al momento de abrir
    //el carrito de compras, el desktopMenu se cierre
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    if(!isDesktopMenuClosed) desktopMenu.classList.add('inactive')
}

// ahora crearemos el/los productos de la tienda aqui en js
// creamos la variable la cual va a contener una lista de productos
const productList = []
// creamos los productos mediante un objeto y hacemos push al array productList
productList.push({name: 'Bike', price: 120, image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'})
productList.push({name: 'Monitor', price: 1200, image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'})
productList.push({name: 'RTX 490', price: 20000, image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'})

function renderProducts(listOfProduct){

    for(product of listOfProduct) {
        // creamos el div en cual sera el que contenta el producto
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        // creamos la imagen la cual sera la imagen del producto
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)

        // creamos el contenedor el cual va a tener la informacion del producto como lo que es el nombre y el precio de este
        const divInfo = document.createElement('div')
        divInfo.classList.add('product-info')

        const DivNameAndPrice = document.createElement('div')
        const productName = document.createElement('p')
        const productPrice = document.createElement('p')

        productName.innerText = product.name
        productPrice.innerText = `$ ${product.price}`

        // metemos los parrafos de productName y productPrice dentro de divInfo
        divInfo.appendChild(productName)
        divInfo.appendChild(productPrice)

        // creamos la etiqueta figure la cual va a ser la figura de agreagar al carrito de compras
        const productInfoFigure = document.createElement('figure')
        const productImageCart = document.createElement('img')
        productImageCart.setAttribute('src', './icons/bt_add_to_cart.svg')
        // metemos el productImageCart dentro de la etiqueca productInfoFigure
        productInfoFigure.appendChild(productImageCart)

        // ahora ordenamos todas las etiquetas que creamos anteriormente
        divInfo.appendChild(DivNameAndPrice)
        divInfo.appendChild(productInfoFigure)

        productCard.appendChild(productImg)
        productCard.appendChild(divInfo)

        cardsContainer.appendChild(productCard)

    }

}
// llamamos a la funcion y le pasamos como parametro productList
renderProducts(productList)