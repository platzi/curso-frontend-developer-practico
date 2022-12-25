
const menuEmail = document.querySelector('.navbar-email');
const buttonMenuMobile = document.querySelector('.menu')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu')
const buttonShoppingCart = document.querySelector('.navbar-shopping-cart');
const asideOrders = document.querySelector('.cart-detail')
const mainContent = document.querySelector('.main-content')
const modals = document.querySelectorAll('.modals')
const productCard = document.querySelector('.product-card');
const productDetail = document.querySelector('.product-detail');
const closeProductDetail = document.querySelector('.product-detail-close');




// Array con Listado de productos


const productList = [];

productList.push({
    name: 'bike',
    price: 120,
    image: "https://p.vitalmtb.com/photos/users/37957/setup_checks/30277/photos/45780/original_20151024_150427.jpg?1445696550",
});
productList.push({
    name: 'laptopte',
    price: 3200,
    image: "https://p.vitalmtb.com/photos/users/37957/setup_checks/30277/photos/45780/original_20151024_150427.jpg?1445696550",
});
productList.push({
    name: 'mobile',
    price: 760,
    image: "https://p.vitalmtb.com/photos/users/37957/setup_checks/30277/photos/45780/original_20151024_150427.jpg?1445696550",
});


function renderProducts(array){
    
    for (product of array){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productInfo = `
            <img src=${product.image} alt="">
            <div class="product-info">
            <div>
                <p>${product.price}</p>
                <p>${product.name}</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
            </div>
        `;

        productCard.innerHTML = productInfo;
        const productsContainer = document.querySelector('.cards-container');
        productsContainer.appendChild (productCard);
        productCard.addEventListener('click', openProductDetails);
    }
  
}

function openProductDetails(){
    // Abrimos los detalles del producto
    productDetail.classList.remove('inactive');

    // Cerramos el resto de modales que puedan estar abierto, uno por uno
    asideOrders.classList.add('inactive');
    desktopMenu.classList.add('inactive');

}

function closeModalProductDetail(){
    productDetail.classList.add('inactive');
}

function toggleMenuDesktop() {
    // Abrimos el Menu Desktop si estuviera cerrado
    desktopMenu.classList.toggle('inactive');

    // Cerramos el resto de modales que puedan estar abierto, uno por uno
    asideOrders.classList.add('inactive');
    productDetail.classList.add('inactive');
}

function toggleMenuMobile() {
    // Abrimos el Menu Desktop si estuviera cerrado
    mobileMenu.classList.toggle('inactive');

    // Cerramos el resto de modales que puedan estar abierto, uno por uno
    asideOrders.classList.add('inactive');
    productDetail.classList.add('inactive');
}

function toggleShoppingCart(){
   // Abrimos el Menu Desktop si estuviera cerrado
    asideOrders.classList.toggle('inactive');

    // Cerramos el resto de modales que puedan estar abierto, uno por uno
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
}


closeProductDetail.addEventListener('click', closeModalProductDetail);
buttonShoppingCart.addEventListener('click', toggleShoppingCart);
menuEmail.addEventListener('click', toggleMenuDesktop);
buttonMenuMobile.addEventListener('click', toggleMenuMobile);
renderProducts(productList);


