// DESKTOP MENU
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

// MOBILE MENU
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


// ASIDE MY ORDER
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
        description: "Foto del frisbin",
        img: './logos/S6000206.JPG',
    }
);


const cardsContainer = document.querySelector('.cards-container');


function renderProducts(arr) {
    for (const product of productList) {
    
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
        
        
        // Insert Child elements into Parent elements
        
        imageContainerFigure.appendChild(shoppingCartImage);
        
        infoDiv.appendChild(priceP);
        infoDiv.appendChild(nameP);
        
        infoDivContainer.appendChild(infoDiv);
        infoDivContainer.appendChild(imageContainerFigure);
        
        productCardDiv.appendChild(cardImg);
        productCardDiv.appendChild(infoDivContainer);
        
        cardsContainer.appendChild(productCardDiv);
        

        // Pasar info de la card al Aside de product detail
        productCardDiv.addEventListener('click', e => {
            openAsideProductDetail(product.img, product.name, product.price, product.description);
        });

        shoppingCartImage.addEventListener('click', function() {
            let productoAgregado = [];
            productoAgregado.push({
                name: product.name,
                price: product.price,
                image: product.img,

            })
            agregarCarrito(productoAgregado);
        });
    }
}

renderProducts(productList); 



// ASIDE PRODUCT DETAIL

const asideProductDetail = document.querySelector('#productDetail');
const crossProductDetail = document.querySelector('.product-detail-close');

crossProductDetail.addEventListener('click', closeAsideProductDetail);



// Asignarle la info corresta al aside de PRODUCT DETAIL 
const productDetailImage = document.querySelector('#imgAsideProductDetails');
const productDetailPrice = document.querySelector('#priceAsideProductDetails');
const productDetailName = document.querySelector('#nameAsideProductDetails');
const productDetailDescription = document.querySelector('#descriptionAsideProductDetails');

// Abrir aside productDetail cuando se le de click a algun producto (El evento con esta funcion esta declarado en la construccion de los elementos HTML en JS)
function openAsideProductDetail(img, name, price, description) {
    // Abrir el Aside
    asideProductDetail.classList.remove('inactive');

    // Cerrar elementos que colisionan
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');

    // Asignarle la info correcta del producto seleccionado al Aside
    productDetailImage.setAttribute('src', img);
    productDetailPrice.innerText = '$' + price;
    productDetailName.innerText = name;
    productDetailDescription.innerText = description;
    console.log(name);
    console.log(price);
}

function closeAsideProductDetail() {
    asideProductDetail.classList.add('inactive');
    
}

let productosEnCarrito = [];

function agregarCarrito(producto) {

    

}









