const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarIcon = document.querySelector('.navbar-shopping-cart')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', ()=>{

    const isAsideClose = shoppingCartContainer.classList.contains('inactive') //preguntando si tiene la clase entonces esta cerrado

    if (!isAsideClose) {
        shoppingCartContainer.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
})

menuHamIcon.addEventListener('click', ()=>{

    const isAsideClose = shoppingCartContainer.classList.contains('inactive') //preguntando si tiene la clase entonces esta cerrado

    if (!isAsideClose) {
        shoppingCartContainer.classList.add('inactive')
    }

    const isProductDetailClose = productDetailContainer.classList.contains('inactive') //preguntando si tiene la clase entonces esta cerrado
    if (!isProductDetailClose) {
        productDetailContainer.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
})


menuCarIcon.addEventListener('click', ()=>{
    const isMobileMenuClose = mobileMenu.classList.contains('inactive') //preguntando si tiene la clase entonces esta cerrado
    const isDesktopMenu = desktopMenu.classList.contains('inactive') //preguntando si tiene la clase entonces esta cerrado
    
    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive')
    }
    else if(!isDesktopMenu){
        desktopMenu.classList.add('inactive')
    }


    const isProductDetailClose = productDetailContainer.classList.contains('inactive') //preguntando si tiene la clase entonces esta cerrado
    if (!isProductDetailClose) {
        productDetailContainer.classList.add('inactive')
    }
    
    
    shoppingCartContainer.classList.toggle('inactive')

})

productDetailCloseIcon.addEventListener('click', ()=>{
    productDetailContainer.classList.add('inactive')

})


const productList = []
productList.push({
    name:'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'Laptop',
    price: 1200,
    img: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name:'Tv',
    price: 500,
    img: 'https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name:'Mobile',
    price: 800,
    img: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name:'Watch',
    price: 230,
    img: 'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})


const rednerProducts = (arr)=>{
    for(product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.img)
        productImg.addEventListener('click', ()=>{

            shoppingCartContainer.classList.add('inactive')
            productDetailContainer.classList.remove('inactive')
        })
            
    
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
        const productImgCard = document.createElement('img')
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')
        
        productInfoFigure.appendChild(productImgCard)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
    
        cardsContainer.appendChild(productCard)
    }
}

rednerProducts(productList)



