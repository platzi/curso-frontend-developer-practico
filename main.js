// Funciones para escuchar click en menu mobile y MyAccount
const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenuIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")


navbarEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);


function toggleDesktopMenu(){
    const isAsideShopCartClosed = asideShopCart.classList.contains('inactive')

    if (!isAsideShopCartClosed){
        asideShopCart.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideShopCartClosed = asideShopCart.classList.contains('inactive')

    if (!isAsideShopCartClosed){
        asideShopCart.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

// Funciones para escuchar click en carrito de compras
const shopCartImg = document.querySelector(".navbar-shopping-cart")
const asideShopCart = document.querySelector(".product-detail")

shopCartImg.addEventListener('click', toggleShopCart);

function toggleShopCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    asideShopCart.classList.toggle('inactive');
}

// Construccion de la lista dinámica de productos 

const cardsContainer = document.querySelector('.cards-container');
const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Bike"',
})
productList.push({
    name: 'Notebook',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Notebook"',
})
productList.push({
    name: 'Tv',
    price: 150,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Tv"',
})
productList.push({
    name: 'Sofa',
    price: 100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Sofa"',
})
productList.push({
    name: 'Monitor',
    price: 40,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Monitor"',
})
productList.push({
    name: 'Desk',
    price: 45,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Desk"',
})

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement ('div');
        productCard.classList.add ('product-card');
    
        const productImage = document.createElement ('img');
        productImage.setAttribute ('src', product.image);
    
        const productInfo = document.createElement ('div');
        productInfo.classList.add ('product-info');
    
        const productInfoDiv = document.createElement ('div');
        
        const productPrice = document.createElement ('p');
        productPrice.innerText = '$ ' + product.price;
     
        const productName = document.createElement ('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement ('figure');
        const productImageCart = document.createElement ('img');
        productImageCart.setAttribute ('src', './icons/bt_add_to_cart.svg');
    
        cardsContainer.appendChild(productCard);
        productCard.append(productImage, productInfo);
        productInfo.append(productInfoDiv,productInfoFigure);
        productInfoDiv.append(productPrice, productName);
        productInfoFigure.appendChild (productImageCart);
    }
}
renderProducts(productList);