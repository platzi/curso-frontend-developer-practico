const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Computador',
    price: 540,
    image: 'https://images.pexels.com/photos/326511/pexels-photo-326511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

/* este código es comentado y sólo para imitar la versión del html desde js: 
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
</div> */
function renderProducts(arr){  //
    for (product of arr) {
        const productCard = document.createElement('div'); //creamos el div
        productCard.classList.add('product-card');  //asignamos la clase
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image); // por ser una imagen no se agrega clase pero si el src pero con la imagen que estamos empleando desde js, y estas son objetos que tienen nombre, precio e imagen, como en el siguiente objeto
        // product= {name, price, image} -> product.image
    
        const productInfo = document.createElement('div'); //creamos el div
        productInfo.classList.add('product-info');  //asignamos la clase
    
        const productInfoDiv = document.createElement('div'); //creamos el div
        
        const productPrice = document.createElement('p'); //creamos el párrafo para el precio
        productPrice.innerText = '$' + product.price //insertamos el precio
        const productName = document.createElement('p'); //creamos el párrafo para el nombre
        productName.innerText = '$' + product.name //insertamos el nombre
    
        productInfoDiv.appendChild(productPrice); //para agregar precio
        productInfoDiv.appendChild(productName); //para agregar nombre
        
        const productInfoFigure = document.createElement('figure'); //creamos el figure
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart); //para agregar imagen
        
        productInfo.appendChild(productInfoDiv); //para agregar div
        productInfo.appendChild(productInfoFigure); //para agregar imagen
    
        productCard.appendChild(productImg); //para agregar imagen
        productCard.appendChild(productInfo); //para agregar la info
    
        cardsContainer.appendChild(productCard); //para agregar la tarjeta
    }
}

renderProducts(productList);