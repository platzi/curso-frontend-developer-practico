const emailFromNavBar = document.querySelector(".navbar-email");
const dropMenuFromEmail = document.querySelector(".desktop-menu");
const hamburguerMenuButton = document.querySelector("#hamButton");
const verticalMobileMenu = document.querySelector(".mobile-menu");
const menuCart = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const itemCard = document.querySelector(".product-card") //Cualquier articulo mostrado
const productDetail = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");
const productList = [];

productList.push(
    {
        name: "Iphone 13",
        price: 2900,
        image: "https://images.pexels.com/photos/9667337/pexels-photo-9667337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    }
);

productList.push(
    {
        name: "Samsung Galaxy s22",
        price: 3450,
        image: "https://images.pexels.com/photos/13780425/pexels-photo-13780425.jpeg",
    }
);

productList.push(
    {
        name: "PowerBank",
        price: 140,
        image: "https://images.pexels.com/photos/4072683/pexels-photo-4072683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }
);

productList.push(
    {
        name: "Bike",
        price: 120,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    }
);

productList.push(
    {
        name: "Iphone 13",
        price: 2900,
        image: "https://images.pexels.com/photos/9667337/pexels-photo-9667337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    }
);

productList.push(
    {
        name: "Micrófono Sehnheiser",
        price: 2500,
        image: "https://images.pexels.com/photos/347700/pexels-photo-347700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
);

productList.push(
    {
        name: "Amplificador",
        price: 450,
        image: "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
);

productList.push(
    {
        name: "Mouse",
        price: 105,
        image: "https://images.pexels.com/photos/5082573/pexels-photo-5082573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
);

emailFromNavBar.addEventListener("click", toggleDropMenu);
hamburguerMenuButton.addEventListener("click", toggleMobileMenu);
menuCart.addEventListener("click", toggleMenuCart);
//itemCard.addEventListener("click", toggleitemDetails)


//-----------------------------FUNCIONES DE DESPLIEGUE DE MENU 
function toggleMenuCart()
{
    const  verticalMobileMenuClosed = verticalMobileMenu.classList.contains("inactive")
    const  productDetailClosed = productDetail.classList.contains("inactive")
    if (!verticalMobileMenuClosed) 
    {
        verticalMobileMenu.classList.add("inactive")
    }

    if (!productDetailClosed) 
    {
        productDetail.classList.add("inactive")
    }

    shoppingCartContainer.classList.toggle("inactive")

}

function toggleDropMenu ()
{
    const asideClosed = shoppingCartContainer.classList.contains("inactive")
    const  productDetailClosed = productDetail.classList.contains("inactive")

    if (!asideClosed) 
    {
        shoppingCartContainer.classList.toggle("inactive")
    }
    if (!productDetailClosed) 
    {
        productDetail.classList.add("inactive")
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

function toggleitemDetails()
{

}
//-----------------------------------



function renderProduct(arr)
{

    for (const product of arr) 
    { // FUNCIÓN PARA RENDERIZAR CADA ELEMENTO DEL ARRAY EN UNA ESTRUCTURA DE HTML 
        const individualProductCard = document.createElement("div");
        individualProductCard.classList.add("product-card");
    
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
        
        const individualProductInfo = document.createElement("div");
        individualProductInfo.classList.add("product-info");
    
        const individualProductInfoInnerDiv = document.createElement("div");
    
        const individualProductPrice = document.createElement("p");
        individualProductPrice.innerText = "$" + product.price
        const individualProductName = document.createElement("p");
        individualProductName.innerText = product.name

        individualProductInfoInnerDiv.appendChild(individualProductPrice);
        individualProductInfoInnerDiv.appendChild(individualProductName);

    
        const individualProductFigureTag = document.createElement("figure");
        const individualProductCartIcon = document.createElement("img")
        individualProductCartIcon.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        individualProductFigureTag.appendChild(individualProductCartIcon);    //ÍCONO DE CARRITO DENTRO DE LA ETIQUETA FIGHURE
        
        individualProductInfoInnerDiv.appendChild(individualProductPrice) // PRECIO Y NOMBRE DEL PRODUCTO DENTRO DE DIV CONTENEDOR 
        individualProductInfoInnerDiv.appendChild(individualProductName)

        individualProductInfo.appendChild(individualProductInfoInnerDiv)
        individualProductInfo.appendChild(individualProductFigureTag)

        individualProductCard.appendChild(productImg)
        individualProductCard.appendChild(individualProductInfo)

        cardsContainer.appendChild(individualProductCard)
    }

}

renderProduct(productList)