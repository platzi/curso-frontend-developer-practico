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
const sumaTotal = document.querySelector('.suma-total')

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
    cardsContainer.classList.remove('disable')
    darken.classList.add('inactive')
    shoppingCartIcon.classList.remove('disable')
}
function toggleMobileMenu() {
    productDetails.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
    detailCart.classList.add('inactive')
    cardsContainer.classList.remove('disable')
    darken.classList.add('inactive')
    shoppingCartIcon.classList.remove('disable')
    cardsContainer.classList.remove('detail-cart-open')
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
    sumaPrecio(shoppingList)
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
    image: 'https://images.pexels.com/photos/13684844/pexels-photo-13684844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida justo eu dui fermentum, et iaculis neque dapibus. Suspendisse lobortis semper leo id consectetur. Sed sed faucibus ligula, in bibendum dui. Sed tincidunt et turpis vel euismod."
})
productList.push({
    id: 2,
    name: 'Computer desk',
    price: 140,
    image: 'https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida justo eu dui fermentum, et iaculis neque dapibus. Suspendisse lobortis semper leo id consectetur. Sed sed faucibus ligula, in bibendum dui. Sed tincidunt et turpis vel euismod."
})
productList.push({
    id: 3,
    name: 'Coffee Cup',
    price: 11,
    image: 'https://images.pexels.com/photos/3335613/pexels-photo-3335613.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida justo eu dui fermentum, et iaculis neque dapibus. Suspendisse lobortis semper leo id consectetur. Sed sed faucibus ligula, in bibendum dui. Sed tincidunt et turpis vel euismod."
})
productList.push({
    id: 4,
    name: 'Git and Github',
    price: 15,
    image: 'https://pbs.twimg.com/media/FubgrSEWYAATGTr.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida justo eu dui fermentum, et iaculis neque dapibus. Suspendisse lobortis semper leo id consectetur. Sed sed faucibus ligula, in bibendum dui. Sed tincidunt et turpis vel euismod."
})
productList.push({
    id: 5,
    name: 'Learning JavaScript',
    price: 15,
    image: 'https://pbs.twimg.com/media/E2D-x8HXoAA34Wd?format=jpg&name=large',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida justo eu dui fermentum, et iaculis neque dapibus. Suspendisse lobortis semper leo id consectetur. Sed sed faucibus ligula, in bibendum dui. Sed tincidunt et turpis vel euismod."
})
productList.push({
    id: 6,
    name: 'Phone',
    price: 800,
    image: 'https://images.pexels.com/photos/238541/pexels-photo-238541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida justo eu dui fermentum, et iaculis neque dapibus. Suspendisse lobortis semper leo id consectetur. Sed sed faucibus ligula, in bibendum dui. Sed tincidunt et turpis vel euismod."
})
productList.push({
    id: 7,
    name: 'Gamer keyboard',
    price: 94,
    image: 'https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida justo eu dui fermentum, et iaculis neque dapibus. Suspendisse lobortis semper leo id consectetur. Sed sed faucibus ligula, in bibendum dui. Sed tincidunt et turpis vel euismod."
})
productList.push({
    id: 8,
    name: 'Smart clock',
    price: 250,
    image: 'https://images.pexels.com/photos/267391/pexels-photo-267391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida justo eu dui fermentum, et iaculis neque dapibus. Suspendisse lobortis semper leo id consectetur. Sed sed faucibus ligula, in bibendum dui. Sed tincidunt et turpis vel euismod."
})
productList.push({
    id: 9,
    name: 'Car',
    price: 45500,
    image: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida justo eu dui fermentum, et iaculis neque dapibus. Suspendisse lobortis semper leo id consectetur. Sed sed faucibus ligula, in bibendum dui. Sed tincidunt et turpis vel euismod."
})
productList.push({
    id: 10,
    name: 'Programmable robot',
    price: 80,
    image: 'https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida justo eu dui fermentum, et iaculis neque dapibus. Suspendisse lobortis semper leo id consectetur. Sed sed faucibus ligula, in bibendum dui. Sed tincidunt et turpis vel euismod."
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
                counterItem.innerText = shoppingList.length
                sumaPrecio()
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

function sumaPrecio(arr) {
    let sumaPrecio = shoppingList.reduce((acc, shopping) => acc += shopping.price, 0)

    sumaTotal.innerHTML = '$' + sumaPrecio
}