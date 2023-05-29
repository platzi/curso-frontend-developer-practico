const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const shoppingCartContainer = document.querySelector("#shopingCartContainer")
const productDetailContainer = document.querySelector("#productDetail")
const cardContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);




function toggleDesktopMenu(){

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')


    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive")
    }
    desktopMenu.classList.toggle('inactive')



}

function toggleMobileMenu(){

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive")
    }
    closeProductDetailAside()
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside(){

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if (!isMobileMenuClosed) {
       mobileMenu.classList.add("inactive") 
    }

    shoppingCartContainer.classList.toggle('inactive')
    desktopMenu.classList.add('inactive')
    
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')

    if (!isProductDetailClosed) {
       productDetailContainer.classList.add("inactive") 
    }

    // shoppingCartContainer.classList.toggle('inactive')
    // desktopMenu.classList.add('inactive')


}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')

}


const productList = [];

productList.push({
    nombre:'Bike',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})

productList.push({
    nombre:'Bike',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
})
productList.push({
    nombre:'Bike',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
})

function renderProduct (arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add("product-card")
        // product = name,price,imge product.imgae
        const img = document.createElement('img')
        img.setAttribute('src', product.imagen)
        img.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement('div');
    
    
        const productPrice = document.createElement('p');
        productPrice.innerText = "$" + product.precio;
        const productName = document.createElement('p');
        productName.innerText = product.nombre;
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement("img")
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.append(img,productInfo)
       
        cardContainer.appendChild(productCard)
    
    }
}

renderProduct(productList);

