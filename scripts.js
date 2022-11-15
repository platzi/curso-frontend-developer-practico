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
        id:1,
        name:'Bike',
        price: 12700,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id:2,
        name:'Bicycle helmet',
        price: 1200,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id:3,
        name:'Bicycle helmet',
        price: 1600,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id:4,
        name:'Bicycle helmet',
        price: 1500,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id:5,
        name:'Seat',
        price: 300,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id:6,
        name:'Tennis Montain Bike',
        price: 2200,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id:7,
        name:'Sunglasses',
        price: 800,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id:8,
        name:'Sunglasses',
        price: 600,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id:9,
        name:'Bicycle seat bag',
        price: 876,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
)
renderProducts(productList);
// Crear elementos del componente productos. Por cada unos de los elementos del array productos
function renderProducts (productList) {
    for (const product of productList) {
        const productBox = document.querySelector('.cards-container');
            const productCard = document.createElement('div')
                productCard.classList.add('product-card');
                productCard.setAttribute('data_id', (product.id + '00'));
                productCard.addEventListener('click', () => {
                    openProductDetail(product.id)
                })
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
function openProductDetail(productId){
    asideDetailProduct.classList.remove('inactive')
    const aside_imageProduct = document.querySelector('#detailProduct #aside_img_product')
    const aside_productInfo_price = document.querySelector('#detailProduct .product-info p:nth-child(1)')
    const aside_productInfo_name = document.querySelector('#detailProduct .product-info p:nth-child(2)')

    productList.forEach((element, index) => {
        if(productId == element.id) {
            aside_imageProduct.setAttribute('src', element.image)
            aside_productInfo_name.innerHTML = element.name
            aside_productInfo_price.innerHTML = element.price
        }
    })
}