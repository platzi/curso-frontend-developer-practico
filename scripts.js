const menuEmailBtn = document.querySelector('.navbar-email')
const menuEmailBox = document.querySelector('.desktop-menu')
const menuMobileBtn = document.querySelector('.menu')
const menuMobileBox = document.querySelector('.mobile-menu')
const carritoIconBtn = document.querySelector('.navbar-shopping-cart')
const carritoBox = document.querySelector('#shoppingCartContainer')
const asideDetailProduct = document.querySelector('#detailProduct')
const productDetailCloseBtn = document.querySelector('.product-detail-close')

menuEmailBtn.addEventListener('click', ()=>{
    const isCarritoClosed = carritoBox.classList.contains('inactive')
    if(!isCarritoClosed){
        carritoBox.classList.add('inactive');
    }
    menuEmailBox.classList.toggle('inactive')
})
menuMobileBtn.addEventListener('click', ()=>{
    const isCarritoClosed = carritoBox.classList.contains('inactive')
    if(!isCarritoClosed){
        carritoBox.classList.add('inactive')
    }
    menuMobileBox.classList.toggle('inactive')
})
carritoIconBtn.addEventListener('click', ()=>{
    console.log('le estoy dando click al carrito')
    const isMenuEmailClosed = menuEmailBox.classList.contains('inactive')
    const isMenuMobileClosed = menuMobileBox.classList.contains('inactive')
    
    if(!isMenuEmailClosed){
        menuEmailBox.classList.add('inactive')
    }
    if(!isMenuMobileClosed){
        menuMobileBox.classList.add('inactive')
    }
    carritoBox.classList.toggle('inactive')
})
productDetailCloseBtn.addEventListener('click', ()=>{
    asideDetailProduct.classList.add('inactive')
})
document.addEventListener('keyup', (e)=>{
    if(!asideDetailProduct.classList.contains('inactive')){
        if(e.keyCode == 27){
            asideDetailProduct.classList.add('inactive')
        }
    }
})

// Crear el array de los productos (Hardcodeados)
const productList = []
productList.push(
    {
        name:'Bike',
        price: 12700,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name:'Bicycle helmet',
        price: 1200,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name:'Bicycle helmet',
        price: 1600,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name:'Bicycle helmet',
        price: 1500,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name:'Seat',
        price: 300,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name:'Tennis Montain Bike',
        price: 2200,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name:'Sunglasses',
        price: 800,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name:'Sunglasses',
        price: 600,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name:'Bicycle seat bag',
        price: 876,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
)
renderProducts(productList)

function openProductDetail(nameProduct){
    asideDetailProduct.classList.remove('inactive')
    console.log(nameProduct)
}

// Crear elementos del componente productos. Por cada unos de los elementos del array productos
function renderProducts (productList) {
    for (const product of productList) {
        const productBox = document.querySelector('.cards-container');
            const productCard = document.createElement('div')
                productCard.classList.add('product-card')
                productCard.addEventListener('click', openProductDetail(product.name))
            const img_product = document.createElement('img')
                img_product.src = product.image
            const productInfo = document.createElement('div')
                productInfo.classList.add('product-info')
                const productInfoText = document.createElement('div')
                    const productInfoTextPrice = document.createElement('p')
                        productInfoTextPrice.innerHTML = '$' + product.price
                    const productInfoTextName = document.createElement('p')
                        productInfoTextName.innerHTML = '$' + product.name
                const productInfoFigure = document.createElement('figure')
                    const productInfoFigureImage = document.createElement('img')
                        productInfoFigureImage.src = "./icons/bt_add_to_cart.svg"

        productInfoFigure.appendChild(productInfoFigureImage)
        productInfoText.append(productInfoTextPrice, productInfoTextName)
        productInfo.append(productInfoText, productInfoFigure)

        productCard.append(img_product, productInfo)

        productBox.appendChild(productCard)
    }
}
