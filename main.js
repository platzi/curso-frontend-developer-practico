const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  aside.classList.add("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  aside.classList.add("inactive");
}

function toggleCarritoMenu() {
  aside.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}

/* PRODUCTS */

const productList = [];

/*AGREGANDO PRODUCTOS*/

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Monitor",
  price: 220,
  image:
    "https://images.pexels.com/photos/2049411/pexels-photo-2049411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
  name: "Keyboard",
  price: 80,
  image:
    "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: 'Mouse',
    price: 50,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

/*CREACIÓN DE LAS PRODUCT CARDS HTML*/

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
      
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
      
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
      
        /*COLOCAMOS LOS RESPECTIVOS HIJOS*/
        productFigure.appendChild(productCartImage);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productFigure);
        productCard.append(productImg, productInfo);
      
        /*LO AGREGAMOS AL CONTENEDOR FINAL*/
        cardsContainer.appendChild(productCard);
      }
      
}

renderProducts(productList);