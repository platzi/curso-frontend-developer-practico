const navEmail = document.querySelector('.navbar-email');
const destokMenu = document.querySelector('.desktop-menu');
const menuBoton = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const CarIcon = document.querySelector('.navbar-shopping-cart');
const menuProductDetails = document.querySelector('#shopingCartContainer');

const cardConstainer = document.querySelector('.cards-container');

const cards = document.querySelector('.product-card');
const productInfo = document.querySelector('#productDetail');

navEmail.addEventListener('click', toggleDestokMenu);
menuBoton.addEventListener('click', toggleMobileMenu);
CarIcon.addEventListener('click', toggleCarIcon)

function toggleDestokMenu() {
    const mProductDetailOpen = !menuProductDetails.classList.contains('inactive');

    if (mProductDetailOpen) {
        menuProductDetails.classList.add('inactive');
     }

    destokMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
 const mProductDetailOpen = !menuProductDetails.classList.contains('inactive');
 const productDetailOpen = !productInfo.classList.contains('inactice');

 if (mProductDetailOpen) {
    menuProductDetails.classList.add('inactive');
 }
 if (productDetailOpen) {
  productInfo.classList.add('inactive');
 }
 mobileMenu.classList.toggle('inactive');
}

function toggleCarIcon(){
    const mobileMenuClose = mobileMenu.classList.contains('inactive');
    const destokMenuOpen = !destokMenu.classList.contains('inactive');
    const productDetailOpen = !productInfo.classList.contains('inactice');
    if (destokMenuOpen) {
        destokMenu.classList.add('inactive');
    }
    if (!mobileMenuClose) {
         mobileMenu.classList.add('inactive');
     }
     if (productDetailOpen) {
      productInfo.classList.add('inactive');
     }

     menuProductDetails.classList.toggle('inactive');
}

//Agregando productos desde js a Html

function AddProduct(name,price,img) {
    productList.push({
     name: name,
     price: price,
     img: img,
    })
}

const productList = [];
AddProduct('Bike','120',"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");

AddProduct("Computer",'240','https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80');

AddProduct('X-BOX X','500','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamZ2i2LjfMQJk6-9S4qvEUkmaM-nfN9L58A&usqp=CAU');

let i = 0;
function renderProducts(productList) {
  for (product of productList) { //si cambias el in por el of devuelv ele indice 
  /*const productCard =  document.createElement('div');
  productCard.classList.add('product-card');

  const img = document.createElement('img');
  img.setAttribute('src', product.img);
   
  const productInfo =  document.createElement('div');
  productInfo.classList.add('product-info');

  const productText = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = `${product.price}`;
  const productName = document.createElement('p');
  productName.innerText = `${product.name}`;

  const productFigure = document.createElement('figure');
  const productImage = document.createElement('img');
  productImage.setAttribute('src', './icons/bt_add_to_cart.svg');
*/

  const htmlCards = `<div class="product-card">
  <img id="${i++}" class="img" onclick="seleccionImg()" src="${product.img}" alt="">
  <div class="product-info">
    <div>
      <p>${product.price}</p>
      <p>${product.name}</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div>`;
 
cardConstainer.innerHTML += htmlCards;

  /*Con Element.append() podemos agregar varios nodos y texto mientras que con Element.appendChild() solo podemos agregar un nodo. */
}
}

renderProducts(productList);

 



//cards.addEventListener('click',seleccionImg);

function seleccionImg(){
 const productsCarOpen = !menuProductDetails.classList.contains('inactive');
   document.querySelectorAll(".img").forEach(el => {

    el.addEventListener("click", e => {
  
      const id = e.target.getAttribute("id");
  
      console.log("Se ha clickeado el id "+id);
      
      const HtmlProductDetail = `<div onclick="closeProduct()" class="product-detail-close">
      <img  src="./icons/icon_close.png" alt="close">
    </div>
    <img id="src" src="${productList[id].img}" >
    <div class="product-info">
      <p id="precio">${productList[id].price}</p>
      <p id="nombre">${productList[id].name}</p>
      <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
      <button class="primary-button add-to-cart-button">
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
        Add to cart
      </button>
    </div>`;
    productInfo.innerHTML = HtmlProductDetail;
      
    });
    if (productsCarOpen) {
      menuProductDetails.classList.add('inactive');
    }
    productInfo.classList.remove('inactive');
  });

 
}

function closeProduct(){
  productInfo.classList.add('inactive');
}





