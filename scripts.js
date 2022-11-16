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
    asideDetailProduct.classList.remove('visible')
    document.querySelector('body').classList.remove('productDetail_visible')
})
document.addEventListener('keyup', (e)=>{
    if(asideDetailProduct.classList.contains('visible')){
        if(e.keyCode == 27){
            asideDetailProduct.classList.remove('visible')
            document.querySelector('body').classList.remove('productDetail_visible')
        }
    }
})

// Crear el array de los productos (Hardcodeados)
const productList = []
renderProducts(productList);
// Crear elementos del componente productos. Por cada unos de los elementos del array productos
function renderProducts (productList) {
    // traemos todos los datos de los productos
    const xhttp = new XMLHttpRequest();
    xhttp.responseType = 'json'
    xhttp.onload = function() {
        productList = xhttp.response

        for (const product of productList) {
            const productBox = document.querySelector('.cards-container');
                const productCard = document.createElement('div')
                    productCard.classList.add('product-card');
                    productCard.addEventListener('click', () => {
                        openProductDetail(product.id, productList)
                    })
                const img_product = document.createElement('img')
                    img_product.src = product.images[0]
                const productInfo = document.createElement('div')
                    productInfo.classList.add('product-info')
                    const productInfoText = document.createElement('div')
                        const productInfoTextPrice = document.createElement('p')
                            productInfoTextPrice.innerHTML = '$' + product.price
                        const productInfoTextName = document.createElement('p')
                            productInfoTextName.innerHTML = '$' + product.title
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
    xhttp.open("GET", 'https://api.escuelajs.co/api/v1/products');
    xhttp.send();

}
function openProductDetail(productId, array){
    asideDetailProduct.classList.add('visible')
    document.querySelector('body').classList.add('productDetail_visible')
    const aside_imageProduct = document.querySelector('#detailProduct #aside_img_product')
    const aside_productInfo_price = document.querySelector('#detailProduct .product-info p:nth-child(1)')
    const aside_productInfo_name = document.querySelector('#detailProduct .product-info p:nth-child(2)')
    const aside_productInfo_descr = document.querySelector('#detailProduct .product-info p:nth-child(3)')

    array.forEach((element, index) => {
        if(productId == element.id) {
            aside_imageProduct.setAttribute('src', element.images[0])
            aside_productInfo_name.innerHTML = element.title
            aside_productInfo_price.innerHTML = element.price
            aside_productInfo_descr.innerHTML = element.description
        }
    })
}