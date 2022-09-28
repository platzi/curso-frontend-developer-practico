const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDekstopMenu);
burgerMenu.addEventListener("click", togglemobileMenu);
menuCarritoIcon.addEventListener("click", togglecarritoAside)

function toggleDekstopMenu(){

desktopMenu.classList.toggle("inactive") // Togle hace aparecer y desaparecer.
}

function togglemobileMenu(){
    mobileMenu.classList.toggle("inactive") 
}

function togglecarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
 // Si el mobile menu esta abierto y el destkopmenu tambien, le agregamos inactive
    if (!isMobileMenuClosed || !isDesktopMenuClosed) {
        mobileMenu.classList.toggle('inactive');
        desktopMenu.classList.toggle('inactive');
    }

    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: "Bike",
    Precio: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Pantalla",
    Precio: 220,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});


productList.push({
    name: "Compu",
    Precio: 520,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});


for (product of productList){ // El producto de la lista de productos , osea cada elemento del array;
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.imagen);


    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");


    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = '$' + product.Precio;

    const productName = document.createElement("p");
    productName.innerText = product.name;


    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);



    const productInfoFigure = document.createElement("figure");


    const productInfoImg = document.createElement("img");
    productInfoImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productInfoImg); // Agregar un solo nodo

    productInfo.append(productInfoDiv , productInfoFigure); // Agregar varios nodos
    
    productCard.append(productImg, productInfo);

    cardsContainer. appendChild(productCard);


}