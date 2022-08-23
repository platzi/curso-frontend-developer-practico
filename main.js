//Variables
const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");
const shopCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector(".product-detail");

//Listeners
email.addEventListener('click',()=>{
  toggleInactive(desktopMenu);
  if(!shoppingCart.classList.contains("inactive")){
    toggleInactive(shoppingCart);
  }
});
menu.addEventListener('click',()=>{
  toggleInactive(mobileMenu);
  if(!shoppingCart.classList.contains("inactive")){
    toggleInactive(shoppingCart);
  }
});
shopCartIcon.addEventListener('click', ()=>{
  toggleInactive(shoppingCart);
  if(!mobileMenu.classList.contains("inactive")){
    toggleInactive(mobileMenu);
  }
  if(!desktopMenu.classList.contains("inactive")){
    toggleInactive(desktopMenu);
  }
});

//Functions
function toggleInactive(element){
  element.classList.toggle("inactive");
}