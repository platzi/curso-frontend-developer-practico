const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMenuMob = document.querySelector(".menu"); //boton para menu en mobile
const mobileMenu = document.querySelector(".mobile-menu");
const iconMenuCar = document.querySelector(".shoppin-cart");//boton para mostrar product-detail en el carrito
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container"); //creamos esta constante como div para meter productCard

menuEmail.addEventListener("click", toggleDesktopMenu);
iconMenuMob.addEventListener("click", toggleMobileMenu);
iconMenuCar.addEventListener("click", toggleProductCarrito);


function toggleDesktopMenu(){
    const isAsideClose = shoppingCartContainer.classList.contains("inactive");
    if (!isAsideClose){
        shoppingCartContainer.classList.add("inactive");
    }
    
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideMobileClose = shoppingCartContainer.classList.contains("inactive");
    if (!isAsideMobileClose){
        shoppingCartContainer.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleProductCarrito(){
    const isMobileMenuClose = mobileMenu.classList.contains("inactive");
    if (!isMobileMenuClose){
        mobileMenu.classList.add("inactive");
    }
    
    const isDesktopMenuClose = desktopMenu.classList.contains("inactive");
    if (!isDesktopMenuClose){
        desktopMenu.classList.add("inactive");
    }
    
    shoppingCartContainer.classList.toggle("inactive");
}

const productList = []; //proceso para no repetir los div de product-card en el html
productList.push({ // creamos una lista para ir agregando cada producto
    name: "Bike",
    price: 119,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push({
    name: "Skateboard",
    price: 99,
    image: "https://images.pexels.com/photos/2529187/pexels-photo-2529187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

productList.push({
    name: "Inline Skate",
    price: 107,
    image: "https://images.pexels.com/photos/13373949/pexels-photo-13373949.jpeg",
})

function renderProduct(arr) {
        //creamos un for para empezar a crear el div contenerdor.
    for (product of arr){
        const productCard = document.createElement("div"); //creamos el div de class product-card 
        productCard.classList.add("product-card"); //le agregramos la clase

        //creamos la imagen
        const productImg = document.createElement("img"); //generamos una constante para la imagen
        productImg.setAttribute("src", product.image); //a la cual le asignamos como atributo el obejto image de cada producto
        
        //creamos el div de product-info
        const productInfo = document.createElement("div"); //creamos el div de class product-info 
        productInfo.classList.add("product-info"); //y le asignamos su clase correspondiente

        //creamos el div que contiene nombre y precio del producto
        const productInfoDiv = document.createElement("div"); 
        
        
        //creamos el parrafo que contiene el nombre y el precio
        const productName = document.createElement("p"); //creamos lo que seria igual a un p del nombre
        productName.innerText = product.name; //a su constante le asignamos el objeto dentro del product igual a name

        const productPrice = document.createElement("p"); //creamos lo que seria igual a un p del precio
        productPrice.innerText = "$" + product.price; //a su constante le asignamos el objeto dentro del product igual a price

        productInfoDiv.appendChild(productName); //metemos producName dentro de productInfoDiv primero y despues
        productInfoDiv.appendChild(productPrice); //metemos producPrice dentro de productInfoDiv    
        
        
        //creamos el figure
        const productInfoFigure = document.createElement("figure"); 
        
        const productInfoBtnAddCart = document.createElement("img"); //creamos el lo que seria el boton dentro de figure
        productInfoBtnAddCart.setAttribute("src", "./icons/bt_add_to_cart.svg"); //y le asignamos la imagen correspondiente a add to shopping cart
        
        productInfoFigure.appendChild(productInfoBtnAddCart); //metemos producInfoBtnAddCart dentro de productInfoFigure

        productInfo.appendChild(productInfoDiv); //metemos producInfoDiv dentro de productInfo primero y despues
        productInfo.appendChild(productInfoFigure); //metemos producInfoFigure dentro de productInfo 

        productCard.appendChild(productImg); //metemos productImg dentro de productCard primero y despues
        productCard.appendChild(productInfo); //metemos productInfo dentro de productCard

        cardsContainer.appendChild(productCard); //metemos productCard dentro de cardsContainer
        
    }

}
renderProduct(productList);

