const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurgerIcon = document.querySelector('.menu');
const menuCArritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click', toggleMobileMenu);
menuCArritoIcon.addEventListener('click', toggleCarritoAside);

//* Función que revisa si el contenido del carrito está abierto para cerrarlo al dar click al "Menú en version Desktop"
function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');    

    if (!isAsideClosed) {
        aside.classList.add('inactive');            
    }

    desktopMenu.classList.toggle('inactive');
}

//* Función que revisa si el contenido del carrito está abierto para cerrarlo al dar click al "Menú en version Mobile"
function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');    

    if (!isAsideClosed) {
        aside.classList.add('inactive');            
    }

    mobileMenu.classList.toggle('inactive');
}

//* Funcion que revisa si el menú en version "Mobile" o el menú en versión "Desktop" está abierto para cerrarlos al dar click al carrito
//* Permite abrir o cerrar el contenido del carrito
function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');    
    const isEmailclosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed || !isEmailclosed) {
        mobileMenu.classList.add('inactive');    
        desktopMenu.classList.add('inactive')   ;     
    }

    aside.classList.toggle('inactive');

}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Tv',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pc',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product= {name, price, image} -> product.image
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
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
    
        cardsContainer.appendChild(productCard);
        
    } /*
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
    </div>
    */
}

renderProducts(productList);