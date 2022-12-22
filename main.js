let email = document.querySelector('.navbar-email')
let desktopMenu = document.querySelector('.desktop-menu')
let burguerMenu = document.querySelector('.burguerMenu')
let mobileMenu = document.querySelector('.mobile-menu')
let aside = document.querySelector('.product-detail')
let carrito = document.querySelector('.navbar-shopping-cart')


function quitarPonerClaseParaDesktop() {
    aside.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
}

function quitarPonerClaseParaMobile(){
    aside.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}

function quitarPonerClaseCarrito() {
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    aside.classList.toggle('inactive')
}

carrito.addEventListener('click', quitarPonerClaseCarrito)
burguerMenu.addEventListener('click', quitarPonerClaseParaMobile)
email.addEventListener('click', quitarPonerClaseParaDesktop)


let productList = [];
productList.push({
    name: 'AirPods',
    price: 120,
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

productList.push({
    name: 'Monitor Apple',
    price: 2000,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

productList.push({
    name: 'MacBook',
    price: 1100,
    image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

productList.push({
    name: 'Iphone',
    price: 700,
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

function renderProducts(arr) {
    for (const producto of arr) {

        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const image = document.createElement('img')
        image.setAttribute('src', producto.image)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = producto.price
        const productName = document.createElement('p')
        productName.innerText = producto.name
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productCard.append(image, productInfo)
        productInfo.append(productInfoDiv, productInfoFigure)
        productInfoDiv.append(productPrice, productName)
        productInfoFigure.appendChild(productImgCart)
    
        console.log(productCard); 
    
        let contenedorDeLasCartas = document.querySelector('.cards-container')
        contenedorDeLasCartas.appendChild(productCard)
    }
}

renderProducts(productList)





