const menuEmail = document.querySelector('.navbar-email'); //seleciona el elemento del div, navbar-rigth del index.html
const desktopMenu = document.querySelector('.desktop-menu');//Creamos una nueva variable para el .desktop-menu
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer= document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');

menuEmail.addEventListener('click',toggleDesktopMenu); //hacemos un metodo
menuHamIcon.addEventListener('click',toggleMobileMenu); //hacemos un metodo para mobile
menuCarritoIcon.addEventListener('click',toggleCarritoAside); //hacemos un metodo para aside o carrito
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);//Hacemos un metodo para boton cerrar de la imagen


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

    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
        //abrir el aside
        if (!isMobileMenuClosed){
           mobileMenu.classList.add('inactive');
        }

        const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
        //abrir el aside
        if (!isProductDetailClosed){
            productDetailContainer.classList.add('inactive');
        }
        shoppingCartContainer.classList.toggle('inactive');
    
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    //shoppingCartContainer.classList.remove('inactive'); si deja este codigo se abren al tiempo carrito y menu

    productDetailContainer.classList.add('inactive');
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
productList.push({
  name: 'Yacht',
  price: 5000000000,
  image: 'https://media.revistagq.com/photos/6364cef59b80b43a7d25bc57/16:9/w_2560%2Cc_limit/el-yate-de-cristiano-ronaldo.jpg',
});
productList.push({
  name: 'Airplane',
  price: 3000000000,
  image: 'https://i.ebayimg.com/images/g/XvQAAMXQQJBQ73Ru/s-l500.jpg',
});
productList.push({
  name: 'Parachute',
  price: 200000,
  image: 'https://www.coats.com/-/media/Coats/End-Use/Household-and-Recreation/Parachutes/Household-and-Rec---Outdoor-Goods-parachutes.jpg?rev=-1&width=600&height=460&op=crop',
});
productList.push({
  name: 'Electric Motorcycle',
  price: 7000000,
  image: 'https://biologica.com.co/wp-content/uploads/2023/07/IMG_1284a.jpeg',
});
productList.push({
  name: 'Hot Air Balloon',
  price: 500000,
  image: 'https://i.ebayimg.com/images/g/3MUAAOSwgB5cVNXt/s-l1600.jpg',
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
function renderProducts(arr){
  for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

//product = {name,price,image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click',openProductDetailAside);

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
}
renderProducts(productList);