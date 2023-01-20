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

const cards = []

function printCards(arr) {
  
  for(elem of arr){

    const productCard = document.createElement("div");
    productCard.className =  "product-card";

    const img = document.createElement("img");
    img.setAttribute( "src" , elem.img );
    
    const info = document.createElement("div");
    info.className = "product-info";

    const div = document.createElement("div");
    
    const price = document.createElement("p");
    price.append(document.createTextNode(`${elem.price}`));
    
    const productName = document.createElement("p");
    productName.append(document.createTextNode(`${elem.name}`));
    
    const fig = document.createElement("figure");
    const imgCart = document.createElement("img");
    imgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
    fig.append(imgCart);
    div.append(price,productName);
    info.append(div, fig);
    productCard.append(img, info);

    cards.push(productCard)

  }

  cardsContainer.append(...cards)
}


printCards(productlist);