const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHam = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('#shoppingCart');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDeskotpMenu); 
menuHam.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarritoMenu);

function toggleDeskotpMenu() {
    const isAsideClosed = shoppingCart.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppingCart.classList.toggle('inactive');
        }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCart.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppingCart.classList.toggle('inactive');
        }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (!isMobileMenuClosed) {
    mobileMenu.classList.toggle('inactive');
    }
    if (!isDesktopMenuClosed) {
    desktopMenu.classList.toggle('inactive');
    }
    
    shoppingCart.classList.toggle('inactive');
}
const productlist = [];
productlist.push({
    name: 'Bike',
    price: 170,
    image: 'https://olimpica.vtexassets.com/arquivos/ids/524355/Bicicleta-RALI-RIO-Mec%EF%BF%BDnica-29-Hombre--Negro-Verde.jpg?v=637558583193570000'
}, {
    name: 'TV',
    price: 500,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/latin/un55au7000pxpa/gallery/latin-uhd-au7000-un55au7000pxpa-417844453?$720_576_PNG$'
}, {
    name: 'iPhone',
    price: 1000,
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-max-graphite-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202942000'
}, {
    name: 'Macbook',
    price: 5000,
    image: 'https://itechcolombia.co/wp-content/uploads/2022/08/mbp-silver-select-202206.png'
}, {
    name: 'iPad',
    price: 900,
    image: 'https://http2.mlstatic.com/D_NQ_NP_960977-MLA46962272198_082021-O.jpg'
});
/*
<!-- <div class="product-card">
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
</div> -->
*/
for (product of productlist){
   const productCard =  document.createElement('div');
   productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.image);

    const productInfo =  document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv =  document.createElement('div');
    
    const productPrice =  document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName =  document.createElement('p');
    productName.innerText = product.name;
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure =  document.createElement('figure');
    const productimg = document.createElement('img');
    productimg.setAttribute('src', './icons/bt_add_to_cart.svg');
    productInfoFigure.appendChild(productimg);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}