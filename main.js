const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const logoMenu = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDeatailContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close')
const cartsContainer = document.querySelector('.cards-container')
const productList = [];

navEmail.addEventListener('click', toggleDesktopMenu);
logoMenu.addEventListener('click', toggleMobilMenu);
menuCarrito.addEventListener('click', toggleCarritoAside);
productDetailClose.addEventListener('click', CloseDetail)

function toggleDesktopMenu () {
    const isAsaidClosed = shoppingCartContainer.classList.contains('inactive')
    if(!isAsaidClosed){
        shoppingCartContainer.classList.add('inactive');
    } 
    desktopMenu.classList.toggle('inactive');
}
function toggleMobilMenu(){
    const isAsaidClosed = shoppingCartContainer.classList.contains('inactive')
    if(!isAsaidClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    mobilMenu.classList.toggle('inactive');
    CloseDetail()
}
function toggleCarritoAside (){
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive')
    const isMobilMenuClosed = mobilMenu.classList.contains('inactive')
    const isProductDeatailClose = productDeatailContainer.classList.contains('inactive')
    if(!isMobilMenuClosed){
        mobilMenu.classList.add('inactive');
    } else if (!isDesktopMenuClose){
        desktopMenu.classList.add('inactive')
    } else if (!isProductDeatailClose){
        productDeatailContainer.classList.add('inactive')
    }
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductAside(){
    shoppingCartContainer.classList.add('inactive')
    productDeatailContainer.classList.remove('inactive')
}
function CloseDetail(){
    productDeatailContainer.classList.add('inactive')
}



productList.push({
    name: 'bike',
    price: 500,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Televisor',
    price: 1500,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Laptop',
    price: 5500,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})   
function renderProducts (arr){
    for (product of arr){
        const productCart = document.createElement('div');
        productCart.classList.add("product-card");
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
        productImg.addEventListener('click', openProductAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add("product-info");
    
        const infoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p');
        productName.innerText = product.name
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        infoDiv.appendChild(productPrice)
        infoDiv.appendChild(productName)
    
        productInfo.appendChild(infoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCart.appendChild(productImg)
        productCart.appendChild(productInfo)
    
        cartsContainer.appendChild(productCart)
    }
}
renderProducts(productList)


