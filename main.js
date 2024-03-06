console.log('Te amo Haru y Makoto')

const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const hamburguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const itemsCart = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')



shoppingCart.addEventListener('click', toggleShoppingCart)
navEmail.addEventListener('click', toggleDesktopMenu)
hamburguerMenu.addEventListener('click', toggleMobileMenu)

//Funcipon de carrito de compras
function toggleShoppingCart(){
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    itemsCart.classList.toggle('inactive')
    console.log('Te amo Takemi')
}

function toggleMobileMenu(){
    itemsCart.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
    console.log('Te amo kawakami')
}

//Está función oculta o no el elemtnto que se requiera
function toggleDesktopMenu(){
    itemsCart.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
    console.log('TE AMO KISUMI')
}
 

const productList = []
productList.push({
    name: 'Bike',
    price: 555,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Pantalla',
    price: 555,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Laptop',
    price: 555,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function templateProductos(arr){

    console.log('TE AMO HARU SE ESTÁ EJECUTANDO LA FUNCION DE TODOS LOS PRODUCTOS')

    for (product of arr) {

        const productCart = document.createElement('div')
        productCart.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
    
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        productInfoDiv.append(productPrice, productName)
        // productInfoDiv.appendChild(productPrice)
        // productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure')  
        const productImage = document.createElement('img')
        productImage.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImage)
        
        productInfo.append(productInfoDiv, productInfoFigure)
        // productInfo.appendChild(productInfoDiv)
        // productInfo.appendChild(productInfoFigure)
        
        productCart.append(productImg, productInfo)
        // productCart.appendChild(productImg)
        // productCart.appendChild(productInfo)
    
        cardsContainer.appendChild(productCart)
    
    }
}

templateProductos(productList)