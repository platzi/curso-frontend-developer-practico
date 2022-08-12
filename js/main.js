const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
// Cuando demos click aquí (sig L.9)...
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
// Este aparecera o desaparecera con la función en -> (sig L.25)
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive'); 
    // aside es cerrado

    // si aside esta abierto
    if(!isAsideClosed) {
        // cierra aside
        aside.classList.add('inactive');
    }

    // Despues abre mobile.
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive'); // aside es cerrado

    // si aside esta abierto
    if(!isAsideClosed) {
        // cierra aside
        aside.classList.add('inactive');
    }
    // Despues abre mobile.
    mobileMenu.classList.toggle('inactive');
}
// Hace que aparezca con dar click en el carrito.
function toggleCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed) { // Si menu mobile esta abierto
        mobileMenu.classList.add('inactive');

    } else if(!isDesktopMenuClosed) { // Si menu desktop tambien lo esta...
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive'); // brir Aside.
}
// Esta funcion mantiene de principio los menus inactivos.
window.onresize = function () {
    // Cuando la pantalla en menor o igual a 640.
    document.documentElement.scrollWidth <= 640 && desktopMenu.classList.add('inactive');
    // Cuando la pantalla en mayor o igual a 641.
    document.documentElement.scrollWidth >= 641 && mobileMenu.classList.add('inactive');
    // Siempre lo mantendra inactive a no ser que le des click.
    document.documentElement.scrollWidth && aside.classList.add('inactive');
  };
  onresize();

  // Array de productos
  const productList = [];

  productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });

  productList.push({
    name: 'Smath TV',
    price: 220,
    image: "https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
  });

  productList.push({
    name: 'Urban T-shirt',
    price: 30,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  });
//   <!-- <div class="product-card">
//         <img src="https://images.pexels.com/photos/276517/            pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//         <div class="product-info">
//           <div>
//             <p>$120,00</p>
//             <p>Bike</p>
//           </div>
//           <figure>
//             <img src="./icons/bt_add_to_cart.svg" alt="">
//           </figure>
//         </div>
//       </div> -->
function renderProducts(arr) {
    for(product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoContainer = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoContainer.appendChild(productPrice);
        productInfoContainer.appendChild(productName);
    
        const productInfoFig = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFig.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoContainer);
        productInfo.appendChild(productInfoFig);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);