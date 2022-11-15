const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const hamburMenuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const asideCarrito = document.querySelector('.product-detail')
const carritoIcon = document.querySelector('.navbar-shopping-cart')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburMenuIcon.addEventListener('click', toggleMobileMenu);
carritoIcon.addEventListener('click', toggleCarritoMenu);

function toggleDesktopMenu() {
    let isAsideCarritoOpen = !asideCarrito.classList.toggle('inactive');
    if(isAsideCarritoOpen) {
        asideCarrito.classList.toggle('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    let isAsideCarritoOpen = !asideCarrito.classList.toggle('inactive');
    if(isAsideCarritoOpen) {
        asideCarrito.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoMenu() {
    let isMobileMenu = !mobileMenu.classList.toggle('inactive');
    let isDesktopMenu = !desktopMenu.classList.toggle('inactive');
    if(isMobileMenu) {
        mobileMenu.classList.toggle('inactive');
    } else if(isDesktopMenu) {
        desktopMenu.classList.toggle('inactive');
    }
    asideCarrito.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://www.lg.com/mx/images/televisores/md06124536/gallery/70UM73_DM01.jpg"
});
productList.push({
    name: "Computadora",
    price: 640,
    image: "https://www.altonivel.com.mx/wp-content/uploads/2020/05/amazon1.jpg"
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

for(product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.setAttribute('src',product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

            const productInfoDiv = document.createElement('div');
                const productInfoP1 = document.createElement('p');
                productInfoP1.innerHTML = '$'+product.price;
                const productInfoP2 = document.createElement('p');
                productInfoP2.innerText = product.name;
            productInfoDiv.append(productInfoP1,productInfoP2);

            const productFigure = document.createElement('figure');
                const productFigureLogo = document.createElement('img');
                productFigureLogo.setAttribute('src','./icons/bt_add_to_cart.svg')
                productFigure.appendChild(productFigureLogo);
    
        productInfo.append(productInfoDiv,productFigure);

    productCard.append(productImage,productInfo)
    cardsContainer.appendChild(productCard);
}