const API = "https://api.escuelajs.co/api/v1/products";

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCar = document.querySelector(".navbar-shopping-cart");
const asideCar = document.querySelector(".product-detail");
const body = document;
const cards_container = document.querySelector(".cards-container")

menuCar.addEventListener("click", toggleMenuCar);
body.addEventListener("click", closeDesktopMenu);
menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);

function closeDesktopMenu(event) {
  if (
    event.target.classList.contains("navbar-email") ||
    event.target.classList.contains("desktop-menu") ||
    event.target.classList.contains("menu") ||
    event.target.classList.contains("mobile-menu")
  ) {
    //no se cierre el menu si se hace click en navbar-email o desktop-menu
  } else {
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
  }
}

function toggleDesktopMenu() {
  const isAsideClosed = asideCar.classList.contains("inactive");
  if (!isAsideClosed) {
    asideCar.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  const isAsideClosed = asideCar.classList.contains("inactive");
  if (!isAsideClosed) {
    asideCar.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}
function toggleMenuCar() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  asideCar.classList.toggle("inactive");
}

async function fetchData(apiData){
const response = await fetch(apiData)
const data = await response.json()
return data
}

async function callFetch(apiData){
 try{
  const arrayProducts = []
  const products = await fetchData(apiData)
  for(let i=0;i<20;i++){
    arrayProducts.push({"title":products[i].title,"price":products[i].price,"img":products[i].images[0]})
  }
  arrayProducts.forEach(product => {
    cards_container.innerHTML += `
    <div class="product-card">
        <img src=${product.img} alt="">
        <div class="product-info">
          <div>
            <p>${product.price}$</p>
            <p>${product.title}</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
    `
  })

}catch{
  console.log("error")
 }
}
callFetch(API)


/*{
  id: 14,
  title: 'Licensed Soft Chips',
  price: 861,
  description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
  category: {
    id: 2,
    name: 'Electronics',
    image: 'https://api.lorem.space/image/watch?w=640&h=480&r=9825'
  },
  images: [
    'https://api.lorem.space/image/watch?w=640&h=480&r=6878',
    'https://api.lorem.space/image/watch?w=640&h=480&r=8385',
    'https://api.lorem.space/image/watch?w=640&h=480&r=9814'
  ]
}*/