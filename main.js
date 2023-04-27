const user = document.querySelector(".navbar-email");
const menu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu")
const burguerMenu = document.querySelector(".menu");
const market = document.querySelector(".navbar-shopping-cart");
const productos = document.querySelector(".product-detail")

user.addEventListener("click", toggleDesktopMenu);


function toggleDesktopMenu(){
    let isProductsClosed = productos.classList.contains("inactive");

    if(isProductsClosed){
        menu.classList.toggle("inactive");
    } else {
        productos.classList.toggle("inactive");
        menu.classList.toggle("inactive");
    }
}

burguerMenu.addEventListener("click" , toggleMobileMenu);

function toggleMobileMenu() {
    let isProductsClosed = productos.classList.contains("inactive");
    if(isProductsClosed){
        mobileMenu.classList.toggle("inactive");
    } else {
        productos.classList.toggle("inactive");        
        mobileMenu.classList.toggle("inactive");
    }
}

market.addEventListener("click", toggleMarket);

function toggleMarket(){
    let isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    let isDesktopClosde = menu.classList.contains("inactive");

    if(isMobileMenuClosed || isDesktopClosde){
        productos.classList.toggle("inactive");
        
    } else {
        mobileMenu.classList.toggle("inactive");
        productos.classList.toggle("inactive");
        menu.classList.toggle("inactive");    
    }

    
}

const productList = [];

productList.push({
    name: "bike", 
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "Casco", 
    price: 1200,
    img: "https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto"
})

productList.push({
    name: "Asiento", 
    price: 12000,
    img: "https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg"
})


function renderHTML (arr){
    for (product of arr){
        //Container
        let container = document.querySelector(".cards-container");
        
        //div product-card
        let divProduct = document.createElement("div");
        divProduct.classList.add("product-card")
        //img principal
        let image = document.createElement("img")
    
        //div product info
        let divProductInfo = document.createElement("div");
        divProductInfo.classList.add("product-info")
    
        //div otro div
        let div = document.createElement("div");
    
        //elementos otro div
        let name = document.createElement("p")
        let price = document.createElement("p")
    
        //figure
        let figure = document.createElement("figure");
    
        //img figure
        let imgFigure = document.createElement("img");
    
    
        price.innerHTML = "$" + product.price;
        name.innerHTML = product.name;
        image.setAttribute("src",  product.img);
        imgFigure.setAttribute("src", "./icons/bt_add_to_cart.svg")
        
        figure.append(imgFigure);
        div.append(price, name);
        divProductInfo.append(div, figure);
        divProduct.append(image, divProductInfo);
        console.log(divProduct);
        container.appendChild(divProduct);
    }
}

renderHTML(productList);