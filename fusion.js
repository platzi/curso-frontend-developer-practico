const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
console.log("hola");
const carrito_Menu_icon = document.querySelector(".navbar-shopping-cart");
const aside_Menu = document.querySelector(".product-detail");

const mobile_menu_icon = document.querySelector(".menu");
const mobile_menu= document.querySelector(".mobile-menu");

const cardsContainer = document.querySelector(".cards-container");

const ProductDetail_Aside = document.querySelector(".product-detail-secondary");
const ProductDetail_Close = document.querySelector(".product-detail-secondary-close");


menuEmail.addEventListener("click", toggleDesktopMenu);
mobile_menu_icon.addEventListener("click",toggleMobileMenu);
carrito_Menu_icon.addEventListener("click",toggleAsideMenu);
ProductDetail_Close.addEventListener("click",closeProductDetail);

function toggleDesktopMenu(){
    const isAsideMenuClosed= aside_Menu.classList.contains("inactive");
    const aside_secondary_MenuClosed = ProductDetail_Aside.classList.contains("incative");

    if(!isAsideMenuClosed){
        aside_Menu.classList.add("inactive")
    }
    
    if(!aside_secondary_MenuClosed){
        ProductDetail_Aside.classList.add("inactive")
       }

desktopMenu.classList.toggle("inactive")

};

function toggleMobileMenu(){
    const isAsideMenuClosed= aside_Menu.classList.contains("inactive");
    const aside_secondary_MenuClosed = ProductDetail_Aside.classList.contains("incative");

    if(!isAsideMenuClosed){
        aside_Menu.classList.add("inactive")
    }
    if(!aside_secondary_MenuClosed){
        ProductDetail_Aside.classList.add("inactive")
       }

    mobile_menu.classList.toggle("inactive")
};

function toggleAsideMenu(){
   const isMobileMenuClosed= mobile_menu.classList.contains("incative");
   const aside_secondary_MenuClosed = ProductDetail_Aside.classList.contains("incative");

    if(!isMobileMenuClosed){
         mobile_menu.classList.add("inactive")
    }

    if(!aside_secondary_MenuClosed){
    ProductDetail_Aside.classList.add("inactive")
   }

   aside_Menu.classList.toggle("inactive")
};
    


function  openProductDetailAside(){
    const isAsideMenuClosed= aside_Menu.classList.contains("inactive");
    const isMobileMenuClosed= mobile_menu.classList.contains("incative");

    if(!isAsideMenuClosed){
        aside_Menu.classList.add("inactive")
    }
    if(!isMobileMenuClosed){
        mobile_menu.classList.add("inactive")
   }
    
    ProductDetail_Aside.classList.remove("inactive");
};

function closeProductDetail(){
    ProductDetail_Aside.classList.add("inactive");
}



const productList = [];
productList.push({
    name: "bike",
    price:120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "smartTV",
    price:270,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "computador",
    price:480,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

function renderProduct(arr){
    for (product of arr) {
        const productCard= document.createElement("div");
        productCard.classList.add("product-card");
    
        //product= {name , price , image} -- product.image
        const productImg= document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = "$" + product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        const productInfoFigure = document.createElement("figure");
    
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src","./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    
    }
};

renderProduct(productList)