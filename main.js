const menuEmail = document.querySelector('.navbar-email'); //seleciona el elemento del div, navbar-rigth del index.html
const desktopMenu = document.querySelector('.desktop-menu');//Creamos una nueva variable para el .desktop-menu
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer= document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu); //hacemos un metodo
menuHamIcon.addEventListener('click',toggleMobileMenu); //hacemos un metodo para mobile
menuCarritoIcon.addEventListener('click',toggleCarritoAside); //hacemos un metodo para aside o carrito

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
      
      if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}//y creamos la funcion

 
function toggleMobileMenu(){
    const isAsideClosed= shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
        //abrir el aside
        if (!isMobileMenuClosed){
           mobileMenu.classList.add('inactive');
        }
        shoppingCartContainer.classList.toggle('inactive');
    
}

const productList =[];
productList.push({
    name: 'Bike',
    price: 1200000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'MotorBike',
    price: 15000000,
    image: 'https://st.depositphotos.com/2849965/4455/i/950/depositphotos_44557367-stock-photo-harley-davidson-custom-bike.jpg',
});
productList.push({
    name: 'Car',
    price: 10000000,
    image: 'https://images.evisos.com.co/2016/04/01/vendo-mazda-626-asahi-coupe_v9ywluj_3.jpg',
});
productList.push({
    name: 'Van',
    price: 20000000,
    image: 'https://www.las2orillas.co/wp-content/uploads/2023/09/ford-expedition-portada.jpg',
});
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
      </div>*/

for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

//product = {name,price,image} -> product.image
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
    productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
}