const desktopMenu = document.querySelector('.desktop-menu');
const navbarEmail = document.querySelector('.navbar-email');
const hamburgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const closeAsideIcon = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');


navbarEmail.addEventListener('click', toggleMenu);
hamburgerIcon.addEventListener('click', toggleMobileMenu);
carritoIcon.addEventListener('click', toggleAside);
closeAsideIcon.addEventListener('click', toggleAside);


function toggleMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
// Pregunta si el aside se está mostrando en pantalla es decir que no contiene la clase inactive
// si está activo le hace toggle a la clase para que se agregue la clase inactive y ya no aparezca en pantalla
    if(!isAsideClosed) {
        aside.classList.toggle('inactive');
    }
// luego de esa verificación si hace toggle del desktop menu para que no quede una cosa sobre otra y se pueda ver bien
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
// Pregunta si el aside se está mostrando en pantalla es decir que no contiene la clase inactive
// si está activo le hace toggle a la clase para que se agregue la clase inactive y ya no aparezca en pantalla
    if(!isAsideClosed) {
        aside.classList.toggle('inactive');
    }
// luego de esa verificación si hace toggle del mobile menu para que no quede una cosa sobre otra
    mobileMenu.classList.toggle('inactive');
}

function toggleAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed) {
        mobileMenu.classList.toggle('inactive');
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
    name: 'MacBook Air',
    price: 980,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Chair',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


// <!-- <div class="product-card">
//         <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//         <div class="product-info">
//           <div>
//             <p>$120,00</p>
//             <p>Bike</p>
//           </div>
//           <figure>
//             <img src="./icons/bt_add_to_cart.svg" alt="">
//           </figure>
//         </div>
//       </div> -->

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName= document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const figure = document.createElement('figure');
        const figureImage = document.createElement('img');
        figureImage.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        figure.appendChild(figureImage);
    
        productInfo.appendChild(figure);
        productInfo.appendChild(productInfoDiv);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);