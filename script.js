const menuEmail = document.querySelector('.navbar-email');
const iconburger = document.querySelector('.menu');
const iconCart = document.querySelector('.navbar-shopping-cart');


const asideProductCart = document.querySelector('#productCartShow');
const mobileMenu = document.querySelector('.mobile-menu');
const desktopMenu = document.querySelector('.desktop-menu');
const containercards = document.querySelector('.cards-container');


//Esta forma se hizo en la clase y es mas larga

// iconburger.addEventListener('click', toggleMobileMenu);
// iconCart.addEventListener('click', toggleCartAside);


//funciones para alternar los distintos menus

// function toggleDesktopMenu(){
//     const isasideProductCartClosed = asideProductCart.classList.contains('inactive');

//     if(!isasideProductCartClosed) {
//         asideProductCart.classList.add('inactive');
//     }
//     desktopMenu.classList.toggle('inactive');
// }

//tenemos que cerrar el carrito cuando abrimos el menu

// function toggleMobileMenu(){
//     const isasideProductCartClosed = asideProductCart.classList.contains('inactive');

//     if(!isasideProductCartClosed) {
//         asideProductCart.classList.add('inactive');
//     }
//     mobileMenu.classList.toggle('inactive');
// }

// function toggleCartAside(){

//     const isDesktopMenuClosed = desktopMenu.classList.contains('inactive'); //
//     const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

// //si tenemos el menu abierto lo cerramos al abrir el  carrito

//     if(!isMobileMenuClosed) {
//         mobileMenu.classList.add('inactive');
//     }

//si esta abierto el menu desktop lo cerramos al abrir el aside cart

//     if(!isDesktopMenuClosed){

//         desktopMenu.classList.add('inactive');
//     }
//     asideProductCart.classList.toggle('inactive');
// }

// * otra forma mas corta per no tan descriptiva de alternar entre menus para abrir uno y cerrar el otro es la siguiente

iconburger.addEventListener('click',showMobileMenu);

function showMobileMenu() {
    asideProductCart.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
};

//carrito desplegable version mobile

iconCart.addEventListener('click',showasideProductCart);

function showasideProductCart() {
    mobileMenu.classList.add('inactive');
    asideProductCart.classList.toggle('inactive');
    desktopMenu.classList.add('inactive'); //con este oculto el menu de email cuando esta en desktop
}

menuEmail.addEventListener('click', showDesktopMenu);

//Se muestra en desktop el menu email cuando aside esta inactivo
function showDesktopMenu(){   
    asideProductCart.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}




const productList =[];  //Comanzamos a mostrar los productos de nuestro ecommerce

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Compu',
    price: 720,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'TV',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

/* <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> */

//manipulamos el DOM creando elementos dinamicos

function renderProducts (arr){
    for(product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productFigure = document.createElement('figure');
        const productImgIcon = document.createElement('img');
        productImgIcon.setAttribute('src', './icons/bt_add_to_cart.svg');

        // ahora metemos cada uno de estos elementos dentro del padre correspondiente
        // es decir agregamos al arbol DOM existente utilizando appenchild
        productFigure.appendChild(productImgIcon);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        productInfo.appendChild(productFigure);
        productInfo.appendChild(productInfoDiv);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        containercards.appendChild(productCard);
    }
}

renderProducts(productList);