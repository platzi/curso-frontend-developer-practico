const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() {

    const isAsideClose = aside.classList.contains('inactive');

    if(!isAsideClose) {

        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    const isAsideClose = aside.classList.contains('inactive');

    if(!isAsideClose) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {

    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenu = desktopMenu.classList.contains('inactive');
    
    if(!isMobileMenuClose) {

        mobileMenu.classList.add('inactive');

        if(!isDesktopMenu) {

            desktopMenu.classList.add('inactive')
        }

    }

    aside.classList.toggle('inactive');
}

const prodcutList = [];

prodcutList.push({
    name:'Bike',
    price:120,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
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
function contenido(arr, nContenido) {

    let contador = 0
    while(contador<nContenido) {
        
        for(product of arr) {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            const img = document.createElement('img');
            img.setAttribute('src', product.img);
        
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
        
            const productInfoDiv = document.createElement('div');
        
            const productPrice = document.createElement('p');
            productPrice.innerText = "$" + product.price;
            const productName = document.createElement('p');
            productName.innerText = product.name;
        
            const productInfoFigure = document.createElement('figure')
            const productImgCart = document.createElement('img');
            productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
        
            productInfoFigure.appendChild(productImgCart);
        
            productInfoDiv.append(productPrice,productName);
        
            productInfo.append(productInfoDiv,productInfoFigure);
        
            productCard.append(img,productInfo);
            
            cardContainer.append(productCard);
        
        }


        contador++;
    }
 

}

contenido(prodcutList, 10)