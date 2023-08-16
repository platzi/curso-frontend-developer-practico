const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click', toggleMobilepMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    //Si el aside esta abierto lo cerramos al hacer click al menu hamburguesa
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    //Si el aside esta abierto lo cerramos al hacer click al menu hamburguesa
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); //contains: pregunta si existe cierta clase. Nos devuelve true o false
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    //Si el menu mobile esta abierto lo cerramos al hacer click al carrito
    if (!isMobileMenuClosed || !isDesktopMenuClosed) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }


    shoppingCartContainer.classList.toggle('inactive');
}


//Codigo para que se vean todos los productos 
const productList = [];

productList.push({ //Agregar los elementos del producto a traves de un objeto
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({ //Agregar los elementos del producto a traves de un objeto
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({ //Agregar los elementos del producto a traves de un objeto
    name: 'Laptop',
    price: 1000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
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



const renderProducts = arr => { //Funcion para maquetar la lista de productos dinamicas
    for (prodcut of arr) { //Añadir productos al html
        const productCard = document.createElement('div'); //Creando un div
        productCard.classList.add('product-card'); //Agregando una clase al div
    
        const productImg = document.createElement('img'); //Creando un img
        productImg.setAttribute('src', prodcut.image); //Con product.image le agregamos el url correspondiente a cada producto. Estos url se encuentrar en los objetos que estan dentro del array productList
    
        const productInfo = document.createElement('div'); //Creando un div
        productInfo.classList.add('product-info'); //Agregando una clase al div
    
        const productInfoDiv = document.createElement('div'); 
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + prodcut.price; //Agregando texto a nuestro p. Agregando el precio para cada producto
    
        const productName = document.createElement('p');
        productName.innerText = prodcut.name; //Agregando texto a nuestro p. Agregando el nombre para cada producto
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        //Haciendo la estructura de padres e hijos
        productInfoFigure.appendChild(productImgCart); //Metiendo la img dentro del figure
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    
    }
} 

renderProducts(productList);