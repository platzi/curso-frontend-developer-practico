const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartMenu = document.querySelector(".navbar-shopping-cart");
const productDetailMenu =document.querySelector(".product-detail")

email.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
shoppingCartMenu.addEventListener("click", toggleShoppingMenu)

function toggleDesktopMenu(){
    // la palabra toggle es algo asi como intercambiar. Se pone la parte de la palabra que se quiere adicionar
    // o quitar en el nombre de la clase
    const isproductDetailMenuClosed = productDetailMenu.classList.contains("inactive");
    
    if(!isproductDetailMenuClosed){
        productDetailMenu.classList.toggle("inactive");
    }

    desktopMenu.classList.toggle("inactive");
        
}

/* Otra manera de hacer la funcion de arriba
function toggleDesktopMenu(){
    if (desktopMenu.className == "desktop-menu inactive"){
        desktopMenu.className = "desktop-menu"; 
    } 
    else
    {
        desktopMenu.className += " inactive";
    }
}*/

function toggleMobileMenu(){
    // la palabra toggle es algo asi como intercambiar. Se pone la parte de la palabra que se quiere adicionar
    // o quitar en el nombre de la clase
    const isproductDetailMenuClosed = productDetailMenu.classList.contains("inactive");

    if(!isproductDetailMenuClosed){
        productDetailMenu.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleShoppingMenu(){
    // la palabra toggle es algo asi como intercambiar. Se pone la parte de la palabra que se quiere adicionar
    // o quitar en el nombre de la clase
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    }

    productDetailMenu.classList.toggle("inactive");
}