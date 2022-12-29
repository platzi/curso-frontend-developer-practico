const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconMobileMenu = document.querySelector('#iconMobileMenu');
const iconCarrito = document.querySelector('#iconCarrito');
const carrito = document.querySelector('#carrito');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive');
});

iconMobileMenu.addEventListener('click', () => {
    let isCarritoOpen = !carrito.classList.contains('inactive');
    if(isCarritoOpen) {
        carrito.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
});

iconCarrito.addEventListener('click', () => {
    let isMobileMenu = !mobileMenu.classList.contains('inactive');
    if(isMobileMenu) {
        mobileMenu.classList.toggle('inactive');
    }
    carrito.classList.toggle('inactive');
});


// Creacion de cada producto

const productList = []

productList.push({
    name: 'Bicicleta',
    price: 1500,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Moto',
    price: 5000,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

function renderProducts(array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.setAttribute('class', 'product-card');
    
        const image = document.createElement('img');
        image.setAttribute('src', product.img);
    
        const productInfo = document.createElement('div');
        productInfo.setAttribute('class', 'product-info');
    
        const productPriceName = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productPriceName.appendChild(productPrice);
        productPriceName.appendChild(productName);
    
        const figureAddToCart = document.createElement('figure');
    
        const addToCart = document.createElement('img');
        addToCart.setAttribute('src', "./icons/bt_add_to_cart.svg"); 
        
        figureAddToCart.appendChild(addToCart);
    
        productInfo.appendChild(productPriceName);
        productInfo.appendChild(figureAddToCart);
    
        productCard.appendChild(image);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);