const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

emailMenu.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.toggleAttribute("hidden");
    console.log("asd");
}

const mobileicon = document.querySelector('.menu');
const mobilemenu = document.querySelector(".mobile-menu");

const shoppingicon = document.querySelector(".navbar-shopping-cart");
const shoppingmenu = document.querySelector(".product-detail");


mobileicon.addEventListener("click",()=>{
    if (!shoppingmenu.hasAttribute("hidden")) {  
        shoppingmenu.toggleAttribute("hidden");
    } 
    mobilemenu.toggleAttribute("hidden");
});



shoppingicon.addEventListener("click", ()=>{
    if (!mobilemenu.hasAttribute("hidden")) {
        mobilemenu.toggleAttribute("hidden");
    }
    shoppingmenu.toggleAttribute("hidden");
     
});