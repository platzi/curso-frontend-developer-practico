const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuHamIcon = document.querySelector(".menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const menuShoppingCart = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector("#productDetail");
const prodClose = document.querySelector(".product-detail-close");

//ESCUCHAR EVENTOS. 
menuEmail.addEventListener("click",toggleDesktopMenu);
menuHamIcon.addEventListener("click",toggleMobileMenu);
menuShoppingCart.addEventListener("click",toggleMyOrderMenu);
prodClose.addEventListener("click",closeMyProductDetail);


//FUNCION PARA DESPLEGAR EL DESKTOPMENU
function toggleDesktopMenu(){
     let isAsideClose=shoppingCartContainer.classList.contains("inactive");
     let isProductDetailClose = productDetail.classList.contains("inactive");
     

     if(!isAsideClose || !isProductDetailClose){
          shoppingCartContainer.classList.add("inactive");
          productDetail.classList.add("inactive");

     }
     desktopMenu.classList.toggle("inactive");
     
}
//FUNCION PARA DESPLEGAR EL MOBILEMENU
function toggleMobileMenu(){
     let isAsideClose=shoppingCartContainer.classList.contains("inactive");
     let isProductDetailClose = productDetail.classList.contains("inactive");

     if(!isAsideClose|| !isProductDetailClose){
          shoppingCartContainer.classList.add("inactive");
          productDetail.classList.add("inactive");
     }
     mobileMenu.classList.toggle("inactive");
}
//FUNCION PARA DESPLEGAR EL ORDERMENU
function toggleMyOrderMenu(){
     let isMobileMenuClose = mobileMenu.classList.contains("inactive");
     let isDesktopMenuClose = desktopMenu.classList.contains("inactive");
     let isProductDetailClose = productDetail.classList.contains("inactive");

     if(!isMobileMenuClose || !isDesktopMenuClose ||!isProductDetailClose){
          mobileMenu.classList.add("inactive");
          desktopMenu.classList.add("inactive");
          productDetail.classList.add("inactive");
     }
     shoppingCartContainer.classList.toggle("inactive");
}

function OpenMyProductDetail(){
     let isAsideClose = shoppingCartContainer.classList.contains("inactive");
     let isdesktopMenuClose = desktopMenu.classList.contains("inactive");
     if(!isdesktopMenuClose ||!isAsideClose){
          shoppingCartContainer.classList.add("inactive");
          desktopMenu.classList.add("inactive");
     }
     productDetail.classList.remove("inactive");
}
function closeMyProductDetail(){
     productDetail.classList.add("inactive");
}

// ARRAY DE OBJETOS, (SIMULA UN ARRAY QUE NOS DEVOLVERIA CON TODOS LOS OBJETOS DE UNA TIENDA)
const productList = [];

productList.push({
     name: "bike",
     price: 120,
     image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
     name: "Pantalla",
     price: 220,
     image: "https://www.profesionalreview.com/wp-content/uploads/2020/04/Qu%C3%A9-es-el-contraste-de-una-pantalla-03.jpg"
})

productList.push({
     name: "celular",
     price: 420,
     image: "https://media.flixcar.com/f360cdn/Samsung-81181084-ar-galaxy-s21-5g-g991-sm-g991bzalaro-368338802Download-Source-zoom.png"
})

productList.push({
     name: "Batidora",
     price: 220,
     image: "https://http2.mlstatic.com/D_NQ_NP_931987-MLA44698863174_012021-O.webp"
})

// FUNCION PARA REPETIR LOS PRODUCTOS
function renderProducts(arr){
     for(product of arr){
          const productCard = document.createElement("div");// Creas un elemento.
          productCard.classList.add("product-card");//Le agrego la clase product-car al div que recien cree
     
          const productImg = document.createElement("img");//creo el elemento img.
          productImg.setAttribute("src",product.image);//le modifico un atributo. el src. al src pongo de atributo al product.image.
          productImg.addEventListener("click",OpenMyProductDetail);

          const productInfo = document.createElement("div");// Creas un elemento.
          productInfo.classList.add("product-info");
     
          const productInfoDiv = document.createElement("div");
     
          const productPrice = document.createElement("p");
          productPrice.innerText = "$" + product.name;
     
          const productName = document.createElement("p");
          productName.innerText = product.name;
     
          productInfoDiv.append(productPrice,productName)
     
          //const productInfoDivClose = document.createElement("/div");
     
          const productInfoFigure = document.createElement("figure");
     
          const productImgCart = document.createElement("img");
          productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
     
          productInfoFigure.appendChild(productImgCart);
     
          productInfo.append( productInfoDiv, productInfoFigure);
          
          productCard.append(productImg,productInfo);
     
     
          //const productInfoFigureClose = document.createElement("/figure");
          cardsContainer.appendChild(productCard);
     }
}
renderProducts(productList)