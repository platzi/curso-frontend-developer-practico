const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');




menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu(){

    const isAsideClose = aside.classList.contains('inactive');
    
    if(!isAsideClose){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClose = aside.classList.contains('inactive');
    
    if(!isAsideClose){
        aside.classList.add('inactive');
    }

    
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClose){
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');

}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Compu',
    price: 400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

// Recorrer un array
// for (product of productList){}  product es el objeto de c/elemento 
// for(product in productList){} muestra el indice com un array normal

/* <div class="product-card">
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
 </div>  */

 
 function recorerProductos(arrayProductos){
     for(product of arrayProductos){
         const productCard = document.createElement('div');
         productCard.classList.add('product-card');
     
         const productImg = document.createElement('img');
         // product = {name, price, image} -> product.image
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
     };
     
}

recorerProductos(productList);