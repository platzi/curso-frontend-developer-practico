const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const menuCarritoIcon = document.querySelector(".product-detail");
const arrowIcon = document.querySelector("#flechita-menu-carrito");
const cardsContainer = document.querySelector('.cards-container');

burgerMenu.addEventListener('click', function(){toggleSection(mobileMenu)});
navbarEmail.addEventListener('click', function(){toggleSection(desktopMenu)});
shoppingCart.addEventListener('click', function(){toggleSection(menuCarritoIcon)});
arrowIcon.addEventListener('click', function(){toggleSection(menuCarritoIcon)});

function toggleSection(element){
    element.classList.toggle("inactive");
   /*  if(desktopMenu.getAttribute("class")==="desktop-menu inactive"){
    desktopMenu.setAttribute("class", "desktop-menu");
    } else if(desktopMenu.getAttribute("class")==="desktop-menu"){
    desktopMenu.setAttribute("class", "desktop-menu inactive");
    } */

    const isMobileMenuOpen = mobileMenu.classList.contains("inactive");

    if(!isMobileMenuOpen){
        if(element == menuCarritoIcon){
            mobileMenu.classList.toggle("inactive")
        }
    }

}

const productList = [];
productList.push({
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    precio: 120.00 ,
    descripcion: "bike",
});
productList.push({
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    precio: 30.00 ,
    descripcion: "Llantas",
});

productList.push({
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    precio: 10.00 ,
    descripcion: "Manubrio",
});

console.log(productList);

for (product of productList) {

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    const img = document.createElement('img');
    img.setAttribute('src', product.img);
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice= document.createElement('p');
    productPrice.innerText = '$ ' + product.precio;
    const productDescription = document.createElement('p');
    productDescription.innerText =product.descripcion;

    productInfoDiv.append(productPrice, productDescription);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

    productInfoFigure.append(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(img, productInfo);
    
    cardsContainer.append(productCard);
}
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