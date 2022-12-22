const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cart = document.querySelector('.navbar-shopping-cart');
const cartList = document.querySelector('.product-cart');
const cardsContainer = document.querySelector('.cards-container');

//eventos de los menus de opciones
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburger.addEventListener('click', toggleMobileMenu);
cart.addEventListener('click', toggleCart);

function toggleDesktopMenu(){
    const isCartListClosed = cartList.classList.contains('inactive');
    if(!isCartListClosed){
        cartList.classList.add('inactive');  
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isCartListClosed = cartList.classList.contains('inactive');
    if(!isCartListClosed){
        cartList.classList.add('inactive');  
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    
    cartList.classList.toggle('inactive');
}

//array de productos
const productList = [];
productList.push({
    name: 'spiderman',
    price: 249.00,
    image: 'https://i.ibb.co/fdrwvm4/Captura-de-pantalla-2022-11-10-154846.png',
});

productList.push({
    name: 'iPhone 13',
    price: 2089.00,
    image: 'https://i.ibb.co/tHjPCP3/18436-0-zero-300-Wx300-H-product-Card.png',
});

productList.push({
    name: 'Galaxy S21',
    price: 2229.00,
    image: 'https://i.ibb.co/mCqGp3S/Captura-de-pantalla-2022-11-13-134913.png',
});

/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/

//mostrar productos
function renderizarProductos(array){
    //recorrer el array
    for(product of array){
        //creamos elementos HTML
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const div = document.createElement('div');
        
        const precio = document.createElement('p');
        precio.innerText='S/' + product.price;

        const nombre = document.createElement('p');
        nombre.innerText = 'S/' + product.name;

        const figure = document.createElement('figure');
        const icon = document.createElement('img');
        icon.setAttribute('src', './icons/bt_add_to_cart.svg');

        //insertamos el icon dentro de figure
        figure.appendChild(icon);
        //insertamos el precio y el nombre dentro del div
        div.append(precio, nombre);
        //insertamos el div y figure dentro de product info
        productInfo.append(div, figure);
        //insertamos productIngo y img dento de productCard
        productCard.append(img, productInfo);

        //insertamos el productCard al cards-container
        cardsContainer.appendChild(productCard);
    }
}

//enviamos el array de productos como argumento
renderizarProductos(productList);

