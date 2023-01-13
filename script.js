const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const navShoppingCart = document.querySelector('.navbar-shopping-cart')
const asideOrder = document.querySelector('.product-detail')
const productDetail = document.querySelector('.aside-product-detail')
const productDetailClose = document.querySelector('.close-image')

const imagen = document.querySelector('.product-image')
const precio = document.querySelector('.product-price')
const nombre = document.querySelector('.product-name')
const descripcion = document.querySelector('.product-description')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
navShoppingCart.addEventListener('click', toggleAsideOrder)
productDetailClose.addEventListener('click', closeProductDetail)

function toggleDesktopMenu() {
    asideOrder.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
    productDetail.classList.add('inactive')
}
function toggleMobileMenu() {
    asideOrder.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
 }
 function toggleAsideOrder() {
    desktopMenu.classList.add('inactive')
    asideOrder.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    productDetail.classList.add('inactive')
 }
 function closeProductDetail() {
    productDetail.classList.add('inactive')
 }
 function openProductDetail(event) {
    productDetail.classList.remove('inactive')

    imagen.src = event.path[0].src
    precio.innerText = event.target.nextElementSibling.childNodes[0].childNodes[0].innerText
    nombre.innerText = event.target.nextElementSibling.childNodes[0].childNodes[1].innerText
    descripcion.innerText = event.target.nextElementSibling.childNodes[0].childNodes[2].innerText

    desktopMenu.classList.add('inactive')
    asideOrder.classList.add('inactive')
 }

 /*     Lista de Productos       */
const cardsContainer = document.querySelector('.cards-container')
 const productList = []
 
 productList.push({
    name: 'Bike',
    price: 120.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: "Antique Bike, used to be the greatest bike back in the 80', now it's a symbol of ecology.",
 })
 productList.push({
    name: 'Surtidor',
    price: 95.00,
    image: 'https://images.pexels.com/photos/15062513/pexels-photo-15062513.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Producto a restaurar, servia para pompear nafta en las estaciones de servicio',
 })
 productList.push({
    name: 'Reloj',
    price: 50.00,
    image: 'https://images.pexels.com/photos/14750487/pexels-photo-14750487.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Marca la hora, aun roto marca exactamente la hora 2 veces al día.',
 })
 productList.push({
    name: 'Retro refrigerator',
    price: 50.00,
    image: 'https://media.istockphoto.com/id/1165741495/es/foto/loft-kitchen.jpg?s=612x612&w=0&k=20&c=H-7bYVNrakT9aNh41YXS6aR4NYsCD_o_XyWmiBX-AMA=',
    description: 'With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace',
 })
 
function renderProducts(array) {
    for (product of array) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = `$ ${product.price}`
        const productName = document.createElement('p')
        productName.innerText = product.name
        const productDescription = document.createElement('p')
        productDescription.innerText = product.description
        productDescription.classList.add('inactive')
        
        productInfoDiv.append(productPrice,productName,productDescription)
        // productInfoDiv.appendChild(productPrice)
        // productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
        
        productInfo.append(productInfoDiv,productInfoFigure)
        // productInfo.appendChild(productInfoDiv)
        // productInfo.appendChild(productInfoFigure)
        
        productCard.append(productImg,productInfo)
        productCard.addEventListener('click', openProductDetail, productCard)
        // productCard.appendChild(productImg)
        // productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
     }
}

renderProducts(productList)


