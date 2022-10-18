const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burguerMenu = document.querySelector('.burguerMenu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartConatiner = document.querySelector('.shopping-cart-conatiner')
const productDetailContainer = document.querySelector('.product-detail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const cardsContainer = document.querySelector('.cards-container')
const addCardsList = document.querySelector('.add-cards')
const closeBarForm = document.querySelector('.icon-close-form')
const form = document.querySelector('#form-but')
const openBlockAdd = document.querySelector('.control-add-itens')
const newItenName = document.querySelector('.name-of-iten')
const newItenPrice = document.querySelector('.price-of-iten')
const newItenUrl = document.querySelector('.url-of-img-iten')
const priceProductDetail = document.querySelector('.price-product-detail')
const nameProductDetail = document.querySelector('.name-product-detail')
const descriptionProductDetail = document.querySelector('.description-product-detail')
const imageProductDetail = document.querySelector('.image-product-detail')

form.addEventListener('submit', collectElements)
addCardsList.addEventListener('click', openAddBlockCardsList)
closeBarForm.addEventListener('click', openAddBlockCardsList)
menuEmail.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function openAddBlockCardsList(){
    openBlockAdd.classList.toggle('inactive')
}
function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartConatiner.classList.contains('inactive')
    if (!isAsideClosed){
        shoppingCartConatiner.classList.add('inactive')
        desktopMenu.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu(){
    const isAsideClosed = shoppingCartConatiner.classList.contains('inactive')
    if(!isAsideClosed){
        shoppingCartConatiner.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
    closeProductDetailAside()
}

function toggleCarritoAside(){
    const isMobilMenuClosed = mobileMenu.classList.contains('inactive')
    if (!isMobilMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')
    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')
    }
    shoppingCartConatiner.classList.toggle('inactive')
}
function openProductDetailAside(){ 
    const selectIten = document.querySelectorAll('.product-card')
    selectIten.forEach((element)=> {
        element.addEventListener('click', selectItens=>{ const idItentClicked = element.id;lookDetailProduct(idItentClicked)})})
}
function lookDetailProduct(productSelect){
    for (let itens of productList){
        if (itens.id == productSelect){
            priceProductDetail.innerText = '$' + itens.price
            nameProductDetail.innerText = itens.name
            descriptionProductDetail.innerText
            imageProductDetail.setAttribute('src', itens.image)
        }
    }
    shoppingCartConatiner.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')  
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')   
}
function collectElements(event){
    event.preventDefault()
    openAddBlockCardsList()
    idcreate()
    productList.push({
        id: productIdNew,
        name: newItenName.value,
        price: newItenPrice.value,
        image: newItenUrl.value
    })
    let product = productList[(productList.length) - 1]
    activeFun = false
    createNewIten(product)
    newItenName.value = newItenUrl.value = newItenPrice.value = ""
}
function idcreate(){
    productIdNew  = 1000 + (productList.length + 1)
}
function createNewIten(product){
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
    if (activeFun == false){
        productCard.setAttribute('id', productIdNew)
    }
    else{
        productCard.setAttribute('id', productId)
    }
    const productImg = document.createElement('img')
    productImg.setAttribute('src', product.image)
    productImg.setAttribute('class', 'itens-select')

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
    productImgCart.classList.add('cursorPointer')

    productCard.append(productImg, productInfo)
    productInfo.append(productInfoDiv, productInfoFigure)
    productInfoDiv.append(productPrice, productName)
    productInfoFigure.appendChild(productImgCart)
    cardsContainer.appendChild(productCard)

    productImg.addEventListener('click', openProductDetailAside)

    /*for(i = 0; i < selectIten.length ; i++){
        numero = selectIten.length
        lado = selectIten[1]
        lado.addEventListener('click', as)
    }*/
}
let productIdNew
let activeFun
const productList = []
productList.push({
    id: 1001,
    name: 'bike',
    price: 120,
    image: 'https://falabella.scene7.com/is/image/FalabellaPE/882097973_1?wid=800&hei=800&qlt=70'
})
productList.push({
    id: 1002,
    name: 'Monitor',
    price: 150,
    image: 'https://images.officeworks.com.au/api/2/img/https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/IN4794710_.jpg/resize?size=600&auth=MjA5OTcwODkwMg__'
})
productList.push({
    id: 1003,
    name: 'Conputadora',
    price: 590,
    image: 'https://www.tecnologia-informatica.com/wp-content/uploads/2018/08/caracteristicas-de-las-computadoras-1.jpeg'
})

for (let product of productList){
    activeFun = true
    productId = product.id
    createNewIten(product)
}