const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon=document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");



menuEmail.addEventListener("click", function(){toggleMenu(desktopMenu)});

menuHamIcon.addEventListener("click", function(){toggleMenu(mobileMenu)});

menuCarritoIcon.addEventListener("click",showMiOrder);



function toggleMenu(menuInactive){

    if (aside.classList.contains("inactive")) {
        menuInactive.classList.toggle("inactive")
    }else{
        aside.classList.add("inactive")
        menuInactive.classList.toggle("inactive")
    }

}

// function toggleMobileMenu() {
//     if (aside.classList.contains("inactive")) {
//         mobileMenu.classList.toggle("inactive")
//     }else{
//         aside.classList.add("inactive")
//         mobileMenu.classList.toggle("inactive")
//     }
    
// }

function showMiOrder() {
    if (screen.width > 640) {
        desktopMenu.classList.add("inactive");
        aside.classList.toggle("inactive");
    }
    else{
        mobileMenu.classList.add("inactive");
        aside.classList.toggle("inactive");
    }

    
}