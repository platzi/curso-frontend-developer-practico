const navBarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burgerMenu = document.querySelector('.burger-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingcart = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

const toggleMenu = () => {
    const isAsideOpen = !aside.classList.contains('inactive')

    //if(isAsideOpen) {
    aside.classList.add('inactive')
    //}

    desktopMenu.classList.toggle('inactive')
    mobileMenu.classList.toggle('inactive')
}
navBarEmail.addEventListener('click', toggleMenu)
burgerMenu.addEventListener('click', toggleMenu)

const toggleCart = () => {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive')
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')

    //if(isMobileMenuOpen || isDesktopMenuOpen) {
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    //}

    aside.classList.toggle('inactive')
}
shoppingcart.addEventListener('click', toggleCart)

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'TV',
    price: 1300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'PC',
    price: 4400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

const cardContainer = document.querySelector('.cards-container')

function renderProducts(arr) {
    for (product of arr) {
        // First way

        // innerHTML is a bad practice because of security flaws
        // cardContainer.innerHTML += `
        //     <div class="product-card">
        //         <img src="${product.image}" alt="">
        //         <div class="product-info">
        //             <div>
        //             <p>$${product.price}</p>
        //             <p>${product.name}</p>
        //             </div>
        //             <figure>
        //             <img src="./icons/bt_add_to_cart.svg" alt="">
        //             </figure>
        //         </div>
        //     </div>
        // `

        // Second way

        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const img = document.createElement('img')
        img.setAttribute('src', product.image)

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerText = `$${product.price}`

        const productName = document.createElement('p')
        productName.innerText = `$${product.name}`

        const productFigure = document.createElement('figure')
        const addToCardImg = document.createElement('img')
        addToCardImg.setAttribute('src', './icons/bt_add_to_cart.svg')

        productFigure.appendChild(addToCardImg)
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productFigure)
        productCard.appendChild(img)
        productCard.appendChild(productInfo)

        cardContainer.appendChild(productCard)
    }
}

renderProducts(productList)