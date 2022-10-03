const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const carritoCompras = document.querySelector('.navbar-shopping-cart');
const mainMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    const desktopMenuClose = aside.classList.contains('inactive');
    if (!desktopMenuClose) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive')
}

mainMobileMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    const isMobileMenuOpen = aside.classList.contains('inactive');
    if (!isMobileMenuOpen) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive')
}

carritoCompras.addEventListener('click', toggleCarritoAside);


function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isMenuDesktopClosed = desktopMenu.classList.contains('inactive');
    if (!isMobileMenuClosed || !isMenuDesktopClosed) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

/*<div class="product-card">
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
  </section>*/

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Computer',
    price: 820,
    image: 'https://static8.depositphotos.com/1338574/829/i/950/depositphotos_8299228-stock-photo-laptop-with-blue-graphics.jpg'
});

productList.push({
    name: 'CellPhone',
    price: 360,
    image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
});

productList.push({
    name: 'Tv',
    price: 270,
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=757&q=80'
});

function renderProducts(arr) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const figure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        figure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(figure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
 
