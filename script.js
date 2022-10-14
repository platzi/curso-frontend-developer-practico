const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burguerMenu = document.querySelector('.burguerMenu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')
const addCardsList = document.querySelector('.add-cards')
const closeBarForm = document.querySelector('.icon-close-form')
const form = document.querySelector('#form-but')
const openBlockAdd = document.querySelector('.control-add-itens')
const newItenName = document.querySelector('.name-of-iten')
const newItenPrice = document.querySelector('.price-of-iten')
const newItenUrl = document.querySelector('.url-of-img-iten')

form.addEventListener('submit', collectElements)
addCardsList.addEventListener('click', openAddBlockCardsList)
closeBarForm.addEventListener('click', openAddBlockCardsList)
menuEmail.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function openAddBlockCardsList(){
    openBlockAdd.classList.toggle('inactive')
}
function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive')
    if (!isAsideClosed){
        aside.classList.add('inactive')
        desktopMenu.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive')
    if(!isAsideClosed){
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}
function toggleCarritoAside(){
    const isMobilMenuClosed = mobileMenu.classList.contains('inactive')
    if (!isMobilMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')   
}
function collectElements(event){
    event.preventDefault()
    openAddBlockCardsList()
    productList.push({
        name: newItenName.value,
        price: newItenPrice.value,
        image: newItenUrl.value
    })
    let product = productList[(productList.length) - 1]
    createNewIten(product)
    newItenName.value = newItenUrl.value = newItenPrice.value = ""
}

function createNewIten(product){
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')

    const productImg = document.createElement('img')
    productImg.setAttribute('src', product.image)

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')

    const productInfoDiv = document.createElement('div')
    const productPrice = document.createElement('p')
    productPrice.innerText = '$ ' + product.price
    const productName = document.createElement('p')
    productName.innerText = product.name

    const productInfoFigure = document.createElement('figure')
    const productImgCart = document.createElement('img')
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

    productCard.append(productImg, productInfo)
    productInfo.append(productInfoDiv, productInfoFigure)
    productInfoDiv.append(productPrice, productName)
    productInfoFigure.appendChild(productImgCart)
    cardsContainer.appendChild(productCard)
}
const productList = []
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://falabella.scene7.com/is/image/FalabellaPE/882097973_1?wid=800&hei=800&qlt=70'
})
productList.push({
    name: 'Monitor',
    price: 150,
    image: 'https://images.officeworks.com.au/api/2/img/https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/IN4794710_.jpg/resize?size=600&auth=MjA5OTcwODkwMg__'
})
productList.push({
    name: 'Conputadora',
    price: 590,
    image: 'https://www.tecnologia-informatica.com/wp-content/uploads/2018/08/caracteristicas-de-las-computadoras-1.jpeg'
})
for (product of productList){
    createNewIten(product)
}
