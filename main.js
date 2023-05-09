const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHambIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHambIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


// aqui vamos a hacer que aparezca o desaparezca el menu
// en desktop:
function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle("inactive");
};

// en mobile:
function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle("inactive");
};

// carrito de compras 
function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isMenuDesktopClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isMenuDesktopClosed) {
        desktopMenu.classList.add('inactive');
        
    }

    // abrir el aside

    shoppingCartContainer.classList.toggle("inactive");

    // si el mobileMenu esta open, hay que cerrarlo

};

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Camera',
    price: 600,
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Wedding Heels',
    price: 210,
    image: "https://images.pexels.com/photos/15137240/pexels-photo-15137240.jpeg?auto=compress&cs=tinysrgb&w=400"
});
productList.push({
    name: 'Stethoscope',
    price: 100,
    image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=400"
});
productList.push({
    name: 'Garlic Masher',
    price: 10,
    image: "https://images.pexels.com/photos/194101/pexels-photo-194101.jpeg?auto=compress&cs=tinysrgb&w=400"
});
productList.push({
    name: 'World Map',
    price: 80,
    image: "https://images.pexels.com/photos/3747562/pexels-photo-3747562.jpeg?auto=compress&cs=tinysrgb&w=400"
});
productList.push({
    name: 'MacBook',
    price: 290,
    image: "https://images.pexels.com/photos/6446708/pexels-photo-6446708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Office Chair',
    price: 55,
    image: "https://images.pexels.com/photos/6044919/pexels-photo-6044919.jpeg?auto=compress&cs=tinysrgb&w=400"
});
productList.push({
    name: 'Boxing Gloves',
    price: 150,
    image: "https://images.pexels.com/photos/6456153/pexels-photo-6456153.jpeg?auto=compress&cs=tinysrgb&w=400"
});
productList.push({
    name: 'Dumbbells',
    price: 49,
    image: "https://images.pexels.com/photos/4397833/pexels-photo-4397833.jpeg?auto=compress&cs=tinysrgb&w=400"
});
productList.push({
    name: 'Iphone X',
    price: 400,
    image: "https://images.pexels.com/photos/5083411/pexels-photo-5083411.jpeg?auto=compress&cs=tinysrgb&w=400"
});

/* <div class="product-card">
<img
  src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  alt="">
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

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    //    product= {name, price, image} -> product.image

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);


    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');


    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);

}



