const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
//product-detail-close

const mobileMenu = document.querySelector('.mobile-menu');
// Cuando demos click aquí (sig L.9)...
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
// Este aparecera o desaparecera con la función en -> (sig L.25)
const aside = document.querySelector('.myOrder');
const productDetailContainer = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
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
  closeProductDetailAside();
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
    closeProductDetailAside();
    // Despues abre mobile.
    mobileMenu.classList.toggle('inactive');
}
// Hace que aparezca con dar click en el carrito.
function toggleCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isMobileMenuClosed) { // Si menu mobile esta abierto
        mobileMenu.classList.add('inactive');

    } else if(!isDesktopMenuClosed) { // Si menu desktop tambien lo esta...
        desktopMenu.classList.add('inactive');

    } else if(!isProductDetailClosed) { // si product detail tambien...
        productDetailContainer.classList.add('inactive');
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
    document.documentElement.scrollWidth && aside.classList.add('inactive') && closeProductDetailAside();
  };
  onresize();

function openProductDetailAside() {
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isAsideClosed = aside.classList.contains('inactive');

  if(!isDesktopMenuClosed) { // Si menu desktop esta abierto...
    desktopMenu.classList.add('inactive');
  } else if(!isAsideClosed) {
    // cierra aside
    aside.classList.add('inactive');
}
  productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}
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

  productList.push({
    name: 'Runners shoes',
    price: 25,
    image: "https://images.pexels.com/photos/12714890/pexels-photo-12714890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: 'Smarthphone',
    price: 80,
    image: "https://i.pinimg.com/564x/f6/ee/ec/f6eeece1e2493e867a76ad705ea8939d.jpg",
  });
  productList.push({
    name: 'PC Gamer',
    price: 5,
    image: "https://i.pinimg.com/564x/4d/66/ce/4d66ce27cee973c3c3b416a5d7e1eae1.jpg",
  });
  productList.push({
    name: 'Headset',
    price: 50,
    image: "https://i.pinimg.com/236x/ca/d6/5c/cad65c0cf8c512ffcd5ec647d4359cd0.jpg",
  });
  productList.push({
    name: 'Pants',
    price: 8,
    image: "https://i.pinimg.com/736x/e9/54/6e/e9546eebf085de7959b9a8e833a8e049.jpg",
  });
  productList.push({
    name: 'Fan',
    price: 20,
    image: "https://i.pinimg.com/236x/09/dc/30/09dc30c97eac8602185e29b82243fe79.jpg",
  });

  productList.push({
    name: 'Fan',
    price: 20,
    image: "https://i.pinimg.com/236x/09/dc/30/09dc30c97eac8602185e29b82243fe79.jpg",
  });
  productList.push({
    name: 'Fan',
    price: 20,
    image: "https://i.pinimg.com/236x/09/dc/30/09dc30c97eac8602185e29b82243fe79.jpg",
  });
  productList.push({
    name: 'Fan',
    price: 20,
    image: "https://i.pinimg.com/236x/09/dc/30/09dc30c97eac8602185e29b82243fe79.jpg",
  });
  productList.push({
    name: 'Fan',
    price: 20,
    image: "https://i.pinimg.com/236x/09/dc/30/09dc30c97eac8602185e29b82243fe79.jpg",
  });
  productList.push({
    name: 'Fan',
    price: 20,
    image: "https://i.pinimg.com/236x/09/dc/30/09dc30c97eac8602185e29b82243fe79.jpg",
  });
  productList.push({
    name: 'Fan',
    price: 20,
    image: "https://i.pinimg.com/236x/09/dc/30/09dc30c97eac8602185e29b82243fe79.jpg",
  });
  productList.push({
    name: 'Fan',
    price: 20,
    image: "https://i.pinimg.com/236x/09/dc/30/09dc30c97eac8602185e29b82243fe79.jpg",
  });
  productList.push({
    name: 'Fan',
    price: 20,
    image: "https://i.pinimg.com/236x/09/dc/30/09dc30c97eac8602185e29b82243fe79.jpg",
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
    
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
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