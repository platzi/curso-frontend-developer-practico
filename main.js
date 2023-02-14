const desktopNavEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const MobileNavMenuBurguer = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const shoppingCarButton = document.querySelector('.navbar-shopping-cart')
const myOrderPanel = document.querySelector('.product-detail')

const mainSection = document.querySelector('.main-container')
const cardsContainer = document.querySelector('.cards-container')

const productList = []


productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},{
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
},{
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
},{
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
},{
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
},{
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
},{
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
},{
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
},{
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 


desktopNavEmail.addEventListener('click', toggleDesktopMenu)
MobileNavMenuBurguer.addEventListener('click', toggleMobileMenu)
shoppingCarButton.addEventListener('click', toggleMyOrderPanel)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    if(!myOrderPanel.classList.contains('inactive')){
        toggleMyOrderPanel()
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleMyOrderPanel() {
    if(!mobileMenu.classList.contains('inactive')){
        toggleMobileMenu()
    }
    
    if (mainSection.style.width == "calc(100% - 360px)") {
        mainSection.style.width = "100%"
    }else{
        mainSection.style.width = "calc(100% - 360px)"
    }
    myOrderPanel.classList.toggle('inactive');
}

function renderProducts(productList){

    for (const product of productList) {
    
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImage = document.createElement('img')
        productImage.setAttribute('src', product.image)
    
        const productCardInfo = document.createElement('div')
        productCardInfo.classList.add('product-info')
    
        const productCardText = document.createElement('div')
    
        const productCardPrice = document.createElement('p')
        productCardPrice.innerText = '$' + product.price
        const productCardName = document.createElement('p')
        productCardName.innerText = product.name
    
        const productCardButton = document.createElement('figure')
    
        const productAddButtonImage = document.createElement('img')
        productAddButtonImage.setAttribute('src', './icons/bt_add_to_cart.svg')
        
        productCardButton.append(productAddButtonImage)
        productCardText.append(productCardPrice, productCardName)
        productCardInfo.append(productCardText, productCardButton)
        productCard.append(productImage, productCardInfo)
        
        cardsContainer.prepend(productCard)
    
    
    }
}

window.onload(renderProducts(productList))





