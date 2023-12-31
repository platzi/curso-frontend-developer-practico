const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', showDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function showDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive'); 

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {

    const isAsideClosed = mobileMenu.classList.contains('inactive'); 

    if (!isAsideClosed) {
       aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

    closeProductDetailAside();
}

function toggleCarritoAside() {
    const isMobileClosed = mobileMenu.classList.contains('inactive'); 
  
    if (!isMobileClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive'); 
  
    if (!isMobileClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');

}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike', 
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'TV Samsung', 
    price: 320,
    image: 'https://tiribellihogar.com.ar/media/catalog/product/cache/5be8613c49569c873a50ed7e321cb477/d/i/dise_o_sin_t_tulo_-_2022-01-26t142813.738.png',
});
productList.push({
    name: 'Computadora', 
    price: 420,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg',
});
productList.push({
    name: 'Licuadora', 
    price: 120,
    image: 'https://images.pexels.com/photos/6824663/pexels-photo-6824663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Batidora', 
    price: 120,
    image: 'https://images.pexels.com/photos/6294246/pexels-photo-6294246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Cafetera', 
    price: 120,
    image: 'https://images.pexels.com/photos/302894/pexels-photo-302894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Laptop', 
    price: 120,
    image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name: 'PlayStation 5', 
    price: 120,
    image: 'https://images.pexels.com/photos/13189290/pexels-photo-13189290.jpeg?auto=compress&cs=tinysrgb&w=400',
});





for (product of productList) {
    const productCard = document.createElement('div'); 
    productCard.classList.add('product-card');

    // product = {name, price, image} -> product.image

    const productImg = document.createElement('img'); 
    productImg.setAttribute('src', product.image); 
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div'); 
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('p');
    
    const productPrice = document.createElement('p'); 
    productPrice.innerText = '$' + product.price; 
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

/* for (product of productList) {
    const htmlCards = `<div class="product-card">
    <img src="${product.image}" class="product-img" alt="">
    <div class="product-info">
      <div>
        <p>$${product.price}</p>
        <p>${product.name}</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
  </div>`

  cardsContainer.innerHTML += htmlCards;
} */



