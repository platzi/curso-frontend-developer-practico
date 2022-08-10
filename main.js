const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const menuLeftIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCarContainer = document.querySelector('#shoppingCarContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener("click", toggleDesktopMenu);
menuLeftIcon.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleCarAside);


function toggleDesktopMenu(){
    const isCarAsideClose = shoppingCarContainer.classList.contains('inactive');
    if(!isCarAsideClose){
        shoppingCarContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isCarAsideClose = shoppingCarContainer.classList.contains('inactive');
    if(!isCarAsideClose){
        shoppingCarContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleCarAside(){
    const ismobileMenuClose = mobileMenu.classList.contains('inactive');
    if(!ismobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
    shoppingCarContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'PS5',
    price: 400,
    image: 'https://i.blogs.es/f2b63c/ps5-1/840_560.jpg',
});
productList.push({
    name: 'SmartWatch',
    price: 200,
    image: 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202110/05/00189060014324____4__640x640.jpg',
});

// Creador de productos
function renderProducts(productsArray){
    for(product of productsArray){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure'); 
        const productInfoCard = document.createElement('img'); 
        productInfoCard.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.append(productInfoCard);
    
        productInfo.append(productInfoDiv, productInfoFigure);
        
        productCard.append(productImg, productInfo);
    
        cardsContainer.append(productCard);
}
}

renderProducts(productList);