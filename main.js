const clickMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamburguesa = document.querySelector('.menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const cartDetail = document.querySelector('.cart-detail');
const cardsContainer = document.querySelector('.cards-container');

clickMail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click', toogleMobileMenu);
menuCarrito.addEventListener('click', toggleCarrito);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    const menuCarritoClosed = cartDetail.classList.contains('inactive');
    // Si product detail no tiene la clase active (o sea que está abierto)
    if(!menuCarritoClosed){
       cartDetail.classList.add('inactive');
    }
}
function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    cartDetail.classList.add('inactive');
}
function toggleCarrito(){
    cartDetail.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    const menuDesktopClosed = desktopMenu.classList.contains('inactive');
    if(!menuDesktopClosed){
       desktopMenu.classList.add('inactive');
    }
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 870,
    image: 'https://images.pexels.com/photos/6316067/pexels-photo-6316067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Laptop',
    price: 540,
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});


/* <div class="product-card">
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

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const divDatos = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+ product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        const figure = document.createElement('figure');

        const cartImg = document.createElement('img');
        cartImg.setAttribute('src', './icons/bt_add_to_cart.svg');

        // Colocación de cada elemento hijo dentro del padre.
        productCard.append(img, productInfo);
        productInfo.append(divDatos, figure);
        divDatos.append(productPrice, productName);
        figure.append(cartImg);
        cardsContainer.append(productCard);
    }
}

renderProducts(productList);

