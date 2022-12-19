// Variables y constantes
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.burgerMenu');
const mobileBurgerMenu = document.querySelector('.mobile-menu');
const shoppingCartBtn = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

// Listeners para ventanas flotantes
menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCartBtn.addEventListener('click', toggleShoppingCart);

// desplegar menu de cuenta
function toggleDesktopMenu() {
    productDetail.classList.add('inactive'); // clase al 'product-detail'
    desktopMenu.classList.toggle('inactive');
}
// desplegar menu mobile
function toggleMobileMenu(){
    productDetail.classList.add('inactive');
    mobileBurgerMenu.classList.toggle('inactive');
}

// desplegar shopping cart
function toggleShoppingCart(){
    mobileBurgerMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive'); // inactive al 'desktop-menu'
    productDetail.classList.toggle('inactive');
}

// Muestreo de las cards hardcodeado
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Flowe Pot',
    price: 16,
    image: 'https://www.ikea.com/gb/en/images/products/nypon-plant-pot-in-outdoor-grey__0901141_pe700363_s5.jpg?f=s',
});
productList.push({
    name: 'Garden Turtle Statue',
    price: 55,
    image: 'https://m.media-amazon.com/images/I/51ZiXaGfgBL._AC_.jpg',
});
productList.push({
    name: 'outdoor swing',
    price: 350,
    image: 'https://sc04.alicdn.com/kf/Hcc6b8791ea644a8cb9fa809a42e3d0f2N/234021430/Hcc6b8791ea644a8cb9fa809a42e3d0f2N.jpg',
});
productList.push({
    name: 'Barbecue Grill',
    price: 200,
    image: 'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-use-a-charcoal-grill-hero.jpg',
});
productList.push({
    name: 'Bicycle Planter',
    price: 45,
    image: 'https://www.windandweather.com/medias/sys_master/images/images/hf7/h26/13055747620894/13055747620894.jpg',
});

function renderProductCards(arrayProducts){
    for (product of arrayProducts) {
        // Crear toda la estructura de la card
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        //etiqueta img 
        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', product.image);
        
        // Div de información 
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const justDivAlone = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        // figura de carrito
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        // anidando etiquetas correctamente.
        productCard.append(imgProduct, productInfo);
        productInfo.appendChild(justDivAlone);
        justDivAlone.append(productPrice, productName);
        productInfoFigure.appendChild(productImgCart);
    
        //Metemos todo en el contenedor padre
        cardsContainer.appendChild(productCard);
    }
}
renderProductCards(productList);