const naveMenu = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const carsDetail = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

naveMenu.addEventListener('click', toggleDesktopMenu)
menuIcon.addEventListener('click', toggleMobileMenu)
carsDetail.addEventListener('click',toggleCarsDetails)

function toggleDesktopMenu() {
    const asideClosed = aside.classList.contains('inactive')

    if (!asideClosed) {
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const asideClosed = aside.classList.contains('inactive')

    if (!asideClosed) {
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleCarsDetails() {
    const mobileMenuClosed = mobileMenu.classList.contains('inactive')
    const desktopMenuClosed = desktopMenu.classList.contains('inactive')

    if(!mobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    if(!desktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
}

 const productList = [
    {name : "Bike", price: "120", image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {name : "TV", price: "220", image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {name : "Computadora", price: "620", image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
 ]

      for(product of productList) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)

        const productIfo = document.createElement('div')
        productIfo.classList.add('product-info')

        const productDiv = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerHTML = '$' + product.price

        const productName = document.createElement('p')
        productName.innerHTML = product.name

        const productFigure = document.createElement('figure')

        const imageCart = document.createElement('img')
        imageCart.setAttribute('src', './icons/bt_add_to_cart.svg')

        productDiv.append(productPrice,productName)
        productIfo.append(productDiv,productFigure)
        productCard.append(productImg,productIfo)
        productFigure.appendChild(imageCart)
        cardsContainer.appendChild(productCard)
      }
