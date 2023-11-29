const menuEmail = document.querySelector('.navbar-email')
const menuHam = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')
const cardContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDesktopMenu)
menuHam.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() {

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const asideClosed = aside.classList.contains('inactive')

    if (!asideClosed) {
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}
function toggleCarritoAside () {
    const mobileMenuClosed = mobileMenu.classList.contains('inactive')
    const desktopMenuClosed = desktopMenu.classList.contains('inactive')
    
    if (!mobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    if (!desktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')

}

const productList = []
productList.push({
    name: 'bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: 'pantalla',
    price: 450,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: 'compu',
    price: 650,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

for (product of productList) {
   const productCard = document.createElement('div')
   productCard.classList.add('product-card')

   const img = document.createElement('img')
   img.setAttribute('src', product.image)

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

   productCard.appendChild(img)
   productCard.appendChild(productInfo)

   cardContainer.appendChild(productCard)

}