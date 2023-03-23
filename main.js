const navEmail = document.querySelector(".navbar-email") 
const desktopMenu = document.querySelector(".desktop-menu")
const listMenuIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")
const cardContainer = document.querySelector(".cards-container")


//Configurando el nav menu
//llamamos el addEventListener y al hacer click, invocamos la función
navEmail.addEventListener("click", toggleMenu)
listMenuIcon.addEventListener("click", toggleListMenu)
shoppingCartIcon.addEventListener("click", toggleShoppingCart)

//cuando clickeamos shoppingCart, 
//no display de mobileMenu ni de desktopMenu (activamos la clase "inactive" con el condicional if)
//y el aside se abre o cierra con el toggle
function toggleShoppingCart(e) {
    //almacenamos en variable: si mobileMenu contiene la clase "inactivo"
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive") 
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive")
    e.preventDefault()
    console.log(e);
    //si no contiene la clase "inactivo", adherirla para que no se muestre el menú
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive")
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive")
    }

    
 aside.classList.toggle("inactive")
}

//cuando clickeamos mobileMenu,
//si aside no contiene la clase inactive (tiene display),
//añadimos la clase inactive para que no haya display
//al clickear mobileMenu, hacemos toggle en la clase "inactive"
function toggleListMenu(e) {
    e.preventDefault()
    console.log(e);
    const isAsideClosed = aside.classList.contains("inactive")
    
    if (!isAsideClosed) {
        aside.classList.add("inactive")
    }

    mobileMenu.classList.toggle("inactive")
}

//cuando clickeamos desktopMenu,
//si el aside está abierto, lo cerramos
//hacemos toggle en desktopMenu para cada click
function toggleMenu(e) {
    e.preventDefault()  
    console.log(e);
    const isAsideClosed = aside.classList.contains("inactive")
    
    if (!isAsideClosed) {
        aside.classList.add("inactive")
    }

    desktopMenu.classList.toggle("inactive")
}


//configurando el HTML desde JavaScript
const productList = []
productList.push({
    name: "Bike",
    price: 150,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}),
productList.push({
    name: "Baloon",
    price: 75,
    img: "https://sporting.vtexassets.com/arquivos/ids/557628/6HM8141-000-1.jpg?v=637928169669670000",
}),
productList.push({
    name: "Shoes",
    price: 270,
    img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/aa53a0a800c846abb44aae8a00367e1d_9366/Zapatillas_Tensaur_Sport_Training_Cierre_de_Cordones_Blanco_GW6422_01_standard.jpg",
})


//función en la que almacenamos el ciclo for,
//en donde está configurado nuestro array
function renderProducts(arr) {
    //ciclo que nos permite configurar todos los productos del array
    for (product of arr) {
    
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const img = document.createElement("img")
        img.setAttribute("src", product.img)
    
        
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
    
        const productPrice = document.createElement("p")
        productPrice.innerText = "$" + product.price;
        
    
        const productDiv = document.createElement("div")
        productDiv.appendChild(productPrice)
        
        const productName = document.createElement("p")
        productName.innerText = product.name;
    
        productDiv.appendChild(productName)
    
        const productFigure = document.createElement("figure")
    
        const productImgCart = document.createElement("img")
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productDiv)
        productInfo.appendChild(productFigure)
    
        productCard.appendChild(img)
        productCard.appendChild(productInfo)
    
        cardContainer.appendChild(productCard)
    }     
}

renderProducts(productList)