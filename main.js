const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");


const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleBurguerMenu);
menuCarritoIcon.addEventListener("click", toogleCarritoAside);

function toggleDesktopMenu(){

    desktopMenu.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    aside.classList.add("inactive");

}

function toggleBurguerMenu(){
    
    mobileMenu.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    aside.classList.add("inactive");
}

function toogleCarritoAside(){

    aside.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    
}

const productList = [];

productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Laptop",
    price: 400,
    image: "https://imgs.search.brave.com/RiHnkD5EKLF2pv9p5TwYISqxUy7ydmSQWahK2j94uko/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/ZkNCeXA5N0M1Zmw2/ZWJNVHZLZDNRSGFF/SyZwaWQ9QXBp"
});

productList.push({
    name: "Monitor",
    price: 250,
    image: "https://imgs.search.brave.com/SbAgLHsD5zAGMYVIQ2A61zvv-5cEXfG6zw2fMq2qejg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YnJhbmRpbWlhLmNv/bS9wcm9kdWN0b3Mv/NjFGN01BUjFBUi0y/LmpwZw"
});

productList.push({
    name: "Audifonos",
    price: 90,
    image: "https://imgs.search.brave.com/LBOAS-g2PtLF1KhUvk-SPwpmufygSBvK3VlnrBJXl0I/rs:fit:940:1200:1/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vYXVkaWZvbm9z/LWF1cmljdWxhcmVz/LWRqLXRpcG8tZGlh/ZGVtYS1wbGF0YS1w/aW9uZWVyLWhkai14/NS1zLURfTlFfTlBf/Nzc4NjA1LU1MTTI5/NDk3Nzc3NDM3XzAy/MjAxOS1GLmpwZw"
});

productList.push({
    name: "Moto",
    price: 1200,
    image: "https://imgs.search.brave.com/lzPL5bNz8azJ0REoAYVlIMTPfVoJ8vbt7CLpjdFYWIU/rs:fit:933:598:1/g:ce/aHR0cHM6Ly9pbWFn/ZW5lcy5tb250ZXZp/ZGVvLmNvbS51eS9p/bWdub3RpY2lhcy8y/MDIwMDgvX1c5MzNf/ODAvNzM2NDM1Lmpw/Zw"
});



   function renderProducts(array){
    for(product of productList){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p")
        productPrice.innerText = "$"+product.price
        
        const productName = document.createElement("p")
        productPrice.innerText = product.name
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productCartImg = document.createElement("img");
    
        productCartImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productCartImg);
    
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
   }

renderProducts(productList);