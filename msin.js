const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const closeProductDetail = document.querySelector('.product-detail-close')

const shopingCar = document.querySelector('.navbar-shopping-cart');
const shopingCartContainer = document.querySelector('#shopingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobilepMenu);
shopingCar.addEventListener('click', toggleOrderDetail);
closeProductDetail.addEventListener('click', closeProduct)


function toggleDesktopMenu() {
    productDetailContainer.classList.add("inactive")
    shopingCartContainer.classList.add('inactive')
    desktopMenu.classList.toggle('inactive');
    
}

function toggleMobilepMenu() {
    productDetailContainer.classList.add("inactive")
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleOrderDetail() {
    productDetailContainer.classList.add("inactive")
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive');
    shopingCartContainer.classList.toggle('inactive');
}

function closeProduct(){
    desktopMenu.classList.add('inactive');
    shopingCartContainer.classList.add('inactive')
    productDetailContainer.classList.add("inactive")
}


function openProductDetailAside(){
    productDetailContainer.classList.remove("inactive")
}

const productList = [];

productList.push({
    name: 'Fixe Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Urban Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/5914907/pexels-photo-5914907.jpeg?auto=compress&cs=tinysrgb&w=1600'
})

productList.push({
    name: 'BMX Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/5464921/pexels-photo-5464921.jpeg?auto=compress&cs=tinysrgb&w=1600'
})

productList.push({
    name: 'Sport Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1600'
})

productList.push({
    name: 'Black Helmet',
    price: 80,
    image: 'https://images.unsplash.com/photo-1591511275477-88f079d88154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
})

productList.push({
    name: 'Green Helmet',
    price: 80,
    image: 'https://images.unsplash.com/photo-1596731530340-64945278d9f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1114&q=80'
})

productList.push({
    name: 'Red Helmet',
    price: 80,
    image: 'https://images.unsplash.com/photo-1611485100985-cb332cd79671?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
})

productList.push({
    name: 'Blue flask',
    price: 80,
    image: 'https://images.pexels.com/photos/1342529/pexels-photo-1342529.jpeg?auto=compress&cs=tinysrgb&w=1600'
})

productList.push({
    name: 'White flask',
    price: 80,
    image: 'https://images.unsplash.com/photo-1593546189050-2705e874df8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
})

productList.push({
    name: 'Silver flask',
    price: 80,
    image: 'https://images.unsplash.com/photo-1610399809302-f1dd7ec33187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=730&q=80'
})

productList.push({
    name: 'wheel',
    price: 80,
    image: 'https://images.pexels.com/photos/2883462/pexels-photo-2883462.jpeg?auto=compress&cs=tinysrgb&w=1600'
})

productList.push({
    name: 'Tools',
    price: 60,
    image: 'https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=1600'
})

function renderProducts(productos){
    for (product of productos) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src' , product.image);
        productImg.addEventListener('click' , openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerHTML = "$ " + product.price;
    
        const productName = document.createElement('p');
        productName.innerHTML= product.name;
        
        const productFigure = document.createElement('figure');
        const productFigureImg = document.createElement('img');
        productFigureImg.setAttribute('src' , './icons/bt_add_to_cart.svg')
    
        productFigure.append(productFigureImg);
        productInfoDiv.append(productPrice,productName);
        productInfo.append(productInfoDiv,productFigure);
        productCard.append(productImg,productInfo)
    
        cardsContainer.append(productCard);
    }
}

renderProducts(productList);



