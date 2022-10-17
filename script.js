const email = document.querySelector(".navbar-email");
const menu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carrito = document.querySelector(".navbar-shopping-cart");
const carritoMenu = document.querySelector(".product-detail");
const cards = document.querySelector(".cards-container");

email.addEventListener("click", toggleMenu);
burgerMenu.addEventListener("click", toggleMobile);
carrito.addEventListener("click", togglecarrito);

function toggleMenu (){

    const carritoClosed = carritoMenu.classList.contains("inactive"); 

    if(!carritoClosed){

        carritoMenu.classList.add("inactive");
    }

     
    menu.classList.toggle("inactive");

}

function toggleMobile (){

    const carritoClosed = carritoMenu.classList.contains("inactive"); 

    if(!carritoClosed){

        carritoMenu.classList.add("inactive");
    }

     
    mobileMenu.classList.toggle("inactive");
}

function togglecarrito(){

    const mobileMenuClosed = mobileMenu.classList.contains("inactive"); 
    const menuClosed = menu.classList.contains("inactive"); 

    
    if(!menuClosed){

        menu.classList.add("inactive");
        
    }

    if(!mobileMenuClosed){

        mobileMenu.classList.add("inactive");
        
    }

     
    carritoMenu.classList.toggle("inactive");
   

}

const productList = [];
productList.push({
    name: "Bike",
    price : 120,
    image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Pantalla",
    price : 200,
    image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Computadora",
    price : 400,
    image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});


function renderProduct(arr)
{
    for(product of arr){
    
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigu = document.createElement("figure");
        const productImgCard = document.createElement("img");
        productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigu.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigu);
    
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cards.appendChild(productCard); 
    
    
    }
}

renderProduct(productList);


