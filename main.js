const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamburguesa = document.querySelector('.menu')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

menuHamburguesa.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    closeProductDetailAside()
    mobileMenu.classList.toggle('inactive')
}

menuCarritoIcon.addEventListener('click', toggleCarritoAside)
function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive')
    }
    shoppingCartContainer.classList.toggle('inactive')

}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside () {
    productDetailContainer.classList.add('inactive')
}

productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

const productList = []
productList.push({
    name: 'KLR 650',
    price: 8000,
    image: 'https://www.cycleworld.com/resizer/4DOamNSg42pEiCNKsbc0QxCx5yE=/arc-photo-octane/arc3-prod/public/NTK5NIYA4BFV3OV6XXF5VGKTU4.jpg'
})
productList.push({
    name: 'R1250GS',
    price: 23000,
    image: 'https://www.advpulse.com/wp-content/uploads/2019/03/BMW-1250-GS-HP-adventure-motorcycle-5.jpg'
})
productList.push({
    name: 'Vstrom 1050',
    price: 17000,
    image: 'https://www.fpmoto.com/pub/media//suzuki_dl1050_2023_9_0.jpg'
})
productList.push({
    name: 'KTM 1290 Super Adventure',
    price: 20000,
    image: 'https://revistamoto.com/wp_rm/wp-content/uploads/2021/02/KTM-1290-Super-Adventure-R-2021-24-1200x800-1.jpg'
})
productList.push({
    name: 'Africa Twin',
    price: 17000,
    image: 'https://www.webbikeworld.com/2021-honda-africa-twin/2021-honda-africa-twin-hero/'
})
productList.push({
    name: 'Super Teneré',
    price: 16000,
    image: 'https://cdp.azureedge.net/products-private/prod/492ba90c-7d7d-440e-95fc-009b2803dab7/b3c84a08-d3db-4171-b1b7-caeb92b22aea/00000000-0000-0000-0000-000000000000/acd79fa9-1a56-497b-8d92-af4800718cb9/5273142e-0256-4cae-a3c1-afaa016866d8/6000000003.jpg'
})
productList.push({
    name: 'F850 GS',
    price: 14000,
    image: 'https://i.wpimg.pl/1200x/filerepo.grupawp.pl/api/v1/display/embed/b177b48e-cabd-4833-8ee3-04d3142f10e5'
})
productList.push({
    name: 'T7',
    price: 11000,
    image: 'https://mcn-images.bauersecure.com/wp-images/186473/yamaha-tenere-world-raid-01.jpg'
})

const mostrarDetallesCorrectos = element =>{
    const imgProduct = document.querySelector('#imgMain')
    imgProduct.src = element.image

    const priceProduct = document.querySelector('#priceMain')
    priceProduct.textContent = '$' + element.price

    const nameProduct = document.querySelector('#nameMain')
    nameProduct.textContent = element.name
}

function renderProducts(arr) {
    for (const product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductDetailAside)
        productImg.addEventListener('click', () => {mostrarDetallesCorrectos(product)})
    
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
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    
    }
}

renderProducts(productList)