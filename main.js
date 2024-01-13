const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailIcon = document.querySelector(".product-detail-close");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainner = document.querySelector("#productDetail");

const cardsContainer = document.querySelector(".cards-container");
const contenedorOrdenes = document.querySelector(".my-order-content");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  const isProductDetailClosed =
    productDetailContainner.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetailContainner.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive");
  productDetailContainner.classList.remove("inactive");
}
function closeProductDetailAside() {
  productDetailContainner.classList.add("inactive");
}
const productList = [];
const myOrdersLista = [];

/**productos de la pagina ppal */
productList.push({
  name: "Bike",
  price: 1200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 1100,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Compu",
  price: 150,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Compu",
  price: 50,
  image:
    "https://th.bing.com/th/id/OIG.w4q4uOBtLzcSMYMahzNy?w=1024&h=1024&rs=1&pid=ImgDetMain",
});

/**productos del carrito de compras 
function agregarCompra(arra){
    //for (listaCara of arra){}
    myOrdersLista.push({
        name: arra[1].name,
        price: arra[1].price,
        image:arra[1].image
    })//}

    return myOrdersLista;

}*/
myOrdersLista.push({
  name: "Celular",
  price: 2000,
  image:
    "https://th.bing.com/th/id/OIG.w4q4uOBtLzcSMYMahzNy?w=1024&h=1024&rs=1&pid=ImgDetMain",
});
myOrdersLista.push({
  name: "Celular A54 Render",
  price: 18000,
  image: "https://th.bing.com/th/id/OIG.52HR8N7On3yTB_lNwcAG?pid=ImgGn",
});
myOrdersLista.push({
  name: "Bike",
  price: 12000,
  image:
    "https://th.bing.com/th?id=OIP.SEFbLrKFny0S8RQUUl1h0QHaEc&w=322&h=193&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
});

function SumarPrecios(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i].price;
  }
  return suma;
}

function renderProductCar(arrayCar) {
  for (listaCar of arrayCar) {
    const listaProductCard = document.createElement("div");
    listaProductCard.classList.add("shopping-cart");

    const listProductInfoFigure = document.createElement("figure");
    const listProductImg = document.createElement("img");
    listProductImg.setAttribute("src", listaCar.image);
    listProductImg.setAttribute("alt", "arrow");
    listProductInfoFigure.appendChild(listProductImg);

    const listaProductName = document.createElement("p");
    listaProductName.innerText = listaCar.name;
    const listProductPrice = document.createElement("p");
    listProductPrice.innerText = "$" + listaCar.price;
    const iconoClosed=document.createElement("img");
    iconoClosed.setAttribute("src","./icons/icon_close.png");
    iconoClosed.setAttribute("alt", "close");
    
/**se debe de conservar el orden de los elementos creados para que aparezcan 
 * en orden
 */
    listaProductCard.appendChild(listProductInfoFigure);

    listaProductCard.appendChild(listaProductName);
    listaProductCard.appendChild(listProductPrice);
    listaProductCard.appendChild(iconoClosed);


    contenedorOrdenes.appendChild(listaProductCard);
  }


  const listTotal = document.createElement("div");
  listTotal.classList.add("order");

  const dataTotal = document.createElement("p");
  dataTotal.innerText = "Total";
  const dataValorTotal = document.createElement("p");
  dataValorTotal.innerText ="$" + SumarPrecios(arrayCar);

  listTotal.appendChild(dataTotal);
  listTotal.appendChild(dataValorTotal);
  contenedorOrdenes.appendChild(listTotal);

  const botonCompra = document.createElement("button");
  botonCompra.classList.add("primary-button");
  botonCompra.innerHTML="Comprar";
  contenedorOrdenes.appendChild(botonCompra);

}

/* agrega los productos a la pagina principal */
function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // product= {name, price, image} -> product.image
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
renderProductCar(myOrdersLista);
SumarPrecios(productList);
