const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector(".desktop-menu");
const menuHamIcon=document.querySelector(".menu");
const mobileMenu=document.querySelector(".mobile-menu");
const menuCarritoIcon=document.querySelector(".navbar-shopping-cart")
const aside=document.querySelector(".product-detail")
const cardContainer=document.querySelector(".cards-container")

const productList=[];

let product

menuEmail.addEventListener("click",toggleDesktopMenu);
menuHamIcon.addEventListener("click",toggleMobileMenu);
menuCarritoIcon.addEventListener("click",toggleCarritoAside)

function toggleDesktopMenu(){
    const asideClose=aside.classList.contains("inactive")
    if(!asideClose){
        aside.classList.add("inactive")
    }

    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
    const asideClose=aside.classList.contains("inactive")

    if(!asideClose){
        aside.classList.add("inactive")
    }

    mobileMenu.classList.toggle("inactive")
}

function toggleCarritoAside(){
    const mobileMenuClose=mobileMenu.classList.contains("inactive")  
    const menuEmailClose=desktopMenu.classList.contains("inactive")
    if(!mobileMenuClose){
        mobileMenu.classList.add("inactive")
    }

    if(!menuEmailClose){
        desktopMenu.classList.add("inactive")
    }

    aside.classList.toggle("inactive")
}

productList.push({
    name: "Bike",
    price: 120,
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Bag",
    price: 98,
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Book",
    price: 20,
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.forEach((producto)=>{
    product=`<div class="product-card">
    <img src=${producto.img}alt="">
    <div class="product-info">
      <div>
        <p>${producto.price}</p>
        <p>${producto.name}</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
  </div>`

  cardContainer.innerHTML+=product
})


