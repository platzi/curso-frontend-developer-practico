const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobilepMenu);
menuCarIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu(){
    
    aside.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');//classList.toggle, quita o pone una clase dependiendo si la tiene o no
}

function toggleMobilepMenu(){
    desktopMenu.classList.add('inactive'); 
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');

}

function toggleCarritoAside(){

    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}

const productList =[];

productList.push({
    name: 'Cuento Infantil',
    price: 120,
    image: 'https://i.pinimg.com/736x/2a/c7/4a/2ac74afea0bc93cb72f92b9d024df1e0--mercer-mayer-alligators.jpg',
});

productList.push({
    name: 'las Princesas',
    price: 123,
    image: 'http://www.educandoenigualdad.com/wp-content/uploads/2017/06/princesas.jpg',
});

productList.push({
    name: 'Frutas en idiomas',
    price: 110,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51CER3SDbsL.jpg',
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
      </div>
*/

function renderProducts(arrayProducts){
    
    for (const product of arrayProducts){
       const productCard = document.createElement('div');
       productCard.classList.add('product-card');
    
       const productImg = document.createElement('img');
       productImg.setAttribute('src', product.image);
    
       const productInfo = document.createElement('div');
       productInfo.classList.add('product-info');
    
       const productInfoDiv = document.createElement ('div');
       const productInfoPrice = document.createElement ('p');
       productInfoPrice.innerText = '$' + product.price;
       const productInfoName = document.createElement ('p');
       productInfoName.innerText = product.name;
       //para ingresar una etiqueta dentro de otra----
       productInfoDiv.append(productInfoPrice, productInfoName);
    
       const productInfoFigure = document.createElement('figure');
       const productImgCar = document.createElement('img');
       productImgCar.setAttribute('src', './icons/bt_add_to_cart.svg');
    
       //para ingresar una etiqueta dentro de otra
       productInfoFigure.appendChild(productImgCar);
       //para ingresar una etiqueta dentro de otra
       productInfo.append(productInfoDiv, productInfoFigure);
    
       productCard.appendChild(productImg, productInfo);
      //vamos a unir el contenedor que hicimos en js al contenedor que se encuentra en html llamado con la clase cards-container(el cual ya le creamos al inicio un selector con el nombre de const cardsContainer )
      
      cardsContainer.appendChild(productCard);
    
    }
}
renderProducts(productList);