const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const closeBottonDetail = document.querySelector('.product-detail-close');
const imageProductDetail = document.querySelector('.image-product-detail');
const orderContent = document.querySelector('.my-order-content');
const countCart = document.querySelector('.navbar-shopping-cart div');
const totalOrder = document.querySelector('.total');
const productosEnCarrito = [];

navEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoMenu);
closeBottonDetail.addEventListener('click', closeProductDetailContainer);

/* TOGGLE FUNCTIONS */

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.add('inactive');
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.add('inactive');
}

function toggleCarritoMenu() {
  shoppingCartContainer.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetailContainer.classList.add('inactive');
}

function openProductDetailContainer() {
  productDetailContainer.classList.remove('inactive');
  shoppingCartContainer.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
}

function closeProductDetailContainer() {
  productDetailContainer.classList.add('inactive');
}

/* PRODUCTS */

const productList = [];

/*AGREGANDO PRODUCTOS*/

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});

productList.push({
  name: "Monitor",
  price: 220,
  image:
    "https://images.pexels.com/photos/2049411/pexels-photo-2049411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description: 'Beautiful monitor.'
});

productList.push({
  name: "Keyboard",
  price: 80,
  image:
    "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});

productList.push({
    name: 'Mouse',
    price: 50,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});

productList.push({
  name: "Monitor",
  price: 220,
  image:
    "https://images.pexels.com/photos/2049411/pexels-photo-2049411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description: 'Beautiful monitor.'
});

productList.push({
  name: "Keyboard",
  price: 80,
  image:
    "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});

productList.push({
    name: 'Mouse',
    price: 50,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});

productList.push({
  name: "Monitor",
  price: 220,
  image:
    "https://images.pexels.com/photos/2049411/pexels-photo-2049411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description: 'Beautiful monitor.'
});

productList.push({
  name: "Keyboard",
  price: 80,
  image:
    "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});

productList.push({
    name: 'Mouse',
    price: 50,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});

/*CREACIÓN DE LAS PRODUCT CARDS HTML*/

function renderProducts(arr){
    for (const [index,product] of arr.entries()) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
      
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        // productImg.addEventListener('click', openProductDetailContainer);
        productImg.addEventListener("click", e => {
          showProductDetailsContainer(e, productInfo, index, product)
        });
      
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
      
        const productInfoDiv = document.createElement("div");
      
        const productPrice = document.createElement("p");
        productPrice.innerText = `$${product.price}`;
      
        const productName = document.createElement("p");
        productName.innerText = product.name;
      
        const productFigure = document.createElement('figure');
        const productCartImage = document.createElement('img');
        productCartImage.setAttribute('src', './icons/bt_add_to_cart.svg');
        productCartImage.addEventListener('click',() => {
          let productoAgregado = [];
          productoAgregado.push({
            name: product.name,
            price: product.price,
            image: product.image
          });
          addToCart(productoAgregado);
        })
      
        /*COLOCAMOS LOS RESPECTIVOS HIJOS*/
        productFigure.appendChild(productCartImage);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productFigure);
        productCard.append(productImg, productInfo);
      
        /*LO AGREGAMOS AL CONTENEDOR FINAL*/
        cardsContainer.appendChild(productCard);
      }
      
}

function showProductDetailsContainer(e, productInfo, index, product){
  /*Agregando funcionalidad toggle correcta*/
  productDetailContainer.classList.remove('inactive');
  shoppingCartContainer.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');

  /*Completando información del contenedor*/
  imageProductDetail.setAttribute('src', e.target.src);
  productDetailContainer.children[2].children[0].innerText = `$${productList[index].price}`;
  productDetailContainer.children[2].children[1].innerText = productList[index].name;
  productDetailContainer.children[2].children[2].innerText = productList[index].description;
}

function addToCart(producto){
  
  /*Creamos elementos HTML*/

  const divShoppingCart = document.createElement('div');
  const figureShoppingCart = document.createElement('figure');
  const imgFigShoppingCart = document.createElement('img');
  const pNameShoppingCart = document.createElement('p');
  const pPriceShoppingCart = document.createElement('p');
  const imgCloseShoppingCart = document.createElement('img');

  /*Agregamos contenido*/

  divShoppingCart.classList.add('shopping-cart');
  imgFigShoppingCart.setAttribute('src', producto[0].image);
  pNameShoppingCart.innerText = producto[0].name;
  pPriceShoppingCart.innerText = `$ ${producto[0].price}`;
  imgCloseShoppingCart.setAttribute('src', './icons/icon_close.png');

  /*Insertamos los elementos */
  figureShoppingCart.appendChild(imgFigShoppingCart);
  divShoppingCart.append(figureShoppingCart, pNameShoppingCart, pPriceShoppingCart, imgCloseShoppingCart);
  orderContent.appendChild(divShoppingCart);

  /*Agregamos cantidad de productos y suma de precios*/
  countCart.innerText = document.querySelectorAll('.shopping-cart').length;
  totalOrder.innerText = '$' + (Number(totalOrder.innerText.substring(1)) + Number(producto[0].price));
  productosEnCarrito.push(producto[0].name);

  /*Eliminar elemento del carrito*/
  imgCloseShoppingCart.addEventListener('click', () =>{
    divShoppingCart.remove()
    countCart.innerText = document.querySelectorAll('.shopping-cart').length
    totalOrder.innerText = '$' + (Number(totalOrder.innerText.substring(1)) - Number(producto[0].price))
    productosEnCarrito.splice(productosEnCarrito.indexOf(producto[0].name),1)
  })
}


renderProducts(productList);