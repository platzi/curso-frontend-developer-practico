const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        // Si el mobileMenu está open, hay que cerrarlo
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        // Si el mobileMenu está open, hay que cerrarlo
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside(){
    // Preguntamos si estos componentes tienen en sus clases, la clase .inactive
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const productDetailClosed = productDetailContainer.classList.contains('inactive');

        
    if (!isMobileMenuClosed){
        // Si el mobileMenu está open, hay que cerrarlo
        mobileMenu.classList.add('inactive');
    }

    if (!productDetailClosed){
        // Si el mobileMenu está open, hay que cerrarlo
        productDetailContainer.classList.add('inactive');
    }
    
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

// Array que devolverá la consulta a la API Rest
// En este caso simula una lista de productos de una BD
const productList = [];
// push() -> inserta un nuevo elemento al final de un array
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Computadora',
    price: 350,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
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
</div>  */
function renderProducts(arr){
    // Acceder a cada elemento de cada objeto con for of
    for(product of arr){
        // createElement() -> crea elementos HTML
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        // Con setAttribute establecemos atributos a elementos HTML
        productImg.setAttribute('src', product.image);

        // Función para abrir un aside cuando se da clic a una imagen de producto
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productIconCart= document.createElement('img');
        productIconCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        // appendChild() -> inserta elementos HTML dentro de otro
        productInfoFigure.appendChild(productIconCart);

        // Maquetación HTML desde JavaScript
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        // Contenedor principal, cree como hijo a productCard
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);