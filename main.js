const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const iconHamMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const aside = document.querySelector('.product-detail ')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')

const cardsContainer =document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDesktopMenu)
iconHamMenu.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive'); //si tiene la clase inactive significa que esta crrada 
   
    if(!isAsideClosed){    
        aside.classList.add('inactive'); // con esoto aseguro que voy a cerra el menu  para poder abrir l aside 
        }

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); //si tiene la clase inactive significa que esta crrada 
   
    if(!isMobileMenuClosed){    
        mobileMenu.classList.add('inactive'); // con esoto aseguro que voy a cerra el menu  para poder abrir l aside 
        }

    aside.classList.toggle('inactive');
}

const productList =[];
productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",   
})

productList.push({
    name: "Computer",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",   
})

productList.push({
    name: "Shoes",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",   
})

productList.push({
    name: "Car",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",   
})

productList.push({
    name: "t-shirt",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",   
})
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
// me traigo el codigo comentado de html para crearlo  y posteriormente con el append ordenarlo
// asi recorremos el el arry y nos imprime los datos que deseamos, si cambiamos el of pon in nos da es la posicion []
function renderProducts(arr){
for(product of productList){
    const productCard =document.createElement('div');
    productCard.classList.add('product-card');

   // product = {name, price, image} -> product.image
    const ProductImg = document.createElement('img');
    ProductImg.setAttribute('src', product.image)

    const productInfo =document.createElement('div');
    productInfo.classList.add('product-info');
    
    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price // con innertext escribo lo que necesito  // inserto el precio de del parrafo p desde el for 
    const productName = document.createElement('p');
    productName.innerText = product.name;  // inserto el nombre del producto desde el for 

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');


    // aca emepizoa  aorganizar el orden meter las lineas en su lugar 
    productInfoFigure.appendChild(productImgCart); // pongo la imagen dentro de la estiqueta figure 

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(ProductImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}
}

renderProducts(productList);