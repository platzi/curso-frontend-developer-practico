const navBarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burgerMenu = document.querySelector('.burger-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingcart = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

function toggleMenu() {
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
    mobileMenu.classList.toggle('inactive')
}

function toggleCart() {
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
    shoppingCartContainer.classList.toggle('inactive')
}

function closeProductDetail() {
    productDetailContainer.classList.add('inactive')
}

function openProductDetail() {
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}

navBarEmail.addEventListener('click', toggleMenu)
burgerMenu.addEventListener('click', toggleMenu)
shoppingcart.addEventListener('click', toggleCart)
productDetailCloseIcon.addEventListener('click', closeProductDetail)


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
        img.addEventListener('click', openProductDetail)

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