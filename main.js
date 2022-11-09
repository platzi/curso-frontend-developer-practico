const navbarEmail = document.querySelector('.navbar-email'); // Email en forma de texto que despliega el menu en version desktop
const desktopMenu = document.querySelector('.desktop-menu');
const navbarMobile = document.querySelector('.menu'); // Imagen en el navbar que despliega el menu en version mobile
const mobileMenu = document.querySelector('.mobile-menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart'); // Imagen en el navbar que despliega el carrito de compras.
const shoppingCart = document.querySelector('#shopping-cart');
const cardsContainer = document.querySelector('.cards-container'); //Para desplegar y setear las tarjetas con informacion de productos dentro de este contenedor
const productDetailContainer = document.querySelector('#product-datail');
const productDetailClose = document.querySelector('.product-detail-close');

// Lista de productos, las propiedades de cada uno de ellos son > {name, price, src}
const products = [
    {
        name: "Having dinner",
        price: 999,
        src: "https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Sofa brown",
        price: 999,
        src: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Pillows kit",
        price: 999,
        src: "https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Living room set",
        price: 999,
        src: "https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Bookshelf",
        price: 999,
        src: "https://images.pexels.com/photos/683929/pexels-photo-683929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Gaming chair",
        price: 999,
        src: "https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Piece of Art",
        price: 999,
        src: "https://images.pexels.com/photos/1067556/pexels-photo-1067556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Bedroom stack",
        price: 999,
        src: "https://images.pexels.com/photos/6480198/pexels-photo-6480198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Meeting setup",
        price: 999,
        src: "https://images.pexels.com/photos/273671/pexels-photo-273671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Piece kit",
        price: 999,
        src: "https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Carpet cool",
        price: 999,
        src: "https://images.pexels.com/photos/3965509/pexels-photo-3965509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Office kit",
        price: 999,
        src: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]

navbarEmail.addEventListener('click', toggleDesktopMenu);
navbarMobile.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleShoppingCart);
productDetailClose.addEventListener('click', closeProductDetail);

function closeComponentsToDisplayMenu(){
    const isShoppingCartOpen = !shoppingCart.classList.contains('inactive');
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');
    if(isShoppingCartOpen){
        shoppingCart.classList.add('inactive')
    }
    if(isProductDetailOpen){
        closeProductDetail();
    }
}

function toggleDesktopMenu(){
    closeComponentsToDisplayMenu();
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    closeComponentsToDisplayMenu();
    mobileMenu.classList.toggle('inactive');
}

function closeMobileOrDesktopMenu(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    if(isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    }
    if(isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }
}

function toggleShoppingCart(){
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');
    closeMobileOrDesktopMenu();
    if(isProductDetailOpen){
        productDetailContainer.classList.add('inactive');
    }
    shoppingCart.classList.toggle('inactive');
}

function openProductDetail(){
    const isShoppingCartOpen = !shoppingCart.classList.contains('inactive'); 
    closeMobileOrDesktopMenu();
    if (isShoppingCartOpen){
        shoppingCart.classList.add('inactive');
    }
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetail(){
    productDetailContainer.classList.add('inactive');
}

function displayProducts(products){
    for(product of products){
    
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.src);
        productImg.setAttribute('alt', product.name);
        productImg.addEventListener('click', openProductDetail);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.textContent = `$ ${product.price}`;
    
        const productName = document.createElement('p');
        productName.textContent = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const imgCart = document.createElement('img');
        imgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        imgCart.setAttribute('alt', `Agregar ${product.name} al carrito`);
    
        productInfoFigure.appendChild(imgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

displayProducts(products);
