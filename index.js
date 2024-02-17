//menu Deskto
const login = document.querySelector("#navbar-email");
const menuDesktopDesplegable = document.querySelector(
  "#menuDesktopDesplegable"
);

//menu mobile
const iconBurguer = document.getElementById("icon_burguer");
const menuMobile = document.querySelector("#menu-mobile");

//productos carrito de compra
const iconoCar = document.querySelector("#iconCart");
const asideProductos = document.querySelector("#asideProdut");

// cards
const cardsContainer = document.querySelector(".cards-container");



// close product Detail
const productDetail=document.querySelector(".product-detail")

console.log(productDetail)

const iconCloseProductDetail=document.querySelector(".product-detail-close")

iconCloseProductDetail.addEventListener("click",iconCloseDetail)

function iconCloseDetail() {
    productDetail.classList.add("product-detail-inactive")
    asideProductos.classList.remove("show-product-order-card");
    menuDesktopDesplegable.classList.remove("show");


   
}



//funcion menu desplegable desktop
login.addEventListener("click", desplegarMenu);

function desplegarMenu() {
  menuDesktopDesplegable.classList.toggle("show");
  asideProductos.classList.remove("show-product-detail");
}

// funcion menu mobile desplegable

iconBurguer.addEventListener("click", desplegarMenuMobile);

function desplegarMenuMobile() {
  menuMobile.classList.toggle("show-menu-mobile");
  asideProductos.classList.remove("show-product-detail");
}

//funcion mi ordenes

iconoCar.addEventListener("click", desplegarProductos);

function desplegarProductos() {
  asideProductos.classList.toggle("show-product-order-card");
  menuMobile.classList.remove("show-menu-mobile");
}




//Productos card

const productList = [];



productList.push({
  name: 'Bike',
  price: 12700,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  alt: "Mountain bike with sleek design and high-performance features",
  description: "This high-quality mountain bike is perfect for off-road adventures. It boasts a lightweight frame, comfortable suspension, and reliable components to tackle any terrain."
});

productList.push({
  name: 'Bicycle helmet',
  price: 1200,
  image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
  alt: "Black and reflective bicycle helmet with MIPS technology for enhanced protection",
  description: "This stylish and safe bicycle helmet provides excellent protection with its MIPS technology and sleek design. It's lightweight and comfortable for long rides."
});

// ... and so on, adding alt and description for each product

productList.push({
  name: 'Bicycle seat bag',
  price: 876,
  image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg',
  alt: "Water-resistant bicycle seat bag for storing essential gear",
  description: "This convenient and waterproof seat bag securely attaches to your bike seat, providing ample storage for tools, spare tubes, and other essentials."
});









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

//detalles product



 

 

for (const product of productList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const imagenProduct = document.createElement("img");
  imagenProduct.setAttribute("src", product.image);
  imagenProduct.setAttribute("alt", product.alt);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const div = document.createElement("div");

  const precio = document.createElement("p");
  precio.textContent = product.price;
  const name = document.createElement("p");
  name.textContent = product.name;

  const figure = document.createElement("figure");

  const imageIconoCard = document.createElement("img");
  imageIconoCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

  productCard.append(imagenProduct, productInfo);
  productInfo.append(div,figure)


  div.appendChild(name);
  div.appendChild(precio);

  figure.appendChild(imageIconoCard)



  cardsContainer.appendChild(productCard);

imagenProduct.addEventListener("click",MostrarDetalles)

function MostrarDetalles(productList) {
    const productDetail=document.querySelector(".product-detail")
    productDetail.classList.remove("product-detail-inactive")

    const imageDetail=document.getElementById("img_product")
    imageDetail.setAttribute("src",product.image)
    imageDetail.setAttribute("alt", product.alt)

    const product_price=document.getElementById("product_price")
    product_price.textContent="$" + product.price

    const product_name=document.getElementById("product_name")
    product_name.textContent=product.name

    const Product_description=document.getElementById("product_descrip")
    Product_description.textContent=product.description
}



 
}

/*<aside id="productDetail" class="product-detail ">
      <div class="product-detail-close">
        <img src="./icons/icon_close.png" alt="close">
      </div>
      <img src="" alt="" id="img_product">
      <div class="product-info-detail">
        <p id="product_price"></p>
        <p id="product_name"></p>
        <p id="product_descrip"></p>
        <button class="primary-button add-to-cart-button">
          <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
          Add to cart
        </button>
      </div>
    </aside>
    */