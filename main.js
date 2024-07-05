const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenuIcon = document.querySelector('.menu');
const carritoMenuIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenuIcon.addEventListener('click', toggleMobileMenu);
carritoMenuIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');   
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {//esta funcion y toggleCarritosAside funciona para quitar mobileMenu u viceversa aside para que no se encimen
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');   
    }

    mobileMenu.classList.toggle('inactive'); //inactive(html) funciona para que el menu al iniciar la pag este oculto hasta dar el click
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed | !isDesktopMenuClosed) {
        mobileMenu.classList.add('inactive');
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
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Cama',
    price: 2500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Motocierra',
    price: 1250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
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

      function renderProducts(arr) {
        for (product of productList) {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
        
            const img = document.createElement('img');
            img.setAttribute('src', product.image)
        
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
        
            const productInfDiv = document.createElement('div');
        
            const productPrice = document.createElement('p');
            productPrice.innerText = '$' + product.price;
        
            const productName = document.createElement('p');
            productName.innerText = product.name;
        
            productInfDiv.appendChild(productPrice);
            productInfDiv.appendChild(productName);
        
            const productInfFigure = document.createElement('figure');
            const productImgCart = document.createElement('img');
            productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg");
        
            productInfFigure.appendChild(productImgCart);
        
            productInfo.appendChild(productInfDiv);
            productInfo.appendChild(productInfFigure);
        
            productCard.appendChild(img);
            productCard.appendChild(productInfo);
        
            cardsContainer.appendChild(productCard);
        }
      }
      renderProducts(productList);