// Guardando elementos de index.html ----------------------------

const menuEmail = document.querySelector('.navbar-email'); // Email on the navbar
const desktopMenu = document.querySelector('.desktop-menu'); // Desktop menu
const mobileMenuLogo = document.querySelector('.menu'); //Mobile menu Logo
const mobileMenu = document.querySelector('.mobile-menu'); //Mobile menu
const shoppingCartMenu = document.querySelector('.navbar-shopping-cart'); //Navbar shopping cart
const asideOrder = document.querySelector('.product-detail') //Aside product order
const cardsContainer = document.querySelector('.cards-container') //Aside product order

// Asignando funciones a eventos-------------------------

//Clicking email on the navbar
menuEmail.addEventListener('click', toggleDesktopMenu); 
//Clicking menu on the mobile version
mobileMenuLogo.addEventListener('click', toogleMobileMenu);
//Clicking shopping cart
shoppingCartMenu.addEventListener('click', toggleAsideOrder)

// Funciones que se ejecutan con evento ---------------

function toggleDesktopMenu(){
const isAsideClosed = asideOrder.classList.contains('inactive');

    if(!isAsideClosed){
        asideOrder.classList.toggle('inactive');
    } 

    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    const isAsideClosed = asideOrder.classList.contains('inactive');

    if(!isAsideClosed){
        asideOrder.classList.toggle('inactive');
    } 

    mobileMenu.classList.toggle('inactive');
}

function toggleAsideOrder(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.toggle('inactive');
    } 

    if(!isDesktopMenuClosed){
        desktopMenu.classList.toggle('inactive');
    } 

    asideOrder.classList.toggle('inactive');
}

// Agregandos productos a la lista de productos-------------------------

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://i.pinimg.com/564x/3f/c3/9e/3fc39e45e3e14d467ca6155e9ef562aa.jpg'
});

productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://i.pinimg.com/564x/37/71/45/377145b6e7b4fbd9b939f78720a8d4cd.jpg'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://i.pinimg.com/564x/3f/c3/9e/3fc39e45e3e14d467ca6155e9ef562aa.jpg'
});

productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://i.pinimg.com/564x/37/71/45/377145b6e7b4fbd9b939f78720a8d4cd.jpg'
});

// Maquetando la lista de productos ------------------------

function renderProducts(arr){

    for (product of arr){   

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        cardsContainer.appendChild(productCard);
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productCard.appendChild(productImg);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        productCard.appendChild(productInfo);
    
        const productInfoDiv = document.createElement('div');
        productInfo.appendChild(productInfoDiv);
    
        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
        productInfoDiv.appendChild(productPrice);
    
        const productName = document.createElement('p');
        productName.innerText = `${product.name}`;
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure')
        productInfo.appendChild(productInfoFigure);
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg");
        productInfoFigure.appendChild(productImgCart);
        
        
        }

}

renderProducts(productList);