const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')

// desplegar desktopMenu al hacer click a navbarEmai
navbarEmail.addEventListener('click', toggleDesktopMenu);
// mobile menu
burgerMenu.addEventListener('click', toggleMobilepMenu);
// aside
menuCarritoIcon.addEventListener('click', togglemenuCarritoIcon);

function toggleDesktopMenu(event){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    } 
    desktopMenu.classList.toggle('inactive')
}

function toggleMobilepMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    } 

    mobileMenu.classList.toggle('inactive')
}

function togglemenuCarritoIcon(){
    const isMenuMobileClosed = mobileMenu.classList.contains('inactive');

    if(!isMenuMobileClosed){
        mobileMenu.classList.add('inactive')
    } 
    desktopMenu.classList.add('inactive')    
    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];

// productList.push({
//     name: 'Bike',
//     price: 120,
//     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
// });

function Product(name, price, image){
    this.name = name
    this. price = price
    this.image = image
}
    
    // productList.push(new Product('Bike', 120, 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'));
    // productList.push(new Product('TV Retro', 220, 'https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'));
    // productList.push(new Product("Macbook Pro 16''", 650, 'https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'));

    const clothes = [];
    const electronics = [];
    const furnitures = [];
    const toys = [];    
    const others = [];

    for(i = 0; i < 5; i++ ){
        // bike
        let bike = productList.push(new Product('Bike', 120, 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'));
        // tv Retro
        let tvRetro = productList.push(new Product('TV Retro', 220, 'https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'));
        // macbook Pro
        let macbookPro16 = productList.push(new Product("Macbook Pro 16''", 650, 'https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'));
    }

    function renderProducts(array){
    for (product of array){
        // creando y agregando atributos y clases a los elementos
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        // insetar price and name en productInfoDiv

        productInfoDiv.append(productPrice, productName);
        // productInfoDiv.appendChild(productPrice);
        // productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');       
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        // insertar productImgCart dentro de productInfoFigure

        productInfoFigure.appendChild(productImgCart);

        // insertarp productInfoDiv y productInfoFigure en productInfo

        productInfo.append(productInfoDiv, productInfoFigure);

        // insertamos productImg y productInfo dentro de productCard

        productCard.append(productImg, productInfo);

        // productCard.appendChild(productImg);
        // productCard.appendChild(productInfo);

        // agregamos productCard a nuestra cards-container

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
