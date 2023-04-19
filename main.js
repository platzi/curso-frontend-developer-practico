const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")
const mobileMenu = document.querySelector(".mobile-menu")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", togggleCarritoAside)

function toggleDesktopMenu(){//prender y apagar menu correo
    desktopMenu.classList.toggle("inactive")
    
    if(!aside.classList.contains("inactive")){//apagar carrito menu
        aside.classList.toggle("inactive")
    }
}

function toggleMobileMenu(){//prender y apagar menu mobile
    mobileMenu.classList.toggle("inactive")

    if(!aside.classList.contains("inactive")){//apagar carrito menu
        aside.classList.toggle("inactive")
    }
}

function togggleCarritoAside(){//prender y apagar carrito
    aside.classList.toggle("inactive")

    if(!mobileMenu.classList.contains("inactive")){//apagar mobile menu 
        mobileMenu.classList.toggle("inactive")
    }

    if(!desktopMenu.classList.contains("inactive")){//apagar menu correo
        desktopMenu.classList.toggle("inactive")
        console.log("cierre");
    }
}

