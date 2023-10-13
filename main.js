
const menuEmail = Selector('.navbar-email')
const desktopMenu = Selector('.desktop-menu')
const menuHamIcon = Selector('.menu')
const menuMobile = Selector('.mobile-menu')
const menuCarIcon = Selector(".navbar-shopping-cart")
const aside = Selector(".product-detail")

// agregar los elementos creados dinamincamente dentro de su contenedor
const cardContainer = Selector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarIcon.addEventListener('click', toggleCarAside)

function Selector(clase) {
    let s = document.querySelector(clase);
    return s
}

function toggleDesktopMenu() {

    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    menuMobile.classList.toggle('inactive');
}

function toggleCarAside() {

    const isMobileMenuClosed = menuMobile.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

    // si Mobile menu no esta cerrado
    if (!isMobileMenuClosed) {
        menuMobile.classList.add('inactive');
    }
    // si desktopmenu no esta cerrado
    else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive')

}

//products list
const productList = [];

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

productList.push({
    name: 'compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

// agregar productos de manera dinamica
function renderProducts(arr) {
    for (product of arr) {
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

        // agregar elementos uno dentro de otro
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)

        const productInfoFigure = document.createElement('figure')

        const productImgCard = document.createElement('img')
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')

        productInfoFigure.appendChild(productImgCard)

        productInfo.append(productInfoDiv, productInfoFigure)

        productCard.append(img, productInfo)

        cardContainer.appendChild(productCard)
    }
}

renderProducts(productList)