const navMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const iconMenu = document.querySelector('.icon-menu-mobile')
const menuMobile = document.querySelector('.mobile-menu')
const iconShoppingCart = document.querySelector('.navbar-shopping-cart')
const myOrder = document.querySelector('.product-detail')
const productDetail = document.querySelector('.product-detail-secondary')
const closeProductDetail = document.querySelector('.product-detail-secondary-close')
const counterShop = document.querySelector('.counter-shop')
const cardsContainer = document.querySelector('.cards-container')

let counter = 0

navMenu.addEventListener('click', toggleMenuDesktop);

function toggleMenuDesktop() {
    myOrder.classList.add('inactive');
    menuMobile.classList.add('inactive');
    productDetail.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

iconMenu.addEventListener('click', toggleIconMenu);

function toggleIconMenu() {
    myOrder.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
    menuMobile.classList.toggle('inactive');
}

iconShoppingCart.addEventListener('click', toggleMyOrder);

function toggleMyOrder() {
    desktopMenu.classList.add('inactive');
    menuMobile.classList.add('inactive');
    productDetail.classList.add('inactive');
    myOrder.classList.toggle('inactive');
}

// load and close product details

closeProductDetail.addEventListener('click', () => {productDetail.classList.add('inactive')})

function openProductDetail() {
    desktopMenu.classList.add('inactive');
    menuMobile.classList.add('inactive');
    myOrder.classList.add('inactive');
    productDetail.classList.remove('inactive');
}


// create products

const productList = []

const accesoriesList = []

accesoriesList.push({
    name: 'accesories for men',
    price: 890,
    img: 'https://images.pexels.com/photos/15138203/pexels-photo-15138203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
accesoriesList.push({
    name: 'accesories for men',
    price: 890,
    img: 'https://images.pexels.com/photos/15138203/pexels-photo-15138203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
accesoriesList.push({
    name: 'accesories for men',
    price: 890,
    img: 'https://images.pexels.com/photos/15138203/pexels-photo-15138203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

productList.push({
    name: 'Bike',
    price: 12700,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bicycle helmet',
    price: 1200,
    img: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push({
    name: 'Bicycle helmet',
    price: 1600,
    img: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push({
    name: 'Bicycle helmet',
    price: 1500,
    img: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push({
    name: 'Seat',
    price: 300,
    img: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push({
    name: 'Tennis Montain Bike',
    price: 2200,
    img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push({
    name: 'Sunglasses',
    price: 800,
    img: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push({
    name: 'Sunglasses',
    price: 600,
    img: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push({
    name: 'Bicycle seat bag',
    price: 876,
    img: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
});

// function create products

function createProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const imgSrc = document.createElement('img')
        imgSrc.setAttribute('src', product.img)
        imgSrc.addEventListener('click', openProductDetail)
        
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const divProductInfo = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerText = `$ ${product.price}`

        const productName = document.createElement('p')
        productName.innerText = product.name

        const figureCart = document.createElement('figure')

        const imgCart = document.createElement('img')
        imgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

        figureCart.appendChild(imgCart)
        divProductInfo.append(productPrice, productName)
        productInfo.append(divProductInfo, figureCart)
        productCard.append(imgSrc, productInfo)
        cardsContainer.appendChild(productCard)
    }
}

createProducts(productList)
createProducts(accesoriesList)