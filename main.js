let gmail = document.querySelector('.navbar-email');
let menuHamIcon = document.querySelector('.menu')
let mobileMenu = document.querySelector('.mobile-menu')
let iconCarrito = document.querySelector('.navbar-shopping-cart ')
let shoppingcartContainer = document.querySelector('#shoppingcartContainer')
let desktopM = document.querySelector('.desktop-menu');
let productDetailCloseIcon = document.querySelector('.product-detail-close')

productDetailCloseIcon.addEventListener('click', () => {
    shoppingcartContainer.classList.add('active')
    productDetail.classList.add('active')
})

let productDetail = document.querySelector('#productDetail');

let cardContainer = document.querySelector('.cards-container')
gmail.addEventListener('click', () => {
    desktopM.classList.toggle('active');

});
menuHamIcon.addEventListener('click', () => {
    const isAsideClosed = shoppingcartContainer.classList.contains('active');
    if(!isAsideClosed) {
        shoppingcartContainer.classList.add('active')
    }
    productDetail.classList.add('active')
    mobileMenu.classList.toggle('active')
})
iconCarrito.addEventListener('click', () => {
    const isMobileMenuClosed = mobileMenu.classList.contains('active')
    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('active')
    }

    const isProductDetailClose = productDetail.classList.contains('active')
    if(!isProductDetailClose) {
        productDetail.classList.add('active')
    }
    shoppingcartContainer.classList.toggle('active')
    
})


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Car',
    price: 3500,
    image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Iphone',
    price: 350,
    image: 'https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Moto',
    price: 650,
    image: 'https://images.pexels.com/photos/1715184/pexels-photo-1715184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Laptop',
    price: 550,
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

function renderList (arr) {
    for(product of productList) {
    let productCard = document.createElement('div');
    productCard.classList.add('product-card');

    let productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    productImg.addEventListener('click', () => {
        productDetail.classList.remove('active')
    })
    
    let productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    let productInfoDiv = document.createElement('div');
    let productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price


    let productName = document.createElement('p');
    productName.innerText = product.name

    productInfoDiv.append(productPrice, productName)

    let productFigure = document.createElement('figure');
    let productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productFigure)

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo)

    cardContainer.appendChild(productCard)
    }
}

renderList(productList)
