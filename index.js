// Desktop Menu
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {

    // if (desktopMenu.classList.contains('inactive')) {
    //     desktopMenu.classList.remove('inactive');
    //     console.log("Quitaste la clase Inactive");
    // } 
    // else {
    //     desktopMenu.classList.add('inactive');
    //     console.log("Agregaste la clase Inactive");
    // }
    
    desktopMenu.classList.toggle('inactive');

    // Cerrar los siguientes:
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
}

// Mobile Menu
const hamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

hamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');

    // Cerrar los siguientes:
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    asideProductDetail.classList.add('inactive');
}


// Aside My order
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const closeShoppingCartArrow = document.querySelector('.closeShoppingCartArrow');

shoppingCart.addEventListener('click', toggleShoppingCartContainer);
closeShoppingCartArrow.addEventListener('click', toggleShoppingCartContainer);

function toggleShoppingCartContainer() {
    shoppingCartContainer.classList.toggle('inactive');

    // Cerrar los siguientes:
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    asideProductDetail.classList.add('inactive');
}


// Dynamically add a product to the Product Cards container

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

const productList = [];

productList.push(
    {
        name: 'Bycicle',
        price: 3500,
        description: "With this powerful and fast bicycle you will arrive to your destiny the fastest possible and safe",
        img: 'https://m.media-amazon.com/images/I/71itdkblCyL._AC_SX679_.jpg',
    }
);

productList.push(
    {
        name: 'Laptop',
        price: 14000,
        description: "If you are a programmer, this is the perfect laptop for you.",
        img: 'https://www.officedepot.com.mx/medias/100097591-2.jpg-515ftw?context=bWFzdGVyfHJvb3R8MTA2ODYyfGltYWdlL2pwZWd8aDU1L2hhMS8xMTAyNzA1NDY1NzU2Ni8xMDAwOTc1OTEtMi5qcGdfNTE1ZnR3fDBjMTc0NjY0NTk4NmZlNGYxNzk0NTI4MjhiNDY2MTgxYTI1YWQyZmZmMGZkYmJjNDM0YzEzMWQ2ZWNiOWRmNjc',
    }
);

productList.push(
    {
        name: 'Frisbit',
        price: 14000748532657834,
        img: './logos/S6000206.JPG',
    }
);


const cardsContainer = document.querySelector('.cards-container');

// Asignarle la info corresta al aside de PRODUCT DETAIL 

const asideProductDetailContainer = document.querySelector('#productDetail');

const productDetailImage = document.createElement('img');

const divAsideProductInfoContainer = document.createElement('div');
divAsideProductInfoContainer.classList.add('product-info');

const priceAsideProductDetail = document.createElement('p');
const nameAsideProductDetail = document.createElement('p');
const descriptionAsideProductDetail = document.createElement('p');

  
divAsideProductInfoContainer.appendChild(priceAsideProductDetail);
divAsideProductInfoContainer.appendChild(nameAsideProductDetail);
divAsideProductInfoContainer.appendChild(descriptionAsideProductDetail);

asideProductDetailContainer.appendChild(productDetailImage);
asideProductDetailContainer.appendChild(divAsideProductInfoContainer);

function renderProducts(arr) {
    for (product of productList) {
    
        // Creating HTML elements
    
        var productCardDiv = document.createElement('div'); // Este es el que usaremos para mostrar el aside de product Details cuando le den click
        productCardDiv.classList.add('product-card');
        
        
        var cardImg = document.createElement('img');
        cardImg.setAttribute('src', product.img);
        
        var infoDivContainer = document.createElement('div');
        infoDivContainer.classList.add('product-info');
    
        var infoDiv = document.createElement('div');
        
        var priceP = document.createElement('p');
        priceP.innerText = '$' + product.price;
        //priceP.textContent = '$' + product.price;
        
        var nameP = document.createElement('p');
        nameP.innerText = product.name;
    
        var imageContainerFigure = document.createElement('figure');
        
        var shoppingCartImage = document.createElement('img');
        shoppingCartImage.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        // Pasar info de la card al Aside de product detail
        productCardDiv.addEventListener('click', e => {
            openAsideProductDetail(e, cardImg, infoDivContainer);
        });
        
        // Insert Child elements into Parent elements
        
        imageContainerFigure.appendChild(shoppingCartImage);
        
        infoDiv.appendChild(priceP);
        infoDiv.appendChild(nameP);
        
        infoDivContainer.appendChild(infoDiv);
        infoDivContainer.appendChild(imageContainerFigure);
        
        productCardDiv.appendChild(cardImg);
        productCardDiv.appendChild(infoDivContainer);
        
        cardsContainer.appendChild(productCardDiv);
        
    }


}

renderProducts(productList); 









/*
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
<div class="product-info">
  <p>$35,00</p>
  <p>Bike</p>
  <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
  <button class="primary-button add-to-cart-button">
    <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
    Add to cart
  </button>
</div>
*/





// Aside Product detail 

//const productCardDiv = document.querySelector('.product-card');
const asideProductDetail = document.querySelector('#productDetail');
const crossProductDetail = document.querySelector('.product-detail-close');

crossProductDetail.addEventListener('click', closeAsideProductDetail);

// Abrir aside productDetail cuando se le de click a algun producto (El evento con esta funcion esta declarado en la construccion de los elementos HTML en JS)
function openAsideProductDetail(e, cardImg, infoDivContainer) {
    asideProductDetail.classList.remove('inactive');

    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');

    // for (var i = 0; i < productList.length; i++) {
    //     if (productList[i].name == product.name) {
    //         productDetailImage.setAttribute('src', product.img);
    //         priceAsideProductDetail.innerText = product.price;
    //         nameAsideProductDetail.innerText = product.name;
    //         descriptionAsideProductDetail.innerText = product.description;
    //         console.log('Nombre del Objeto en el array de objetos: ' + productList[i].name);
    //         console.log('Nombre del Objeto Actual: ' + product.name);
    //     }
    // }

            productDetailImage.setAttribute('src', cardImg.src);
            //console.log(e.target);
            console.log(infoDivContainer.children[0].children[0].textContent);
            console.log(infoDivContainer.children[0].children[1].textContent);
            //console.log(nameP.textContent);
            //priceAsideProductDetail.innerText = priceP;
            //nameAsideProductDetail.innerText = product.name;
            //descriptionAsideProductDetail.innerText = product.description;
            //console.log('Nombre del Objeto en el array de objetos: ' + productList[i].name);
            //console.log('Nombre del Objeto Actual: ' + product.name);
}

function closeAsideProductDetail() {
    asideProductDetail.classList.add('inactive');
    
}









