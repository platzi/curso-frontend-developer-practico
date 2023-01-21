const menuEmail =  document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".burguer-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".sh-cart-img");
const asideShCart = document.querySelector(".sh-cart-detail");
const detailClose = document.querySelector(".product-detail-close");
const productDetail = document.querySelector(".aside-product-detail");


menuEmail.addEventListener("click", toggleMenu);
burguerMenu.addEventListener("click", toggleMenu);
shoppingCart.addEventListener("click", toggleMenu);
productDetail.addEventListener('click', toggleMenu)
detailClose.addEventListener("click", closeAside)

function toggleMenu (event) {
  if (event.target.className === "navbar-email" ) {
    asideShCart.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
    productDetail.classList.add("inactive");
  } else if (event.target.className === "burguer-menu") {
    asideShCart.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
    productDetail.classList.add("inactive")
  } else if (event.target.className === "sh-cart-img" ) {
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    asideShCart.classList.toggle("inactive");
    productDetail.classList.add("inactive")
  };
}

function openAside (){
  // const aside = productDetail.classList
  productDetail.classList.remove("inactive")
  if (desktopMenu.classList == "desktop-menu"){
    desktopMenu.classList.add("inactive")
  }
  if (asideShCart.classList == "sh-cart-detail" ) {
    asideShCart.classList.add("inactive")
  }
}
function closeAside() {
  productDetail.classList.add("inactive")
}

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
    productCard.addEventListener("click", openAside);
    
    const img = document.createElement("img");
    img.setAttribute( "src" , elem.img );
    img.className = "card-img";
    img.addEventListener("click", openAside )
    
    const info = document.createElement("div");
    info.className = "product-info";
    info.addEventListener("click", openAside)

    const div = document.createElement("div");
    
    const price = document.createElement("p");
    price.append(document.createTextNode(`$${elem.price}`));
    
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

};

printCards(productlist)