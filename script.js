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
const newItendescription = document.querySelector('.description-of-img-iten')
const priceProductDetail = document.querySelector('.price-product-detail')
const nameProductDetail = document.querySelector('.name-product-detail')
const descriptionProductDetail = document.querySelector('.description-product-detail')
const imageProductDetail = document.querySelector('.image-product-detail')
const contentOrder = document.querySelector('.my-order-content')
const moveIdCart = document.querySelector('.add-to-cart-button')

form.addEventListener('submit', collectElements)
addCardsList.addEventListener('click', openAddBlockCardsList)
closeBarForm.addEventListener('click', openAddBlockCardsList)
menuEmail.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)
moveIdCart.addEventListener('click', sentProductDate)

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
    listSaleCartDetail()
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
function sentProductDate(){
    blockEventCart = false
    for(iten of productList){
        if (iten.id == moveIdCart.id){
            addProductItenCart(moveIdCart)
        }
    }

}
let blockEventCart
function addProductToCart(){
    blockEventCart = false
    const selectIten = document.querySelectorAll('.product-card')
    selectIten.forEach((element)=> {
        element.addEventListener('click', ()=>{addProductItenCart(element)})
    })
}
let activeRest
function listSaleCartDetail(){
    const delateProductList = document.querySelectorAll('.icon-remove-product')
    delateProductList.forEach((element)=>{element.addEventListener('click', removeItenclose)})
}
function removeItenclose(){
    activeRest = true
    const counter = document.querySelectorAll('.shopping-cart')
    counter.forEach((elementIten)=>{elementIten.addEventListener('click', ()=>{
        elementIten.remove('.shopping-cart')
        const price = elementIten.querySelector('.price-requered')
        if(activeRest == true){
            counterPriceTotalRest(Number(price.innerHTML))
        }
        counterProduct()
    })})
}
function addProductItenCart(element){
    shoppingCartConatiner.classList.add('inactive')
    if (blockEventCart == false){
        for (let itens of productList){
            if (itens.id == element.id){
                const shoppingCart = document.createElement('div')
                shoppingCart.classList.add('shopping-cart')
                const figureCart = document.createElement('figure')
                const imageCart = document.createElement('img')
                imageCart.setAttribute('src', itens.image)
                const pNameCart = document.createElement('p')
                pNameCart.innerText = itens.name
                const pPriceCart = document.createElement('p')
                pPriceCart.innerText = '$'
                const spanPriceCart = document.createElement('span')
                spanPriceCart.classList.add('price-requered')
                spanPriceCart.innerText = itens.price 
                const iconCloseCart = document.createElement('img')
                iconCloseCart.setAttribute('src','./icons/icon_close.png')
                iconCloseCart.classList.add('icon-remove-product')
    
                shoppingCart.append(figureCart,pNameCart,pPriceCart,iconCloseCart)
                pPriceCart.appendChild(spanPriceCart)
                figureCart.appendChild(imageCart)
                contentOrder.appendChild(shoppingCart)
                resta = false
                counterProduct()
                counterPriceTotalAdd(itens.price)
            }
        }
        blockEventCart = true
    }
}
let priceProductTotal = []
function counterProduct(){
    const counter = document.querySelectorAll('.shopping-cart')
    const changeCounter = document.querySelector('.counter-product')
    changeCounter.innerText = counter.length
}
function counterPriceTotalAdd(price){
    priceProductTotal.push(price)
    totalPrice()
}
function totalPrice(){
    const totalcost = document.querySelector('.total-product-cost')
    let a = 0
    for(cost of priceProductTotal){
        let costTotal = cost + a
        a = costTotal
    }
    totalcost.innerText = '$' + a
}
function counterPriceTotalRest(price){
    console.log(priceProductTotal)
    let a = priceProductTotal.indexOf(price)
    priceProductTotal.splice(a, 1)
    console.log(priceProductTotal)
    totalPrice()
    activeRest = false
}
let blockEvent 
function openProductDetailAside(){ 
    blockEvent = false
    const selectIten = document.querySelectorAll('.product-card')
    selectIten.forEach((element)=> {
        element.addEventListener('click', ()=>{lookDetailProduct(element.id)})
    })
}
function lookDetailProduct(productSelect){
    if (blockEvent == false){
        for (let itens of productList){
            if (itens.id == productSelect){
                priceProductDetail.innerText = '$' + itens.price
                nameProductDetail.innerText = itens.name
                descriptionProductDetail.innerText
                imageProductDetail.setAttribute('src', itens.image)
                moveIdCart.setAttribute('id', itens.id)
                descriptionProductDetail.innerText = itens.description
            }
        }
        shoppingCartConatiner.classList.add('inactive')
        productDetailContainer.classList.remove('inactive')    
    }
    blockEvent = true
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
        image: newItenUrl.value,
        description: newItendescription.value
    })
    let product = productList[(productList.length) - 1]
    activeLoopItens = false
    createNewIten(product)
    newItenName.value = newItenUrl.value = newItenPrice.value = ""
}
function idcreate(){
    productIdNew = 1000 + (productList.length + 1)
}
function createNewIten(product){
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
    if (activeLoopItens == false){
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
    productImgCart.classList.add('add-product-shopping-cart')
    productImgCart.classList.add('cursorPointer')

    productCard.append(productImg, productInfo)
    productInfo.append(productInfoDiv, productInfoFigure)
    productInfoDiv.append(productPrice, productName)
    productInfoFigure.appendChild(productImgCart)
    cardsContainer.appendChild(productCard)

    productImg.addEventListener('click', openProductDetailAside)
    productImgCart.addEventListener('click', addProductToCart)
}
let productIdNew
let activeLoopItens
const productList = []
productList.push({
    id: 1001,
    name: 'bike',
    price: 120,
    description: 'bicicleta de montaña ideal para paseos largos con grandes esperiencias a realisar',
    image: 'https://falabella.scene7.com/is/image/FalabellaPE/882097973_1?wid=800&hei=800&qlt=70'
})
productList.push({
    id: 1002,
    name: 'Monitor',
    price: 150,
    description: 'Monitor con buena calidad de imagen ideal para juegos y ver peliculas',
    image: 'https://images.officeworks.com.au/api/2/img/https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/IN4794710_.jpg/resize?size=600&auth=MjA5OTcwODkwMg__'
})
productList.push({
    id: 1003,
    name: 'Conputadora',
    price: 590,
    description: 'Computadora con buenas prestacionas para cualquiers uso que le quieras dar',
    image: 'https://www.tecnologia-informatica.com/wp-content/uploads/2018/08/caracteristicas-de-las-computadoras-1.jpeg'
})

for (let product of productList){
    activeLoopItens = true
    productId = product.id
    createNewIten(product)
}