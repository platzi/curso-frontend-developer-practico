//Selectores
const menuEmail = document. querySelector ('.navbar-email');
const burgerIconMenu = document.querySelector('.menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')
const productDetailContainer = document.querySelector('.product-detail-secondLevel')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const productList = []
const cardsContainer = document.querySelector('.cards-container')
//Llamadas
menuEmail.addEventListener('click', toggleDesktopMenu);
burgerIconMenu.addEventListener('click', togglemobilMenu)
menuShoppingCart.addEventListener('click', toggleShoppingCart)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)


function toggleDesktopMenu() {

    aside.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
    productDetailContainer.classList.add('inactive')
}

function togglemobilMenu() {

    aside.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
    productDetailContainer.classList.add('inactive')
}

function toggleShoppingCart() {
    
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    aside.classList.toggle('inactive')
    productDetailContainer.classList.add('inactive')
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive')
    desktopMenu.classList.add('inactive')
    aside.classList.add('inactive')
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}

productList.push({
    name: 'Bike',
    price: 120.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Mountain bike senakers',
    price: 80.00,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg',
})
productList.push({
    name: 'Sunglasses',
    price: 70.00,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602',
})

function renderProducts(arr) {
    for (product of arr)
{
    let productCard = document.createElement('div')
    productCard.classList.add('product-card')

    let productImg = document.createElement('img')
    productImg.setAttribute('src', product.image)
    productImg.addEventListener('click', openProductDetailAside)

    let productInfo = document.createElement('div')
    productInfo.classList.add('product-info')

    let productInfoDiv = document.createElement('div')

    let producPrice = document.createElement('p')
    producPrice.innerText = '$' + product.price
    let producName = document.createElement('p')
    producName.innerText = product.name
    productInfoDiv.append(producPrice, producName)
    
    let productInfoFigure = document.createElement('figure')
    let productImgCart = document.createElement('img')
    productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg")

    productInfoFigure.appendChild(productImgCart)

    productInfo.append(productInfoDiv, productInfoFigure)

    productCard.append(productImg, productInfo)

    cardsContainer.appendChild(productCard)
}    
}

renderProducts(productList)