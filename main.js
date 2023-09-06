const emailMenu = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burgerIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart')
const productDetails = document.querySelector('.product-detail')
const logo = document.querySelector('.logo')
const cardsContainer = document.querySelector('.cards-container')
const detailCart = document.querySelector('.product-detail-cart')
const detailCartClose = document.querySelector('.product-detail-close')
const infoCart = document.querySelector('.product-info-cart')
const closeShoppingCart = document.querySelector('.title-container img')
const myOrderContent = document.querySelector('.my-order-content')
const darken = document.querySelector('.darken')
const counterItem = document.querySelector('.counter-item')

emailMenu.addEventListener('click', toggleDesktopMenu)
burgerIcon.addEventListener('click', toggleMobileMenu)
shoppingCartIcon.addEventListener('click', toggleAside)
detailCartClose.addEventListener('click', toggleAsideCart)
closeShoppingCart.addEventListener('click', toggleAsideClose)

function toggleDesktopMenu() {
    productDetails.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
    detailCart.classList.add('inactive')
    cardsContainer.classList.remove('detail-cart-open')
    cardsContainer.classList.add('disable')
    darken.classList.add('inactive')
    shoppingCartIcon.classList.remove('disable')
}
function toggleMobileMenu() {
    productDetails.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
    detailCart.classList.add('inactive')
    cardsContainer.classList.remove('disable')
    darken.classList.add('inactive')

}
function toggleAside() {
    cardsContainer.classList.add('detail-cart-open')
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    productDetails.classList.remove('inactive')
    detailCart.classList.add('inactive')
    cardsContainer.classList.add('disable')
    darken.classList.remove('inactive')
    renderShoppingCart(shoppingList)
}
function toggleAsideCart() {
    cardsContainer.classList.remove('detail-cart-open')
    detailCart.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    productDetails.classList.add('inactive')
    cardsContainer.classList.remove('disable')
    darken.classList.add('inactive')
}
function toggleAsideClose() {
    cardsContainer.classList.remove('detail-cart-open')
    productDetails.classList.add('inactive')
    cardsContainer.classList.remove('disable')
    darken.classList.add('inactive')
}

const productList = []
productList.push({
    id: 1,
    name: 'Bike',
    price: 380,
    image: 'https://m.media-amazon.com/images/I/91MqcxxSzFL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
    description: "The dream bike, the Fixie is well-built, comfortable and stylish, making it the ideal companion for short commutes. Though at a competitive price, there are no corners cut and the never-ending pursuit to quality is evident. We're sure you'll have a smile on your face every time you hop on for your commutes, hangouts, workouts and beyond"
})
productList.push({
    id: 2,
    name: 'Gaming Desk',
    price: 420,
    image: 'https://m.media-amazon.com/images/I/71SMNFiD9bL._AC_SX569_.jpg',
    description: "Only for gaming? No! It also serves as a large and stury computer desk/ office workstation! Thanks to the amazing carbon fiber top material and heavy duty metal desk legs, and those added humanized designs, this desk is much more multifunctional compared to other basic computer desk/ office workstation."
})
productList.push({
    id: 3,
    name: 'Coffee Cup',
    price: 11,
    image: 'https://m.media-amazon.com/images/I/71ijLyRmNXL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
    description: "This coffee mug is perfect for any coffee lover. It is made of high quality ceramic and has a classic shape that you are sure to love. The mug has a comfortable handle that makes it easy to hold, even when filled with hot coffee. The mug is also dishwasher safe, making it easy to clean."
})
productList.push({
    id: 4,
    name: 'Git and Github',
    price: 14.99,
    image: 'https://pbs.twimg.com/media/FubgrSEWYAATGTr.jpg',
    description: "This step-by-step guide will help you understand the fundamentals, while you learn the theory and apply it in practice, thanks to the course included in the book. A 5-hour video course that you can access for free from mouredev.com/git-github."
})
productList.push({
    id: 5,
    name: 'Learning JavaScript',
    price: 14.85,
    image: 'https://d2sofvawe08yqg.cloudfront.net/aprendiendo-javascript/s_hero2x?1620475858',
    description: "This book is a comprehensive resource for learning JavaScript, one of the world's most popular programming languages. It is written in a clear and concise style, and is full of examples and practical exercises. The book starts with the basics of JavaScript, such as variables, functions, and loops, and then moves on to more advanced topics, such as objects, events, and animations."
})
productList.push({
    id: 6,
    name: 'Tesla Coil',
    price: 79.99,
    image: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/b2b10812-dbea-4cdd-823c-22d67ed22215.caad0e2aa520aa4be27909fe53de6adf.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    description: "A musical Tesla coil is a Tesla coil that has been modified to reproduce musical notes. This is done by modulating the frequency of the current that is applied to the primary coil. When the frequency of the current matches the natural frequency of the secondary coil, a resonance occurs, which causes the secondary coil to emit a sound."
})

