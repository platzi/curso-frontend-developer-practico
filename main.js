const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")
const mobileMenu = document.querySelector(".mobile-menu")
const cardsContainer = document.querySelector(".cards-container")

const productList = []
productList.push({
    name: "bike",
    price: 110,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
    name: "compu",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
    name: "car",
    price: 12000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    })

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

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div")

        const productPrice = document.createElement("p")
        productPrice.innerText = "$" + product.price

        const productName = document.createElement("p")
        productName.innerText = product.name
        
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)

        const productInfoFigure = document.createElement("figure")

        const productImgCart = document.createElement("img")
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")

        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
        productInfoFigure.appendChild(productImgCart)

        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)

        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
        
        cardsContainer.appendChild(productCard)
    }
}
renderProducts(productList);

