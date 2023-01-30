const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");


}
burguerMenu.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isasideClosed = aside.classList.contains("inactive");
    if(!isasideClosed) {
        aside.classList.add("inactive");
        }
    
    mobileMenu.classList.toggle("inactive");
}

/*terminaste el video 20 comenzar con el 21*/ */






function togglemenuCarritoIcon() {
    const ismobileMenuClosed = mobileMenu.classList.contains("inactive");
    
     if(!ismobileMenuClosed) {
        mobileMenu.classList.add("inactive");
        }
    aside.classList.toggle("inactive");

}

menuCarritoIcon.addEventListener("click" , togglemenuCarritoIcon)

menuEmail.addEventListener("click" , toggleDesktopMenu);