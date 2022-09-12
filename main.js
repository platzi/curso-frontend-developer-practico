const menuEmail = document.querySelector('.navbar-email');
const burguerMenu= document.querySelector('.menu');
const mobilshopcard= document.querySelector('.navbar-shopping-cart');

const desktopMenu= document.querySelector('.desktop-menu');
const mobilMenu= document.querySelector('.mobile-menu');
const mobilshopcardactive= document.querySelector('.product-detail');
const cardsContainer= document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleBurguerMenu);
mobilshopcard.addEventListener('click', togglemobilshopcard);

function toggleDesktopMenu(){
    const ismobilshopcardactiveClosed = mobilshopcardactive.classList.contains('inactive');
    if(!ismobilshopcardactiveClosed){
    mobilshopcardactive.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleBurguerMenu(){
    const ismobilshopcardactiveClosed = mobilshopcardactive.classList.contains('inactive');
   if(!ismobilshopcardactiveClosed){
    mobilshopcardactive.classList.add('inactive');
   }
    mobilMenu.classList.toggle('inactive');
}
function togglemobilshopcard(){
    const isMobilMenuClosed = mobilMenu.classList.contains('inactive');
    const isdesktopMenuClosedd = desktopMenu.classList.contains('inactive');
    if(!isMobilMenuClosed || !isdesktopMenuClosedd){
        mobilMenu.classList.add('inactive'); 
        desktopMenu.classList.add('inactive');
    }
        mobilshopcardactive.classList.toggle('inactive');
}

/*
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


/*Aqui es cuando usamos una API REST para hacer consultas 
de la base de datos*/

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Pantalla',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Computador',
    price: 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Pantalla',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Computador',
    price: 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Pantalla',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Computador',
    price: 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

for ( producto of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')

    const ProductImg = document.createElement('img');
    ProductImg.setAttribute('src', producto.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info')

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + producto.price;
    const productName = document.createElement('p');
    productName.innerText = producto.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(ProductImg);
    productCard.appendChild(productInfo);


    cardsContainer.appendChild(productCard);

}

// Aquí procedemos a hacer una renderizacíon de la base de datos


