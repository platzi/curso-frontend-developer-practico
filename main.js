const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuHamIcon = document.querySelector(".menu");
const aside = document.querySelector(".product-detail");
const menuShoppingCart = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener("click",toggleDesktopMenu);
menuHamIcon.addEventListener("click",toggleMobileMenu);
menuShoppingCart.addEventListener("click",toggleMyOrderMenu);

function toggleDesktopMenu(){
     let isAsideClose=aside.classList.contains("inactive");
     

     if(!isAsideClose){
          aside.classList.add("inactive");

     }
     desktopMenu.classList.toggle("inactive");
     
}

function toggleMobileMenu(){
     let isAsideClose=aside.classList.contains("inactive");

     if(!isAsideClose){
          aside.classList.add("inactive");
     }
     mobileMenu.classList.toggle("inactive");
}

function toggleMyOrderMenu(){
     let isMobileMenuClose = mobileMenu.classList.contains("inactive");
     let isDesktopMenuClose = desktopMenu.classList.contains("inactive");

     if(!isMobileMenuClose || !isDesktopMenuClose){
          mobileMenu.classList.add("inactive");
          desktopMenu.classList.add("inactive");
     }
     aside.classList.toggle("inactive");
}

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


function renderProducts(arr){
     for(product of arr){
          const productCard = document.createElement("div");// Creas un elemento.
          productCard.classList.add("product-card");//Le agrego la clase product-car al div que recien cree
     
          const productImg = document.createElement("img");//creo el elemento img.
          productImg.setAttribute("src",product.image);//le modifico un atributo. el src. al src pongo de atributo al product.image.
     
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