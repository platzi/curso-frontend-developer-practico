



document.addEventListener("click", e=>{
    if (e.target.matches(".navbar-email")) {
        document.querySelector(".desktop-menu").classList.toggle("active");
    }
})