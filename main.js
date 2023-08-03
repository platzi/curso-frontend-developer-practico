//como hacer que el menu aparezca y desaparezca, cada vez que le demos click al mail tiene que aparecen  el destok-menu
const menuEmail = document.querySelector('.navbar-email')//Seleccionamos la clase del email
const destokpMenu = document.querySelector('.desktop-menu');
const menuHamIcon =document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail') //Detalles del producto
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click',toggleDesktopMenu) //para escucahar menuEmail, cuando le demos click
menuHamIcon.addEventListener('click',toggleMobileMenu)
menuCarritoIcon.addEventListener('click',toggleCarritoAside)
productDetailCloseIcon.addEventListener('click',closeProductDetailAsaid) //para cerrar el detalle del producto

function toggleDesktopMenu () {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  if(!isAsideClosed){ //Si tratamos de abrir el menu cerramos el carrito
    shoppingCartContainer.classList.add('inactive')//tenemos que ocultarlo si el carrito estaba abuiero
   }
  destokpMenu.classList.toggle('inactive') //Quita o pone la clase inactive dependiendo si la tiene o no 
}

function toggleMobileMenu() { //mobile menu, seria la hamburguesa
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  if(!isAsideClosed){ //Si tratamos de abrir el menu cerramos el carrito
    shoppingCartContainer.classList.add('inactive')//tenemos que ocultarlo si el carrito estaba abuiero
   }
  mobileMenu.classList.toggle('inactive')
}
function toggleCarritoAside(){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); //Cada vez que queramos cerrar el carrito, si le damos click vamos a cerrar el menuMobile



   if(!isMobileMenuClosed){ //Dependiendo si esta abierto el menuMobile, le quitamos o agregamos la clase inactive
    mobileMenu.classList.add('inactive')
   }
   closeProductDetailAsaid(); //cada vez que le demos click al boton de hamburguesa vamos a cerrar todo lo que este abierto

   const isProductDetailClose = productDetailContainer.classList.contains('inactive'); //si tiene la clase inactive es porque esta cerrado

   if(!isProductDetailClose){ //Dependiendo si esta abierto el productDetail, le quitamos o agregamos la clase inactive
    productDetailContainer.classList.add('inactive')
   }

   shoppingCartContainer.classList.toggle('inactive')
  }

  function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive') //siempre que tratemos de abrir un nuevo producto le pongamos la clase inactive
    productDetail.classList.remove('inactive')//porque le quiero quitar la clase inactive
  }
  
  function closeProductDetailAsaid(){
    productDetail.classList.add('inactive')
  }

  const productList = [];
  productList.push({//para agregar elementos al array
  name:'Bike',
  price:120,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  })
  productList.push({//para agregar elementos al array
    name:'Pantalla',
    price:220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })
    productList.push({//para agregar elementos al array
      name:'Computadora',
      price:620,
      image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      });


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
    </div>*/

    //Creamos nuestra lista de productos desde jv
   function renderproducts(arr){
   for(product of arr) { //
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside)
  
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
   }
  }

  renderproducts(productList)//en el futuro podemos utlizar la funcion
  console.log(productList, 'prodctList')

