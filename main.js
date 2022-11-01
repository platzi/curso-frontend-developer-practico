const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHambIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const toggleShoping = document.querySelector('.navbar-shopping-cart')
const shoppingCart = document.querySelector('.product-detail');

const productContainer = document.querySelector('.cards-container');
navEmail.addEventListener('click', toggleMenuDesktop);
menuHambIcon.addEventListener('click', toggleMenuMobile);
toggleShoping.addEventListener('click', toggleShoppingCar);

function toggleMenuDesktop(event) {
    const isAsideClosed = shoppingCart.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppingCart.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive')
    
}

function toggleMenuMobile(event) {
    const isAsideClosed = shoppingCart.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppingCart.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive')
    
}
function toggleShoppingCar(event) {
    const isMobileMenuClosed = !mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    shoppingCart.classList.toggle('inactive')
}

const productList = [];
productList.push({
    nombre: 'Bike',
    precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    nombre: 'Pantalla',
    precio: 1900,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    nombre: 'Monitor',
    precio: 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
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

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.precio;
        const productName = document.createElement('p');
        productName.innerText = product.nombre;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        productContainer.appendChild(productCard);
    }
}

renderProducts(productList);