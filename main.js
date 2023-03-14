const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurger = document.querySelector(".menuBurger");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const closedAside = document.querySelector('.product-detail-close');
// 
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
// 
const productDetail = document.querySelector("#productDetail");
// 
menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoshoppingCartContainer);
// 
/* closed AsideInf */
closedAside.addEventListener('click', closedProductDetail);

// 
function toggleDesktopMenu(){
        // abriendo y cerrando la seccion y el carrito te compras 
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive")
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if (!isshoppingCartContainerClosed){
            shoppingCartContainer.classList.add('inactive');
        }
    else if(!isProductDetailClosed){
            productDetail.classList.add('inactive')
        }
    desktopMenu.classList.toggle('inactive');
}
// 
function toggleMobileMenu(){
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive")
    if (!isshoppingCartContainerClosed){
            shoppingCartContainer.classList.add('inactive');
        }
    else if(!isProductDetailClosed){
            productDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
// 
function toggleCarritoshoppingCartContainer(){
    const isMenuMobileClosed = mobileMenu.classList.contains("inactive");
    const isMenuDesktopClosed = desktopMenu.classList.contains("inactive");
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    if (!isMenuMobileClosed){
            mobileMenu.classList.add('inactive');
        }
        // abriendo y cerrando la seccion y el carrito te compras 
    else if (!isMenuDesktopClosed){
            desktopMenu.classList.add('inactive');
        }
    else if(!isProductDetailClosed){
            productDetail.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}
// 
function closedProductDetail(){
        productDetail.classList.add('inactive');
}
function openProductDetail(){
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");
    const isMenuDesktopClosed = desktopMenu.classList.contains('inactive');       
    const isMenuMobileClosed = mobileMenu.classList.contains("inactive");
    if (!isshoppingCartContainerClosed){
            shoppingCartContainer.classList.add('inactive');
        }
    else if(!isMenuDesktopClosed){
            desktopMenu.classList.add('inactive');
        }
    else if(!isMenuMobileClosed){
            mobileMenu.classList.add('inactive');
        }
        productDetail.classList.remove('inactive');
}
// 
const productList = [];
productList.push({
    nombre: 'Bike',
    precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    nombre: 'Pantalla',
    precio: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    nombre: 'Computadora',
    precio: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    nombre: 'lavadora',
    precio: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    nombre: 'trapeador',
    precio: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    nombre: 'exprimidora',
    precio: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    nombre: 'laptop',
    precio: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
/*        <div class="product-card">
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
function renderProducts (arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
    // product = {name, precio, image} => product.image
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.precio;
        const productName = document.createElement('p');
        productName.innerText = product.nombre;
        
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        const productImgCar = document.createElement('img');
        productImgCar.setAttribute('src', './icons/bt_add_to_cart.svg')
        productInfoFigure.appendChild(productImgCar);
    
        productInfoFigure.appendChild(productImgCard);
        productImgCard.setAttribute('src', product.image);
        productImgCard.addEventListener('click',openProductDetail);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(productImgCard);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

