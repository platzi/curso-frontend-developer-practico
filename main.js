//Variables
const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");
const shopCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const productList=[];
productList.push(
  {
    name:"Bike",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    name:"Monitor",
    price: 420,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    name:"XConsole",
    price: 860,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    name:"FunkoPoP",
    price: 75,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
);

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
window.addEventListener("load",()=>{
  renderProducts();
});

//Functions
function toggleInactive(element){
  element.classList.toggle("inactive");
}
function renderProducts(products=productList){
  for(product of products){
    let productCard = document.createElement("div");
    productCard.classList.add("product-card");
    //product-card
    let img = document.createElement("img");
    img.setAttribute("src",product.img);
    img.setAttribute("alt",product.name);
    let productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    //  product-info
    let productInfoDiv = document.createElement("div");
    //    info
    let price = document.createElement("p");
    price.innerText = "$"+product.price;
    let name = document.createElement("p");
    name.innerText = product.name;
    //  product-info
    let figure = document.createElement("figure");
    //    figure
    let cartImg = document.createElement("img");
    cartImg.setAttribute("src","./icons/bt_add_to_cart.svg");
  
    productInfoDiv.append(price,name);
    figure.append(cartImg);
    productInfo.append(productInfoDiv,figure);
    
    productCard.append(img,productInfo);
    
    cardsContainer.appendChild(productCard);
  }
}