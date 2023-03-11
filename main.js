const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector(".desktop-menu");
const menuHamIcon=document.querySelector(".menu");
const mobileMenu=document.querySelector(".mobile-menu");
const menuCarritoIcon=document.querySelector(".navbar-shopping-cart")
const shoppingCartContainer=document.querySelector("#shoppingCartContainer")
const productDetailContainer=document.querySelector("#productDetail")
const productDetailClose=document.querySelector(".product-detail-close")

const cardContainer=document.querySelector(".cards-container")

let productList=[];
let product
let productCard


menuEmail.addEventListener("click",toggleDesktopMenu);
menuHamIcon.addEventListener("click",toggleMobileMenu);
menuCarritoIcon.addEventListener("click",toggleCarritoshoppingCartContainer)
productDetailClose.addEventListener("click",closeProductDetailAside)

function toggleDesktopMenu(){
    const shoppingCartContainerClose=shoppingCartContainer.classList.contains("inactive")
    const productDetailContainerClose=productDetailContainer.classList.contains("inactive")

    if(!shoppingCartContainerClose){
        shoppingCartContainer.classList.add("inactive")
    }

    if(!productDetailContainerClose){
        productDetailContainer.classList.add("inactive")
    }

    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
    const shoppingCartContainerClose=shoppingCartContainer.classList.contains("inactive")
    const productDetailContainerClose=productDetailContainer.classList.contains("inactive")

    if(!shoppingCartContainerClose){
        shoppingCartContainer.classList.add("inactive")
    }    

    if(!productDetailContainerClose){
            productDetailContainer.classList.add("inactive")
        }

    mobileMenu.classList.toggle("inactive")
}

function toggleCarritoshoppingCartContainer(){
    const mobileMenuClose=mobileMenu.classList.contains("inactive")  
    const menuEmailClose=desktopMenu.classList.contains("inactive")
    const productDetailContainerClose=productDetailContainer.classList.contains("inactive")

    if(!mobileMenuClose){
        mobileMenu.classList.add("inactive")
    }

    if(!menuEmailClose){
        desktopMenu.classList.add("inactive")
    }    

    if(!productDetailContainerClose){
            productDetailContainer.classList.add("inactive")
        }

    shoppingCartContainer.classList.toggle("inactive")
}

function closeProductDetailAside(){
    const shoppingCartContainerClose=shoppingCartContainer.classList.contains("inactive")
    const mobileMenuClose=mobileMenu.classList.contains("inactive")
    const menuEmailClose=desktopMenu.classList.contains("inactive")

    if(!shoppingCartContainerClose){
        shoppingCartContainer.classList.add("inactive")
    }

    if(!mobileMenuClose){
        mobileMenu.classList.add("inactive")
    }

    if(!menuEmailClose){
        desktopMenu.classList.add("inactive")
    }

    productDetailContainer.classList.add("inactive")

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

function ProductListC(){
    productList.forEach((producto)=>{
        product=`<div id="${producto.id}" class="product-card">
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
        productCard=document.querySelectorAll(".product-card")
    })

    productCard.forEach((producto)=>{
        producto.addEventListener("click",(e)=>{
            productDetailContainer.classList.remove("inactive")
        })
    })
}

ProductListC()






