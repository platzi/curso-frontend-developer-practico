const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const burgerMenu = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail')
const closeShoppingContainer = document.querySelector('.closeShoppingContainer');

// desplegar desktopMenu al hacer click a navbarEmai
navbarEmail.addEventListener('click', toggleDesktopMenu);
// mobile menu
burgerMenu.addEventListener('click', toggleMobilepMenu);
// aside
menuCarritoIcon.addEventListener('click', togglemenuCarritoIcon);

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

closeShoppingContainer.addEventListener('click', closeShoppingCartContainer);

function closeShoppingCartContainer(){
    shoppingCartContainer.classList.add('inactive');
}

function toggleDesktopMenu(event){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    } 
    closeProductDetailAside();
    desktopMenu.classList.toggle('inactive')
}

function toggleMobilepMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    } 
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive')
    stopScroll();
    }

function stopScroll(){
   if (!mobileMenu.classList.contains('inactive')) {
       document.body.classList.add('stop-scrolling');
    } else{
        document.body.classList.remove('stop-scrolling');
    }
}

function togglemenuCarritoIcon(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive')    
    shoppingCartContainer.classList.toggle('inactive');

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')
    } 
    desktopMenu.classList.add('inactive')   
}

function openProductDetailAside(){
    // preguntar si el shoppingCart estaba abierto
    shoppingCartContainer.classList.add('inactive');
    // preguntar si el desktopMenu esta abierto
    desktopMenu.classList.add('inactive');
    // removemos la clase inactive para que aparezca y se mantenga activo
    productDetailContainer.classList.remove('inactive')
}


function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

const productList = [];

function Product(name, price, image){
    this.name = name
    this. price = price
    this.image = image
};
    
    for(i = 0; i < 10; i++ ){
        // bike
        const bike = new Product('Bike', 120, 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
        productList.push(bike);

        // tv Retro
        let tvRetro = new Product('TV Retro', 220, 'https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        productList.push(tvRetro);

        // macbook Pro
        let macbookPro16 = new Product("Macbook Pro 16''", 650, 'https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
         productList.push(macbookPro16);
    }
    function renderProducts(array){
    for (product of array){
        // creando y agregando atributos y clases a los elementos
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener("click", openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        // insetar price and name en productInfoDiv

        productInfoDiv.append(productPrice, productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');       
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        // insertar productImgCart dentro de productInfoFigure

        productInfoFigure.appendChild(productImgCart);

        // insertarp productInfoDiv y productInfoFigure en productInfo

        productInfo.append(productInfoDiv, productInfoFigure);

        // insertamos productImg y productInfo dentro de productCard

        productCard.append(productImg, productInfo);

        // agregamos productCard a nuestra cards-container

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
