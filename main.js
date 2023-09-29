const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carBuy = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');


hamMenu.addEventListener('click', toggleMobileMenu);
navEmail.addEventListener('click', toggleDestopMenu);
carBuy.addEventListener('click', toggleCarBuy);


//Esta funcion alternará la clase inactive
function toggleDestopMenu() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isShoppingCartContainerOpen = !carBuy.classList.contains('inactive');

    if (isShoppingCartContainerOpen) {
        shoppingCartContainer.classList.add('inactive');
    }
   
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
     //El signo "!" funciona para negar una condicion
    const isShoppingCartContainerOpen = !carBuy.classList.contains('inactive');
    const isdesktopMenuOpen = !desktopMenu.classList.contains('inactive');
   
    if (isdesktopMenuOpen) {
        desktopMenu.classList.add('inactive')
    }
    
    if (isShoppingCartContainerOpen) {
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarBuy() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isdesktopMenuOpen = !desktopMenu.classList.contains('inactive');
   
    if (isdesktopMenuOpen) {
        desktopMenu.classList.add('inactive')
    }

    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');

}

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Pantalla',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'PC',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

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
    </div>*/

//recorrido de array con for
    for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    //Primero hay que crear los elementos antes de editarlos
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    //product = {name, price, image} -> product.image

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    const productprice = document.createElement('p');
    productprice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg' )

    productInfoFigure.appendChild(productImgCart);
    
    productInfoDiv.appendChild(productName); 
    productInfoDiv.appendChild(productprice);
       
    productInfo.appendChild(productInfoFigure);
    productInfo.appendChild(productInfoDiv);
    
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    
    cardsContainer.appendChild(productCard);
}