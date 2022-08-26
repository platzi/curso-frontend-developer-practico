//Variables
const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");
const shopCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector("#shoppingCartContainer");
const productDetail = document.querySelector("#productDetail");
const productDetailCloseBtn = document.querySelector(".product-detail-close");
const cardsContainer = document.querySelector(".cards-container");
const productList=[];
productList.push(
  {
    id:1,
    name:"Bike",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace."
  },
  {
    id:2,
    name:"Monitor",
    price: 420,
    img: "https://images.pexels.com/photos/7915226/pexels-photo-7915226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "It's a monitor with a beautiful and colorful image, it has an IPS pannel with a refresh ratio of 144Hz for the Gaming lovers."
  },
  {
    id:3,
    name:"XConsole",
    price: 860,
    img: "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "This is an old console which has a great state to collect and care or have a pretty memory playing the games when you were young"
  },
  {
    id:4,
    name:"FunkoPoP",
    price: 75,
    img: "https://images.pexels.com/photos/699739/pexels-photo-699739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "It's a peaceful friend to decorate your setup, send as a gift or just collect"
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
  if(!productDetail.classList.contains("inactive")){
    toggleInactive(productDetail);
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
  if(!productDetail.classList.contains("inactive")){
    toggleInactive(productDetail);
  }
});
window.addEventListener("load",()=>{
  renderProducts();
});
productDetailCloseBtn.addEventListener("click",()=>{
  toggleInactive(productDetail);
});

//Functions
function toggleInactive(element){
  element.classList.toggle("inactive");
}
function renderProducts(products=productList){
  for(element of products){
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    //product-card
    const img = document.createElement("img");
    img.setAttribute("src",element.img);
    img.setAttribute("alt",element.name);
    //-listener to open productDetail
    img.setAttribute("onclick",`openProductDetail(${element.id})`);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    //  product-info
    const productInfoDiv = document.createElement("div");
    //    info
    const price = document.createElement("p");
    price.innerText = "$"+element.price;
    const name = document.createElement("p");
    name.innerText = element.name;
    //  product-info
    const figure = document.createElement("figure");
    //    figure
    const cartImg = document.createElement("img");
    cartImg.setAttribute("src","./icons/bt_add_to_cart.svg");
  
    productInfoDiv.append(price,name);
    figure.append(cartImg);
    productInfo.append(productInfoDiv,figure);
    
    productCard.append(img,productInfo);
    
    cardsContainer.appendChild(productCard);
  }
}
function openProductDetail(id){
  let curProduct = productList.find(prod => prod.id == id);
  if(productDetail.classList.contains("inactive")){
    toggleInactive(productDetail);
  }
  if(!shoppingCart.classList.contains("inactive")){
    toggleInactive(shoppingCart);
  }
  if(!desktopMenu.classList.contains("inactive")){
    toggleInactive(desktopMenu);
  }
  document.querySelector("#productDetailImg").setAttribute("src",curProduct.img);
  document.querySelector("#productDetailPrice").innerText="$"+curProduct.price;
  document.querySelector("#productDetailName").innerText=curProduct.name;
  document.querySelector("#productDetailDesc").innerText=curProduct.description;
}