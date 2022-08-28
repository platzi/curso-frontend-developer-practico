const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const myOrderContent = document.querySelector('.my-order-content');

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

// cardContainer.addEventListener('click', openProductDetailAside);

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
    document.documentElement.scrollWidth && aside.classList.add('inactive');
  };
  onresize();

  // Array de productos
  const productList = [

    {
      name: 'Bike',
      price: 120,
      image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      info: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    },

    {
      name: 'Smath TV',
      price: 220,
      image: "https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
      info: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    },
    {
      name: 'Urban T-shirt',
      price: 30,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      info: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    },

    {
      name: 'Runners shoes',
      price: 25,
      image: "https://images.pexels.com/photos/12714890/pexels-photo-12714890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      info: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    },

    {
      name: 'Smarthphone',
      price: 80,
      image: "https://i.pinimg.com/564x/f6/ee/ec/f6eeece1e2493e867a76ad705ea8939d.jpg",
      info: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    },

    {
      name: 'PC Gamer',
      price: 5,
      image: "https://i.pinimg.com/564x/4d/66/ce/4d66ce27cee973c3c3b416a5d7e1eae1.jpg",
      info: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    },

    {
      name: 'Headset',
      price: 50,
      image: "https://i.pinimg.com/236x/ca/d6/5c/cad65c0cf8c512ffcd5ec647d4359cd0.jpg",
      info: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    },

    { 
      name: 'Pants',
      price: 8,
      image: "https://i.pinimg.com/736x/e9/54/6e/e9546eebf085de7959b9a8e833a8e049.jpg",
      info: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    },

    {
      name: 'Fan',
      price: 20,
      image: "https://i.pinimg.com/236x/09/dc/30/09dc30c97eac8602185e29b82243fe79.jpg",
      info: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    },

    {
      name: 'washing machine',
      price: 100,
      image: "https://espacio18.com.mx/wp-content/uploads/Midea-MLTT11M2NUBW-Lavadora-1-11.jpg",
      info: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    },

    {
      name: 'scooter',
      price: 50,
      image: "https://img.remediosdigitales.com/51bc7b/s6/450_1000.jpeg",
      info: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    },

    {
      name: 'sport camera GoPro',
      price: 100,
      image: "https://www.steren.com.mx/media/catalog/product/cache/b69086f136192bea7a4d681a8eaf533d/image/2176550f8/camara-deportiva-sumergible-4k-wi-fi-con-doble-pantalla.jpg",
      info: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    },

    {
      name: 'XboX',
      price: 5,
      image: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/11/analisis-xbox-series-s-computerhoy-2131659.jpg?itok=dZREcC-F",
      info: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    },

    {
      name: 'Smarth Watch',
      price: 90,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSFNS8Qeg0zmvFhmKbm190TOyV_v6nJ65ovhCnzQZTIqVARmGqt7YlldhwIZ3b8HrTlOCiyVztqJZSENLyIxjLlB8aeOmBNDXgAl3A6aKzbdwbaehaMQkk_&usqp=CAE",
      info: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    },

    { 
      name: 'Headphones',
      price: 12,
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ8nUpPXbuPQQLAbvZc4_aI7RI-Slg2GmSlCO_WiRKSPkHlVVAr_HmsM8pILbW2hJKzbGZRnb3uoryTCMLp4UIC7ScKU6_da9I4fnZCb_KsnQQfjjqZ_xaotw&usqp=CAE",
      info: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    },

    {
      name: 'Desk',
      price: 60,
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQdQJgw_WpLX22XkDmwSPxbj73HvaS7JsVjObyqIaxZf2pg5qAfMpJi-4TSoewjBUN1FqRDR2lQbV85XnPwAeHYsHDtOcFfXd8gaBckvF55bg3gCnLk4SZH7A&usqp=CAE",
      info: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    },

    {
      name: 'Drone',
      price: 150,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQV9maieQzrGFbDDOp3pjbBz5Rrin7X7m1pv0CffXwSmri-Ao2rb2DEkc1U8WI4uA5LN62XzOkmSTIZvBRuyVQJxSjdNlhad_1jxo7TtJlSum0d2L9j3XzB&usqp=CAE",
      info: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    },

    {
      name: 'BackPack',
      price: 10,
      image: "https://articulospromocionalescdmx.com/wp-content/uploads/2019/04/A2484_lrg.jpg",
      info: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    },

    {
      name: 'Minion Funko Pop',
      price: 15,
      image: "https://mifunko.com/927-large_default/funko-pop-bob-en-pijama-minions-2.jpg",
      info: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    },
  ];
  
function renderProducts(arr) {
  let count = 0;
  for(product of arr) {
    const div = document.createRange().createContextualFragment(
      /* HTML */
      `
      <div class="product-card">
        <img class="card-img" id="${count}" src=" ${product.image} " alt="">
        <div class="product-info">
          <div>
            <p>$ ${product.price} </p>
            <p> ${product.name} </p>
          </div>
          <figure>
            <img class="addToCart" id="${count}" src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
      `
    );
   const cardsContainer = document.querySelector('.cards-container');
   cardsContainer.append(div);
   count++;
  }
}
renderProducts(productList);

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

let myOrderList = [];
const detailOfProduct = {};

function renderMyCart(arr) {
  // Borrar lo que ya esta renderizado y renderizar otra vez.
  let closeOrderN = 0
  myOrderContent.innerHTML = "";
  for(product of arr) {
    const div = document.createRange().createContextualFragment(
      /* HTML */
      `
      <div class="shopping-cart">
        <figure>
          <img src=" ${product.image} " alt="">
        </figure>
        <p>${product.name}</p>
        <p>$${product.price}</p>
        <img id="${product.image}" class="shopping-cart-close" src="./icons/icon_close.png" alt="close">
      </div>
      `
    );
    myOrderContent.append(div);
    closeOrderN++;
  }
  return;
}

function addToCartList(id) {
  myOrderList.push(
    {
      name: String(productList[id].name),
      price: String(productList[id].price),
      image: String(productList[id].image)
    });
    return;
}

function setProductDetail(id) {
  detailOfProduct.name = String(productList[id].name);
  detailOfProduct.price = String(productList[id].price);
  detailOfProduct.image = String(productList[id].image);
  detailOfProduct.info = String(productList[id].info)
  return;
}

function renderProductDetail() {
  const productDetailCont = document.querySelector('.product-detail-content');
  productDetailCont.innerHTML = "";
  const div = document.createRange().createContextualFragment(
    /* HTML */
    `
    <img src=" ${detailOfProduct.image} " alt="">
      <div class="product-info">
        <p>${detailOfProduct.name}</p> 
        <p>$${detailOfProduct.price}</p> 
        <p>${detailOfProduct.info}</p>
        <button class="primary-button add-to-cart-button">
          <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
          Add to cart
        </button>
      </div>
    `
  );
  productDetailCont.append(div);
}

function removeCartItem(id) {
  let newArr = [];
  let newCont = 0;
  for(let i = 0; i<myOrderList.length; i++) {
    if(myOrderList[i].image !== id) {
      newArr[newCont] = myOrderList[i];
      newCont++;
    }
  }
  myOrderList = newArr.slice();
  newArr.length = 0;
}

cardsContainer.addEventListener('click',(e) => {
  let orderId = parseInt(e.target.getAttribute('id'));
  if(e.target && e.target.classList.contains('addToCart')){

    addToCartList(orderId);
    renderMyCart(myOrderList);

  } else if(e.target && e.target.classList.contains('card-img')){

    setProductDetail(orderId);
    renderProductDetail();
    openProductDetailAside();
  }
  
});
myOrderContent.addEventListener('click', (e) => {
  if(e.target && e.target.classList.contains('shopping-cart-close')) {
    // removeCartItem(idItem);
    removeCartItem(String(e.target.getAttribute('id')));
    renderMyCart(myOrderList);
  }
});