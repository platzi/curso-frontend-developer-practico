
const menuEmail = Selector('.navbar-email')
const desktopMenu = Selector('.desktop-menu')
const menuHamIcon = Selector('.menu')
const menuMobile = Selector('.mobile-menu')
const menuCarIcon = Selector(".navbar-shopping-cart")
const productDetailCloseIcon = Selector('.product-detail-close')
const shoppingCartContainer = Selector("#shoppingCartContainer")
const productDetailContainer = Selector("#productDetail")
const priceDetailContainer = Selector('#price')
const imagenDetailContainer = Selector('#infoImages')

// agregar los elementos creados dinamincamente dentro de su contenedor
const cardContainer = Selector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarIcon.addEventListener('click', toggleCarAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function Selector(clase) {
    let s = document.querySelector(clase);
    return s
}

function toggleDesktopMenu() {

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    closeProductDetailAside()
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside()
    menuMobile.classList.toggle('inactive');
}

function toggleCarAside() {

    const isMobileMenuClosed = menuMobile.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')

    // si Mobile menu no esta cerrado
    if (!isMobileMenuClosed) {
        menuMobile.classList.add('inactive');
    }
    // si desktopmenu no esta cerrado
    else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    else if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')

}

function openProducttDetailAside(event){
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
    //capturar imagen de cada producto
    imagenDetailContainer.setAttribute("src", event.target.src);
    // capturar detalles de nombre y precio del producto
    priceDetailContainer.innerText = event.target.nextElementSibling.innerText;
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

//products list
const productList = [];

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'pantalla',
    price: 220,
    image: 'https://4.bp.blogspot.com/_utTw9qxuWcs/TOr8FztjaGI/AAAAAAAAAJ8/g_krbJZnqQU/s1600/pantalla-sharp-52.jpg'

})

productList.push({
    name: 'compu',
    price: 620,
    image: 'https://s2.glbimg.com/ikapyQ39JUw9N9FQfqXGOFoF5wM=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/t/a/13W4wXSP2d8DEokelZww/2014-04-20-hp-envy-recline.jpg'
})

// agregar productos de manera dinamica
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const img = document.createElement('img')
        img.setAttribute('src', product.image)
        img.addEventListener('click', openProducttDetailAside)

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price

        const productName = document.createElement('p')
        productName.innerText = product.name

        // agregar elementos uno dentro de otro
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)

        const productInfoFigure = document.createElement('figure')

        const productImgCard = document.createElement('img')
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')

        productInfoFigure.appendChild(productImgCard)

        productInfo.append(productInfoDiv, productInfoFigure)

        productCard.append(img, productInfo)

        cardContainer.appendChild(productCard)
    }
}

renderProducts(productList)