const menuEmail         = document.querySelector('.navbar-email');
const desktoMenu        = document.querySelector('.desktop-menu');
const mobileMenu        = document.querySelector('.mobile-menu');
const burguerMenuIcon   = document.querySelector('.menu');
const menuCarritoIcon   = document.querySelector('.navbar-shopping-cart');
const producDetailAside = document.querySelector('.product-detail');
const cardContainer     = document.querySelector('.cards-container'); 

menuEmail.addEventListener       ('click', toggleDesktopMenu );
burguerMenuIcon.addEventListener ('click', toggleMobileMenu  );
menuCarritoIcon.addEventListener ('click', toggleCarritoAside);

function toggleDesktopMenu() { 
    const isAsideMenuClosed = producDetailAside.classList.contains('inactive');
    if (!isAsideMenuClosed) { producDetailAside.classList.add('inactive'); } 
    desktoMenu.classList.toggle('inactive'); 

}

function toggleMobileMenu() {
    const isAsideMenuClosed = producDetailAside.classList.contains('inactive');
    if (!isAsideMenuClosed) { producDetailAside.classList.add('inactive'); }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() { 
    //const isDesktopMenuClose = desktoMenu.classList.contains('inactive');
    //const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    mobileMenu.classList.add('inactive');
    desktoMenu.classList.add('inactive');

    // if (!isMobileMenuClosed) { mobileMenu.classList.add('inactive'); }
    // if (!isDesktopMenuClose) { desktoMenu.classList.add('inactive'); }
    
    producDetailAside.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Computadora',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName  = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCartIcon = document.createElement('img');
        productImgCartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        //Ahora nos devolvemos agregando los hijos a sus padres
        productInfoFigure.appendChild(productImgCartIcon);
    
        productInfo.append(productInfoDiv,productInfoFigure);
    
        productCard.append(img, productInfo);
    
        cardContainer.appendChild(productCard);
    }
}

renderProducts(productList);