function renderProducts(arr) {
    for (product of productList) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        productImg.setAttribute('alt', product.name)

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name

        const productFigure = document.createElement('figure')

        const productFigureCart = document.createElement('img')
        productFigureCart.setAttribute('src', './icons/bt_add_to_cart.svg')
        productFigureCart.setAttribute('alt', 'Add to Cart')
        productFigureCart.setAttribute('id', product.id)

        productInfoDiv.append(productPrice, productName)

        productFigure.appendChild(productFigureCart)

        productInfo.append(productInfoDiv, productFigure)

        productCard.append(productImg, productInfo)

        cardsContainer.append(productCard)

        productFigureCart.addEventListener('click', (event) => {
            let idImg = event.target.id

            for (let i = 0; i < productList.length; i++) {
                if (productList[i].id == idImg) {
                    shoppingList.push(productList[i])
                    counterItem.innerText = shoppingList.length
                }
            }
        })

        productImg.addEventListener('click', (event) => {
            productDetails.classList.add('inactive')
            cardsContainer.classList.add('detail-cart-open')
            cardsContainer.classList.add('disable')
            darken.classList.remove('inactive')
            desktopMenu.classList.add('inactive')
            detailCart.classList.remove('inactive')
            let elementSrc = event.target.src

            for (let i = 0; i < productList.length; i++) {
                if (productList[i].image === elementSrc) {
                    let details = productList[i]

                    let imgDetails = detailCart.querySelector('img:nth-child(2)')
                    let imgDetailsClick = document.createElement('img')
                    imgDetailsClick.setAttribute('src', details.image)
                    imgDetailsClick.setAttribute('alt', details.name)
                    detailCart.replaceChild(imgDetailsClick, imgDetails)

                    let priceDetails = detailCart.querySelector('p:nth-child(1)')
                    let priceDetailsClick = document.createElement('p')
                    priceDetailsClick.innerText = '$' + details.price
                    infoCart.replaceChild(priceDetailsClick, priceDetails)

                    let nameDetails = detailCart.querySelector('p:nth-child(2)')
                    let nameDetailsClick = document.createElement('p')
                    nameDetailsClick.innerText = details.name
                    infoCart.replaceChild(nameDetailsClick, nameDetails)

                    let descriptionDetails = detailCart.querySelector('p:nth-child(3)')
                    let descriptionDetailsClick = document.createElement('p')
                    descriptionDetailsClick.innerText = details.description
                    infoCart.replaceChild(descriptionDetailsClick, descriptionDetails)

                    let detailsButtonAdd = document.createElement('button')
                    detailsButtonAdd.classList.add('primary-button')
                    detailsButtonAdd.classList.add('add-to-cart-button')
                    detailsButtonAdd.setAttribute('id', details.id)
                    detailsButtonAdd.innerText = 'Add to cart'

                    let imgAddCart = document.createElement('img')
                    imgAddCart.setAttribute('src', './icons/bt_add_to_cart.svg')
                    imgAddCart.setAttribute('alt', 'add to cart')

                    detailsButtonAdd.append(imgAddCart)

                    detailCart.appendChild(detailsButtonAdd)

                    detailsButtonAdd.addEventListener('click', () => {
                        if (productList[i].id === details.id) {
                            shoppingList.push(productList[i])
                            counterItem.innerText = shoppingList.length
                        }
                    })
                }
            }
        })
    }
}

renderProducts(productList)

const shoppingList = []

function renderShoppingCart(arr) {
    for (let i = 0; i < shoppingList.length; i++) {
        let shopping = shoppingList[i]

        const shoppingCart = document.createElement('div')
        shoppingCart.classList.add('shopping-cart')
        shoppingCart.setAttribute('id', i)

        const shoppingFigure = document.createElement('figure')

        const shoppingImg = document.createElement('img')
        shoppingImg.setAttribute('src', shopping.image)
        shoppingImg.setAttribute('alt', shopping.name)

        shoppingFigure.appendChild(shoppingImg)

        const shoppingName = document.createElement('p')
        shoppingName.innerText = shopping.name
        const shoppingPrice = document.createElement('p')
        shoppingPrice.innerText = '$' + shopping.price

        const shoppingIconClose = document.createElement('img')
        shoppingIconClose.setAttribute('src', './icons/icon_close.png')
        shoppingIconClose.setAttribute('alt', 'close')
        shoppingIconClose.setAttribute('id', i)

        shoppingCart.append(shoppingFigure, shoppingName, shoppingPrice, shoppingIconClose)

        myOrderContent.appendChild(shoppingCart)

        shoppingCartIcon.classList.add('disable')

        shoppingIconClose.addEventListener('click', (event) => {
            let idImgClose = event.target.id
            let index = shoppingList.indexOf(shopping)

            if (i == idImgClose) {
                shoppingList.splice(index, 1)
                shoppingCart.remove()
            }
        })

        closeShoppingCart.addEventListener('click', () => {
            shoppingCart.remove()
            shoppingCartIcon.classList.remove('disable')
        })
        emailMenu.addEventListener('click', () => {
            shoppingCart.remove()
        })
        burgerIcon.addEventListener('click', () => {
            shoppingCart.remove()
        })
    }
}

