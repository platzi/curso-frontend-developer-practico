const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const ProductDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoshoppingCartContainer)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
    const isshoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive')

    if (!isshoppingCartContainerClose){
        shoppingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isshoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive')

    if (!isshoppingCartContainerClose){
        shoppingCartContainer.classList.add('inactive')
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive')
}
function toggleCarritoshoppingCartContainer() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }else{
        desktopMenu.classList.add('inactive')
    }

    const isProductDetailClosed = ProductDetailContainer.classList.contains('inactive')
    
    if(!isProductDetailClosed){
        ProductDetailContainer.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive')
    ProductDetailContainer.classList.remove('inactive')
}
function closeProductDetailAside(){
    ProductDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
    name: 'Computadora',
    price: 120,
    image: 'https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg'

})
productList.push({
    name: 'Reloj',
    price: 120,
    image: 'https://cdn.shopify.com/s/files/1/1868/1491/products/rolex-datejust-41mm-2-tones-full-honeycomb-baguette-montre-or-tons-bijoux-medusa-homme-quebec-canada-571_5000x.jpg?v=1634873190'

})
productList.push({
    name: 'Zapatilla',
    price: 120,
    image: 'https://static3.abc.es/media/summum/2019/02/01/gucci-kV0F--510x287@abc.jpg'
})
productList.push({
    name: 'Pulsera',
    price: 120,
    image: 'https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw2c5f2410/original/90_DG06996-DJMT_KOT_20_MedusaChainBracelet-Bracelets-versace-online-store_10_1.jpg?sw=748&sh=1050&sm=fit'

})
productList.push({
    name: 'Oso de Regalo',
    price: 120,
    image: 'https://img.freepik.com/fotos-premium/oso-peluche-juguete-da-regalos-sobre-fondo-blanco_295789-715.jpg?w=740'

})
productList.push({
    name: 'Carro',
    price: 120,
    image: 'https://2.blogs.elcomercio.pe/entrelared/wp-content/uploads/sites/304/2020/02/aston-martin.jpg'

})
 function renderProducts (arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetailAside);
        // product = {name, price , image}-> product.image
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
        
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
 }

 renderProducts(productList)


