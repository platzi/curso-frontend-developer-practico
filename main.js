



document.addEventListener("click", e=>{
    if (e.target.matches(".navbar-email")) {
        document.querySelector(".desktop-menu").classList.toggle("active");
        document.querySelector(".product-detail").classList.add("active")

    }
    if (e.target.matches(".navbar-shopping-cart *")) {
        document.querySelector(".product-detail").classList.toggle("active")
        document.querySelector(".desktop-menu").classList.add("active");

    }
})