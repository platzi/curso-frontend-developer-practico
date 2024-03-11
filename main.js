const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');

const menuHamburger = document.querySelector('.menuHamburger');
const mobileMenu = document.querySelector('.mobile-menu');

const carritoCompras = document.querySelector('.carritoCompras');
const detallecarrito = document.querySelector('#shoppingCartContainer');

menuEmail.addEventListener('click', toggleDesktopMenu); //Crear funcion con ese nombre

function toggleDesktopMenu() {
    detallecarrito.classList.add('inactive');
    desktopmenu.classList.toggle('inactive');
}

menuHamburger.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {

    detallecarrito.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

carritoCompras.addEventListener('click', toggleproduct)

function toggleproduct() {
    mobileMenu.classList.add('inactive');
    detallecarrito.classList.toggle('inactive');

}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Celular',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Televisor',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Celular',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Televisor',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
/*
<div class="product-card">
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
</div> 
*/

const cardContainer = document.querySelector('.cards-container')

function renderProduct(arr){
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const Productimg = document.createElement('img');
        Productimg.setAttribute('src', product.image);
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInforFifure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInforFifure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInforFifure);
    
        productCard.appendChild(Productimg);
        productCard.appendChild(productInfo);
    
        cardContainer.appendChild(productCard);
    }
}

renderProduct(productList);
