const emailFromNavBar = document.querySelector(".navbar-email");
const dropMenuFromEmail = document.querySelector(".desktop-menu");
const hamburguerMenuButton = document.querySelector("#hamButton");
const verticalMobileMenu = document.querySelector(".mobile-menu");
const menuCart = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");

emailFromNavBar.addEventListener("click", toggleDropMenu);
hamburguerMenuButton.addEventListener("click", toggleMobileMenu);
menuCart.addEventListener("click", toggleMenuCart);

//-----------------------------FUNCIONES DE DESPLIEGUE DE MENU 
function toggleMenuCart()
{
    const  verticalMobileMenuClosed = verticalMobileMenu.classList.contains("inactive")
 
    if (!verticalMobileMenuClosed) 
    {
        verticalMobileMenu.classList.add("inactive")
    }

    shoppingCartContainer.classList.toggle("inactive")

}

function toggleDropMenu ()
{
    const asideClosed = shoppingCartContainer.classList.contains("inactive")
    if (!asideClosed) 
    {
        shoppingCartContainer.classList.toggle("inactive")
    }
    dropMenuFromEmail.classList.toggle("inactive")

}

function toggleMobileMenu ()
{
    const asideClosed = shoppingCartContainer.classList.contains("inactive")
    if (!asideClosed) 
    {
        shoppingCartContainer.classList.toggle("inactive")
    }
    verticalMobileMenu.classList.toggle("inactive")
}
//-----------------------------------



const productList = [];

productList.push(
    {
        name: "Iphone 13",
        price: 2900,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    }
);

productList.push(
    {
        name: "Samsung Galaxy s22",
        price: 3450,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    }
);

productList.push(
    {
        name: "PowerBank",
        price: 140,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    }
);

productList.push(
    {
        name: "bike",
        price: 120,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    }
);







function renderProduct(arr)
{

    for (const product of arr) {
        const individualProductCard = document.createElement("div");
        individualProductCard.classList.add("product-card");
    
        const img = document.createElement("img")
        img.setAttribute("src", product.image)
        
        const individualProductInfo = document.createElement("div");
        individualProductInfo.classList.add("product-info");
    
        const individualProductInfoInnerDiv = document.createElement("div");
    
        const individualProductPrice = document.createElement("p");
        individualProductPrice.innerText = "$" + product.price
        const individualProductName = document.createElement("p");
        individualProductName.innerText = product.name
    
        const individualProductFigureTag = document.createElement("figure");
        const individualProductCartIcon = document.createElement("img")
        img.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
    
    }

}