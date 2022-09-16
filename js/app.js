const btnOpenMenu = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const btnMenMobile = document.querySelector("#btnMenMobile");
const mobileMenu = document.querySelector(".mobile-menu");
const btnCartIcon = document.querySelector("#btnCartIcon");
const productDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container")
const productList = [];

function toggleShow(eventElement, elementToToggle) {
  eventElement.addEventListener("click", () => {
    elementToToggle.classList.toggle("hidden");
  });
  elementToToggle.addEventListener("mouseleave", (e) => {
    elementToToggle.classList.add("hidden");
  });
}

toggleShow(btnOpenMenu, desktopMenu);
toggleShow(btnMenMobile, mobileMenu);
toggleShow(btnCartIcon, productDetail);


function addProductToList (name, price, img) {
  productList.push ({
    name: name,
    price: price,
    img: img,
  })
};

function renderProduct (array) {
  for ( product of array) {
    productNode = `
     <div class="product-card">
       <img src=${product.img} alt="">
       <div class="product-info">
         <div>
           <p>$${product.price}</p>
           <p>${product.name}</p>
         </div>
         <figure>
           <img src="./icons/bt_add_to_cart.svg" alt="">
         </figure>
       </div>
     </div>
    `;
    cardsContainer.innerHTML += productNode;
 }
}

addProductToList("Bike", 120, "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
addProductToList("Coche", 2000, "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
addProductToList("MotorBike", 1200, "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
addProductToList("Cutter", 20, "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");


renderProduct(productList);