const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const mobileMenu = document.querySelector(".mobile-menu")
const aside = document.querySelector(".product-detail")

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside)

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains("inactive");


    if (!isAsideClosed){
        aside.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains("inactive");


    if (!isAsideClosed){
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive")
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if (!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    }

    aside.classList.toggle("inactive")
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Car",
    price: 2400,
    image: "https://www.carrosyclasicos.com/media/k2/items/cache/8f316ac48e41dc8633e89a01554f58d5_XL.jpg"
});
productList.push({
    name: "Computer",
    price: 1000,
    image: "https://media.wired.com/photos/62b4a66bcf5463e00aca58a7/191:100/w_1280,c_limit/MSI-Katana-GF66-Gear.jpg"
});

