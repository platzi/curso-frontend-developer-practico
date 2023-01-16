const menuEmail =  document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".burguer-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".sh-cart-img");
const asideShCart = document.querySelector(".sh-cart-detail");

menuEmail.addEventListener("click", toggleMenu);
burguerMenu.addEventListener("click", toggleMenu);
shoppingCart.addEventListener("click", toggleMenu);

function toggleMenu (event) {
  if (event.target.className === "navbar-email" ) {
    asideShCart.classList.add("inactive")
    desktopMenu.classList.toggle("inactive")
  } else if (event.target.className === "burguer-menu") {
    asideShCart.classList.add("inactive")
    mobileMenu.classList.toggle("inactive")
  } else if (event.target.className === "sh-cart-img" ) {
    desktopMenu.classList.add("inactive")
    mobileMenu.classList.add("inactive")
    asideShCart.classList.toggle("inactive")
  }
};

let productlist = [];

productlist.push({
  name: "Notebook",
  price: 600,
  img: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productlist.push({
  name: "Notebook",
  price: 600,
  img: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productlist.push({
  name: "Notebook",
  price: 600,
  img: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

const cardsContainer = document.querySelector('.cards-container');


function printCards(arr) {
  


  for(elem of arr){
    const productCards = cardsContainer.querySelectorAll('.product-card');

  }
  


}

printCards(productlist);