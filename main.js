const navMenuEmali = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const menuHamList = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuCarritoList = document.querySelector(".product-detail");

navMenuEmali.addEventListener("click" , toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleMenuCarritoList);


function toggleMobileMenu(){
    menuHamList.classList.toggle("inactive");
    
    if(!menuCarritoList.classList.contains("inactive")){
        menuCarritoList.classList.toggle("inactive");
    }
   
}

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");

    if(!menuCarritoList.classList.contains("inactive")){
        menuCarritoList.classList.toggle("inactive");
    }
    
}

function toggleMenuCarritoList(){
    menuCarritoList.classList.toggle("inactive");

    if(!menuHamList.classList.contains("inactive")){
        menuHamList.classList.toggle("inactive");
    }

    if(!desktopMenu.classList.contains("inactive")){
        desktopMenu.classList.toggle("inactive");
    }

}