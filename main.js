
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleMenuCarrito);

/* platzi@example.com*/
function toggleDesktopMenu() {
    const IsproductDetailClosed = productDetail.classList.contains('inactive');
    
    desktopMenu.classList.toggle('inactive');
    if (!IsproductDetailClosed) {
        productDetail.classList.add('inactive');
    } 
}

/* Agregando funcionabilidad al boton hamburguesa del menu cuando se esta en modo Mobile.*/ 
function toggleMobileMenu() {
    const IsproductDetailClosed = productDetail.classList.contains('inactive');
    mobileMenu.classList.toggle('inactive');
    if (!IsproductDetailClosed) {
        productDetail.classList.add('inactive');
    } 
}

/* Agregando funcionabilidad al boton del carrito y mejorar la experiencia del usuario */
function toggleMenuCarrito() {
    const IsmobileMenuClosed = mobileMenu.classList.contains('inactive');
    const IsdesktopMenuClosed = desktopMenu.classList.contains('inactive');
    productDetail.classList.toggle('inactive');
    if (!IsmobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } else if (!IsdesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Pantalla',
    price: 200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Ordenador',
    price: 1500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Laptop',
    price: 2500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Impresora',
    price: 465,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
/*  <div class="product-card">
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



function renderProducts(Array) {
    for (product of Array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = ` $ ${product.price}`;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
    
        const img1 = document.createElement('img');
        img1.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(img1);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(img, productInfo);
    
        cardsContainer.append(productCard);
    }
}

renderProducts(productList);
