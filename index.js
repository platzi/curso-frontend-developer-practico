const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const bntMenuMobile = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const productDetail = document.querySelector(".product-detail");
const navbarShopingCart = document.querySelector(".navbar-shopping-cart");
  
email.addEventListener('click',()=>{
    const cartMenuClosed = productDetail.classList.contains("inactive");
    if(!cartMenuClosed){
        productDetail.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive");

})

bntMenuMobile.addEventListener("click",()=>{
    const cartMenuClosed = productDetail.classList.contains("inactive");
    if(!cartMenuClosed){
        productDetail.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive");
})

navbarShopingCart.addEventListener("click",()=>{

    const mobileMenuClosed = mobileMenu.classList.contains("inactive");
    const emailClosed = desktopMenu.classList.contains("inactive");
    if(!emailClosed){
        desktopMenu.classList.add("inactive");
    }
    if(!mobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }
    productDetail.classList.toggle("inactive");
    
})
