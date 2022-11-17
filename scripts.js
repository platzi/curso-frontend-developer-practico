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
    if(!carritoBox.classList.contains('inactive')){
        getCarItems()
    }
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
                            productInfoFigureImage.addEventListener('click', function(){
                                console.log('se agregará al carrito')
                            })
    
            productInfoFigure.appendChild(productInfoFigureImage)
            productInfoText.append(productInfoTextPrice, productInfoTextName)
            productInfo.append(productInfoText, productInfoFigure)
    
            productCard.append(img_product, productInfo)
    
            productBox.appendChild(productCard)
        }
    }
    xhttp.open("GET", 'https://api.escuelajs.co/api/v1/products?offset=0&limit=25');
    xhttp.send();

}
function openProductDetail(productId, array){
    asideDetailProduct.classList.add('visible')
    document.querySelector('body').classList.add('productDetail_visible')
    const aside_imageProduct = document.querySelector('#detailProduct #aside_img_product')
    const aside_productInfo_price = document.querySelector('#detailProduct .product-info p:nth-child(1)')
    const aside_productInfo_name = document.querySelector('#detailProduct .product-info p:nth-child(2)')
    const aside_productInfo_descr = document.querySelector('#detailProduct .product-info p:nth-child(3)')
    const aside_productInfo_btn = document.querySelector('.add-to-cart-button')

    array.forEach((element, index) => {
        if(productId == element.id) {
            aside_imageProduct.setAttribute('src', element.images[0])
            aside_productInfo_name.innerHTML = element.title
            aside_productInfo_price.innerHTML = element.price
            aside_productInfo_descr.innerHTML = element.description
            aside_productInfo_btn.addEventListener('click', function(){
                addToCar(element.id, element.images[0], element.title, element.price)
            })
        }
    })
}
let carProducts = []
function addToCar(idProduct, imageProduct, nameProduct, priceProduct) {
    carProducts.push({id:idProduct, image: imageProduct, title:nameProduct, price: priceProduct})

    if(localStorage.getItem('productos_carrito')){
        localStorage.removeItem('productos_carrito')
    }
    localStorage.setItem('productos_carrito', JSON.stringify(carProducts))
}
function getCarItems(){
    const productCarBox = document.querySelector('#shoppingCartContainer .my-order-content #itemsContainer')
    productCarBox.innerHTML = ''
    let productInCart = JSON.parse(localStorage.getItem('productos_carrito'))

    for (item of productInCart){
                const shoppingCartItem = document.createElement('div')
                    shoppingCartItem.classList.add('shopping-cart')
                    const shoppingCartItem_figure = document.createElement('figure')
                        const shoppingCartItem_figure_img = document.createElement('img')
                            shoppingCartItem_figure_img.src = item.image
                    const shoppingCartItem_name = document.createElement('p')
                        shoppingCartItem_name.innerHTML = item.title
                    const shoppingCartItem_price = document.createElement('p')
                        shoppingCartItem_price.innerHTML = '$' + (item.price).toLocaleString('en-US')
                    const shoppingCartItem_deleteBtn = document.createElement('img')
                        shoppingCartItem_deleteBtn.src = './icons/icon_close.png'
                        shoppingCartItem_deleteBtn.addEventListener('click', function(){
                            deleteItemFromCart(item.id, productInCart)
                        })

            shoppingCartItem_figure.appendChild(shoppingCartItem_figure_img)
            shoppingCartItem.append(shoppingCartItem_figure, shoppingCartItem_name,shoppingCartItem_price, shoppingCartItem_deleteBtn)
            productCarBox.appendChild(shoppingCartItem)
    }
}
function deleteItemFromCart(idProduct, array){
    let productsInCart = Array.from(array)
    productsInCart.forEach((element, index) => {
        if(element.id == idProduct) {
            productsInCart.splice(index, 1)
            return false
        }
    })

    if(localStorage.getItem('productos_carrito')){
        localStorage.removeItem('productos_carrito')
    }
    localStorage.setItem('productos_carrito', JSON.stringify(productsInCart))

    getCarItems()
}