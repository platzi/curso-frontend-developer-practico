const email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
productDetailCloseIcon.addEventListener('click', closeProductDetail);

email.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarrito);

function toggleMenu() {
    const isProductDetailsOpen = !shoppingCartContainer.classList.contains('inactive');
    if (isProductDetailsOpen) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');

    closeProductDetail();
}

function toggleMobileMenu() {
    const isProductDetailsOpen = !shoppingCartContainer.classList.contains('inactive');
    if (isProductDetailsOpen) {
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetail();
    mobileMenu.classList.toggle('inactive');
}
function toggleCarrito() {

    const isMobilemenuOpen = !mobileMenu.classList.contains('inactive');
  
    if (isMobilemenuOpen) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailsOpen = !productDetailContainer.classList.contains('inactive');
  
    if (isProductDetailsOpen) {
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');

    const desktopMenuOpen = !desktopMenu.classList.contains('inactive'); 
    if (desktopMenuOpen) {
        desktopMenu.classList.toggle('inactive');
    }
    
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    const desktopMenuOpen = !desktopMenu.classList.contains('inactive');
    if (desktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }
}

function closeProductDetail() {
    productDetailContainer.classList.add('inactive');
}
const productList = [];

productList.push({
    name: 'Arleicxto',
    price: 120,
    picture: './arle.png',
});

productList.push({
    name: 'Manaosman',
    price: 400,
    picture: './arle.png',
});

/*<div class="product-card">
        <img src="./arle.png" alt="">
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
    </div>
*/

function renderProducts(array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const img = document.createElement('img');
        img.setAttribute('src', product.picture);
        img.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        const productName = document.createElement('p');
        productPrice.innerHTML = "$" + product.price;
        productName.innerHTML = product.name;
        productInfoDiv.append(productName, productPrice);
    
        const productFigure = document.createElement('figure');
        const productPicture = document.createElement('img');
        productPicture.setAttribute('src', "./icons/bt_add_to_cart.svg");
    
        productFigure.append(productPicture);
        productInfo.append(productInfoDiv, productFigure);
    
        productCard.append(img, productInfo);
        cardsContainer.append(productCard);
    }
}

renderProducts(productList);
