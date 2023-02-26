const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const navCarrito = document.querySelector(".product-detail")
const cartMenu = document.querySelector(".navbar-shopping-cart")
const cardsContainer = document.querySelector(".cards-container")
const productInfoInicio = document.querySelector(".info-product")
const selectorInfoProduct = document.querySelector("main-container")
// const productInfoInicio = document.querySelector(".product-detail-info")



navEmail.addEventListener("click", toggleDesktopMenu) 
menuHamIcon.addEventListener("click", toggleMobileMenu) 
cartMenu.addEventListener("click", toggleCartMenu) 


function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive")
    // para q el otro se cierre
    if (navCarrito.className === "product-detail") {
        navCarrito.classList.toggle("inactive")
    }
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive")
}

function toggleCartMenu() {
    navCarrito.classList.toggle("inactive")
    // para q el otro se cierre
    if (desktopMenu.className === "desktop-menu") {
        desktopMenu.classList.toggle("inactive")
    }
}

// function toggleProduct() {
    
    // }
    
    
    const productList = []
    productList.push({
        name: "Bike",
        precio: 120,
        img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    })
    productList.push({
        name: "Pantalla",
        precio: 220,
        img:"https://www.profesionalreview.com/wp-content/uploads/2020/04/Qu%C3%A9-es-el-contraste-de-una-pantalla-03.jpg"
    })
    productList.push({
        name: "Computadora",
        precio: 420,
        img:"https://www.tecnologia-informatica.com/wp-content/uploads/2018/08/caracteristicas-de-las-computadoras-1.jpeg"
    })
    
    
    function renderProducts(arr) {
        for (product of arr) {
            const productCard = document.createElement("div")
    productCard.classList.add("product-card")
    
    const productImg = document.createElement("img")
    productImg.setAttribute("src", product.img)
    productImg.setAttribute("class", "img-product")
    productImg.setAttribute("id", product.name)
    
    const productInfo = document.createElement("div")
    productInfo.classList.add("product-info")
    
    const productInfoDiv = document.createElement("div")
    
    const productPrice = document.createElement("p")
    productPrice.innerText =  "$" + product.precio
    const productName = document.createElement("p")
    productName.innerText=product.name
    
    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)
    
    const productInfoFigure = document.createElement("figure")
    const productimgCart = document.createElement("img")
    productimgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    productimgCart.setAttribute("class", "botonCompra")
    productimgCart.setAttribute("id", product.name)
    
    //console.log(productimgCart);
    
    productInfoFigure.appendChild(productimgCart)
    
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)
    
    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)
    
    cardsContainer.appendChild(productCard)
    
    
    
    productImg.addEventListener("click", funcion)
    console.log(productImg);
    
    
}
function funcion(imgClickeado) {
    let productClickInfo = productList.find((producto) => producto.name === imgClickeado.target.id)
    console.log(productClickInfo);
    productInfoInicio.classList.toggle("inactive")
    console.log(productInfoInicio.className);
    if(navCarrito.className === "product-detail") {
        navCarrito.classList.toggle("inactive")
    }
    if (desktopMenu.className === "desktop-menu") {
        desktopMenu.classList.toggle("inactive")
        console.log("deberia eliminarlo");
    }
    console.log(
        "si"
        );
        const asideborrar = document.querySelector(".product-detail-asideinfo")
        console.log("ESTE ES EL ASIDE ANRTES DE EDITARLO", asideborrar);
        if (asideborrar) {
            console.log("EXISTE LO VOY A EDITAR");
            const img2InfoProductsEditar = document.querySelector(".img2Info")
            img2InfoProductsEditar.setAttribute("src", productClickInfo.img)
            img2InfoProductsEditar.setAttribute("alt", productClickInfo.name)
            
            
            const p1InfoProductsEditar = document.querySelector(".p1info")
            p1InfoProductsEditar.innerText= "$" + productClickInfo.precio
            
            
            const p2InfoProductEditar = document.querySelector(".p2Info")
            p2InfoProductEditar.innerText= productClickInfo.name
            
            
        } else {
            
            console.log("SEE ESTA EJECUTANDO");
            const asideInfoProduct = document.createElement("aside")
            asideInfoProduct.setAttribute("class", "product-detail-asideinfo")
            
            const div2InfoProduct = document.createElement("div")
            div2InfoProduct.setAttribute("class","product-detail-close")
            
            const img1InfoProduct = document.createElement("img")
            img1InfoProduct.setAttribute("src", "./icons/icon_close.png")
            img1InfoProduct.setAttribute("alt", "close")
            
            
            const img2InfoProduct = document.createElement("img")
            img2InfoProduct.setAttribute("src", productClickInfo.img)
            img2InfoProduct.setAttribute("alt", productClickInfo.name)
            img2InfoProduct.setAttribute("class", "img2Info")
            
            const div3InfoProduct = document.createElement("div")
            div3InfoProduct.setAttribute("class", "product-info")
            
            const p1InfoProduct = document.createElement("p")
            p1InfoProduct.setAttribute("class", "p1info")
            p1InfoProduct.innerText= "$" + productClickInfo.precio
            
            console.log(productClickInfo.precio);
            
            const p2InfoProduct = document.createElement("p")
            p2InfoProduct.setAttribute("class", "p2Info")
            p2InfoProduct.innerText= productClickInfo.name
            
            const p3InfoProduct = document.createElement("p")
            p3InfoProduct.innerText= "With its practical position, this bike also fulfills a decorative function, add your hall or workspace."
            
            const botonInfoProduct = document.createElement("buttom")
            botonInfoProduct.setAttribute("class", "primary-button add-to-cart-button")
            botonInfoProduct.innerText= "Add to cart"
            
            const img3InfoProduct = document.createElement("img")
            img3InfoProduct.setAttribute("src", "./icons/bt_add_to_cart.svg")
            img3InfoProduct.setAttribute("alt", "add to cart")
            
            img1InfoProduct.addEventListener("click", cerrar)
            
            function cerrar() {
                console.log("se tiene q cerraer");
                productInfoInicio.classList.toggle("inactive")
            }

            // botonInfoProduct.addEventListener("click", agregaralCarritoInfo)

            // function agregaralCarritoInfo() {
            //     console.log("si aca etsoyu")
            // }
            
            
            productInfoInicio.appendChild(asideInfoProduct)
            asideInfoProduct.appendChild(div2InfoProduct)
            div2InfoProduct.appendChild(img1InfoProduct)
            asideInfoProduct.appendChild(img2InfoProduct)
            asideInfoProduct.appendChild(div3InfoProduct)
            div3InfoProduct.appendChild(p1InfoProduct)
            div3InfoProduct.appendChild(p2InfoProduct)
            div3InfoProduct.appendChild(p3InfoProduct)
            div3InfoProduct.appendChild(botonInfoProduct)
            botonInfoProduct.appendChild(img3InfoProduct)
            
        }




        }
    }

    
    renderProducts(productList)
    
    
    