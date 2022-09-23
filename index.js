const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.burguerMenu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail')
const productDetailCloseIcon = document.querySelector('.product-detail128-close')


//product-detail128-close

navEmail.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleMobileMenu)
menuCartIcon.addEventListener('click', toggleCartAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
       }


    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
       }

       closeProductDetailAside()

    mobileMenu.classList.toggle('inactive')
}

function toggleCartAside() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive')

   // aside.classList.toggle('inactive')
   if (!isMobileMenuClose) {
    mobileMenu.classList.add('inactive')
   }

   const isProductDetailClosed = productDetailContainer.classList.contains('inactive')

   // aside.classList.toggle('inactive')
   if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive')
   }

   shoppingCartContainer.classList.toggle('inactive')

}



function openProductDetailAside() {
  
    shoppingCartContainer.classList.add('inactive')
    
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Screen',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'CellPhone',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Laptop',
    price: 820,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {
    for (product of arr) {
        const productCart = document.createElement('div');
        productCart.classList.add('product-card')
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetailAside)

    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCart.appendChild(img)
        productCart.appendChild(productInfo)
    
        cardsContainer.appendChild(productCart)
    
    }
}

renderProducts(productList)