//MANIPULACION NAV-BAR (INICIO)
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconMenu = document.querySelector('.menu');
const shoppingMenu = document.querySelector('.product-detail');
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const cardConteiner = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu(){
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if(!isShoppingCartClosed){
        shoppingMenu.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isShoppingCartClosed = shoppingMenu.classList.contains('inactive');

    if(!isShoppingCartClosed){
        shoppingMenu.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleShoppingCart(){
    const isMenuMobileClosed = mobileMenu.classList.contains('inactive');
    const isMenuDesktopClosed = desktopMenu.classList.contains('inactive');

    if(!isMenuMobileClosed){
        mobileMenu.classList.add('inactive');
    } else if(!isMenuDesktopClosed){
        desktopMenu.classList.add('inactive');
    }
    shoppingMenu.classList.toggle('inactive');
}
//MANIPULACION NAV-BAR (FIN)

//MANIPULACION MAIN(INICIO)
const productList = [];

productList.push({
    name: 'Screen',
    price: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
})
productList.push({
    name: "Cumputer",
    price: 300,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Phone",
    price: 250,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

function renderImg(array){
    for(product of array){
        //DIV PRINCIPAL
        const productCard  = document.createElement('div');
        productCard.classList.add('product-card');
        //DIV IMAGEN 
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.imagen);
        //DIV INFORMACION PRINCIPAL
        const productInfo  = document.createElement('div');
        productInfo.classList.add('product-info');
        //DIV CONTENEDORA DE LA INFO
        const productEmpty = document.createElement('div');
        //CARACTERISTICAS DEL DIV
        const productName = document.createElement('p');
        productName.innerText = product.name
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price + '.00';
        //DIV FIGURE
        const iconFigure = document.createElement('figure');
        const iconShoppingCart = document.createElement('img');
        iconShoppingCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        //MAQUETACION HTML
        iconFigure.appendChild(iconShoppingCart);
        
        productEmpty.appendChild(productPrice);
        productEmpty.appendChild(productName);
    
        productInfo.appendChild(productEmpty);
        productInfo.appendChild(iconFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardConteiner.appendChild(productCard);
    }
}

renderImg(productList);
//MANIPULACION MAIN(FIN)