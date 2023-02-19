const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
//mobile menu
const burguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
//shopping cart
const shoppingBasket = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('#shopping-cart-container')

//products
const products = [
    {
        name:'Bike',
        price: 12700,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name:'Bicycle helmet',
        price: 1200,
        image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
    },
    {
        name:'Bicycle helmet',
        price: 1600,
        image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
    },
    {
        name:'Bicycle helmet',
        price: 1500,
        image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
    },
    {
        name:'Seat',
        price: 300,
        image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
    },
    {
        name:'Tennis Montain Bike',
        price: 2200,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
    },
    {
        name:'Sunglasses',
        price: 800,
        image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
    },
    {
        name:'Sunglasses',
        price: 600,
        image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
    },
    {
        name:'Bicycle seat bag',
        price: 876,
        image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
    }  
]

//Eventos
menuEmail.addEventListener('click', function(){
    const isProductDetailOpen = !productDetail.classList.contains('inactive')
    desktopMenu.classList.toggle('inactive')
    //hide product detail when click on desktopmenu
    if (isProductDetailOpen) {
        productDetail.classList.add('inactive')
    }

})
// mobile menu
burguerMenu.addEventListener('click', function(){
    const isProductDetailOpen = !productDetail.classList.contains('inactive')
    mobileMenu.classList.toggle('inactive')
    //hide product detail when click on mobile menu
    if (isProductDetailOpen) {
        productDetail.classList.add('inactive')
    }
})
// show products detail
shoppingBasket.addEventListener('click', function(){
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive')
    productDetail.classList.toggle('inactive')
    //hide desktopmenul when click on product detail
    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive')
    }
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive')
    }
})

function renderProducts(arr = undefined){
    //creating product cards
    const cardsContainer = document.querySelector('.cards-container')
    for (const product of arr) {
        //creating all elements
        let productCard = document.createElement("div")
        let productImg = document.createElement("img")
        let productInfo = document.createElement("div")
        let div = document.createElement("div")
        let price = document.createElement("p")
        let nameProduct = document.createElement("p")
        let figure = document.createElement("figure")
        let addCartImg = document.createElement("img")
        //asigning class name
        productCard.classList.add("product-card")
        productInfo.classList.add("product-info")
        //asigning values to the elements
        productImg.setAttribute('src',product.image)
        price.textContent = product.price
        nameProduct.textContent = product.name
        addCartImg.src = "./icons/bt_add_to_cart.svg"
        addCartImg.alt = "Add to basket"
        //append all elements
        div.append(price,nameProduct)
        figure.appendChild(addCartImg)
        productInfo.append(div, figure)
        productCard.append(productImg, productInfo)
        //append to the father container
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(products)